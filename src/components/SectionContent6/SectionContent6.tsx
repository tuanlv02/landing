import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const SectionContent6 = () => {
  return (
    <SectionContentWrap
      createdAt="December 2023"
      description="We passed $500,000 in revenue, became one of AppSumo’s hottest products of 2023 & earned multiple badges for various reasons. A crazy year to say the least!"
    >
      <div className={styles.backgroundImageWrap}>
        <div className={classNames(styles.backgroundImage, "mx-auto")}></div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent6;
