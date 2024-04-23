import React from "react";
import SectionContentWrap from "../SectionContentWrap/SectionContentWrap";

import styles from "./index.module.scss";
import classNames from "classnames";

const MemoryItem = ({
  description,
  image,
}: {
  description: string;
  image: string;
}) => {
  return (
    <div className={classNames("col-4", styles.memoryItemWrap)}>
      <div className={classNames(styles.memoryItem, "p-3 rounded-5")}>
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <p
          className={classNames(
            "mt-4 mb-2 text-center fw-medium",
            styles.description
          )}
        >
          {description}
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
        <div className={classNames("row g-4 no-scrollbar", styles.memoryRow)}>
          <MemoryItem
            description="A****** T-shirt to wear for conferences & pitches!"
            image="/images/memory-1.png"
          />
          <MemoryItem
            description="Enjoying a meal with the Sputnik ATX class of 2023!"
            image="/images/memory-2.png"
          />
          <MemoryItem
            description="With the Sputnik ATX team"
            image="/images/memory-3.png"
          />
        </div>

        <div className={classNames("row g-4 no-scrollbar", styles.memoryRow)}>
          <MemoryItem
            description="Demo Day  at Sputnik ATX! Presenting to A****** investors"
            image="/images/memory-4.png"
          />
          <MemoryItem
            description="Sharing Entrepreneurial insights back at Lawrence Uni."
            image="/images/memory-5.png"
          />
          <MemoryItem
            description="Our new UX Designer - Peter Da Silva"
            image="/images/memory-6.png"
          />
        </div>

        <div className={classNames("row g-4", styles.tabletHidden)}>
          <MemoryItem
            description="Preparing meals so we can maximise time in the office!"
            image="/images/memory-7.png"
          />

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
