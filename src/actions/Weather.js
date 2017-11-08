import axios from 'axios';
const API_KEY = '413c06b9b6c8b63401d1fa197939956a';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city,country){
    const url = `${URL}&q=${city},us`;
    const request = axios(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}