import React from 'react';
import styles from './airpressure.module.css';

function AirPressure(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <h1 className={styles.air__pressure}>Air Pressure</h1>
        <p className={styles.pressure__value}>{Math.round(props.value)}</p>
      </div>
    </div>
  );
}

export default AirPressure;
