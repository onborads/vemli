export default function Header() {
  return (
    <header className="header" itemScope itemType="https://schema.org/WPHeader">
      {/* <div className="overheader">
        <div className="overheaderin">
          <div className="overheaderpad">
            <div className="rightpart overhead-lang">
              <div className="signin">
                <div id="block-communityandblog">
                  <div>
                    <div className="zero-menu">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener"
                      >
                        Community
                      </a>
                    </div>
                  </div>
                </div>

                <div id="block-blockforsign">
                  <div>
                    <div id="href-web">
                      <a className="sign" href="/en/login">
                        <i className="icon-sign"></i>Sign in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="language-switcher-language-url"
                id="block-languageswitcher-2"
                role="navigation"
              >
                <div className="menu-button earth-img"></div>
                <div className="lang-code">English</div>

                <ul className="links">
                  <li
                    hreflang="en"
                    data-drupal-link-system-path="&lt;front&gt;"
                    className="is-active"
                    aria-current="page"
                  >
                    <a
                      href="/"
                      className="language-link is-active"
                      hreflang="en"
                      data-drupal-link-system-path="&lt;front&gt;"
                      aria-current="page"
                    >
                      English
                    </a>
                  </li>

                  <li
                    hreflang="fr"
                    data-drupal-link-system-path="&lt;front&gt;"
                  >
                    <a
                      href="/fr"
                      className="language-link"
                      hreflang="fr"
                      data-drupal-link-system-path="&lt;front&gt;"
                    >
                      Français
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* end */}

      <div className="headermain">
        <div className="fr_banner_block"></div>
        <div className="headerin">
          <div className="headerpad">
            <div id="block-hamburgerbutton" className="mob-hamburger">
              <div>
                <div className="hamburger-container nav-container-hamburger">
                  <input
                    className="hamburger-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="block-sitebranding"
              className="logo-style"
              itemScope
              itemType="https://www.schema.org/Organization"
            >
              <a href="/" rel="home">
                <img
                  src="/assets/logo_white-nobg.png"
                  alt="Vemli POS"
                  fetchPriority="high"
                  width="142"
                  height="38"
                />
              </a>
            </div>

            <div className="topmenu">
              <nav
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
                aria-labelledby="block-topmenu-2-menu"
                id="block-topmenu-2"
              >
                <div className="visually-hidden" id="block-topmenu-2-menu">
                  Point of Sale
                </div>

                <ul className="lmenu">
                  <li>
                    <a href="/features" data-drupal-link-system-path="node/10">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/hardware" data-drupal-link-system-path="node/9">
                      Hardware
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" data-drupal-link-system-path="node/8">
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>

              <div
                className="views-element-container business_types"
                id="block-views-block-business-types-in-header-block-1"
              >
                <div>Business types</div>

                <div>
                  <div>
                    <div className="business-types-wrapper">
                      <ul className="business-types-menu">
                        <li>
                          <div className="views-field views-field-title">
                            <span className="field-content">
                              <a href="/grocery-pos" hreflang="en">
                                Grocery &amp; convenience
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="views-field views-field-title">
                            <span className="field-content">
                              <a href="/cafe-pos" hreflang="en">
                                Café
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="views-field views-field-title">
                            <span className="field-content">
                              <a href="/restaurants-pos" hreflang="en">
                                Restaurant
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="views-field views-field-title">
                            <span className="field-content">
                              <a href="/retail-pos" hreflang="en">
                                Retail
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="views-field views-field-title">
                            <span className="field-content">
                              <a href="/bar-pos" hreflang="en">
                                Bar &amp; Pub
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="views-field views-field-title">
                            <span className="field-content">
                              <a href="/fashion-boutiques-pos" hreflang="en">
                                Clothing &amp; accessories
                              </a>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <nav
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
                aria-labelledby="block-producttop-menu"
                id="block-producttop"
              >
                <div id="block-producttop-menu">Products</div>

                <ul className="lmenu">
                  <li>
                    <a href="/vemli-pos" data-drupal-link-system-path="node/46">
                      Vemli POS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/back-office"
                      data-drupal-link-system-path="node/11"
                    >
                      Back Office
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard" data-drupal-link-system-path="node/12">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kitchen-display-system"
                      data-drupal-link-system-path="node/13"
                    >
                      Kitchen Display
                    </a>
                  </li>
                  <li>
                    <a
                      href="/customer-display-system"
                      data-drupal-link-system-path="node/14"
                    >
                      Customer Display
                    </a>
                  </li>
                  <li>
                    <a
                      href="/employee-management"
                      data-drupal-link-system-path="node/17"
                    >
                      Employee Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="/multi-store-pos"
                      data-drupal-link-system-path="node/56"
                    >
                      Multi-Store Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="/advanced-inventory"
                      data-drupal-link-system-path="node/15"
                    >
                      Inventory Management
                    </a>
                  </li>

                  <li>
                    <a
                      href="/anviz-attendance"
                      data-drupal-link-system-path="node/15"
                    >
                      Anviz Attendance
                    </a>
                  </li>

                  {/* <li>
                    <a
                      href="/integrations"
                      data-drupal-link-system-path="node/15"
                    >
                      Integrations
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="header-dash">
              <div id="block-vemli-getstartedfree">
                <div>
                  <div>
                    <a
                      className="dash-button logged-off"
                      href="/get-started"
                      id="get-started"
                    >
                      Get Started <span className="hidden-word"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
