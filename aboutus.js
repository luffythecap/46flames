console.log("animations.js Loaded"); // Debugging

if (typeof gsap !== "undefined") {
    gsap.to("#animated-header", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.to("#about-section", { opacity: 1, duration: 0.8 });

    gsap.to("#about-text", { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power2.out", 
        delay: 0.2 
    });

    gsap.to("#main-image", { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "power2.out", 
        delay: 0.4 
    });

    gsap.to("#sub-content", { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out", 
        delay: 0.6 
    });

    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
} else {
    console.error("GSAP is not loaded!");
}

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Show only one card at a time
        spaceBetween: 30, // Add spacing
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, // Infinite loop
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay after user interaction
        },
    });
});
