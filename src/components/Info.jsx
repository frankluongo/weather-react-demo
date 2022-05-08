import React from 'react';
import { formatDate } from '../lib/formatDate';
import Temperature from './Temperature';

import './Info.css';

export default function Info({ data }) {
  return (
    <header className="info-header">
      <section>
        <h2 className="h1">{data.city}</h2>
        <p className="h2 text-center">{formatDate(data.date)}</p>
      </section>
      <section className="flex align-center gap-16">
        <div>
          <h3 className="h3">{data.description}</h3>
          <section className="flex align-center">
            <img
              className="info-image"
              src={data.iconUrl}
              alt={data.description}
            />
            <Temperature fahrenheit={data.temperature} />
          </section>
        </div>
        <ul className="list info-list">
          <li>Humidity: {data.humidity}%</li>
          <li>Wind: {Math.round(data.wind)} mph</li>
        </ul>
      </section>
    </header>
  );
}
