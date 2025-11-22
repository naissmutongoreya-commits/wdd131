
// FOOTER YEAR + LAST MODIFIED
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ---------------------------------------
// WIND CHILL FUNCTION (single return line)
// ---------------------------------------
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

// STATIC VALUES MATCHING HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const wcElement = document.getElementById("windchill");

// Check if conditions allow wind chill calculation
if (temp <= 10 && wind > 4.8) {
    wcElement.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
    wcElement.textContent = "N/A";
}