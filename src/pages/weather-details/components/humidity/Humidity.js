import React from 'react';
import styles from './humidity.module.css';

function Humidity(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <h1 className={styles.humidity}>Humidity</h1>
        <p className={styles.percentage}>{props.value}</p>
      </div>
      <div className={styles.percentage_container}>
        <input
          type="range"
          className={styles.slider}
          style={{
            background: `linear-gradient(to right, #FFEB64, #FFEB64 ${props.value}%, #BDC3C7 ${props.value}%, #BDC3C7 100%)`,
          }}
        />
        <p className={[styles.limit, styles.start].join(' ')}>0</p>
        <p className={[styles.limit, styles.middle].join(' ')}>50</p>
        <p className={[styles.limit, styles.end].join('  ')}>100</p>
      </div>
    </div>
  );
}

export default Humidity;
