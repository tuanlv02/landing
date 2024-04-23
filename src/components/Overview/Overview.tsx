import styles from "./index.module.scss";
import classNames from "classnames";

const BoxWrap = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "d-flex justify-content-center  align-items-center border rounded-4",
        styles.boxWrap,
        className
      )}
    >
      {children}
    </div>
  );
};

const Overview = () => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        "mx-auto d-flex flex-column row-gap-4"
      )}
    >
      <div className={classNames("d-flex column-gap-4", styles.firstRow)}>
        <BoxWrap className={classNames(styles.flex2, styles.box1Wrap)}>
          <div className={classNames("text-center", styles.firstBox)}>
            <p className={classNames("fw-semibold mb-2", styles.largeTxt)}>
              2023
            </p>
            <p className={classNames("fw-semibold", styles.boxDescription)}>
              A****** launched
            </p>
          </div>
        </BoxWrap>

        <div className={classNames(styles.secondBox, "rounded-4")}>
          <img
            src="/svgIcon/rocket-launch.svg"
            alt=""
            className={styles.rocketLaunchIcon}
          />
        </div>

        <BoxWrap
          className={classNames(styles.flex2, styles.box3, "position-relative")}
        >
          <>
            <img
              src="/images/award-image-1.png"
              alt=""
              className={classNames("position-absolute", styles.awardImage1)}
            />
            <img
              src="/images/award-image-2.png"
              alt=""
              className={classNames("position-absolute", styles.awardImage2)}
            />
            <img
              src="/images/award-image-3.png"
              alt=""
              className={classNames("position-absolute", styles.awardImage3)}
            />
          </>
        </BoxWrap>

        <div className={classNames(styles.box4, "p-2")}>
          <img
            src="/images/box-3-image.png"
            alt=""
            className={styles.box4Image}
          />
        </div>
      </div>

      <BoxWrap>
        <div className={classNames(styles.box5, "d-flex align-items-center")}>
          <p
            className={classNames(
              "fw-semibold text-center",
              styles.largeTxt,
              styles.box5Txt
            )}
          >
            Accelerate the world’s research one reference at a time.
          </p>
        </div>
      </BoxWrap>

      <div className={classNames("d-flex column-gap-4", styles.row3)}>
        <BoxWrap className={classNames(styles.box6, "position-relative")}>
          <div className={classNames("text-center", styles.firstBox)}>
            <p className={classNames("fw-semibold mb-2", styles.largeTxt)}>
              600+
            </p>
            <p className={classNames("fw-semibold", styles.boxDescription)}>
              5 star reviews
            </p>

            <div>
              <img
                src="/svgIcon/box-6-icon-1.svg"
                className="position-absolute top-0 start-0 pe-none"
                alt=""
              />
              <img
                src="/svgIcon/box-6-icon-2.svg"
                className="position-absolute bottom-0 start-0 pe-none"
                alt=""
              />
              <img
                src="/svgIcon/box-6-icon-3.svg"
                className="position-absolute end-0 bottom-0 pe-none z-1"
                alt=""
              />
              <img
                src="/svgIcon/box-6-star-1.svg"
                className={classNames(
                  "position-absolute top-0 pe-none",
                  styles.box6Star1
                )}
                alt=""
              />

              <img
                src="/svgIcon/box-6-star-2.svg"
                className={classNames(
                  "position-absolute top-0 pe-none",
                  styles.box6Star2
                )}
                alt=""
              />

              <img
                src="/svgIcon/box-6-star-3.svg"
                className={classNames(
                  "position-absolute end-0 pe-none",
                  styles.box6Star3
                )}
                alt=""
              />

              <img
                src="/svgIcon/box-6-star-4.svg"
                className={classNames(
                  "position-absolute bottom-0 pe-none",
                  styles.box6Star4
                )}
                alt=""
              />

              <img
                src="/svgIcon/box-6-star-5.svg"
                className={classNames(
                  "position-absolute start-0 pe-none",
                  styles.box6Star5
                )}
                alt=""
              />
            </div>
          </div>
        </BoxWrap>

        <div className={classNames(styles.box4, styles.box7, "p-2")}>
          <img
            src="/images/box-7-image.png"
            alt=""
            className={classNames(styles.box4Image, styles.box7Image)}
          />
        </div>

        <BoxWrap className={classNames(styles.flex2, styles.box8)}>
          <div className={classNames("text-center", styles.firstBox)}>
            <p className={classNames("fw-semibold mb-2", styles.largeTxt)}>
              $700,000+
            </p>
            <p className={classNames("fw-semibold", styles.boxDescription)}>
              Raised in captial
            </p>
          </div>
        </BoxWrap>
      </div>
    </div>
  );
};

export default Overview;
