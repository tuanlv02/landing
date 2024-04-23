import classNames from "classnames";
import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classNames("border-b border-bottom", styles.header)}>
      <div
        className={classNames(
          "mx-auto d-flex align-items-center justify-content-between px-2",
          styles.headerInner
        )}
      >
        <div
          className={classNames(
            "d-flex align-items-center column-gap-2",
            styles.headerLeft
          )}
        >
          <Link to="/">
            <img src="/svgIcon/logo.svg" alt="Logo" className={styles.logo} />
          </Link>
          <p className={classNames("fw-semibold", styles.headerTxt)}>A******</p>
        </div>

        <ul className="d-flex align-items-center justify-content-center column-gap-4">
          <Link className="text-decoration-none" to="/affiliate">
            <li className={classNames(styles.menuTxt, "fw-medium")}>
              Affiliate
            </li>
          </Link>
          <Link className="text-decoration-none" to="/pricing">
            <li className={classNames(styles.menuTxt, "fw-medium")}>Pricing</li>
          </Link>
          <Link className="text-decoration-none" to="/help">
            <li className={classNames(styles.menuTxt, "fw-medium")}>
              Help Center
            </li>
          </Link>
          <Link className="text-decoration-none" to="/blog">
            <li className={classNames(styles.menuTxt, "fw-medium")}>Blog</li>
          </Link>
        </ul>

        <div
          className={classNames(
            "d-flex align-items-center column-gap-2 justify-content-end",
            styles.headerRight
          )}
        >
          <Link to="/sign-in">
            <button
              className={classNames(styles.btn, "px-4 btn border rounded-3")}
            >
              <p className={classNames("fw-medium lh-sm", styles.loginTxt)}>
                Log in
              </p>
            </button>
          </Link>

          <Link to="/sign-up">
            <button
              className={classNames(
                "px-4 btn border-1 rounded-3",
                styles.btnPrimary
              )}
            >
              <p className={classNames("fw-medium lh-sm text-white")}>
                Try for free
              </p>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
