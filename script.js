document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for all anchor links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            if (this.getAttribute("href").startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Form submission handler
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});