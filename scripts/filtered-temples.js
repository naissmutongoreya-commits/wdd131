// ============================
// TEMPLE DATA ARRAY
// ============================

const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893",
    area: 382207,
    imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcSDM1ElfuoNlAUgfptPYE6hA5zQixvpCi5pnMn35lZbU5XvX80i"
  },
  {
    name: "Nauvoo Temple",
    location: "Nauvoo, Illinois",
    dedicated: "1846",
    area: 54000,
    imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcTknfAulay1A44zWs8-sK9-jWfuubR46WORPFgqT7xMiPO4Urcb"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44175,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/f5dd680f2ece2b9367e41f87372f728f4df98dc0/full/%21500%2C/0/default"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcSGKhM1eWiB6rh5_LMD0v-Oj8yi7hT5Hc9Tej8Q1SSo7Taiq2sj"
  },
  {
    name: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985",
    area: 19184,
    imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcQdn7W-5JlRdvmffJXfe2BxPjms7_FE0pE4N-yzAsMN-83OjZ7x"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 40000,
    imageUrl: "http://t0.gstatic.com/images?q=tbn:ANd9GcRKwzJypnAwINShwmg60IT_IsedarIt8JiWkdNhi1yVMXxRrqJJ"
  },
  
  // REQUIRED: 3 NEW TEMPLES ADDED BELOW
  {
    name: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023",
    area: 49575,
    imageUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcRgGBDhJxNJEwJMYvc5F5zG0STJxcvkOoGa9xMghuyIsON1f4Fs"
  },
  {
    name: "Abidjan Ivory Coast Temple",
    location: "Abidjan, Côte d’Ivoire",
    dedicated: "2024",
    area: 22500,
    imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcRl27o4a5eyAoGDC0tAO8xl_-8H4TRfJhbaYycgs3PexckTEasd"
  },
  {
    name: "Brasilia Brazil Temple",
    location: "Brasilia, Brazil",
    dedicated: "2023",
    area: 25000,
    imageUrl: "http://t0.gstatic.com/images?q=tbn:ANd9GcSPEKFcfOZlXY2jhqEeAh6VeJjdsKIgUQlWtttP0SOrIK_BY3Fh"
  }
];


// ============================
// DOM REFERENCES
// ============================

const gallery = document.querySelector(".gallery");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


// ============================
// TEMPLE CARD CREATOR
// ============================

function displayTemples(templeList) {
  gallery.innerHTML = ""; // Clear

  templeList.forEach((temple) => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img src="${temple.imageUrl}" loading="lazy" alt="${temple.name}">
      <figcaption>
        <h3>${temple.name}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    gallery.appendChild(card);
  });
}

// Display all on load
displayTemples(temples);


// ============================
// FILTER BUTTONS
// ============================

document.querySelector("nav").addEventListener("click", (event) => {
  const filter = event.target.textContent;

  if (filter === "Home") {
    displayTemples(temples);
  } 
  else if (filter === "Old") {
    displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
  }
  else if (filter === "New") {
    displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
  }
  else if (filter === "Large") {
    displayTemples(temples.filter(t => t.area > 90000));
  }
  else if (filter === "Small") {
    displayTemples(temples.filter(t => t.area < 10000));
  }
});


// ============================
// HAMBURGER TOGGLE
// ============================

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});


// ============================
// FOOTER DATE UPDATES
// ============================

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
