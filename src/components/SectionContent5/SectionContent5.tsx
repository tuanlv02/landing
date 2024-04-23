import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const SectionContent5 = () => {
  return (
    <SectionContentWrap
      createdAt="October 2023"
      description="We partnered up with the AppSumo team to launch on their platform. Spent 2 months preparing marketing assets, copywriting, doing user testing and refining the product, before launching on October 16, 2023."
    >
      <div className={styles.backgroundImageWrap}>
        <div className={classNames(styles.backgroundImage, "mx-auto")}></div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent5;
