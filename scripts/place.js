// FOOTER DETAILS
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WINDCHILL CALCULATION FUNCTION
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

// STATIC VALUES FROM HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const wcOutput = document.getElementById("windchill");

// APPLY CONDITIONS
if (temp <= 10 && wind > 4.8) {
    wcOutput.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
    wcOutput.textContent = "N/A";
}