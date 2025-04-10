const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const maxTemp = document.querySelector("#max-temp");
const humidity = document.querySelector("#humidity");



const apiKey = "16a94b964db35ab030e90067886290d9";
const lat = 20.424876424869062;
const lon = -86.928165658883;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        // Fetch current weather
        const weatherResponse = await fetch(url);
        if (!weatherResponse.ok) throw new Error(await weatherResponse.text());
        const weatherData = await weatherResponse.json();
        console.log("Current Weather Data:", weatherData);
        displayResults(weatherData);

        // Fetch 3-day forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error(await forecastResponse.text());
        const forecastData = await forecastResponse.json();
        // console.log("Forecast Data:", forecastData);
        displayForecast(forecastData);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    humidity.textContent = `${data.main.humidity}%`;

    const iconCode = data.weather[0].icon;
    const weatherDetails = data.weather.map(w => `${w.main} - ${w.description}`).join(", ");

    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${iconCode}.png`);
    weatherIcon.setAttribute("alt", weatherDetails);
    document.querySelector("#current-desc").textContent = weatherDetails;

    maxTemp.innerHTML = `${data.main.temp_max}&deg;F`;
}

function displayForecast(data) {
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = "";

    const forecastAtThree = data.list.find(forecast => forecast.dt_txt.includes("15:00:00"));

    if (forecastAtThree) {
        const temp = forecastAtThree.main.temp;
        const iconCode = forecastAtThree.weather[0].icon;
        const forecastDetails = forecastAtThree.weather.map(w => `${w.main} - ${w.description}`).join(", ");

        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item", "weather-box");

        forecastItem.innerHTML = `
        <p class="temp">${temp}&deg;F</p>
        <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${forecastDetails}" class="weather-icon">
        <figcaption>${forecastDetails}</figcaption>
        `;


        forecastContainer.appendChild(forecastItem);
    }
}


// Add event listener to close the banner when the "✕" is clicked
const closeBanner = document.querySelector("#close-banner");
const tempMaxBanner = document.querySelector(".temp-max-banner");

closeBanner.addEventListener("click", function() {
    tempMaxBanner.style.display = "none";  // Hide the banner
});

apiFetch();









  