// Get the current year for the copyright notice
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Format the last modified date
const formattedLastModifiedDate = lastModifiedDate.toLocaleString();

// Update the copyright year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Update the last modified date in the footer
document.getElementById("lastModified").textContent = `Last modified: ${formattedLastModifiedDate}`;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

// Add event listener to close hamburger menu when clicking outside
document.addEventListener('click', (e) => {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
  }
});

// Add event listener to close hamburger menu when resizing window
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
  }
});
