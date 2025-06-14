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

// Optional: Active link highlighting based on scroll position
// This can be more complex and might be added later if desired.
// For now, simple hover effects are in CSS.

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
