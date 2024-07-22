import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={[styles.pricingPlan3Inner, className].join(" ")}>
      <div className={styles.pricingPlanParent}>
        <a className={styles.pricingPlan}>Pricing plan</a>
        <div className={styles.planOptions}>
          <div className={styles.joinTodayWrapper}>
            <h1 className={styles.joinToday}>Join Today</h1>
          </div>
          <div className={styles.frameParent}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <a className={styles.monthly}>Monthly</a>
            </button>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <a className={styles.yearly}>Yearly</a>
            </button>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialQuote}>
                <h1 className={styles.thankYou}>Thank you !!</h1>
                <div className={styles.testimonialAnimation}>
                  <img
                    className={styles.httpslottiefilescomanimatIcon}
                    loading="lazy"
                    alt=""
                    src="/httpslottiefilescomanimationstickpyusmjq6dc@2x.png"
                  />
                </div>
              </div>
            </div>
            <button
              className={styles.backToHomeWrapper}
              onClick={onFrameButtonClick}
            >
              <b className={styles.backToHome}>Back To Home</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
