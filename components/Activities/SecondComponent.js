import React, { useState } from "react";
import styles from '../../styles/ActivitiesWrapper.module.css';

const SecondComponent = () => {
  const [showCaption, setShowCaption] = useState(false);

  const handleMouseEnter = () => {
    setShowCaption(true);
  };

  const handleMouseLeave = () => {
    setShowCaption(false);
  };

  return (
    <div id={styles.two} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.text}>
        <h4>Category. </h4>
        <p>Sports</p>
      </div>

      <div id={styles.lower} style={{ marginLeft: "1rem", marginTop: "0.7rem" }}>
        <h1>OVERCOMING LAZINESS IN SPORTS</h1>
      </div>
      {showCaption && (
        <div className={styles.caption4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fugit.
          Odit voluptatum cumque voluptas nostrum ducimus animi nisi reprehenderit Incidunt.
        </div>
      )}
    </div>
  );
};

export default SecondComponent;
