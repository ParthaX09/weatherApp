const request = require('request');

const openWeatherMap = {
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: ""
}


const weatherData = function(address, callback){
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + "&APPID=" + openWeatherMap.SECRET_KEY;
    console.log(url);

    request({url, json: true}, function(error, data){
        if(error){
            callback(true, "unable to fetch data, pls try again", error);
        }
        callback(false, data?.body);
    })
}


module.exports = weatherData;
