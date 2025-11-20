// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Weather values
const temperature = 25; 
const windSpeed = 5;
const unitSystem = "imperial";

// Wind chill formula
function calculateWindChill(temp, windSpeed, unitSystem) {
    if (unitSystem === "imperial") {
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        );
    } else {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        );
    }
}

// Display wind chill
function displayWindChill() {
    const windChillElement = document.getElementById("wind-chill");

    if (unitSystem === "imperial") {
        if (temperature <= 50 && windSpeed > 3) {
            windChillElement.textContent =
                calculateWindChill(temperature, windSpeed, "imperial").toFixed(2) +
                "°F";
        } else {
            windChillElement.textContent = "N/A";
        }
    } else {
        if (temperature <= 10 && windSpeed > 4.8) {
            windChillElement.textContent =
                calculateWindChill(temperature, windSpeed, "metric").toFixed(2) +
                "°C";
        } else {
            windChillElement.textContent = "N/A";
        }
    }
}

displayWindChill();
