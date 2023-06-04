import React from 'react'
import './WeatherResult.css'

export default function WeatherResult({data:data, mode:mode}) {
  console.log(data)
  const {city,temp,icon, weather} = data
  return (
    <>
    {
      temp ?
      <div className={mode ? 'result-light' : 'result-dark'}>    
      <p>
      <span className='city-name'>{city}</span>
      <span className='temp'>{temp}&deg;</span>celcius
      </p>  
      <img className='weather-image' src={`${icon}`}/>
      <p>{weather}</p>
    </div> : <></>
    }
    </>
  )
}
