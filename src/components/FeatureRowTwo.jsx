import PropTypes from "prop-types";
import styles from "./FeatureRowTwo.module.css";

const FeatureRowTwo = ({ className = "", group24, facilityAmenities }) => {
  return (
    <div className={[styles.featureRowTwo, className].join(" ")}>
      <img
        className={styles.featureRowTwoChild}
        loading="lazy"
        alt=""
        src={group24}
      />
      <div className={styles.featureTwoContent}>
        <h3 className={styles.facilityAmenities}>{facilityAmenities}</h3>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
      </div>
    </div>
  );
};

FeatureRowTwo.propTypes = {
  className: PropTypes.string,
  group24: PropTypes.string,
  facilityAmenities: PropTypes.string,
};

export default FeatureRowTwo;
