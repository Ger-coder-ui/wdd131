// Update footer copyright year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger menu toggle with accessibility
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isShown = navList.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', isShown);
});