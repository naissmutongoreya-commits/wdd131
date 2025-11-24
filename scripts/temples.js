
// temples.js
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


hamburger.addEventListener("click", () => {
navMenu.classList.toggle("open");
});


// Dynamic Year in Footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();


// Last Modified Date
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;