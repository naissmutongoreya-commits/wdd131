// copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

// last modified
document.querySelector("#last-modified").textContent = document.lastModified;

// hamburger toggle
const hamBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamBtn.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    hamBtn.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    hamBtn.textContent = "✖";
  }
});
