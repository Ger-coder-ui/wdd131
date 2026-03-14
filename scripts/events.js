// Combined events array with images
const events = [
  {
    name: "Summer Skate Jam",
    date: "2026-03-18",
    location: "Riverside Park",
    img: "images/Red-bull.jpg"
  },
  {
    name: "Beginner Trick Clinic",
    date: "2026-01-06",
    location: "Downtown Plaza",
    img: "images/Tactics.jpg"
  },
  {
    name: "Night Ramp Session",
    date: "2025-12-12",
    location: "Skate Pulse Arena",
    img: "images/Dreamtime.com.jpg"
  },
  {
    name: "Pro Skateboard Demo",
    date: "2025-07-05",
    location: "Riverside Skate Arena",
    img: "images/skateboard-sprint.jpg"
  }
];

// Function to render events sorted by date
function renderEvents() {
  const container = document.getElementById("events-list");

  // Clear existing content
  container.innerHTML = "";

  // Sort events by date ascending
  events
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach(event => {
      const card = document.createElement("div");
      card.classList.add("event-card");

      card.innerHTML = `
        <img src="${event.img}" alt="${event.name}" loading="lazy">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <button>RSVP</button>
      `;

      container.appendChild(card);
    });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", renderEvents);
