
const longitude = document.querySelector("#longitude");
const latitude = document.querySelector("#latitude");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", () => {
    console.log(longitude.value, latitude.value);
})