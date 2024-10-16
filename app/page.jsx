"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import toast from "react-hot-toast";
import Currencyconverter from "./(currency)/Currencyconverter";

export default function Usepage() {
  const [city, setcity] = useState("khulna");
  const [weather, setweather] = useState({
    current: "",
    location: "",
  });

  useEffect(() => {
    const apiKey = "cb09024a151644b49b954945241510";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const Weatherfunc = async () => {
      try {
        const res = await fetch(apiUrl);
        if (res.ok) {
          const { current, location } = await res.json();

          setweather({
            ...weather,
            current,
            location,
          });
        }
      } catch (error) {
        toast.error("Connection error");
      }
    };

    Weatherfunc();
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
    <div className=" md:w-[30%] w-[90%] mx-auto">
      <div className="capitalize my-6">
        <h1 className="text-xl font-bold text-center py-3">Hellow, Weather </h1>
        <div className="md:w-[60%] mx-auto w-[100%] flex items-center justify-between border px-3  m-1 rounded-md">
          <input
            className="  m-2 outline-none w-full mx-auto"
            placeholder="City Name"
            type="text"
            onChange={(e) => setcity(e.target.value)}
          />
          <p className="text-green-600 text-lg font-bold">
            {" "}
            <CiSearch />
          </p>
        </div>

        <div className="bg-gradient-to-r p-3 from-sky-200  to-blue-300 mx-auto  items-center rounded-sm">
          <b> {today[new Date().getDay()]}</b>
          <p className="text-gray-700">
            {new Date().getDate()}, {currentMonth[new Date().getMonth()]}
          </p>
          <h1>
            {weather.location.name}, {weather.location.country},{" "}
            {weather.location.tz_id}
          </h1>
          <div className="flex items-center  justify-between py-2">
            <div>
              <p className="text-4xl font-semibold">
                {" "}
                {weather.current.temp_c} <sup>°</sup> C
              </p>
              <small className="text-lg ">
                {" "}
                {weather.current.condition?.text}
              </small>
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

      <div>
        <Currencyconverter />
      </div>
    </div>
  );
}
