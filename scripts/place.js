// ===============================
// FOOTER YEAR & LAST MODIFIED
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===============================
// WIND CHILL FUNCTION
// ===============================
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

// ===============================
// WIND CHILL LOGIC
// ===============================
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
let windchillOutput = document.getElementById("windchill");

// VALID CONDITIONS
if (temp <= 10 && wind > 4.8) {
    windchillOutput.textContent = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
    windchillOutput.textContent = "N/A";
}