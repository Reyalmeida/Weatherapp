//import React from 'react';
import React, { useState } from 'react';
import Header from './Header';
import WeatherCard from './components/WeatherCard';
import './App.css';



function App() {
  const [city, setCity] = useState('');
  const[weather, setWeather]= useState(null);
  const [citiesSearched, setCitiesSearched] =useState([]);
  const getWeather = async () => {
    const apiKey ="34d203d1093abb75994692a4b536bfcc";

    try{
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if(!response.ok){
        throw new Error("City not found or API faied")
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setCitiesSearched((prev => [...prev, data.name]))
    }catch(err) {
      console.error("Error fetching weather:", err);
      setWeather(null);
    }
    };
    
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🌤️ Weather Dashboard</h1>
      <Header />
      <input
        type ="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}/>
        <br /><br />
        <button onClick={getWeather}>Get Weather</button>
        {citiesSearched.length > 0 &&(<div style={{ marginTop: '30px'}}>
          <h3>🔍 Cities You Searched</h3>
          <ul style={{listStyleType: 'none', padding:0}}>
            {citiesSearched.map((cityName, index)=>(<li key ={index}>{cityName}</li>
          
            ))}
          </ul>
        </div>
      )}
      <p>You typed: {city}</p>
      {weather && weather.main && ( <WeatherCard weather={weather} />
       
      )}
    </div>
  );
}

export default App;
