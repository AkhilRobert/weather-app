import React, { useState, useEffect } from 'react';
import styles from './weatherDetails.module.css';
import AirPressure from './components/air-pressure/AirPressure';
import Humidity from './components/humidity/Humidity';
import Visibility from './components/visibilty/Visibility';
import WindStatus from './components/wind-status/WindStatus';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import Loader from '../../components/page-loader/Loader';

function getImgSrc(id) {
  return `https://www.metaweather.com/static/img/weather/${id}.svg`;
}

function WeatherDetails() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [TodayData, setTodayData] = useState();

  let match = useRouteMatch();

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/https://www.metaweather.com/api/location/${match.params.id}/`
      )
      .then((res) => {
        setWeatherData(res.data);
        setTodayData(res.data['consolidated_weather'][0]);
        setLoading(false);
      })
      .catch((err) => console.log('error' + err));
  }, [match.params.id]);

  const getWeekWeather = () => {
    let content = null;

    if (weatherData) {
      // first value of the array is not needed
      // eslint-disable-next-line
      const [trash, ...data] = weatherData['consolidated_weather'];
      content = data.map((d) => {
        return (
          <div className={styles.weather__card} key={d['id']}>
            <div className={styles.weather__card_inner}>
              <p>{d['applicable_date']}</p>
              <img
                src={getImgSrc(d['weather_state_abbr'])}
                alt={d['weather_state_name']}
                className={styles.card__inner_img}
              />
              <div className={styles.temp__max_min}>
                <p className={styles.max__temp}>{Math.round(d['min_temp'])}</p>
                <p className={styles.min__temp}>{Math.round(d['max_temp'])}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return content;
  };

  const getTodayWeather = () => {
    let content = null;

    if (weatherData && TodayData) {
      content = (
        <>
          <img
            src={getImgSrc('lr')}
            alt="light rain"
            className={styles.container__left_image}
          />
          <p className={styles.container__left_temperature}>
            {Math.round(TodayData['the_temp'])}
          </p>
          <p className={styles.container__left_weather_name}>
            {TodayData['weather_state_name']}
          </p>
          <div className={styles.container__left_data_location}>
            <p className={styles.date_location__date}>
              {TodayData['applicable_date']}
            </p>
            <p className={styles.date_location__location}>
              <i
                className="fas fa-map-marker-alt"
                style={{
                  paddingRight: '12px',
                  fontSize: '18px',
                  color: 'grey',
                }}
              />
              {weatherData['title']}
            </p>
          </div>
        </>
      );
    }

    return content;
  };

  const getContent = () => {
    let content = <Loader />;

    if (weatherData && TodayData && !loading) {
      content = (
        <div className={styles.container}>
          <div className={styles.container__left}>{getTodayWeather()}</div>
          <div className={styles.container__right}>
            <div className={styles.right__container_margin}>
              <div className={styles.right__inner_container}>
                <div className={styles.weather__week}>{getWeekWeather()}</div>
                <div className={styles.highlight__container}>
                  <h3 className={styles.highlight}>Today's Highlights</h3>
                  <div className={styles.highlight__container_content}>
                    <WindStatus
                      value={TodayData['wind_speed']}
                      windDirection={TodayData['wind_direction']}
                      compass={TodayData['wind_direction_compass']}
                    />
                    <Humidity value={TodayData['humidity']} />
                    <Visibility value={TodayData['visibility']} />
                    <AirPressure value={TodayData['air_pressure']} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return content;
  };

  return getContent();
}

export default WeatherDetails;
