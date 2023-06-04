import axios from "axios";

const API = axios.create({baseURL: "weather-app-ashy-pi.vercel.app"});

export const getWeather = (query) => API.get(`/weather/search/${query}`)