alert("Chal gai bhai");

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a79c608069msh49c1d267f11b183p1389afjsn493917056afd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(city) {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);

        if (response.ok)    // If HTTP status is 200-299
        { 
            // console.log(response);

            const result = await response.json();
            console.log(result);
            // console.log(result.humidity);
            
            Temp.innerHTML = result.temp;
            Feels_Like.textContent = result.feels_like + " °C";
            Max_temp.textContent = result.max_temp + " °C"; 
            Min_temp.textContent = result.min_temp + " °C";

            Cloud_PCT.textContent = result.cloud_pct + " %";
            Feels_Like2.textContent = result.feels_like;
            Humidity.innerHTML = result.humidity;
            Humidity2.textContent = result.humidity + " %";

            Wind_speed.textContent = result.wind_speed;
            Wind_degree.textContent = result.wind_degrees + '°';
            Sunrise.textContent = result.sunrise;
            Sunset.textContent = result.sunset;


            cityName.innerHTML = city;

        }
        else   // If the HTTP status code represents an error
        {
            alert('City "'+city+'" not found !  Please enter a valid city name.');
        }

    } catch (error) {
        // cityName.innerHTML = 'An error occurred while fetching the weather data.';
        console.error(error);
    }
}

submitt.addEventListener('click', () => {
    getWeather(inputt.value)  // ye input ki value ko getWeather function me pass karega    
})
// getWeather('london');
