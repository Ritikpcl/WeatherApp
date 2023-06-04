import axios from "axios";

const API = axios.create({baseURL: "https://weather-nbrqknt4e-ritikpcl.vercel.app/"});

export const getWeather = (query) => API.get(`/weather/search/${query}`)