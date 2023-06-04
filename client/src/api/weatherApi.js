import axios from "axios";

const API = axios.create({baseURL : "http://localhost:5000"});

export const getWeather = (query) => API.get(`/weather/search/${query}`)