// get two input values of temperatue and wind speed
// check to make sure they meet the specification limits
// either calculate and display the wind chill factor value or display N/A

// function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(1) + "°F"; // Round to one decimal place
    } else {
        return "N/A"; // If conditions are not met
    }
}

// function that will update windchill on the page
function updateWindChill() {
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    let windChillValue = calculateWindChill(temp, windSpeed);
    
    document.getElementById("windChill").textContent = windChillValue;
}

document.addEventListener("DOMContentLoaded", updateWindChill);


