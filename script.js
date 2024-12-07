// Theme Switching
const themeToggle = document.querySelector('.theme-switch');
const body = document.documentElement;

// Check for saved theme preference, default to dark if none
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    // Save theme preference
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Magnetic Effect
const navLinks = document.querySelectorAll('.nav-magnetic a');

navLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        link.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = '';
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMagnetic = document.querySelector('.nav-magnetic');

mobileMenuBtn.addEventListener('click', () => {
    navMagnetic.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu-btn') && !e.target.closest('.nav-magnetic')) {
        navMagnetic.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMagnetic.classList.remove('active');
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add phone functionality
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('text-now')) {
            window.location.href = 'sms:07884012152';
        } else {
            window.location.href = 'tel:07884012152';
        }
    });
});
