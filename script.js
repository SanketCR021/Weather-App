// alert("Chal gai bhai");

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

submitt.addEventListener('click', (event) => {
    event.preventDefault();   // ye page ko reload hone se rokega
    getWeather(inputt.value)  // ye input ki value ko getWeather function me pass karega    
})
// getWeather('london');

async function getWeather2(city) {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);

        

            const result = await response.json();
            // console.log(result);
            // console.log(result.humidity);
            
            return result;  // ye return karega result ko 
            
    } catch (error) {
        console.error(error);
    }
}


async function generator(city){
   
        let newCity = await getWeather2(city);
        
        // console.log(newCity);

        let cityTds = document.querySelectorAll('.'+city+'City' + ' td'); 
        // console.log(cityTds);
        cityTds[0].textContent = newCity.temp + ' °C'; // Replace 'temp' with the actual property name
        cityTds[1].textContent = newCity.feels_like + ' °C';
        cityTds[2].textContent = newCity.max_temp + ' °C';
        cityTds[3].textContent = newCity.min_temp  + ' °C';
        cityTds[4].textContent = newCity.humidity + ' %';
        cityTds[5].textContent = newCity.wind_speed + ' Km/Hr';

    // we can use IIFE to make the code more efficient and faster loading
}

generator('london');
generator('nagpur');
generator('mumbai');
generator('tokyo');
generator('gotham');

