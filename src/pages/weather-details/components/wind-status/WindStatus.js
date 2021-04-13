import React from 'react';
import styles from './windstatus.module.css';
import Compass from '../../../../assets/Compass.svg';

function WindStatus(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <h1 className={styles.wind__status}>Wind Status</h1>
        <p className={styles.wind__speed}>7 mph</p>
        <div className={styles.wind__direction}>
          <img
            src={Compass}
            alt="Compass"
            className={styles.wind__image}
            style={{
              transform: 'rotate(200deg)',
            }}
          />
          <p className={styles.wind__direction_text}>wsw</p>
        </div>
      </div>
    </div>
  );
}

export default WindStatus;
