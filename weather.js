
const API_KEY="6bc8791961c1d561525e083b23165e7f"

function onGeoOk(){
  const url= `https://api.openweathermap.org/data/2.5/weather?lat=37.5985&lon=126.9783&appid=${API_KEY}`
  fetch(url).then(response =>response.json()).then(data=>{
    const weatherContainer = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText=data.name;
    weather.innerText = data.weather[0].main;
  })
}

onGeoOk();
