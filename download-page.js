/**
 * download-page.js
 *
 * Generic single-page site cloner. Downloads exactly ONE page
 * (any domain) plus its images, CSS, and JS, and saves it locally
 * with a folder structure based on the URL path.
 *
 * Usage:
 *   node download-page.js https://example.com/some/page
 *
 * Output:
 *   downloaded/some/page/index.html
 *   downloaded/some/page/screenshot.png
 *   downloaded/assets/... (css/js/images, mirrored by their own path)
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const OUT_DIR = "downloaded";

const targetUrl = process.argv[2];

if (!targetUrl) {
  console.error("Usage: node download-page.js <url>");
  process.exit(1);
}

function urlToFilePath(url) {
  const u = new URL(url);
  let pathname = u.pathname;

  if (pathname === "" || pathname === "/") {
    return path.join(OUT_DIR, "index.html");
  }

  if (pathname.endsWith("/")) pathname += "index";

  const hasExtension = path.extname(pathname) !== "";
  return hasExtension
    ? path.join(OUT_DIR, pathname)
    : path.join(OUT_DIR, pathname, "index.html");
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

  try {
    console.log("Downloading:", targetUrl);

    await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 60000 });

    const origin = new URL(targetUrl).origin;

    // Collect asset URLs on this one page (same-origin only)
    const assetUrls = await page.$$eval(
      "img[src], link[rel='stylesheet'][href], script[src]",
      (els) => els.map((el) => el.src || el.href).filter(Boolean),
    );

    const sameOriginAssets = assetUrls.filter((u) => u.startsWith(origin));

    const html = await page.content();
    const filePath = urlToFilePath(targetUrl);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
    console.log("Saved HTML:", filePath);

    const screenshotPath = filePath
      .replace(/index\.html$/, "screenshot.png")
      .replace(/\.html$/, ".png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log("Saved screenshot:", screenshotPath);

    for (const assetUrl of sameOriginAssets) {
      try {
        const assetPath = path.join(OUT_DIR, new URL(assetUrl).pathname);
        if (!fs.existsSync(assetPath)) {
          await downloadAsset(assetUrl, assetPath);
        }
      } catch (e) {
        console.log("  Asset failed:", assetUrl, e.message);
      }
    }

    console.log("Done. Saved", sameOriginAssets.length, "assets.");
  } catch (err) {
    console.error("Failed:", targetUrl, err.message);
  } finally {
    await browser.close();
  }
})();
