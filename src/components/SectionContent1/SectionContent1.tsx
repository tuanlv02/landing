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
        <div className={classNames(styles.backgroundImage, "mx-auto")}></div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent1;
