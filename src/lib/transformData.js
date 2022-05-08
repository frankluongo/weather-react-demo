import { API_URL } from '../utils/constants';

export function transformData(data) {
  return {
    coordinates: data.coord,
    temperature: check(data.main, 'temp'),
    date: new Date(data.dt * 1000),
    humidity: check(data.main, 'humidity'),
    wind: check(data.wind, 'speed'),
    city: data.name,
    feels: check(data.main, 'feels_like'),
    description: data.weather && data.weather[0].description,
    iconUrl: data.weather && API_URL.asset(data.weather[0].icon),
  };
}

function check(obj, prop) {
  if (!obj) return null;
  return obj[prop];
}
