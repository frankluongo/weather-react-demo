import React from 'react';
import DayForecast from './DayForecast';

import './Forecast.css';

export default function Forecast({ forecast }) {
  const dailys = forecast.daily.slice(0, 5);

  return (
    <section className="grid cols-5 gap-16">
      {dailys.map((daily, i) => (
        <DayForecast data={daily} key={i} />
      ))}
    </section>
  );
}
