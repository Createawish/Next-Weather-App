import React, {useState} from 'react';
import axios from "axios";

export const UseFetchWeather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

    const fetchWeather = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.get(url).then((response) => {
            setWeather(response.data)
            console.log(response.data)
        })
        setCity('')
        setLoading(false)
    }

    return {fetchWeather,setCity,weather,loading}
    ;
};

