import styles from "./index.module.scss";
import classNames from "classnames";

interface ISectionContentWrapProps {
  createdAt: string;
  description: string;
  children: JSX.Element;
}

const SectionContentWrap = (props: ISectionContentWrapProps) => {
  const { createdAt, description, children } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={classNames(styles.post, "border-top pt-3")}>
          <p className={classNames("fw-medium mb-3", styles.title)}>
            {createdAt}
          </p>
          <p className={classNames("fw-medium", styles.description)}>
            {description}
          </p>
        </div>
      </div>

      {children}
    </>
  );
};

export default SectionContentWrap;
