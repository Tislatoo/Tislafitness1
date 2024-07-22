import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ActionButton.module.css";

const ActionButton = ({ className = "" }) => {
  const navigate = useNavigate();

  const onNextButtonWrapperClick = useCallback(() => {
    navigate("/pricing-plan-2");
  }, [navigate]);

  return (
    <div className={[styles.actionButton, className].join(" ")}>
      <div className={styles.actionButtonChild} />
      <div className={styles.joinButtonContainer}>
        <div className={styles.joinButtonWrapper}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-60.svg"
            />
            <div className={styles.joinUsNowWrapper}>
              <a className={styles.joinUsNow}>Join us Now!!</a>
            </div>
            <div className={styles.cancelButton}>
              <img
                className={styles.cancel01Icon}
                loading="lazy"
                alt=""
                src="/cancel01.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.horizontalDividerContainer}>
          <div className={styles.horizontalDividerContainerChild} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progressWrapper}>
              <div className={styles.progressDotsContainer}>
                <div className={styles.progressDots}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.div}>1</div>
                  </div>
                  <div className={styles.progressDotsInner}>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.div1}>2</div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.lineWrapper}>
                      <div className={styles.lineDiv} />
                    </div>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild1} />
                      <div className={styles.div2}>3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.stepsContainer}>
                <div className={styles.basicDetail}>Basic Detail</div>
                <div className={styles.membershipDetail}>Membership Detail</div>
                <div className={styles.payment}>Payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.basicDetailsContainer}>
        <div className={styles.basicDetailHeader}>
          <h3 className={styles.basicDetails}>Basic Details</h3>
        </div>
        <div className={styles.inputFieldsContainer}>
          <div className={styles.inputFieldsWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-49.svg"
                />
                <div className={styles.enterName}>Enter name</div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/rectangle-49.svg"
                />
                <div className={styles.enterPhoneNo}>Enter phone no</div>
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/rectangle-49.svg"
                />
                <div className={styles.enterEmail}>Enter email</div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.fileInputWrapper}>
                <img
                  className={styles.fileInputWrapperChild}
                  loading="lazy"
                  alt=""
                  src="/group-75.svg"
                />
              </div>
              <div className={styles.fileLabelContainer}>
                <div className={styles.dropYourFile}>
                  Drop your file here or browse
                </div>
                <div className={styles.fileSizeLimitContainer}>
                  <div className={styles.maximumUploadedFile}>
                    Maximum uploaded file size: 05 MB
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <button className={styles.additionalFields}>
              <div className={styles.selectGender}>Select Gender</div>
            </button>
            <div className={styles.additionalFields1}>
              <div className={styles.enterAge}>Enter age</div>
            </div>
            <button className={styles.additionalFields2}>
              <div className={styles.enterHeight}>Enter height</div>
            </button>
            <button className={styles.additionalFields3}>
              <div className={styles.enterWeight}>Enter weight</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.nextButtonContainer}>
        <button
          className={styles.nextButtonWrapper}
          onClick={onNextButtonWrapperClick}
        >
          <b className={styles.next}>Next</b>
        </button>
      </div>
    </div>
  );
};

ActionButton.propTypes = {
  className: PropTypes.string,
};

export default ActionButton;
