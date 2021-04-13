import React from 'react';
import styles from './windstatus.module.css';
import Compass from '../../../../assets/Compass.svg';

function WindStatus(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <h1 className={styles.wind__status}>Wind Status</h1>
        <p className={styles.wind__speed}>{Math.round(props.value)}</p>
        <div className={styles.wind__direction}>
          <img
            src={Compass}
            alt="Compass"
            className={styles.wind__image}
            style={{
              transform: `rotate(${props.windDirection}deg)`,
            }}
          />
          <p className={styles.wind__direction_text}>{props.compass}</p>
        </div>
      </div>
    </div>
  );
}

export default WindStatus;
