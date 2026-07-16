'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const overlay = document.getElementById('overlay');
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      if (overlay) overlay.classList.add('popup_active');
    } else {
      document.body.style.overflow = '';
      if (overlay) overlay.classList.remove('popup_active');
      setOpenSection(null);
    }
    return () => {
      document.body.style.overflow = '';
      if (overlay) overlay.classList.remove('popup_active');
    };
  }, [menuOpen]);

  useEffect(() => {
    const overlay = document.getElementById('overlay');
    if (!overlay) return;
    const onOverlayClick = () => setMenuOpen(false);
    overlay.addEventListener('click', onOverlayClick);
    return () => overlay.removeEventListener('click', onOverlayClick);
  }, []);

  const closeMenu = (e) => {
    if (e.target.closest('a')) setMenuOpen(false);
  };

  const toggleSection = (name) => (e) => {
    e.stopPropagation();
    setOpenSection((prev) => (prev === name ? null : name));
  };

  const businessOpen = openSection === 'business';
  const productsOpen = openSection === 'products';

  return (
    <header className="header" itemScope itemType="https://schema.org/WPHeader">
      <div className="headermain">
        <div className="fr_banner_block"></div>
        <div className="headerin">
          <div className="headerpad">
            <div
              id="block-hamburgerbutton"
              className="mob-hamburger"
            >
              <div>
                <div className="hamburger-container nav-container-hamburger">
                  <input
                    className="hamburger-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                    checked={menuOpen}
                    onChange={(e) => setMenuOpen(e.target.checked)}
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

            <div
              className={`topmenu${menuOpen ? ' mobile open' : ''}`}
              onClick={closeMenu}
            >
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
                className={`views-element-container business_types${businessOpen ? ' open' : ''}`}
                id="block-views-block-business-types-in-header-block-1"
              >
                <div
                  className={`mob-section-toggle${businessOpen ? ' open' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={businessOpen}
                  onClick={toggleSection('business')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleSection('business')(e);
                    }
                  }}
                >
                  Business types
                </div>

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
                className={productsOpen ? 'open' : ''}
              >
                <div
                  id="block-producttop-menu"
                  className={`mob-section-toggle${productsOpen ? ' open' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={productsOpen}
                  onClick={toggleSection('products')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleSection('products')(e);
                    }
                  }}
                >
                  Products
                </div>

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

