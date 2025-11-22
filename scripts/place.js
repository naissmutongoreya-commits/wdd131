// ======================================
// FOOTER YEAR & LAST MODIFIED
// ======================================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ======================================
// WIND CHILL FUNCTION
// ======================================
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

// ======================================
// STATIC WEATHER VALUES
// ======================================
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windchill = document.getElementById("windchill");

// ======================================
// VALIDATION & CALCULATION
// ======================================
if (temp <= 10 && wind > 4.8) {
    const wc = calculateWindChill(temp, wind);
    windchill.textContent = wc.toFixed(1) + " °C";
} else {
    windchill.textContent = "N/A";
}
