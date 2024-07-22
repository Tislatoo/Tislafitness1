import { useState, useCallback } from "react";
import PricingPlan from "./PricingPlan";
import PortalPopup from "./PortalPopup";
import PlanFeatures from "./PlanFeatures";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const [isPricingPlan1Open, setPricingPlan1Open] = useState(false);

  const openPricingPlan1 = useCallback(() => {
    setPricingPlan1Open(true);
  }, []);

  const closePricingPlan1 = useCallback(() => {
    setPricingPlan1Open(false);
  }, []);

  return (
    <>
      <div className={[styles.plansGridWrapper, className].join(" ")}>
        <div className={styles.plansGrid}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.planRows}>
              <div className={styles.expertPlan}>
                <div className={styles.beginnerPlan}>Beginner Plan</div>
                <div className={styles.beginnerPlanDescription}>
                  <div className={styles.beginnerPlanFeatures}>$05</div>
                  <div className={styles.beginnerPlanDuration}>
                    <div className={styles.month}>/ Month</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
            </div>
            <PlanFeatures
              group46Name="radioGroup-1"
              group46Name1="radioGroup-1"
              group46Name2="radioGroup-1"
              group46Name3="radioGroup-1"
              group46Name4="radioGroup-1"
            />
            <button
              className={styles.rectangleGroup}
              onClick={openPricingPlan1}
            >
              <div className={styles.frameItem} />
              <b className={styles.choosePlan}>Choose Plan</b>
            </button>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.premiumPlanParent}>
              <div className={styles.premiumPlan}>Premium Plan</div>
              <div className={styles.premiumPlanFeaturesParent}>
                <div className={styles.premiumPlanFeatures}>
                  <div className={styles.premiumPlanPrice}>$15</div>
                  <div className={styles.premiumPlanDuration}>
                    <div className={styles.month1}>/ Month</div>
                  </div>
                </div>
                <div
                  className={styles.loremIpsumDolor1}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
              </div>
            </div>
            <PlanFeatures
              group46Name="radioGroup-2"
              group46Name1="radioGroup-2"
              group46Name2="radioGroup-2"
              group46Name3="radioGroup-2"
              group46Name4="radioGroup-2"
            />
            <button className={styles.groupButton} onClick={openPricingPlan1}>
              <div className={styles.rectangleDiv} />
              <b className={styles.choosePlan1}>Choose Plan</b>
            </button>
          </div>
          <GroupComponent
            expertPlan="Expert Plan"
            expertPlanPrice="$20"
            group46Name="radioGroup-3"
            group46Name1="radioGroup-3"
            group46Name2="radioGroup-3"
            group46Name3="radioGroup-3"
            group46Name4="radioGroup-3"
          />
        </div>
      </div>
      {isPricingPlan1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePricingPlan1}
        >
          <PricingPlan onClose={closePricingPlan1} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
