import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.pricingPlanParent, className].join(" ")}>
      <h3 className={styles.pricingPlan}>Pricing plan</h3>
      <div className={styles.planButtonParent}>
        <div className={styles.planButton}>
          <h1 className={styles.joinToday}>Join Today</h1>
        </div>
        <div className={styles.planOptions}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.monthly}>Monthly</div>
          </button>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.yearly}>Yearly</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
