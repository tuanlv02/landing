import React from "react";
import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const MemoryItem = () => {
  return (
    <div className="col-4">
      <div className={classNames(styles.memoryItem, "p-3 rounded-5")}>
        <div className={styles.backgroundImage}></div>
        <p
          className={classNames(
            "mt-4 mb-2 text-center fw-medium",
            styles.description
          )}
        >
          A****** T-shirt to wear for conferences & pitches!
        </p>
      </div>
    </div>
  );
};

const SectionContent7 = () => {
  return (
    <SectionContentWrap
      createdAt="Present"
      description="We’ve grown our team & continue to invest time, money & effort into A******, with excitement for what the future holds!"
    >
      <div className={classNames(styles.wrapper, "d-flex flex-column gap-4")}>
        <div className="row g-4">
          <MemoryItem />
          <MemoryItem />
          <MemoryItem />
        </div>

        <div className="row g-4">
          <MemoryItem />
          <MemoryItem />
          <MemoryItem />
        </div>

        <div className="row g-4">
          <MemoryItem />

          <div className="col-4">
            <div
              className={classNames(
                styles.memoryItem,
                styles.memoryLastItem,
                "p-3 rounded-5 border text-center"
              )}
            >
              <img src="/svgIcon/book-open.svg" alt="" />

              <div className="mt-4 fw-medium">
                <p className={classNames(styles.text1, "mb-3")}>
                  2024 {"->"} Onwards
                </p>
                <p className={styles.text2}>More memories to be made...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContentWrap>
  );
};

export default SectionContent7;
