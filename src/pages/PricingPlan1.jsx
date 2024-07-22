import GroupComponent from "../components/GroupComponent";
import FrameComponent6 from "../components/FrameComponent6";
import styles from "./PricingPlan1.module.css";

const PricingPlan1 = () => {
  return (
    <div className={styles.pricingPlan2}>
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
      <section className={styles.pricingPlan2Child} />
      <section className={styles.pricingPlan2Inner}>
        <form className={styles.pricingPlanParent}>
          <a className={styles.pricingPlan}>Pricing plan</a>
          <h1 className={styles.joinToday}>Join Today</h1>
          <div className={styles.frameParent}>
            <button className={styles.rectangleContainer}>
              <div className={styles.frameChild3} />
              <a className={styles.monthly}>Monthly</a>
            </button>
            <button className={styles.groupButton}>
              <div className={styles.frameChild4} />
              <a className={styles.yearly}>Yearly</a>
            </button>
          </div>
          <GroupComponent
            expertPlan="Beginner Plan"
            expertPlanPrice="$05"
            group46Name="radioGroup-1"
            group46Name1="radioGroup-1"
            group46Name2="radioGroup-1"
            group46Name3="radioGroup-1"
            group46Name4="radioGroup-1"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="406px"
            propPosition="absolute"
            propTop="174px"
            propLeft="53px"
          />
          <div className={styles.groupDiv}>
            <div className={styles.frameChild5} />
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.expertPlanParent}>
                  <div className={styles.expertPlan}>Expert Plan</div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>$20</div>
                    <div className={styles.monthWrapper}>
                      <div className={styles.month1}>/ Month</div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.loremIpsumDolor6}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut `}</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <img
                    className={styles.frameChild6}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor7}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent2}>
                  <img
                    className={styles.frameChild7}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor8}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent3}>
                  <img
                    className={styles.frameChild8}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor9}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent4}>
                  <img
                    className={styles.frameChild9}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor10}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
                <div className={styles.frameParent5}>
                  <img
                    className={styles.frameChild10}
                    loading="lazy"
                    alt=""
                    src="/group-46-10.svg"
                  />
                  <div
                    className={styles.loremIpsumDolor11}
                  >{`Lorem ipsum dolor sit amet, `}</div>
                </div>
              </div>
            </div>
            <button className={styles.rectangleParent1}>
              <div className={styles.frameChild11} />
              <b className={styles.choosePlan1}>Choose Plan</b>
            </button>
          </div>
          <FrameComponent6 />
        </form>
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

export default PricingPlan1;
