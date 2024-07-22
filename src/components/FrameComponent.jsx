import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.pricingPlanWrapper, className].join(" ")}>
      <div className={styles.pricingPlan}>
        <div className={styles.reviewBanner} />
        <h3 className={styles.reviews}>Reviews</h3>
        <div className={styles.reviewsContent}>
          <div className={styles.reviewInput}>
            <div className={styles.reviewFrom}>
              <h1 className={styles.fromYou}>From you</h1>
            </div>
            <button className={styles.giveReviewButton}>
              <b className={styles.giveReview}>+ Give Review</b>
            </button>
          </div>
          <div className={styles.testimonials}>
            <div className={styles.wrapperGroup51}>
              <img
                className={styles.wrapperGroup51Child}
                loading="lazy"
                alt=""
                src="/group-51.svg"
              />
            </div>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <div className={styles.testimonialDetails}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.userTestimonial}>
                      <div className={styles.testimonialUser}>
                        <div className={styles.userName}>
                          <h2 className={styles.name}>Name</h2>
                          <div className={styles.userRating}>
                            <img
                              className={styles.vectorIcon}
                              alt=""
                              src="/vector-1.svg"
                            />
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="/vector-1.svg"
                            />
                            <img
                              className={styles.vectorIcon2}
                              alt=""
                              src="/vector-1.svg"
                            />
                            <img
                              className={styles.vectorIcon3}
                              alt=""
                              src="/vector-1.svg"
                            />
                            <img
                              className={styles.vectorIcon4}
                              alt=""
                              src="/vector-5.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.testimonialRatingsIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                    <div
                      className={styles.loremIpsumDolor}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
                  </div>
                  <div className={styles.testimonialInfo}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <img
                        className={styles.vectorIcon5}
                        loading="lazy"
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                    <h2 className={styles.name1}>Name</h2>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className={styles.vectorIcon7}
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className={styles.vectorIcon8}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className={styles.vectorIcon9}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className={styles.vectorIcon10}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div
                      className={styles.loremIpsumDolor1}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
                  </div>
                  <div className={styles.testimonialInfo1}>
                    <div className={styles.testimonialInfoChild} />
                    <img
                      className={styles.vectorIcon11}
                      loading="lazy"
                      alt=""
                      src="/vector-6.svg"
                    />
                    <h2 className={styles.name2}>Name</h2>
                    <div
                      className={styles.loremIpsumDolor2}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</div>
                  </div>
                </div>
                <div className={styles.testimonialNavigation}>
                  <img
                    className={styles.testimonialNavigationChild}
                    loading="lazy"
                    alt=""
                    src="/group-52.svg"
                  />
                  <img
                    className={styles.testimonialNavigationItem}
                    loading="lazy"
                    alt=""
                    src="/group-53@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
