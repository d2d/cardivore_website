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

// Placeholder for mobile navigation toggle if a hamburger menu is added
// const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
// const primaryNav = document.querySelector('header nav ul');
// 
// if (mobileNavToggle && primaryNav) {
//     mobileNavToggle.addEventListener('click', () => {
//         primaryNav.hasAttribute('data-visible') 
//             ? mobileNavToggle.setAttribute('aria-expanded', false)
//             : mobileNavToggle.setAttribute('aria-expanded', true);
//         primaryNav.toggleAttribute('data-visible');
//     });
// }
