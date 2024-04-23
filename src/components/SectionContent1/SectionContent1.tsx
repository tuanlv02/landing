import React from "react";
import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const SectionContent1 = () => {
  return (
    <SectionContentWrap
      createdAt="January 2023"
      description="Our story starts at Lawrence University in Wisconsin, US, where Alec & Hung studied together in Economics & Data + Computer Science. Whilst studying, we got quickly frustrated with how over-complicated & stretched out researching papers were, knowing there would be a better way, the idea of A****** was born."
    >
      <div className={styles.backgroundImageWrap}>
        <div
          className={classNames(
            styles.backgroundImage,
            "mx-auto position-relative"
          )}
        >
          <img
            src="/images/section-1-image-1.png"
            className={classNames("position-absolute", styles.image1)}
            alt=""
          />

          <img
            src="/images/section-1-image-2.png"
            className={classNames("position-absolute", styles.image2)}
            alt=""
          />

          <img
            src="/images/section-1-image-3.png"
            className={classNames("position-absolute", styles.image3)}
            alt=""
          />

          <img
            src="/images/section-1-image-4.png"
            className={classNames("position-absolute", styles.image4)}
            alt=""
          />
        </div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent1;
