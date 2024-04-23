import styles from "./index.module.scss";
import classNames from "classnames";

const ApplyNow = () => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        "d-flex align-items-center justify-content-center position-relative"
      )}
    >
      <div className={classNames(styles.content, "bg-white text-center")}>
        <img src="/svgIcon/logo.svg" alt="" className={styles.logo} />

        <div className={styles.textWrap}>
          <p className={classNames(styles.text1, "fw-semibold")}>
            Become a part of the story
          </p>
          <p className={classNames(styles.text2, "fw-medium")}>
            Apply to become a part of the beautiful story we are building here
            at A****** .
          </p>
        </div>

        <button
          className={classNames(
            "btn d-flex align-items-center justify-content-center px-3 gap-1 border",
            styles.applyBtn
          )}
        >
          <p className="fw-medium">Apply now</p>

          <img src="/svgIcon/angle-right.svg" alt="" />
        </button>
      </div>

      <div>
        <img
          src="/images/apply-image-1.png"
          alt=""
          className={classNames(
            "position-absolute start-0",
            styles.applyImage,
            styles.applyImage1
          )}
        />
        <img
          src="/images/apply-image-2.png"
          alt=""
          className={classNames(
            "position-absolute",
            styles.applyImage,
            styles.applyImage2
          )}
        />
        <img
          src="/images/apply-image-3.png"
          alt=""
          className={classNames(
            "position-absolute",
            styles.applyImage,
            styles.applyImage3
          )}
        />
        <img
          src="/images/apply-image-4.png"
          alt=""
          className={classNames(
            "position-absolute",
            styles.applyImage,
            styles.applyImage4
          )}
        />
        <img
          src="/images/apply-image-5.png"
          alt=""
          className={classNames(
            "position-absolute end-0",
            styles.applyImage,
            styles.applyImage5
          )}
        />
        <img
          src="/images/apply-image-6.png"
          alt=""
          className={classNames(
            "position-absolute",
            styles.applyImage,
            styles.applyImage6
          )}
        />
      </div>
    </div>
  );
};

export default ApplyNow;
