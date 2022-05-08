import React from 'react';

export default function WeatherTemperature(props) {
  return (
    <p className="temp">
      <strong>{Math.round(props.fahrenheit)}</strong>
      <span className="units">°F</span>
    </p>
  );
}
