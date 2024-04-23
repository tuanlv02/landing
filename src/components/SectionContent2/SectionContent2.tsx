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
        <div className={classNames(styles.backgroundImage, "mx-auto")}></div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent2;
