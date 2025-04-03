const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const maxTemp = document.querySelector("#max-temp");

const apiKey = "16a94b964db35ab030e90067886290d9";
const lat = 20.424876424869062;
const lon = -86.928165658883;

// Cozumel
// 20.424876424869062, -86.928165658883

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
        console.log("Forecast Data:", forecastData);
        displayForecast(forecastData);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconCode = data.weather[0].icon;
    const description = data.weather[0].description;

    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${iconCode}.png`);
    weatherIcon.setAttribute("alt", description);
    captionDesc.textContent = description;

    maxTemp.innerHTML = `${data.main.temp_max}&deg;F`;
}

function displayForecast(data) {
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = "";

    const dailyForecasts = data.list.filter(forecast => forecast.dt_txt.includes("15:00:00"));

    for (let i = 0; i < 1;) {
        const dayData = dailyForecasts[i];
        const temp = dayData.main.temp;
        const iconCode = dayData.weather[0].icon;
        const description = dayData.weather[0].description;

        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");

        forecastItem.innerHTML = `
            <p>Day ${i + 1}: ${temp}&deg;F</p>
            <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${description}">
            <p>${description}</p>
        `;

        forecastContainer.appendChild(forecastItem);
    }
}

apiFetch();





  