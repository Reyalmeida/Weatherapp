import React from 'react';
function searchBar({city, setCity, getWeather}){
	return(

	 <div>
		 <input
			type="text"
			placeholder ="Enter a city"
			value = {setCity}
			onChange={(e) => setCity(e.target.value)}
			/>
		 <br /><br />
		 <button onClick={getWeather}>Get Weather</button>
	 </div>
	);
}
export default SearchBar;