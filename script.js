const apikey = "c3c02ddb755191d4b2a2b4c71a05ef45"

const cityinput = document.getElementById("city-input")
const searchbtn = document.getElementById("search")

const temperature = document.getElementById("temperature")
const cityname = document.getElementById("cityname")
const description = document.getElementById("description")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const weathericon = document.getElementById("weather-icon")

/*function for get weather data*/

async function getWeather(city) {
    
    //API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    try{

        //API request bhejna
        const response = await fetch(url)

        //convert responce to json
        const data = await response.json()

        //if city is invalid
        if(data.cod==='404'){
            alert("city not found")
            return;
        }

        //to show data on HTML
        temperature.innerText = data.main.temp + "°C"
        cityname.innerText = data.name
        description.innerText = data.weather[0].main
        humidity.innerText = data.main.humidity + "%"
        wind.innerText = data.wind.speed + "m/s"

        
//to change weather icon
const weatherMain = data.weather[0].main

switch(weatherMain){

case "Clouds":
weathericon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
break

case "Clear":
weathericon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"
break

case "Rain":
weathericon.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
break

case "Snow":
weathericon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png"
break

case "Mist":
case "Haze":
case "Smoke":
case "Fog":
weathericon.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png"
break

case "Dust":
case "Sand":
case "Ash":
weathericon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png"
break

default:
weathericon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
}

    }

    catch(error){
        console.log("Error:",error)
    }
    
}

//weather search on button click
searchbtn.addEventListener("click", function(){

    const city = cityinput.value

    if(city===""){
        alert("please enter city name")
        return
    }

    getWeather(city)
})

//enter key for search

cityinput.addEventListener("keypress",function(e){
if(e.key==="Enter"){
    getWeather(cityinput.value)
}
})