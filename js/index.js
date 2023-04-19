import { keys } from "./keys.js";

const openWeatherMap = keys.openWeatherMap;
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");
const submitButton = document.querySelector(".submit");
const weatherDeclaration = document.querySelector(".weather");

const getWeatherDescription = async (latitude, longitude) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${openWeatherMap}`
	);
	const weatherData = await response.json();
	const weatherDescription = await weatherData.current.weather[0].description;

	return weatherDescription;
};

submitButton.addEventListener("click", async () => {
	const longitude = longitudeInput.value;
	const latitude = latitudeInput.value;
	const weatherDescription = await getWeatherDescription(latitude, longitude);

	weatherDeclaration.textContent += ` ${weatherDescription}`;
});