export const WEATHER_API = 'https://api.openweathermap.org/';
export const WEATHER_ASSET_URL = 'http://openweathermap.org/';

export const API_URL = {
  asset: (icon, size = '@2x', frmt = 'png') =>
    `${WEATHER_ASSET_URL}img/wn/${icon}${size}.${frmt}`,
  data: 'data/2.5/weather',
  defParams: `&appid=${process.env.REACT_APP_WEATHER_API}&units=imperial`,
  url: `${WEATHER_API}data/2.5/`,
};
