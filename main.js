$(function(){     
  var d = new Date(),        
      h = d.getHours(),
      m = d.getMinutes();
  if(h < 10) h = '0' + h; 
  if(m < 10) m = '0' + m; 
  $('input[type="time"][value="now"]').each(function(){ 
    $(this).attr({'value': h + ':' + m});
  });
});
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];

document.getElementById('date').innerHTML = months[month] + " " + day;
document.getElementById('year').innerHTML = year;

/*************************************************************************/
function fetchWeather(weatherData) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=95913b5528a0605b7b6f69b5b02b53f5&units=metric`)
        .then(function (response) {
            return response.json();
        })
        .then(function (WeatherData) {
  
        const weatherInfo = document.getElementById('weatherInfo');
        const weatherDescription = document.getElementById('weatherDescription');
 
        let description = WeatherData.weather[0].description;
        let temp = WeatherData.main.temp;
        let htmlBlock = "";
        let htmlBlock2 = ""; 
            htmlBlock += `
              <p> ${temp}°C</p>                  
            `;
            htmlBlock2 += `              
              <h2>${description}</h2>  
            `;
            weatherInfo.innerHTML = htmlBlock;
            weatherDescription.innerHTML = htmlBlock2;
       })

      .catch(function (error) {
                  console.log(error);
              })
      }fetchWeather();
