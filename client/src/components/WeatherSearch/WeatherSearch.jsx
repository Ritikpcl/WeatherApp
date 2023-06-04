import './WeatherSearch.css'
import React, { useState } from 'react'
import * as WeatherAPI from '../../api/weatherApi'
import icon16 from '../../icons/icon16.png';
import Swal from 'sweetalert2'

export default function WeatherSearch({ setData : setData, mode : mode }) {

    const [place, setPlace] = useState("")
    const handleChange = (e) => {
        setPlace(e.target.value);
    }

    const getData=async ()=>{
        return await WeatherAPI.getWeather(place)
    }

    const getWeather = async () => {
        if(place){
            const response = await getData()
            console.log(response)
            if(response.data.error){
                Swal.fire({
                    icon: 'error',
                    title: `${response.data.error.message}`
                })
                return;
            }

            setData((prev) => ({
                ...prev,
                city: response.data.location.name,
                temp: response.data.current.temp_c,
                icon: response.data.current.condition.icon,
                weather: response.data.current.condition.text
            }))
        }else
        {
            Swal.fire({
                icon: 'error',
                title: 'Please enter city'
              })
        }}

    return (
        <>
            <div className={mode ? 'search-light' : 'search-dark'}>
                <input
                    type='text'
                    placeholder='enter city name'
                    onChange={handleChange}
                    value={place}
                />
                <button 
                onClick={getWeather}>
                <img className="search-icon" src={icon16} alt="Icon" />
                </button>
            </div>
        </>
    )
}
