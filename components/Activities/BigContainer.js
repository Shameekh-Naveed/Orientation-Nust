import React, { useState } from "react";
import styles from '../../styles/ActivitiesWrapper.module.css';

const BigContainer = () => {
  const [showCaption, setShowCaption] = useState(false);

  const handleMouseEnter = () => {
    setShowCaption(true);
  };

  const handleMouseLeave = () => {
    setShowCaption(false);
  };

  return (
    <div className={styles['big-container']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showCaption && (
        <div className={styles.caption2} style={{ color: "white", display: "inline-block", marginTop: "5px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fugit.
          Odit voluptatum cumque voluptas nostrum ducimus animi nisi reprehenderit Incidunt.
        </div>
      )}
      <div className={styles.upper}>
        <h1 style={{ display: "inline-block" }}>Category.</h1>
        <p style={{ display: "inline-block", marginLeft: "5px" }}>Fitness</p>
      </div>
      <div className={styles.lower}>
        <h1>BEST FULL-BODY HOME GYM MACHINES</h1>
      </div>
    </div>
  );
};

export default BigContainer;
