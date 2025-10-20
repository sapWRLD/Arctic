// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
        window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
        });
    }
});
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
});
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Auto-play testimonials carousel
const carousel = document.querySelector('#testimonialCarousel');
if (carousel) {
const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 4000,
    ride: 'carousel'
});
}

// Contact form demo
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('formAlert');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alertBox.textContent = "Please fill in all fields.";
        alertBox.className = "text-danger";
        return;
    }

    form.reset();
    alertBox.textContent = "Thanks! Your message has been sent (demo only).";
    alertBox.className = "text-success";
});
