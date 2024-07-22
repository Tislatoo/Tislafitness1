import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.trainerContentWrapper, className].join(" ")}>
      <div className={styles.trainerContent}>
        <div className={styles.trainerDescription}>
          <div className={styles.trainerTitleParent}>
            <div className={styles.trainerTitle}>
              <h1 className={styles.meetOurTrainers}>Meet Our Trainers</h1>
            </div>
            <h3 className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna a
            </h3>
          </div>
        </div>
        <div className={styles.trainerProfiles}>
          <div className={styles.wrapperGroup38}>
            <img
              className={styles.wrapperGroup38Child}
              loading="lazy"
              alt=""
              src="/group-38@2x.png"
            />
          </div>
          <div className={styles.trainerProfile}>
            <div className={styles.wrapperGroup39}>
              <img
                className={styles.wrapperGroup39Child}
                loading="lazy"
                alt=""
                src="/group-39@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <h1 className={styles.name}>Name</h1>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
            </div>
          </div>
          <img
            className={styles.image9Icon}
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
