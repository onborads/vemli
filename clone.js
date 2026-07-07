const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const BASE_URL = "https://loyverse.com";
const OUT_DIR = "clone_site";

const visited = new Set();
const queue = [BASE_URL];

// Edit this list to control which language paths get crawled, e.g. ['en', 'de']
// Paths with no language prefix at all (e.g. "/", "/pricing") are always included.
const USE_LANGUAGES = ["en", "fr"];

function isBlockedLangPath(pathname) {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  if (!match) return false; // no language prefix, e.g. "/pricing" -> always allowed
  const lang = match[1];
  return !USE_LANGUAGES.includes(lang);
}

// Turn a URL into a real folder structure, e.g.
// https://loyverse.com/de/advanced-inventory -> clone_site/de/advanced-inventory/index.html
function urlToFilePath(url) {
  const u = new URL(url);
  let pathname = u.pathname;

  if (pathname.endsWith("/")) pathname += "index";
  if (pathname === "") pathname = "/index";

  const hasExtension = path.extname(pathname) !== "";
  const filePath = hasExtension
    ? path.join(OUT_DIR, pathname)
    : path.join(OUT_DIR, pathname, "index.html");

  return filePath;
}

function normalizeUrl(url) {
  const u = new URL(url);
  u.hash = "";
  // strip query string if you don't need query-based variants as separate pages
  u.search = "";
  return u.toString().replace(/\/$/, "") || u.origin;
}

function downloadAsset(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          return downloadAsset(res.headers.location, destPath).then(
            resolve,
            reject,
          );
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`Status ${res.statusCode} for ${url}`));
        }
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on("finish", () => fileStream.close(resolve));
      })
      .on("error", reject);
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  while (queue.length > 0) {
    const rawUrl = queue.shift();
    const url = normalizeUrl(rawUrl);

    if (visited.has(url)) continue;
    visited.add(url);

    try {
      console.log("Cloning:", url);

      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

      // Collect asset URLs before rewriting anything
      const assetUrls = await page.$$eval(
        "img[src], link[rel='stylesheet'][href], script[src]",
        (els) =>
          els
            .map((el) => el.src || el.href)
            .filter((src) => src && src.startsWith(location.origin)),
      );

      const html = await page.content();
      const filePath = urlToFilePath(url);

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);

      const screenshotPath = filePath
        .replace(/index\.html$/, "screenshot.png")
        .replace(/\.html$/, ".png");
      await page.screenshot({ path: screenshotPath, fullPage: true });

      // Download page assets into an /assets mirror of their own path
      for (const assetUrl of assetUrls) {
        try {
          const assetPath = path.join(OUT_DIR, new URL(assetUrl).pathname);
          if (!fs.existsSync(assetPath)) {
            await downloadAsset(assetUrl, assetPath);
          }
        } catch (e) {
          console.log("  Asset failed:", assetUrl, e.message);
        }
      }

      // Queue internal links
      const links = await page.$$eval("a[href]", (anchors) =>
        anchors
          .map((a) => a.href)
          .filter((href) => href.startsWith(location.origin)),
      );

      for (const link of links) {
        const norm = normalizeUrl(link);
        const linkPath = new URL(norm).pathname;
        if (isBlockedLangPath(linkPath)) continue;
        if (!visited.has(norm)) queue.push(norm);
      }
    } catch (err) {
      console.log("Failed:", url, err.message);
    }
  }

  await browser.close();
  console.log("Done. Visited", visited.size, "pages.");
})();
