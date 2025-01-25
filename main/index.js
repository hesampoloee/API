/*

CopyRight (C) by hesam poloee
email = hesamprogramd@gmail.com
API doc = https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={your_api_key}
API key = 6a45c011b43a436097c68d83d08962ab

*/

// input
const cityInput = document.getElementById("input-name");
const addInput = document.getElementById("send");
const cityOutput = document.getElementById("name-city");
const descOutput = document.getElementById("discription");
const tempOutput = document.getElementById("temp");
const countryOutput = document.getElementById("country");
// key
const apiKey = "6a45c011b43a436097c68d83d08962ab";

// fun
async function GetWeather() {
  var result = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`
    )
  ).json();

  setInfo(result);
}

function setInfo(data) {
  var cityName = data["name"];
  var discription = data["weather"][0]["description"];
  var temp = data["main"]["temp"];
  var country = data["sys"]["country"];

  cityOutput.innerHTML = `cityName : ${cityName}`;
  descOutput.innerHTML = `description : ${discription}`;
  tempOutput.innerHTML = `temp : ${(temp - 273.16).toFixed(1) + "°С"}`;
  countryOutput.innerHTML = `country : ${country}`;

  if (discription == "clear sky") {
    document.body.style.background =
      "url('http://test.ionelcostel.eu/imgs/clear%20sky.jpg')";
  } else if (discription == "few clouds") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/few%20clouds.jpg')";
  } else if (discription == "scattered clouds") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/scattered%20clouds.jpg')";
  } else if (discription == "broken clouds") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/broken%20clouds.jpg')";
  } else if (discription == "shower rain") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/shower%20rain.jpg')";
  } else if (discription == "rain") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/rain.jpg')";
  } else if (discription == "light rain") {
    document.body.style.backgroundImage =
      "url('https://www.kibrispostasi.com/imagecache/newsimage_webp/news/v/v2/v2yamur_1728967273.jpg')";
  } else if (discription == "thunderstorm") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/thunderstorm.jpg')";
  } else if (discription == "snow") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/heavy%20snow.jpg')";
  } else if (discription == "fog") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/fog.jpg')";
  } else if (discription == "mist") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/mist.jpg')";
  } else if (discription == "overcast clouds") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/overcast clouds.jpg')";
  } else if (
    discription == "light intensity drizzle" ||
    description == "light rain"
  ) {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/light intensity drizzle.jpg')";
  } else if (discription == "haze") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/haze.jpg')";
  } else if (discription == "shower sleet") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/shower sleet.jpg')";
  } else if (discription == "light snow") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/light snow.jpg')";
  } else if (discription == "moderate rain") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/moderate rain.jpg')";
  } else if (discription == "heavy snow") {
    document.body.style.backgroundImage =
      "url('http://test.ionelcostel.eu/imgs/heavy snow.jpg')";
  }
}

addInput.addEventListener("click", GetWeather);
