document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileOverlay = document.getElementById("mobile-overlay");
    const mobileDropdownBtn = document.getElementById("mobile-dropdown-btn");
    const mobileDropdown = document.getElementById("mobile-dropdown");
    const mobileArrow = document.getElementById("mobile-arrow");
  
    // Open Mobile Menu
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      mobileOverlay.classList.remove("hidden");
    });
  
    // Close Mobile Menu
    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      mobileOverlay.classList.add("hidden");
    });
  
    // Close Menu When Clicking on Overlay
    mobileOverlay.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      mobileOverlay.classList.add("hidden");
    });
  
    // Toggle Dropdown in Mobile View with Arrow Rotation
    mobileDropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("hidden");
      mobileArrow.classList.toggle("rotate-180");
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Animate background blob movement
    const blob = document.getElementById("animatedBlob");
    let angle = 0;

    function moveBlob() {
        const x = Math.sin(angle) * 30;
        const y = Math.cos(angle) * 30;
        blob.style.transform = `translate(${x}px, ${y}px)`;
        angle += 0.03;
        requestAnimationFrame(moveBlob);
    }

    moveBlob();
});
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("video-container");
    const videos = document.querySelectorAll("#video-container video");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let index = 0;
    const totalVideos = videos.length;

    function updateCarousel() {
        const offset = -index * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    function nextVideo() {
        index = (index + 1) % totalVideos;
        updateCarousel();
    }

    function prevVideo() {
        index = (index - 1 + totalVideos) % totalVideos;
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextVideo);
    prevBtn.addEventListener("click", prevVideo);

    // Auto-scroll every 5 seconds
    setInterval(nextVideo, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".grid",
            start: "top 80%", // Start animation when the top of grid reaches 80% of viewport
            end: "bottom 60%",
            toggleActions: "play none none none" // Runs once
        }
    });

    console.log("GSAP ScrollTrigger initialized!"); // Check if script is running
});

gsap.registerPlugin(ScrollTrigger);
gsap.from("#textSection", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#textSection",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
gsap.from("#productImage", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#productImage",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Image Fade-in and Slide-up Animation
gsap.fromTo("#image", 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: "#image", start: "top 80%", end: "top 50%", scrub: true } }
);

// Text Content Fade-in and Slide-up Animation
gsap.fromTo("#text-content", 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: "#text-content", start: "top 80%", end: "top 50%", scrub: true } }
);

// Staggered Animation for List Items
gsap.utils.toArray(".feature-item").forEach((item, index) => {
    gsap.fromTo(item, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: index * 0.3, scrollTrigger: { trigger: item, start: "top 85%", end: "top 70%", scrub: true } }
    );
});

// Wait for the document to load
    document.addEventListener("DOMContentLoaded", () => {
        // GSAP ScrollTrigger Animation
        gsap.registerPlugin(ScrollTrigger);

        // Animate the section when it comes into view
        gsap.from("#whatWeDoSection", {
            opacity: 0, 
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: "#whatWeDoSection",  // The trigger element
                start: "top 80%",             // When the section's top reaches 80% of the viewport height
                end: "bottom 20%",            // When the section's bottom reaches 20% of the viewport height
                scrub: true,                  // Smooth scrubbing effect
                markers: false                // Hide the markers
            }
        });

        // Animate the headline
        gsap.from("#headline", {
            opacity: 0, 
            y: -30,
            duration: 1,
            scrollTrigger: {
                trigger: "#headline",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false // Hide the markers
            }
        });

        // Animate the description
        gsap.from("#description", {
            opacity: 0, 
            y: -30,
            duration: 1,
            delay: 0.2, // Delay animation to make it sequential
            scrollTrigger: {
                trigger: "#description",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false // Hide the markers
            }
        });

        // Animate the CTA button
        gsap.from("#ctaButton", {
            opacity: 0, 
            y: 50,
            duration: 1,
            delay: 0.4, // Delay animation to make it sequential
            scrollTrigger: {
                trigger: "#ctaButton",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false // Hide the markers
            }
        });
    });

    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownArrow = document.getElementById("dropdown-arrow");
  
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
      dropdownArrow.classList.toggle("rotate-180");
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
        dropdownArrow.classList.remove("rotate-180");
      }
    });
  