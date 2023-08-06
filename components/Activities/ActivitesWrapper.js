import styles from '../../styles/ActivitiesWrapper.module.css';
import BigContainer from "./BigContainer";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";

export default function ActivitiesWrapper() {
    return (
        <div className={styles.container}>
            <BigContainer />
            <div className={styles['small-container']}>
                <div className={styles.row} id={styles['upper-container']}>
                    <FirstComponent />
                    <SecondComponent />
                </div>
                <div id={styles['lower-container']} className={styles.row}>
                    <ThirdComponent />
                    <FourthComponent />
                </div>
            </div>
        </div>
    )
}
