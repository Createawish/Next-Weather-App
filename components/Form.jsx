import React from 'react';
import {BsSearch} from "react-icons/bs";

const Form = ({fetchWeather,setCity}) => {
    return (
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
            <form onSubmit={fetchWeather}
                  className='flex justify-between items-center w-full m-auto p-3 bg-transporent border border-gray-300 text-white rounded-2xl'>
                <div>
                    <input className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder-gray-100'
                           onChange={(e) => setCity(e.target.value)}
                           type='text'
                           placeholder='Search city'/>
                </div>
                <button onClick={fetchWeather}>
                    <BsSearch size={20}/>
                </button>
            </form>
        </div>
    );
};

export default Form;