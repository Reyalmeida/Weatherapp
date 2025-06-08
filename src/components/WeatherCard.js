import React from 'react'
function WeatherCard({weather}){
	return(
		<div className="weather-card" style={{marginTop: '20px'}}>
			<h2>{weather.name} </h2>
			<p>🌡️{weather.main.temp}℃</p>
			<p>
  				🌡️ Temp: {weather.main.temp} °C / {(weather.main.temp * 9/5 + 32).toFixed(1)} °F
			</p>

			<p>☁️ condition:{weather.weather[0].description}</p>
			<img
				src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
				alt={weather.weather[0].icon}
			/>

		</div>
	);
}
export default WeatherCard;