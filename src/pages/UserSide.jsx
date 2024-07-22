import HomePage from "../components/HomePage";
import FiguresPage from "../components/FiguresPage";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterInfo from "../components/FooterInfo";
import styles from "./UserSide.module.css";

const UserSide = () => {
  return (
    <div className={styles.userSide}>
      <section className={styles.homePageParent}>
        <HomePage />
        <FiguresPage />
      </section>
      <div className={styles.userSideChild} />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <div className={styles.userSideItem} />
      <section className={styles.pricingContentWrapper}>
        <div className={styles.pricingContent}>
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <img
        className={styles.contactBannerIcon}
        alt=""
        src="/contact-banner@2x.png"
      />
      <section className={styles.contactInfoWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.callToAction}>
            <h3 className={styles.callUsToday}>Call us Today</h3>
          </div>
          <div className={styles.phoneNumber}>
            <b className={styles.number}>+91 - 8200060000</b>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <FooterInfo />
          <div className={styles.copyright}>
            <div className={styles.prestaloOnli}> © Tisla fitness</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserSide;
