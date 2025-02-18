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
    let horizontalSection = document.querySelector(".horizontal-section");
    let isInsideTimeline = false;

    // Apply GPU optimization
    timelineTrack.style.willChange = "transform";
    timelineTrack.style.transform = "translate3d(0, 0, 0)";

    gsap.to(timelineTrack, {
        x: () => -1.025 * (timelineTrack.scrollWidth - window.innerWidth), 
        ease: "power1.out", // Slower easing
        duration: window.innerWidth < 768 ? 4 : 2, // Slow animation on phone
        scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            pin: true,
            scrub: window.innerWidth < 768 ? 1.5 : 0.3, // Slower scrub on mobile
            end: () => "+=" + (timelineTrack.scrollWidth - window.innerWidth),
            anticipatePin: 1,
            invalidateOnRefresh: true, // Ensures smooth recalculations on resize
        }
    });

    // Prevent unnecessary scroll event listeners
    function preventScroll(event) {
        if (isInsideTimeline) {
            event.preventDefault();
        }
    }

    horizontalSection.addEventListener("mouseenter", () => isInsideTimeline = true);
    horizontalSection.addEventListener("mouseleave", () => isInsideTimeline = false);

    // Optimize event listeners for mobile only
    if (window.innerWidth < 768) {
        document.addEventListener("wheel", preventScroll, { passive: false });
        document.addEventListener("touchmove", preventScroll, { passive: false });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 640) { // Apply only in phone view
        let scrollSpeed = 1.5; // Slightly slower than normal scrolling
        let isScrolling = false;
        
        // Prevent default scrolling behavior temporarily for smoother scroll
        document.body.style.overflow = "hidden";
        
        window.addEventListener("wheel", (e) => {
            e.preventDefault(); // Prevent the default scroll
            if (!isScrolling) {
                isScrolling = true;
                let scrollDelta = e.deltaY * scrollSpeed;
                smoothScrollTo(scrollDelta);
            }
        }, { passive: false });

        let touchStartY = 0;

        window.addEventListener("touchstart", (e) => {
            touchStartY = e.touches[0].clientY;
        });

        window.addEventListener("touchmove", (e) => {
            e.preventDefault();
            let touchEndY = e.touches[0].clientY;
            let deltaY = touchStartY - touchEndY;
            smoothScrollTo(deltaY * scrollSpeed);
        }, { passive: false });

        function smoothScrollTo(deltaY) {
            let currentY = window.scrollY;
            let targetY = currentY + deltaY;
            
            // Using smooth scroll behavior with a slight speed modification
            window.scrollTo({
                top: targetY,
                behavior: "smooth"
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Split text into individual letters
    const text = document.getElementById("thank-you-text");
    const textContent = text.textContent;
    text.textContent = ''; // Empty the text content

    // Create individual span for each letter
    Array.from(textContent).forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        text.appendChild(span);
    });

    // Animate letters using GSAP and ScrollTrigger
    gsap.from("#thank-you-text span", {
        scrollTrigger: {
            trigger: "#thank-you-text",
            start: "top 80%", // Animation starts when the text is 80% visible in the viewport
            end: "bottom 20%", // Animation ends when the text is at the bottom of the viewport
            scrub: true, // Scroll-based animation
            markers: false // Hide markers, set to true for debugging
        },
        opacity: 0,
        y: 30,
        stagger: 0.05, // Stagger the animation by 0.05 seconds for each letter
        ease: "power4.out" // Easing for smooth animation
    });
});
