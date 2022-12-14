import Head from 'next/head'
import React from 'react';
import Weather from "../components/Weather";
import Spinner from '../components/Spinner'
import Form from "../components/Form";
import Overlay from "../components/Overlay";
import {UseFetchWeather} from "../hooks/useFetchWeather";

export default function Home() {
    const {fetchWeather,setCity,weather,loading} = UseFetchWeather();
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div>
                <Head>
                    <title>Weather - Next App</title>
                    <meta name="description" content="Generated by create next app"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                {/*Overlay*/}
                <Overlay/>
                {/*Search*/}
               <Form fetchWeather={fetchWeather} setCity={setCity}/>
                {/*Weather*/}
                {weather.main && <Weather data={weather}/>}
            </div>

        )
    }
}
