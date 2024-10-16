"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function page() {
  const [city, setcity] = useState("dhaka");
  const [weather, setweather] = useState({
    current: "",
    location: "",
  });

  useEffect(() => {
    const apiKey = "cb09024a151644b49b954945241510";

    const WeatherData = async () => {
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      const res = await fetch(apiUrl);
      if (res.ok) {
        const jscon = await res.json();

        setweather({
          ...weather,
          current: jscon.current,
          location: jscon.location,
        });
      }
    };

    WeatherData();
  }, [city]);

  const makepath = weather && weather.current.condition?.icon;
  const newpath = `https:${makepath}`;

  const today = [
    "sunday",
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "Saturday ",
  ];
  const currentMonth = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "August",
    "september",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="capitalize md:w-[30%] w-[90%] mx-auto my-6">
      <h1 className="text-xl font-bold text-center py-3">Hellow, Weather</h1>
    <div className="md:w-[60%] mx-auto w-[100%] flex items-center justify-between border px-3  m-1 rounded-md">
    <input
        className="  m-2 outline-none w-full mx-auto"
        placeholder="City Name"
        type="text"
        onChange={(e) => setcity(e.target.value)}
      />
   <p className="text-green-600 text-lg font-bold">   <CiSearch/></p>

    </div>

      <div className="bg-gradient-to-r p-3 from-sky-200  to-blue-300 mx-auto  items-center rounded-sm">
        <b> {today[new Date().getDay()]}</b>
        <p className="text-gray-700">
        
          {new Date().getDate()}, {currentMonth[new Date().getMonth()]}
        </p>
        <h1>
          
          {weather.location.name}, {weather.location.country}, {weather.location.tz_id}
        </h1>
        <div className="flex items-center  justify-between py-2">
          <div>
          
          <p  className="text-4xl font-semibold">  {weather.current.temp_c} <sup>°</sup> C</p>
            <small className="text-lg "> {weather.current.condition?.text}</small>
          </div>
       
   
            <Image
              src={newpath && newpath}
              height={120}
              alt="weather image"
              width={120}
              
            />
         
        </div>

        
        <small>developed by Mazaharul Islam</small>
      </div>
    </div>
  );
}
