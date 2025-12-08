const products = [
  {
    name: "Street Pro Deck",
    price: 79.99,
    img: "images/deck1.jpg"
  },
  {
    name: "Cruiser Board",
    price: 99.99,
    img: "images/deck2.jpg"
  },
  {
    name: "Skate Helmet",
    price: 49.99,
    img: "images/helmet.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
    `;

    grid.appendChild(card);
  });
});
