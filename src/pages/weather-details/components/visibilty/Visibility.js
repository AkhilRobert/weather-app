import React from 'react';
import styles from './visibilty.module.css';

function Visibility(props) {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <h1 className={styles.visibilty}>Visibilty</h1>
        <p className={styles.distance}>{Math.round(props.value)}</p>
      </div>
    </div>
  );
}

export default Visibility;
