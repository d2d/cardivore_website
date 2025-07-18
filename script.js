// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hrefAttribute = this.getAttribute('href');
        // Ensure it's not just a '#' link for non-scrolling purposes
        if (hrefAttribute.length > 1 && document.querySelector(hrefAttribute)) {
            e.preventDefault();
            document.querySelector(hrefAttribute).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamically set the current year in the footer
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Add scroll-based header background opacity
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.style.backgroundColor = 'rgba(47, 47, 47, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(47, 47, 47, 0.95)';
    }
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature items and gallery items
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-item, .gallery-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Mobile navigation toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
// Need to select both potential navs since IDs are different on index.html and privacy.html
const primaryNav = document.getElementById('primary-navigation') || document.getElementById('primary-navigation-privacy');

if (mobileNavToggle && primaryNav) {
    // Add spans for the hamburger icon lines if they are not in HTML
    // For this implementation, assuming spans are in HTML or CSS handles the visual icon.
    // If spans are not in HTML, create them:
    if (!mobileNavToggle.querySelector('span:not(.sr-only)')) {
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            mobileNavToggle.appendChild(span);
        }
    }

    mobileNavToggle.addEventListener('click', () => {
        const isVisible = primaryNav.getAttribute('data-visible') === "true";
        if (isVisible) {
            primaryNav.setAttribute('data-visible', 'false');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        } else {
            primaryNav.setAttribute('data-visible', 'true');
            mobileNavToggle.setAttribute('aria-expanded', 'true');
        }
    });

    // Optional: Close mobile menu when a link is clicked
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            const isVisible = primaryNav.getAttribute('data-visible') === "true";
            if (isVisible) {
                primaryNav.setAttribute('data-visible', 'false');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
