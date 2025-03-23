document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const productsToggle = document.getElementById('products-toggle');
    const productsDropdown = document.getElementById('products-dropdown');
    const productsArrow = document.getElementById('products-arrow');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Event listeners
    mobileToggle.addEventListener('click', toggleMobileMenu);
    mobileClose.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', toggleMobileMenu);
    
    // Handle mobile products dropdown
    productsToggle.addEventListener('click', function() {
        productsDropdown.classList.toggle('active');
        productsArrow.classList.toggle('active');
    });
    
    // Scroll effect for header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

//Hero carousel

document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create scroll-based timeline for the hero section
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    heroTl.to(".video-container", {
        scale: 1.1,
        opacity: 0.5,
        duration: 1
    });

    // Parallax effect for sections
    gsap.utils.toArray('.section').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                scrub: 1
            },
            y: 50,
            opacity: 0.8
        });
    });

    // Enhanced card animations with stagger and scroll
    const cardTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".card-grid",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.5
        }
    });

    cardTl.from(".card", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: {
            amount: 0.8,
            from: "start"
        }
    });

    // Keep your existing animations but update their scroll behavior
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1
    });

    // Flex Container Items Animation
    gsap.utils.toArray('.flex-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Cards Animation
    gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });

    // Section Headers Animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });

    // Keep your existing scroll indicator code
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', function() {
        const whoWeAreSection = document.getElementById('who-we-are-section');
        whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
    });
});

//About Us

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
    // Add animation to cards when they come into view
    const cards = document.querySelectorAll(".card")
  
    // Simple intersection observer to add animation when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
  
    // Initially set cards to be slightly below their position and transparent
    cards.forEach((card) => {
      card.style.opacity = 0
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      observer.observe(card)
    })
  
    // Add click event to CTA button
    const ctaButton = document.querySelector(".cta-button")
    if (ctaButton) {
      ctaButton.addEventListener("click", () => {
        // Replace with actual contact form functionality or redirect
        alert("Contact form will open here. Replace this with your actual contact functionality.")
      })
    }
  })
