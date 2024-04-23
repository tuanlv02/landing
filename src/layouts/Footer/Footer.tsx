import styles from "./index.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={classNames("mx-auto", styles.footerInner)}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img src="/svgIcon/logo.svg" alt="" />
            <p className={classNames("fw-semibold", styles.title)}>A******</p>
          </div>

          <div
            className={classNames(
              "d-flex align-items-center justify-content-between rounded border",
              styles.dropdown
            )}
          >
            <p className={classNames("fw-medium", styles.dropdownTxt)}>
              English
            </p>
            <img src="/svgIcon/angle-down.svg" alt="" />
          </div>
        </div>

        <div
          className={classNames(
            "d-flex justify-content-between",
            styles.listMenu
          )}
        >
          <div className={classNames("d-flex", styles.menuColumnLeft)}>
            <div>
              <h2 className={classNames("fw-semibold", styles.menuTitle)}>
                Company
              </h2>

              <ul className="mt-4 d-flex flex-column gap-4">
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={classNames("fw-semibold", styles.menuTitle)}>
                Resources
              </h2>

              <ul className="mt-4 d-flex flex-column gap-4">
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Research Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={classNames("fw-semibold", styles.menuTitle)}>
                Compare
              </h2>

              <ul className="mt-4 d-flex flex-column gap-4">
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Elicit.ai Alternative
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Consensus Alternative
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    ChatPDF Alternative
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    PDF.ai Alternative
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    Humata.ai Alternative
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none fw-medium",
                      styles.menuTxt
                    )}
                  >
                    More Comparisons
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.menuColumnRight}>
            <p className={classNames("fw-medium", styles.menuTxt)}>
              Copyright ©2023 A****** inc.️
            </p>

            <div
              className={classNames(
                "d-flex align-items-center justify-content-end mt-4",
                styles.listIcon
              )}
            >
              <a href="">
                <img src="/svgIcon/icon-linkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="/svgIcon/icon-youtube.svg" alt="" />
              </a>
              <a href="">
                <img src="/svgIcon/icon-tiktok.svg" alt="" />
              </a>
              <a href="">
                <img src="/svgIcon/icon-x.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span className={styles.divider} />
          <div
            className={classNames(
              "border d-flex align-items-center",
              styles.backedBy
            )}
          >
            <p className={classNames("fw-medium", styles.menuTxt)}>
              A****** is backed by
            </p>
          </div>
          <span className={styles.divider} />
        </div>
      </div>

      <div
        className={classNames(
          "d-flex align-items-center justify-content-center gap-5",
          styles.footerBottom
        )}
      >
        <a href="">
          <img src="/svgIcon/footer-logo-1.svg" alt="" />
        </a>
        <a href="">
          <img src="/svgIcon/footer-logo-2.svg" alt="" />
        </a>
        <a href="">
          <img src="/svgIcon/footer-logo-3.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
