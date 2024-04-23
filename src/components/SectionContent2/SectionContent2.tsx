import React from "react";
import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const SectionContent2 = () => {
  return (
    <SectionContentWrap
      createdAt="March 2023"
      description="A****** launched it’s first MVP to the the students of Lawrence University. We had a great response with 500 users immediately signing up (~50% of our college!) This made us realize that there was serious potential for A******. After graduating, we continued to grow A****** out of out apartment to see how far it could go."
    >
      <div className={styles.backgroundImageWrap}>
        <div
          className={classNames(
            styles.backgroundImage,
            "mx-auto position-relative"
          )}
        >
          <img
            src="/images/section-21.png"
            className={classNames("position-absolute", styles.image1)}
            alt=""
          />
          <img
            src="/images/section-22.png"
            className={classNames("position-absolute", styles.image2)}
            alt=""
          />
          <img
            src="/images/section-23.png"
            className={classNames("position-absolute", styles.image3)}
            alt=""
          />
          <img
            src="/images/section-24.png"
            className={classNames("position-absolute", styles.image4)}
            alt=""
          />
          <img
            src="/images/section-25.png"
            className={classNames("position-absolute", styles.image5)}
            alt=""
          />
          <img
            src="/images/section-26.png"
            className={classNames("position-absolute", styles.image6)}
            alt=""
          />
          <img
            src="/images/section-27.png"
            className={classNames("position-absolute", styles.image7)}
            alt=""
          />
          <img
            src="/images/section-28.png"
            className={classNames("position-absolute", styles.image8)}
            alt=""
          />
          <img
            src="/images/section-29.png"
            className={classNames("position-absolute", styles.image9)}
            alt=""
          />
          <img
            src="/images/section-30.png"
            className={classNames("position-absolute", styles.image10)}
            alt=""
          />
          <img
            src="/images/section-31.png"
            className={classNames("position-absolute", styles.image11)}
            alt=""
          />
        </div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent2;
