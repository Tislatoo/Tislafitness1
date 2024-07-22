import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./PlansContainer.module.css";

const PlansContainer = ({ className = "" }) => {
  return (
    <div className={[styles.plansContainer, className].join(" ")}>
      <GroupComponent
        expertPlan="Beginner Plan"
        expertPlanPrice="$05"
        group46Name="radioGroup-1"
        group46Name1="radioGroup-1"
        group46Name2="radioGroup-1"
        group46Name3="radioGroup-1"
        group46Name4="radioGroup-1"
        propFlex="unset"
        propMinWidth="406px"
        propWidth="406px"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.expertPlanParent}>
              <div className={styles.expertPlan}>Expert Plan</div>
              <div className={styles.parent}>
                <div className={styles.div}>$20</div>
                <div className={styles.monthWrapper}>
                  <div className={styles.month}>/ Month</div>
                </div>
              </div>
            </div>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-46-10.svg"
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent1}>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/group-46-10.svg"
              />
              <div
                className={styles.loremIpsumDolor2}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent2}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-46-10.svg"
              />
              <div
                className={styles.loremIpsumDolor3}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent3}>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/group-46-10.svg"
              />
              <div
                className={styles.loremIpsumDolor4}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent4}>
              <img
                className={styles.frameChild2}
                loading="lazy"
                alt=""
                src="/group-46-10.svg"
              />
              <div
                className={styles.loremIpsumDolor5}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
          </div>
        </div>
        <button className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <b className={styles.choosePlan}>Choose Plan</b>
        </button>
      </div>
    </div>
  );
};

PlansContainer.propTypes = {
  className: PropTypes.string,
};

export default PlansContainer;
