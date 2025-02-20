// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store the form data in localStorage
    const formData = { name, email, message };
    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Your message has been received!');
}

// Function to dynamically load images with lazy loading
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazyload');
    
    // Use Intersection Observer to load images when they come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});
