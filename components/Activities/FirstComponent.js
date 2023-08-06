import React, { useState } from "react";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import styles from '../../styles/ActivitiesWrapper.module.css';

const FirstComponent = () => {
  const [showCaption, setShowCaption] = useState(false);

  const handleMouseEnter = () => {
    setShowCaption(true);
  };

  const handleMouseLeave = () => {
    setShowCaption(false);
  };

  return (
    <div
      id={styles.one}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles['arrow-and-text']}>
        <div className={styles.text}>
          <h4 style={{ color: "white" }}>Category. </h4>
          <p style={{ color: "white" }}>Gym</p>
        </div>
        <div className={styles.arrow}>
          <BsArrowUpRight
            id={styles['react-arrow']}
            color="white"
            style={{ backgroundColor: "rgba(0,0,0,0)", marginTop: "10px" }}
            size={14}
          />
        </div>
      </div>
      <div className={styles.heading}>
        <h1 style={{ color: "white" }}>
          READY, SET, GO! HOW TO START RUNNING TO STAY FIT
        </h1>
      </div>
      {showCaption && (
        <div className={styles.caption} style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fugit.
          Odit voluptatum cumque voluptas nostrum ducimus animi nisi
          reprehenderit Incidunt.
        </div>
      )}
      <hr className={styles['hr-custom']} />
      {showCaption && (
        <div className={styles['extra-info']}>
          <h1 style={{ color: "white" }}>
            HOW TO READ GOLF GREEN GRAIN LIKE A PRO
          </h1>
          <BsArrowRight id={styles['react-arrow']} />
        </div>
      )}
      <hr className={styles['hr-custom']} />
      {showCaption && (
        <div className={styles['extra-info']}>
          <h1 style={{ color: "white" }}>HOW TO WORKOUT IN A LIMITED SPACE</h1>
          <BsArrowRight id={styles['react-arrow']} />
        </div>
      )}
    </div>
  );
};

export default FirstComponent;
