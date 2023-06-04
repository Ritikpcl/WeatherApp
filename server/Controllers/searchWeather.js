import fetch from 'node-fetch';
import 'dotenv'

export const searchWeather = async (req,res) => {
  try {
    const API_KEY = process.env.WEATHER_API_KEY
    const city = req.params.query
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    const response = await fetch(url);
    const data = await response.json();
    res.send(data)
  } catch (error) {
    console.error(error);
  }
};