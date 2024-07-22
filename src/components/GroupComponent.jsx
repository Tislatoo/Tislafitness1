import { useState, useMemo, useCallback } from "react";
import PricingPlan from "./PricingPlan";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  expertPlan,
  expertPlanPrice,
  group46Name,
  group46Name1,
  group46Name2,
  group46Name3,
  group46Name4,
  propFlex,
  propMinWidth,
  propWidth,
  propPosition,
  propTop,
  propLeft,
}) => {
  const [isPricingPlan1Open, setPricingPlan1Open] = useState(false);
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propFlex, propMinWidth, propWidth, propPosition, propTop, propLeft]);

  const openPricingPlan1 = useCallback(() => {
    setPricingPlan1Open(true);
  }, []);

  const closePricingPlan1 = useCallback(() => {
    setPricingPlan1Open(false);
  }, []);

  return (
    <>
      <div
        className={[styles.rectangleParent, className].join(" ")}
        style={groupDivStyle}
      >
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.expertPlanParent}>
              <div className={styles.expertPlan}>{expertPlan}</div>
              <div className={styles.expertPlanPricing}>
                <div className={styles.expertPlanPrice}>{expertPlanPrice}</div>
                <div className={styles.expertPlanDuration}>
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
              <input
                className={styles.frameItem}
                type="radio"
                name={group46Name}
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent1}>
              <input
                className={styles.frameInner}
                type="radio"
                name={group46Name1}
              />
              <div
                className={styles.loremIpsumDolor2}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent2}>
              <input
                className={styles.groupInput}
                type="radio"
                name={group46Name2}
              />
              <div
                className={styles.loremIpsumDolor3}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent3}>
              <input
                className={styles.frameChild1}
                type="radio"
                name={group46Name3}
              />
              <div
                className={styles.loremIpsumDolor4}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
            <div className={styles.frameParent4}>
              <input
                className={styles.frameChild2}
                type="radio"
                name={group46Name4}
              />
              <div
                className={styles.loremIpsumDolor5}
              >{`Lorem ipsum dolor sit amet, `}</div>
            </div>
          </div>
        </div>
        <button className={styles.rectangleGroup} onClick={openPricingPlan1}>
          <div className={styles.rectangleDiv} />
          <b className={styles.choosePlan}>Choose Plan</b>
        </button>
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

GroupComponent.propTypes = {
  className: PropTypes.string,
  expertPlan: PropTypes.string,
  expertPlanPrice: PropTypes.string,
  group46Name: PropTypes.string,
  group46Name1: PropTypes.string,
  group46Name2: PropTypes.string,
  group46Name3: PropTypes.string,
  group46Name4: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default GroupComponent;
