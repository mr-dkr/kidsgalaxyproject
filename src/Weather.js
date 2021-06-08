import { Button, InputAdornment, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { getWeather } from './api'
import './Weather.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {myStyles} from 'styled-components';

  
function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Leicester');

    const getData = async () => {
        const data = await getWeather(city);
        setWeather(data);
        console.log(data)

    }



    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="weather">
            <div className="weather__container">
                <h2 className="weather__title">Current Weather</h2>
                <div className="weather__search">

                        <TextField
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="weather__searchOption"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LocationOnIcon />
                                  </InputAdornment>
                                ),
                              }} />
                        <Button
                        variant="contained"
                        color="primary"
                        className="weather__searchOption"
                            type="submit"
                            onClick={() => getData()}>Search</Button>
                </div>
                {weather !== null ? (
                    <div className="weather__card">
                        <div className="weather__icon">

                        </div>
                        <div className="weather__temperature">
                            <h1>{weather.current.temp_c}&deg;C</h1>
                        </div>
                        <div className="weather__location">
                            <h3>{weather.location.name}, {weather.location.region}, {weather.location.country}</h3>
                        </div>
                        <div className="weather__temperatureRange">
                            <img src={weather.current.condition.icon} />
                            <p>{weather.current.condition.text}</p>
                        </div>
                        <div className="weather__footer">
                            <p className="weather__footerOption">Humidity: {weather.current.humidity}</p>
                            <p className="weather__footerOption">Feels Like: {weather.current.feelslike_c}</p>
                            <p className="weather__footerOption">Wind: {weather.current.wind_kph}</p>

                        </div>
                    </div>
                ) : null}

            </div>
        </div>
    );

}

export default Weather
