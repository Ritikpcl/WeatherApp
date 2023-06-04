import axios from "axios";
// import path from "path"
import dotenv from "dotenv"
dotenv.config();

const API = axios.create({baseURL: process.env.BASE_URL });

export const getWeather = (query) => API.get(`/weather/search/${query}`)