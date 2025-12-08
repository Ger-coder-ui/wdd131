// Footer year
function updateYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Newsletter subscription
function subscribeNewsletter(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const msgEl = document.getElementById("newsletter-msg");
  const email = emailInput.value.trim();

  if (!email) {
    msgEl.textContent = "Please enter a valid email.";
    msgEl.classList.remove("hidden");
    return;
  }

  let subs = JSON.parse(localStorage.getItem("subscribers")) || [];

  if (subs.includes(email)) {
    msgEl.textContent = `You are already subscribed with ${email}.`;
  } else {
    subs.push(email);
    localStorage.setItem("subscribers", JSON.stringify(subs));
    msgEl.textContent = `Thanks for subscribing, ${email}!`;
    emailInput.value = "";
  }

  msgEl.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  document
    .getElementById("newsletter-form")
    .addEventListener("submit", subscribeNewsletter);
});

