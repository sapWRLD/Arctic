AOS.init({ duration: 800, once: true });

// Example GSAP animation for hero
window.addEventListener("load", () => {
    gsap.from(".hero h1", { y: 40, opacity: 0, duration: 1 });
    gsap.from(".hero p", { y: 30, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from(".btn-primary", { y: 20, opacity: 0, duration: 1, delay: 0.6 });
});
