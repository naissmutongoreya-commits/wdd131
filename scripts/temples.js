// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// =========================
// FOOTER DATES
// =========================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// =========================
// TEMPLE DATA
// =========================
const temples = [
  {
    name: "Abidjan Ivory Coast Temple",
    location: "Abidjan, Ivory Coast",
    dedicated: "2021",
    area: 22600,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1.jpg"
  },
  {
    name: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023",
    area: 44892,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-1.jpg"
  },
  {
    name: "Frankfurt Germany Temple",
    location: "Frankfurt, Germany",
    dedicated: "1987",
    area: 28490,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-3.jpg"
  },
  
  // ======================
  // YOUR EXTRA 3 TEMPLES
  // ======================

  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893",
    area: 382207,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1.jpg"
  },
  {
    name: "Pittsburgh Pennsylvania Temple",
    location: "Pennsylvania, USA",
    dedicated: "2023",
    area: 18600,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/pittsburgh-pennsylvania-temple/pittsburgh-pennsylvania-temple-1.jpg"
  },
  {
    name: "Fukuoka Japan Temple",
    location: "Fukuoka, Japan",
    dedicated: "2000",
    area: 10700,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/fukuoka-japan-temple/fukuoka-japan-temple-3.jpg"
  }
];

// =========================
// FUNCTION: DISPLAY TEMPLES
// =========================
const container = document.getElementById("temple-container");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img src="${t.image}" alt="${t.name}" loading="lazy">
      <figcaption>
        <strong>${t.name}</strong><br>
        ${t.location}<br>
        Dedicated: ${t.dedicated}<br>
        Area: ${t.area.toLocaleString()} sq ft
      </figcaption>
    `;

    container.appendChild(card);
  });
}

// Show all on load
displayTemples(temples);

// =========================
// FILTERING
// =========================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const filter = e.target.dataset.filter;

    let filteredList = temples;

    if (filter === "old") {
      filteredList = temples.filter(t => Number(t.dedicated) < 1900);
    } 
    else if (filter === "new") {
      filteredList = temples.filter(t => Number(t.dedicated) > 2000);
    }
    else if (filter === "large") {
      filteredList = temples.filter(t => t.area > 90000);
    }
    else if (filter === "small") {
      filteredList = temples.filter(t => t.area < 10000);
    }

    displayTemples(filteredList);
  });
});
