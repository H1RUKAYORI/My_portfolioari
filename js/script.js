// ===== Navbar Mobile Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ===== Typing Effect =====
const typingElement = document.querySelector('.typing');
const texts = ['Frontend Developer', 'UI Enthusiast', 'Web Designer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start typing after page load
setTimeout(type, 1000);

// ===== Skill Progress Animation =====
const progressBars = document.querySelectorAll('.progress-bar');

function animateProgress() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// ===== Reveal on Scroll =====
const revealElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-wrapper');

revealElements.forEach(el => el.classList.add('reveal'));

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });

    // Animate progress bars when skills section is visible
    const skillsSection = document.querySelector('#skills');
    if (skillsSection.getBoundingClientRect().top < windowHeight - 100) {
        animateProgress();
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    // Simulasi pengiriman
    setTimeout(() => {
        btn.textContent = 'Terkirim! ✓';
        btn.style.background = '#22c55e';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// ===== Smooth Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
