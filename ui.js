class UI{
    constructor(){
        this.locationW = document.querySelector('#w-location');
        this.condition = document.querySelector('#w-condition');
        this.icon = document.querySelector('#w-icon');
        this.temp = document.querySelector('#w-temp');
        this.humidity = document.querySelector('#w-humidity');
        this.visibility = document.querySelector('#w-visibility');
        this.feelsLike = document.querySelector('#w-feels-likes');
        this.wind = document.querySelector('#w-wind');
        this.textCity = document.querySelector('#city');
        this.saveLocationBTN = document.querySelector('#save-change');

    }

    setWeatherInfo(weatherData){
        this.locationW.textContent = `${weatherData.location.name} , ${weatherData.location.country}` ;
        this.condition.textContent = `${weatherData.current.condition.text}`;
        this.icon.setAttribute('src',`http:${weatherData.current.condition.icon}`);
        this.temp.textContent = `Temp: ${weatherData.current.temp_c}\u00b0C (${weatherData.current.temp_f}\u00b0F)`;
        this.humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
        this.visibility.textContent = `Visibility:  ${weatherData.current.vis_km} KM (${weatherData.current.vis_miles} MPH)`;
        this.feelsLike.textContent = `Feelslike: ${weatherData.current.feelslike_c}\u00b0C (${weatherData.current.feelslike_f}\u00b0 F)`;

        this.wind.textContent = `Wind: ${weatherData.current.wind_kph}KM (${weatherData.current.wind_mph} MPH)`;

    }

   
}