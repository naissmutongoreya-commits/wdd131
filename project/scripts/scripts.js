// ---------- DESTINATIONS PAGE DYNAMIC CONTENT ----------

// Object + Array + Array Methods + Template Literals
const destinations = [
  {
    name: "Victoria Falls",
    description: "One of the Seven Natural Wonders of the World.",
    image: "images/victoriafalls.jpg"
  },
  {
    name: "Great Zimbabwe",
    description: "Ancient stone city and UNESCO World Heritage Site.",
    image: "images/greatzimbabwe.jpg"
  },
  {
    name: "Matobo Hills",
    description: "Granite rock formations and spiritual shrines.",
    image: "images/matobo.jpg"
  }
];

const destinationContainer = document.getElementById("destinationList");

if (destinationContainer) {
  destinations.forEach(place => {
    destinationContainer.innerHTML += `
      <div class="destination-card">
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      </div>
    `;
  });
}



// ---------- CONTACT FORM HANDLING + LOCAL STORAGE ----------
const form = document.getElementById("contactForm");
const savedMessage = document.getElementById("savedMessage");

// Conditional logic + events + DOM modification + localStorage
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const topic = document.getElementById("topic").value;

    if (topic === "") {
      alert("Please select an interest topic.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("visitorName", name);

    savedMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    form.reset();
  });
}