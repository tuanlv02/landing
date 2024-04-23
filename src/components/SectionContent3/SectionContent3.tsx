import React from "react";
import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const SectionContent3 = () => {
  return (
    <SectionContentWrap
      createdAt="July 2023"
      description="A****** launched on Product Hunt, doubling the number of active users. Shortly after, Sputnik ATX reached out with an interest to invest in A******. Soon after, we boarded a flight from Wisconsin to Austin, Texas to further present A****** to Sputnik ATX.  A make or break moment for the future of the company."
    >
      <div className={styles.backgroundImageWrap}>
        <div className={classNames(styles.backgroundImage, "mx-auto")}></div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent3;
