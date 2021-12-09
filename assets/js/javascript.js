const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

const API_KEY = '69322b69a9437c122f85943045731e63';

setInterval(() => {
    const time = new Date();
    //const hour = time.getHours();
    //const minute = time.getMinutes();
    const day = time.getDay();
    const month = time.getMonth();
    const year = time.getFullYear();
    const date = time.getDate();

    const hourMinute = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    timeElement.innerHTML = hourMinute;
    dateElement.innerHTML =  days[day] +' '+ date +" "+ months[month]+" " + year;

});

getWeatherData();
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) =>{
        console.log(success);
        let {latitude, longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`).then(res => res.json()).then(data => {
            console.log(data);
        }) 

    })
}
