// ===== Mobile menu toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Scroll animations =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .section-title, .about-text, .contact-content').forEach(el => {
    observer.observe(el);
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.style.color = '';
        if (item.getAttribute('href') === '#' + current) {
            item.style.color = 'var(--primary)';
        }
    });
});

// ===== Contact form =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Mailto fallback (works without backend)
    const subject = encodeURIComponent('Wiadomosc z portfolio od ' + name);
    const body = encodeURIComponent('Od: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:kacper200619@gmail.com?subject=' + subject + '&body=' + body;

    e.target.reset();
});

// ===== Navbar background on scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 26, 0.95)';
    }
});
