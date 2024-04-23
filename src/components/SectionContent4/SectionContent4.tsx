import React from "react";
import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const SectionContent4 = () => {
  return (
    <SectionContentWrap
      createdAt="August 2023"
      description="Sputnik invested $100,000. We moved our HQ from Wisconsin to Austin and worked with Sputnik to try out new strategies to grow A******."
    >
      <div className={styles.backgroundImageWrap}>
        <div
          className={classNames(
            styles.backgroundImage,
            "mx-auto position-relative"
          )}
        >
          <img
            src="/images/section-41.png"
            className={classNames("position-absolute", styles.image1)}
            alt=""
          />
          <img
            src="/images/section-42.png"
            className={classNames("position-absolute", styles.image2)}
            alt=""
          />
          <img
            src="/images/section-43.png"
            className={classNames("position-absolute", styles.image3)}
            alt=""
          />
          <img
            src="/images/section-44.png"
            className={classNames("position-absolute", styles.image4)}
            alt=""
          />
        </div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent4;
