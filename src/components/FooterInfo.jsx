import PropTypes from "prop-types";
import styles from "./FooterInfo.module.css";

const FooterInfo = ({ className = "" }) => {
  return (
    <div className={[styles.footerInfo, className].join(" ")}>
      <div className={styles.brandInfo}>
        <div className={styles.brandDetails}>
          <h1 className={styles.tislaFitness}>
            <p className={styles.tisla}>{`Tisla `}</p>
            <p className={styles.fitness}>Fitness</p>
          </h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </div>
        </div>
      </div>
      <div className={styles.navigationLinks}>
        <h3 className={styles.menu}>Menu</h3>
        <div className={styles.menuItems}>
          <a className={styles.home}>Home</a>
          <a className={styles.about}>About</a>
          <div className={styles.trainers}>Trainers</div>
          <div className={styles.plans}>Plans</div>
          <div className={styles.reviews}>Reviews</div>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <h3 className={styles.socialMedia}>Social Media</h3>
        <div className={styles.socialMediaIcons}>
          <div className={styles.socialIconLinks}>
            <img
              className={styles.linkedin02Icon}
              loading="lazy"
              alt=""
              src="/linkedin02-1.svg"
            />
            <div className={styles.linkedin}>{`LinkedIn `}</div>
          </div>
          <div className={styles.socialIconLinks1}>
            <img
              className={styles.facebook02Icon}
              loading="lazy"
              alt=""
              src="/facebook02-1.svg"
            />
            <div className={styles.facebook}>Facebook</div>
          </div>
          <div className={styles.socialIconLinks2}>
            <img
              className={styles.instagramIcon}
              loading="lazy"
              alt=""
              src="/instagram-1.svg"
            />
            <div className={styles.instagram}>Instagram</div>
          </div>
          <div className={styles.socialIconLinks3}>
            <img className={styles.githubIcon} alt="" src="/github-1.svg" />
            <div className={styles.github}>Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterInfo.propTypes = {
  className: PropTypes.string,
};

export default FooterInfo;
