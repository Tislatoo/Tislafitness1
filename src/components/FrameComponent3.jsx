import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.mentorContentWrapper, className].join(" ")}>
      <div className={styles.mentorContent}>
        <div className={styles.mentorShapes}>
          <div className={styles.wrapperRectangle34}>
            <img
              className={styles.wrapperRectangle34Child}
              loading="lazy"
              alt=""
              src="/rectangle-34@2x.png"
            />
          </div>
          <div className={styles.wrapperRectangle35}>
            <img
              className={styles.wrapperRectangle35Child}
              loading="lazy"
              alt=""
              src="/rectangle-35@2x.png"
            />
          </div>
        </div>
        <div className={styles.mentorDescription}>
          <div className={styles.areYouLookingForAMentorParent}>
            <h2 className={styles.areYouLooking}>
              Are you looking for a Mentor?
            </h2>
            <h1 className={styles.coaches}>Coaches</h1>
            <h3
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</h3>
          </div>
          <button className={styles.exploreButton}>
            <div className={styles.exploreMore}>Explore More</div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
