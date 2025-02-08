// Get current year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

// Calculate wind chill
const temperature = parseInt(document.getElementById("temperature").textContent);
const windSpeed = parseInt(document.getElementById("wind-speed").textContent);

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("wind-chill").textContent = windChill;
