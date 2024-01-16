//add api key

const APIKey = "282d23d9ee6cec31d227223186c0b819";

const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${APIKey}`;

//fetch call
fetch(queryURL)
 .then(function(response){
    return response.json();
 })
 .then(function(data){
    console.log(data);
 })

//prompt for city
//var city;
//city = prompt("What city?")
//present current and future conditions for city
//present city name, date, icon representation, temperature, humidity, wind speed
// 5 day forecast for that city: The date, An icon representation of weather conditions, The temperature, The humidity
//save search history (cities)
//search history cities can be selected and present weather display