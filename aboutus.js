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

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let timelineTrack = document.querySelector(".timeline-track");
    let sections = gsap.utils.toArray(".timeline-item");

    gsap.to(timelineTrack, {
        x: () => -1.025 * (timelineTrack.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            pin: true,
            scrub: 1,
            end: () => "+=" + timelineTrack.scrollWidth,
            anticipatePin: 1
        }
    });

    // Disable vertical scroll when inside the timeline section
    let isInsideTimeline = false;

    document.addEventListener("wheel", function (event) {
        if (isInsideTimeline) {
            event.preventDefault();
        }
    }, { passive: false });

    document.querySelector(".horizontal-section").addEventListener("mouseenter", () => {
        isInsideTimeline = true;
    });

    document.querySelector(".horizontal-section").addEventListener("mouseleave", () => {
        isInsideTimeline = false;
    });
}); 

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll logic (same as before)
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Animation on scroll (triggered when section comes into view)
    function animateOnScroll() {
        const sections = document.querySelectorAll("[data-animate]");
        
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("animate__fadeInUp");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check on load
});
