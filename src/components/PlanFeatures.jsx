import PropTypes from "prop-types";
import styles from "./PlanFeatures.module.css";

const PlanFeatures = ({
  className = "",
  group46Name,
  group46Name1,
  group46Name2,
  group46Name3,
  group46Name4,
}) => {
  return (
    <div className={[styles.planFeatures, className].join(" ")}>
      <div className={styles.planFeatureList}>
        <div className={styles.planFeatureItems}>
          <input
            className={styles.planFeatureItemsChild}
            type="radio"
            name={group46Name}
          />
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, `}</div>
        </div>
        <div className={styles.frameParent}>
          <input
            className={styles.frameChild}
            type="radio"
            name={group46Name1}
          />
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet, `}</div>
        </div>
        <div className={styles.frameGroup}>
          <input
            className={styles.frameItem}
            type="radio"
            name={group46Name2}
          />
          <div
            className={styles.loremIpsumDolor2}
          >{`Lorem ipsum dolor sit amet, `}</div>
        </div>
        <div className={styles.frameContainer}>
          <input
            className={styles.frameInner}
            type="radio"
            name={group46Name3}
          />
          <div
            className={styles.loremIpsumDolor3}
          >{`Lorem ipsum dolor sit amet, `}</div>
        </div>
        <div className={styles.frameDiv}>
          <input
            className={styles.groupInput}
            type="radio"
            name={group46Name4}
          />
          <div
            className={styles.loremIpsumDolor4}
          >{`Lorem ipsum dolor sit amet, `}</div>
        </div>
      </div>
    </div>
  );
};

PlanFeatures.propTypes = {
  className: PropTypes.string,
  group46Name: PropTypes.string,
  group46Name1: PropTypes.string,
  group46Name2: PropTypes.string,
  group46Name3: PropTypes.string,
  group46Name4: PropTypes.string,
};

export default PlanFeatures;
