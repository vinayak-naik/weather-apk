import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState('Bengaluru');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
      const response = await fetch(url);
      const resJson = await response.json();
      
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="input-box">
          <input
            type="search"
            value={search}
            className="input-field"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No data found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1 className="temp">{city.temp}*Cel</h1>
            <h3 className="temp-min-max">min:{city.temp_min}*Cel | max:{city.temp_max}*Cel</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
