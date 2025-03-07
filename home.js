//Nav-Bar 

document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const hamburgerBtn = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.querySelector('.close-menu');

    // Debug check - add this temporarily to verify elements are found
    console.log('Hamburger:', hamburgerBtn);
    console.log('Mobile Menu:', mobileMenu);
    console.log('Close Button:', closeMenuBtn);

    // Hamburger click event
    hamburgerBtn.addEventListener('click', () => {
        console.log('Hamburger clicked'); // Debug log
        mobileMenu.classList.toggle('active');
    });

    // Close button click event
    closeMenuBtn.addEventListener('click', () => {
        console.log('Close button clicked'); // Debug log
        mobileMenu.classList.remove('active');
    });

    // Mobile dropdowns
    const dropdownTriggers = document.querySelectorAll('.mobile-nav-item');
    dropdownTriggers.forEach(trigger => {
        if (trigger.nextElementSibling?.classList.contains('mobile-dropdown')) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                trigger.nextElementSibling.classList.toggle('active');
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});

//Hero carousel

document.addEventListener('DOMContentLoaded', function() {
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