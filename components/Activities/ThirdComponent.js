import React, { useState } from "react";
import styles from '../../styles/ActivitiesWrapper.module.css';

const ThirdComponent = () => {
  const [showCaption, setShowCaption] = useState(false);

  const handleMouseEnter = () => {
    setShowCaption(true);
  };

  const handleMouseLeave = () => {
    setShowCaption(false);
  };

  return (
    <div id={styles.three} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.text} style={{ color: "white" }}>
        <h4>Category. </h4>
        <p>Workout</p>
      </div>
      {showCaption && (
        <div className={styles.caption3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fugit.
          Odit voluptatum cumque voluptas nostrum ducimus animi nisi reprehenderit Incidunt.
        </div>
      )}

      <div id={styles['third-header']}>ATHLETIC TRAINING | SOFT AND HARD STYLES</div>
    </div>
  );
};

export default ThirdComponent;
