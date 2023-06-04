import './Home.css'
import React, { useState } from 'react';
import Header from '../Header/Header';
import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherResult from '../WeatherResult/WeatherResult';
import Footer from '../Footer/Footer';

export default function Home({mode,setMode}) {
  const [weatherData, setWeatherData] = useState({
    city : '',
    temp: 0, 
    icon: '', 
    weather:''
  });

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <div className={mode ? 'main-light' : 'main-dark'}>
        <WeatherSearch setData={setWeatherData} mode={mode} />
        {weatherData ? <WeatherResult data={weatherData} mode={mode} /> : <></>}
      </div>
      <Footer mode={mode}/>
    </>
  );
}
