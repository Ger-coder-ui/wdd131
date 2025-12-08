// shop.js

// Array of product objects — each WITH an image
const products = [
  {
    name: "StreetPro Complete Skateboard",
    price: 89.99,
    img: "images/skatedeluxe.jpg",
  },
  {
    name: "AeroGrip Pro Helmet",
    price: 49.99,
    img: "images/evo.jpg",
  },
  {
    name: "ShredX Premium Wheels (Set of 4)",
    price: 29.99,
    img: "images/Play-skateshop.jpg",
  },
  {
    name: "ImpactGuard Knee Pads",
    price: 24.99,
    img: "images/Artiskill.jpg",
  },
  {
    name: "Elite Bearings ABEC-9",
    price: 19.99,
    img: "images/DHgate.jpg",
  },
  {
    name: "CarbonFlex Deck",
    price: 119.99,
    img: "images/southside-skateshop.jpg",
  }
];

// Function to render product cards
function renderProducts() {
  const container = document.querySelector(".product-grid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.img}" 
           alt="${product.name}" 
           loading="lazy">
      
      <h3>${product.name}</h3>
      <p><strong>$${product.price.toFixed(2)}</strong></p>
      <button>Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", renderProducts);

