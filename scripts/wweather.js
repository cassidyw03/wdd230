const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '16a94b964db35ab030e90067886290d9';
const lat = 40.467119353589325;
const lon = -104.89915688170088;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// url format: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// 40.467119353589325, -104.89915688170088

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  
    // Extract weather icon and description
    const iconCode = data.weather[0].icon;
    const description = data.weather[0].description;
  
    // Set icon source and description
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${iconCode}.png`);
    weatherIcon.setAttribute("alt", description);
    captionDesc.textContent = description;
  }
  
  apiFetch();

  