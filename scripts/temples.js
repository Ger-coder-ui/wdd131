document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});
