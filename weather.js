const API_KEY = "e3f85b6f7513c5be846a5685e3bb439b"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name + "";
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
        });

};
function onGeoError() {
    alert("Can't find you. No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);