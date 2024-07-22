import PropTypes from "prop-types";
import styles from "./FiguresPage.module.css";

const FiguresPage = ({ className = "" }) => {
  return (
    <div className={[styles.figuresPage, className].join(" ")}>
      <div className={styles.figureContent}>
        <div className={styles.figureContentChild} />
        <div className={styles.statHeadersParent}>
          <div className={styles.statHeaders}>
            <b className={styles.statHeadersSeparator}>500+</b>
            <div className={styles.statTitles}>
              <div className={styles.happyMembers}>Happy Members</div>
              <div className={styles.ourCommunityIs}>
                Our community is growing fast
              </div>
            </div>
          </div>
          <div className={styles.statHeaders1}>
            <b className={styles.b}>5+</b>
            <div className={styles.yearExperienceParent}>
              <div className={styles.yearExperience}>{`Year Experience `}</div>
              <div
                className={styles.experienceInVarious}
              >{`Experience in various workouts  `}</div>
            </div>
          </div>
          <div className={styles.statHeaders2}>
            <b className={styles.b1}>13+</b>
            <div className={styles.certifiedTrainersParent}>
              <div className={styles.certifiedTrainers}>Certified Trainers</div>
              <div className={styles.guidanceAtEvery}>
                Guidance at every step.
              </div>
            </div>
          </div>
          <div className={styles.statHeaders3}>
            <b className={styles.b2}>90%</b>
            <div className={styles.customerSatisfactionParent}>
              <div className={styles.customerSatisfaction}>
                Customer Satisfaction
              </div>
              <div className={styles.weEnsureYour}>
                We ensure your progress satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FiguresPage.propTypes = {
  className: PropTypes.string,
};

export default FiguresPage;
