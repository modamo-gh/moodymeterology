import { keys } from "./keys.js";
const openWeatherMap = keys.openWeatherMap;
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", () => {
	const longitude = longitudeInput.value;
	const latitude = latitudeInput.value;
	fetch(
		`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${openWeatherMap}`
	)
		.then((response) => response.json())
		.then((weatherData) => {
			weatherDeclaration.textContent +=
				weatherData.current.weather[0].description;
		});
});

let weatherDeclaration = document.querySelector(".weather");
