const events = [
  {
    name: "Summer Skate Jam",
    date: "2025-07-18",
    location: "Riverside Park",
  },
  {
    name: "Beginner Trick Clinic",
    date: "2025-06-03",
    location: "Downtown Plaza",
  },
  {
    name: "Night Ramp Session",
    date: "2025-08-12",
    location: "Skate Pulse Arena",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("events-list");

  events
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach(event => {
      const item = document.createElement("div");
      item.classList.add("event-card");

      item.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
      `;

      container.appendChild(item);
    });
});
