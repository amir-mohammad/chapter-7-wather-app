class Weather{
    constructor(city){
        this.apiKey = '7bfd7a3b64024e779da03945191601';
        this.city = city;
    }

    async getWeather(){
        let responseWeather = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        let weatherData = await responseWeather.json();

        return weatherData;
    }

    chageCity(city){
        this.city = city;
    }
}