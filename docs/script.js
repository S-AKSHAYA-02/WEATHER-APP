let long;
let lat;
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".temperature-timezone");
let setIcon = document.querySelector(".icon");
let maxTempurature = document.querySelector(".maxtemp");
let minTemperature = document.querySelector(".mintemp");
let windspeed = document.querySelector(".windspeed");
let weather = document.querySelector("#weather");

weather.addEventListener("click",expandtab);
function expandtab(){
    if(!weather.classList.contains('expand')){
        weather.classList.add('expand')
        setTimeout(()=>{
            weather.classList.remove('expand');
        },3000);
    }
    else{
        weather.classList.remove('expand');
    }
}
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition (async position =>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const data = await getWeatherdata(lat,long);
        var map = l.map('map').setview([20.9716,80.5946],5);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=OdpemAaV0raJvYO6cUSS', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }).addTo(map);






        var maker = l.marker([lat,long]).addto(map);
        marker.bindpopup(data.name).openpopup();


        map.on('click',async function(e){
            console.log("lat",lat,"-long",long);
            const data=await getWeatherdata(e.lating.lat, e.lating.lng);
            marker.setlatlng([e.lating.lat,e.lating.lng]);
            marker .bindpopup(data.name).openpopup();


        });
    })
}
    function weatherDataHandler(data){
        const {temp} = data.main;   
        const {description} = data.weather[0];  
        const {icon} = data.weather[0];  
        const {temp_max} = data.main;  
        const {temp_min} = data.mine;  
        const {speed} = data.wind;  


        temperatureDegree.textcontent = temp + '\xB0'+'c';
        temperatureDescription.textcontent.description=description;
        locationTimezone.textcontent=data.name;
        maxtemperature.textcontent='max:'+temp_max+'\xB0'+'c';
        mintemperature.textcontent='min:'+temp_min+'\xB0'+'c';
        windspeed.textcontent='windspeed'+speed+'m/s';
        section.style["background-image"]='ur1($(sectionfunction(icon)))';

    
    
    }

    async function getweatherdata(lat,long) {
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;
        let response = await fetch(api);
        let data = await response.json();

        weatherdatahandler(data);
        return data;
    }
    function setIconFunction(icon) {

        const icons = {
            "01d": "./animated/day.svg",
            "02d": "./animated/cloudy-day-1.svg",
            "03d": "./animated/cloudy-day-2.svg",
            "04d": "./animated/cloudy-day-3.svg",
            "09d": "./animated/rainy-1.svg",
            "10d": "./animated/rainy-2.svg",
            "11d": "./animated/rainy-3.svg",
            "13d": "./animated/snowy-6.svg",
            "50d": "./animated/mist.svg",
            "01n": "./animated/night.svg",
            "02n": "./animated/cloudy-night-1.svg",
            "03n": "./animated/cloudy-night-2.svg",
            "04n": "./animated/cloudy-night-3.svg",
            "09n": "./animated/rainy-1.svg",
            "10n": "./animated/rainy-2.svg",
            "11n": "./animated/rainy-3.svg",
            "13n": "./animated/mist.svg"
};


    }
