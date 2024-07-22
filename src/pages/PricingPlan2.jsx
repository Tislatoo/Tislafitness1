import FrameComponent7 from "../components/FrameComponent7";
import PlansContainer from "../components/PlansContainer";
import styles from "./PricingPlan2.module.css";

const PricingPlan2 = () => {
  return (
    <div className={styles.pricingPlan3}>
      <FrameComponent7 />
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
      <section className={styles.plansContainerWrapper}>
        <PlansContainer />
      </section>
      <section className={styles.backgroundShape} />
      <img
        className={styles.image4Icon}
        loading="lazy"
        alt=""
        src="/image-5@2x.png"
      />
    </div>
  );
};

export default PricingPlan2;
