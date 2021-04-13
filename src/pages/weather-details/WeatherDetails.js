import React from 'react';
import styles from './weatherDetails.module.css';
import AirPressure from './components/air-pressure/AirPressure';
import Humidity from './components/humidity/Humidity';
import Visibility from './components/visibilty/Visibility';
import WindStatus from './components/wind-status/WindStatus';

function getImgSrc(id) {
  return `https://www.metaweather.com/static/img/weather/${id}.svg`;
}

function WeatherDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <img
          src={getImgSrc('lr')}
          alt="light rain"
          className={styles.container__left_image}
        />
        <p className={styles.container__left_temperature}>65&#8451;</p>
        <p className={styles.container__left_weather_name}>shower</p>
        <div className={styles.container__left_data_location}>
          <p className={styles.date_location__date}>12/12/12</p>
          <p className={styles.date_location__location}>
            <i
              className="fas fa-map-marker-alt"
              style={{
                paddingRight: '12px',
                fontSize: '18px',
                color: 'grey',
              }}
            />
            Africa
          </p>
        </div>
      </div>
      <div className={styles.container__right}>
        <div className={styles.right__container_margin}>
          <div className={styles.right__inner_container}>
            <div className={styles.weather__week}>
              <div className={styles.weather__card}>
                <div className={styles.weather__card_inner}>
                  <p>Date will go here</p>
                  <img
                    src={getImgSrc('lr')}
                    alt="light rain"
                    className={styles.card__inner_img}
                  />
                  <div className={styles.temp__max_min}>
                    <p className={styles.max__temp}>max temp</p>
                    <p className={styles.min__temp}>min temp</p>
                  </div>
                </div>
              </div>
              <div className={styles.weather__card}>
                <div className={styles.weather__card_inner}>
                  <p>Date will go here</p>
                  <img
                    src={getImgSrc('lr')}
                    alt="lightrain"
                    className={styles.card__inner_img}
                  />
                  <div className={styles.temp__max_min}>
                    <p className={styles.max__temp}>max temp</p>
                    <p className={styles.min__temp}>min temp</p>
                  </div>
                </div>
              </div>
              <div className={styles.weather__card}>
                <div className={styles.weather__card_inner}>
                  <p>Date will go here</p>
                  <img
                    src={getImgSrc('lr')}
                    alt="lightrain"
                    className={styles.card__inner_img}
                  />
                  <div className={styles.temp__max_min}>
                    <p className={styles.max__temp}>max temp</p>
                    <p className={styles.min__temp}>min temp</p>
                  </div>
                </div>
              </div>
              <div className={styles.weather__card}>
                <div className={styles.weather__card_inner}>
                  <p>Date will go here</p>
                  <img
                    src={getImgSrc('lr')}
                    alt="lightrain"
                    className={styles.card__inner_img}
                  />
                  <div className={styles.temp__max_min}>
                    <p className={styles.max__temp}>max temp</p>
                    <p className={styles.min__temp}>min temp</p>
                  </div>
                </div>
              </div>
              <div className={styles.weather__card}>
                <div className={styles.weather__card_inner}>
                  <p>Date will go here</p>
                  <img
                    src={getImgSrc('lr')}
                    alt="lightrain"
                    className={styles.card__inner_img}
                  />
                  <div className={styles.temp__max_min}>
                    <p className={styles.max__temp}>max temp</p>
                    <p className={styles.min__temp}>min temp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.highlight__container}>
              <h3 className={styles.highlight}>Today's Highlights</h3>
              <div className={styles.highlight__container_content}>
                <WindStatus />
                <Humidity />
                <Visibility />
                <AirPressure />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
