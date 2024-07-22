import PropTypes from "prop-types";
import styles from "./HomePage.module.css";

const HomePage = ({ className = "" }) => {
  return (
    <div className={[styles.homePage, className].join(" ")}>
      <img
        className={styles.hbg22Icon}
        loading="lazy"
        alt=""
        src="/hbg2-2@2x.png"
      />
      <div className={styles.homePageInner}>
        <div className={styles.frameParent}>
          <header className={styles.navLinkItemsParent}>
            <div className={styles.navLinkItems}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector@2x.png"
              />
              <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            </div>
            <nav className={styles.aboutTrainersWrapper}>
              <nav className={styles.aboutTrainers}>
                <a className={styles.home}>Home</a>
                <a className={styles.about}>About</a>
                <a className={styles.trainers}>Trainers</a>
                <a className={styles.review}>Review</a>
                <a className={styles.plans}>Plans</a>
              </nav>
            </nav>
          </header>
          <div className={styles.frameWrapper}>
            <div className={styles.contentParent}>
              <div className={styles.content}>
                <div className={styles.elevateYourWorkoutParent}>
                  <h1 className={styles.elevateYourWorkout}>
                    Elevate your workout
                  </h1>
                  <h3
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</h3>
                </div>
                <div className={styles.frameGroup}>
                  <button className={styles.getStartedWrapper}>
                    <div className={styles.getStarted}>Get Started</div>
                  </button>
                  <div className={styles.playCircleParent}>
                    <img
                      className={styles.playCircleIcon}
                      loading="lazy"
                      alt=""
                      src="/playcircle.svg"
                    />
                    <div className={styles.playVideo}>Play video</div>
                  </div>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <img
                  className={styles.facebook02Icon}
                  loading="lazy"
                  alt=""
                  src="/facebook02.svg"
                />
                <img
                  className={styles.instagramIcon}
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
                <img
                  className={styles.linkedin02Icon}
                  loading="lazy"
                  alt=""
                  src="/linkedin02.svg"
                />
                <img
                  className={styles.githubIcon}
                  loading="lazy"
                  alt=""
                  src="/github.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <a className={styles.joinNow}>Join Now</a>
        </button>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  className: PropTypes.string,
};

export default HomePage;
