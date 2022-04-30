import React from "react";
import './Ciudad.css';
import {Link} from 'react-router-dom'
// import { useParams } from "react-router-dom";

export default function Ciudad({ city }) {
  // const {ciudadId} = useParams();
  
  return (
    <div className="ciudad">
      <div className="container">
        <Link to='/'>
          <button className='btn'>Volver </button>
        </Link>
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
