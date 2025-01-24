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
