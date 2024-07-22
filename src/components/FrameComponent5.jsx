import FeatureRowTwo from "./FeatureRowTwo";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.chooseUsContentWrapper, className].join(" ")}>
      <div className={styles.chooseUsContent}>
        <div className={styles.chooseUsDescription}>
          <h1 className={styles.whyChooseUs}>{`Why Choose Us `}</h1>
          <h3
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</h3>
        </div>
        <div className={styles.featuresGridParent}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureRowOne}>
              <div className={styles.featureOne}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.boxingGlove01Icon}
                    loading="lazy"
                    alt=""
                    src="/boxingglove01.svg"
                  />
                </div>
                <div className={styles.featureOneContent}>
                  <h3 className={styles.trainerQualifications}>
                    Trainer Qualifications
                  </h3>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </div>
              <FeatureRowTwo
                group24="/group-24.svg"
                facilityAmenities="Facility Amenities"
              />
            </div>
            <div className={styles.featureRowOne1}>
              <FeatureRowTwo
                group24="/group-22.svg"
                facilityAmenities="Membership Cost"
              />
              <FeatureRowTwo
                group24="/group-23.svg"
                facilityAmenities="Operating Hours"
              />
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.wrapperRectangle29}>
              <img
                className={styles.wrapperRectangle29Child}
                loading="lazy"
                alt=""
                src="/rectangle-29@2x.png"
              />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.wrapperTestimonialQuotes}>
                <img
                  className={styles.testimonialQuotesIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-30@2x.png"
                />
              </div>
              <div className={styles.wrapperTestimonialQuotes1}>
                <img
                  className={styles.testimonialQuotesIcon1}
                  loading="lazy"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
