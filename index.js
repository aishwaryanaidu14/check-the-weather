
let searchBox=document.getElementById("search-box")
let searchButton=document.getElementById("search-button")
let maxTemp=document.getElementById("max-temp")
let minTemp=document.getElementById("min-temp")
let feelsLike=document.getElementById("feels-like")
let humidity=document.getElementById("humidity")
let windSpeed=document.getElementById("wind-speed")
let windDegrees=document.getElementById("wind-degrees")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15b78da2ddmsh2fac6bd90a593b2p17dc35jsn8d871b0dce2a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

searchButton.addEventListener("click", function(){
	console.log("clicked")
	getData()
})

async function getData() {
  console.log('calling');
  let str=searchBox.value
  var city = str
  //const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
  const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		maxTemp.textContent="Maximum temperature: "+result.max_temp;
		minTemp.textContent="Minimum temperature: "+result.min_temp;
		feelsLike.textContent="Feels like: "+result.feels_like;
		humidity.textContent="Humidity: "+result.humidity;
		windDegrees.textContent="Wind degrees: "+result.wind_degrees;
		windSpeed.textContent="Wind speed: "+result.wind_speed;

	} catch (error) {
		console.log("ummmm")
		console.error(error);
	}
	
}

