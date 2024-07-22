import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import styles from "./PricingPlan.module.css";

const PricingPlan = ({ className = "", onClose }) => {
  return (
    <div className={[styles.pricingPlan1, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.premiumPlan}>Premium Plan</div>
        <div className={styles.div}>$15</div>
        <div className={styles.month}>/ Month</div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
        <img className={styles.frameItem} alt="" src="/group-46.svg" />
        <div
          className={styles.loremIpsumDolor1}
        >{`Lorem ipsum dolor sit amet, `}</div>
        <img className={styles.frameInner} alt="" src="/group-46.svg" />
        <div
          className={styles.loremIpsumDolor2}
        >{`Lorem ipsum dolor sit amet, `}</div>
        <img className={styles.groupIcon} alt="" src="/group-46.svg" />
        <div
          className={styles.loremIpsumDolor3}
        >{`Lorem ipsum dolor sit amet, `}</div>
        <img className={styles.frameChild1} alt="" src="/group-46.svg" />
        <div
          className={styles.loremIpsumDolor4}
        >{`Lorem ipsum dolor sit amet, `}</div>
        <img className={styles.frameChild2} alt="" src="/group-46.svg" />
        <div
          className={styles.loremIpsumDolor5}
        >{`Lorem ipsum dolor sit amet, `}</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <b className={styles.choosePlan}>Choose Plan</b>
        </div>
      </div>
      <section className={styles.pricingPlan1Child} />
      <section className={styles.pricingPlans}>
        <div className={styles.beginnerPlanContainer}>
          <a className={styles.pricingPlan}>Pricing plan</a>
          <h1 className={styles.joinToday}>Join Today</h1>
          <div className={styles.subscriptionOptions}>
            <button className={styles.rectangleContainer}>
              <div className={styles.frameChild3} />
              <a className={styles.monthly}>Monthly</a>
            </button>
            <button className={styles.groupButton}>
              <div className={styles.frameChild4} />
              <a className={styles.yearly}>Yearly</a>
            </button>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild5} />
            <div className={styles.planTitleContainer}>
              <div className={styles.beginnerExpertContainer}>
                <div className={styles.beginnerPlanParent}>
                  <div className={styles.beginnerPlan}>Beginner Plan</div>
                  <div className={styles.monthContainer}>
                    <div className={styles.emptyMonth}>$05</div>
                    <div className={styles.planDuration}>
                      <div className={styles.month1}>/ Month</div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.loremIpsumDolor6}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
              </div>
            </div>
            <div className={styles.planFeaturesContainer}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <input
                    className={styles.groupInput}
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div
                    className={styles.loremIpsumDolor7}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameContainer}>
                  <input
                    className={styles.frameChild6}
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div
                    className={styles.loremIpsumDolor8}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameDiv}>
                  <input
                    className={styles.frameChild7}
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div
                    className={styles.loremIpsumDolor9}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent1}>
                  <input
                    className={styles.frameChild8}
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div
                    className={styles.loremIpsumDolor10}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent2}>
                  <input
                    className={styles.frameChild9}
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div
                    className={styles.loremIpsumDolor11}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
              </div>
            </div>
            <button className={styles.rectangleParent1}>
              <div className={styles.frameChild10} />
              <b className={styles.choosePlan1}>Choose Plan</b>
            </button>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild11} />
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.expertPlanParent}>
                  <div className={styles.expertPlan}>Expert Plan</div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>$20</div>
                    <div className={styles.monthWrapper}>
                      <div className={styles.month2}>/ Month</div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.loremIpsumDolor12}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <img
                    className={styles.frameChild12}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor13}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameChild13}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor14}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent7}>
                  <img
                    className={styles.frameChild14}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor15}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent8}>
                  <img
                    className={styles.frameChild15}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor16}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent9}>
                  <img
                    className={styles.frameChild16}
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor17}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
              </div>
            </div>
            <button className={styles.rectangleParent3}>
              <div className={styles.frameChild17} />
              <b className={styles.choosePlan2}>Choose Plan</b>
            </button>
          </div>
          <ActionButton />
        </div>
      </section>
      <img
        className={styles.image5Icon}
        loading="lazy"
        alt=""
        src="/image-5@2x.png"
      />
    </div>
  );
};

PricingPlan.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default PricingPlan;
