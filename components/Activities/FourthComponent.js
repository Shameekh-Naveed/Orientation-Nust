import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from '../../styles/ActivitiesWrapper.module.css';

const FourthComponent = () => {
  return (
    <div id={styles.four}>
      <div className={styles.features}>
        <p className={styles.feature}>Medical Knowledge</p>
        <p className={styles.feature}>Body Building</p>
        <p className={styles.feature}>Food</p>
        <p className={styles.feature}>Sickness</p>
        <p className={styles.feature}>Life Style</p>
      </div>
      <div className={styles['view-categories']}>
        <h4>View All Categories</h4>
        <BsArrowRight id={styles['react-arrow']} style={{ marginRight: "1rem" }} />
      </div>
    </div>
  );
};

export default FourthComponent;
