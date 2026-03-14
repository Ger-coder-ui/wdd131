document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("contact-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      msg.textContent = "Please complete all fields.";
      msg.classList.remove("hidden");
      return;
    }

    const entry = { name, email, message, date: new Date().toISOString() };

    let stored = JSON.parse(localStorage.getItem("messages")) || [];
    stored.push(entry);

    localStorage.setItem("messages", JSON.stringify(stored));

    msg.textContent = `Thanks for your message, ${name}! We'll get back to you soon.`;
    msg.classList.remove("hidden");

    form.reset();
  });
});
