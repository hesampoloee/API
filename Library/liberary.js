// نیازی به add کردن در پروژه نیست
var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("send");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
const apiKey = "336f3ebdb6295d06e9b67312409b46c6";

async function GetWeather() {
  var weatherResult = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${cityInput.value}&appid=${apiKey}`)
  ).json();

  setInfo(weatherResult);
}

function setInfo(data) {
  var cityName = data["name"];
  var description = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
 

  cityOutput.innerHTML =`City : ${cityName}`;
  descOutput.innerHTML =`Description : ${description}` ;
  tempOutput.innerHTML =`Temprature : ${((temp)-(273)).toFixed(2)}`;//((temp)-(273)).toFixed(2)
  if(description=="clear sky"){
    document.body.style.background = "url('http://test.ionelcostel.eu/imgs/clear%20sky.jpg')";
    
    
    } else if(description=="few clouds"){
    
    document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/few%20clouds.jpg')";
    }else if(description=="scattered clouds"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/scattered%20clouds.jpg')";
    }else if(description=="broken clouds"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/broken%20clouds.jpg')";
    }else if(description=="shower rain"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/shower%20rain.jpg')";
    }else if(description=="rain"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/rain.jpg')";
    }else if(description=="thunderstorm"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/thunderstorm.jpg')";
    }else if(description=="snow"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/heavy%20snow.jpg')";
    }else if(description=="fog"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/fog.jpg')";
    }else if(description=="mist"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/mist.jpg')";
    }else if(description=="overcast clouds"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/overcast clouds.jpg')";
    }else if(description=="light intensity drizzle" || description=="light rain"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/light intensity drizzle.jpg')";
    }else if(description=="haze"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/haze.jpg')";
    }else if(description=="shower sleet"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/shower sleet.jpg')";
    }else if(description=="light snow"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/light snow.jpg')";
    }else if(description=="moderate rain"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/moderate rain.jpg')";
    }else if(description=="heavy snow"){
        document.body.style.backgroundImage = "url('http://test.ionelcostel.eu/imgs/heavy snow.jpg')";
    }
      
      
}

addInput.addEventListener("click", GetWeather);

  

    
    
    
    
    
