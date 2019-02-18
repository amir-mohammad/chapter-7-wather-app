let storage = new Storage();
let city = storage.getCityFromLS();

let weatherData = new Weather(city);
let ui = new UI();

document.addEventListener('DOMContentLoaded' , e =>{
    getWeather();
});
//add event to save change
document.querySelector('#save-change').addEventListener('click', changeCity);

function getWeather(){
    weatherData.getWeather()
    .then(data => {
        
        ui.setWeatherInfo(data);

    }).catch(err => console.log(err));
}




function changeCity(){
    let city = document.querySelector('#city').value;
    weatherData.chageCity(city);
    getWeather();
    $('#showModals').modal('hide');
    storage.setCityToLs(city);
  

}    


