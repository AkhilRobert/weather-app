import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchLoader from '../../components/search-loader/SearchLoader';

function Index() {
  const [active, setActive] = useState(false);
  const [keyword, setKeyword] = useState(undefined);
  const [results, setResults] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  let token = axios.CancelToken.source();

  useEffect(() => {
    // Using localhost as a proxy for fixing cors error
    if (keyword) {
      console.log(token);
      axios
        .get(
          // using proxy server for fixing cors error
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${keyword}`,
          {
            cancelToken: token.token,
          }
        )
        .then((res) => {
          setResults(res);
          setLoading(false);
          setHasError(false);
        })
        .catch((err) => {
          if (!axios.isCancel(err)) {
            setHasError(true);
          }
          setLoading(false);
        });
    }

    return () => token.cancel('cancel in progress');
    // eslint-disable-next-line
  }, [keyword]);

  const changeHandler = (event) => {
    const value = event.currentTarget.value;
    if (value.length > 0 && !(keyword === value)) {
      console.log('changing is running');
      setLoading(true);
      setActive(true);
      setKeyword(value);
    } else {
      setActive(false);
    }
  };

  const getResults = () => {
    let content = null;

    if (!loading && results) {
      if (results.data.length) {
        console.log('Inside results length');
        content = results.data.map((data) => {
          return (
            <Link to={'/' + data['woeid']} key={data['latt_long']}>
              <p className={styles.item}>{data.title}</p>
            </Link>
          );
        });
      } else {
        content = <p className={styles.result_none}>No results found</p>;
      }
    }

    if (!loading && hasError) {
      content = <p className={styles.result_none}>An error occurred</p>;
    }

    if (loading) {
      content = <SearchLoader />;
    }

    return content;
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <input
          type="text"
          placeholder={'enter location'}
          onChange={(e) => changeHandler(e)}
        />
        <div
          className={[
            styles.search_container,
            active ? styles.search_active : null,
          ].join(' ')}
        >
          {getResults()}
        </div>
      </div>
    </div>
  );
}

export default Index;
