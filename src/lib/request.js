import { API_URL } from '../utils/constants';
import { transformData } from './transformData';

export async function request(city) {
  const cityParam = encodeURIComponent(city);
  try {
    const weatherRes = await fetch(
      `${API_URL.url}weather?q=${cityParam}${API_URL.defParams}`
    );
    const weather = await weatherRes.json();
    const { lat, lon } = weather.coord;
    const forecastRes = await fetch(
      `${API_URL.url}onecall?lat=${lat}&lon=${lon}&exclude={part}${API_URL.defParams}`
    );
    const forecast = await forecastRes.json();
    return {
      forecast,
      weather: transformData(weather),
    };
    // return data;
  } catch (e) {
    console.log(e);
  }
}
