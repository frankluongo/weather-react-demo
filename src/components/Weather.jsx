import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Info from './Info';
import Forecast from './Forecast';

import './Weather.css';
import { request } from '../lib/request';

export default function Weather({ defaultCity }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({ ready: false });
  const [userCity, setUserCity] = useState('');
  const city = searchParams.get('city');

  async function fetchData() {
    const data = await request(city);
    setData({ ready: true, ...data });
  }

  useEffect(() => {
    if (!city) return setSearchParams({ city: defaultCity });
    fetchData();
  }, [city]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ city: userCity });
  }

  if (!data.ready) return <>Loading...</>;

  return (
    <div className="weather-app">
      <form className="weather-app-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          className="weather-app-form-input"
          autoComplete="off"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
        />
        <button type="submit" className="weather-app-form-submit">
          Search
        </button>
      </form>

      <Info data={data.weather} />
      <Forecast forecast={data.forecast} />
    </div>
  );
}
