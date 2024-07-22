import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/pricing-plan-3");
  }, [navigate]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-60.svg"
            />
            <div className={styles.joinUsNowWrapper}>
              <h3 className={styles.joinUsNow}>Join us Now!!</h3>
            </div>
            <div className={styles.cancel01Wrapper}>
              <img
                className={styles.cancel01Icon}
                loading="lazy"
                alt=""
                src="/cancel01.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameInner} />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.div}>1</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild1} />
                    <div className={styles.div1}>2</div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.lineContainer}>
                      <div className={styles.frameChild2} />
                    </div>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild3} />
                      <div className={styles.div2}>3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.basicDetailParent}>
                <div className={styles.basicDetail}>Basic Detail</div>
                <div className={styles.membershipDetail}>Membership Detail</div>
                <div className={styles.payment}>Payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.membershipDetailContent}>
        <div className={styles.membershipDetailHeader}>
          <h3 className={styles.membershipDetails}>Membership Details</h3>
        </div>
        <div className={styles.membershipDetailContentInner}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.selectPlanWrapper}>
                <div className={styles.selectPlan}>Select Plan</div>
              </div>
              <div className={styles.monthWrapper}>
                <div className={styles.month}>Month</div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.planDurationWrapper}>
                <div className={styles.planDuration}>Plan Duration</div>
              </div>
              <button className={styles.startDateWrapper}>
                <a className={styles.startDate}>Start Date</a>
              </button>
              <div className={styles.endDateWrapper}>
                <div className={styles.endDate}>End Date</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.membershipDetailContentChild}>
          <div className={styles.goalRowParent}>
            <button className={styles.goalRow}>
              <div className={styles.goal1}>Goal 1</div>
            </button>
            <button className={styles.goalRow1}>
              <div className={styles.goal2}>Goal 2</div>
            </button>
            <button className={styles.goalRow2}>
              <div className={styles.goal4}>Goal 4</div>
            </button>
            <button className={styles.goalRow3}>
              <div className={styles.goal6}>Goal 6</div>
            </button>
            <button className={styles.goalRow4}>
              <div className={styles.goal8}>Goal 8</div>
            </button>
            <button className={styles.goalRow5}>
              <div className={styles.goal11}>Goal 1</div>
            </button>
            <button className={styles.goalRow6}>
              <div className={styles.goal3}>Goal 3</div>
            </button>
            <button className={styles.goalRow7}>
              <div className={styles.goal5}>Goal 5</div>
            </button>
            <button className={styles.goalRow8}>
              <div className={styles.goal7}>Goal 7</div>
            </button>
            <button className={styles.goalRow9}>
              <div className={styles.goal9}>Goal 9</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <button className={styles.nextWrapper} onClick={onFrameButtonClick}>
          <b className={styles.next}>Next</b>
        </button>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
