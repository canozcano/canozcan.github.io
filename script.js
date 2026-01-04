// Terminal typing animation
const typingTexts = [
    'whoami',
    'cat about.txt',
    'ls -la projects/',
    'git status'
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');
const outputElement = document.getElementById('terminal-output');

function typeText() {
    const currentText = typingTexts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex <= currentText.length) {
        typingElement.textContent = currentText.substring(0, currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, 100);
    } else if (isDeleting && currentCharIndex >= 0) {
        typingElement.textContent = currentText.substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(typeText, 50);
    } else if (!isDeleting && currentCharIndex > currentText.length) {
        isDeleting = true;
        setTimeout(() => {
            showOutput(currentText);
        }, 1000);
        setTimeout(typeText, 2000);
    } else if (isDeleting && currentCharIndex < 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
        setTimeout(typeText, 500);
    }
}

function showOutput(command) {
    let output = '';
    switch(command) {
        case 'whoami':
            output = 'Can Özcan<br>Lead Programmer & Software Consultant<br>Ankara, Türkiye';
            break;
        case 'cat about.txt':
            output = 'Passionate developer with expertise in Python, Vue.js, and AI/ML.<br>Currently working at NCU Global Teknolojiler as Lead Programmer.';
            break;
        case 'ls -la projects/':
            output = 'drwxr-xr-x  robotics-integration/<br>drwxr-xr-x  defense-software/<br>drwxr-xr-x  web-applications/<br>drwxr-xr-x  ai-ml-projects/';
            break;
        case 'git status':
            output = 'On branch main<br>Your branch is up to date with origin/main.<br>nothing to commit, working tree clean';
            break;
    }
    
    outputElement.innerHTML = `<div class="output-line">${output}</div>`;
    setTimeout(() => {
        outputElement.innerHTML = '';
    }, 3000);
}

// Start typing animation when page loads
if (typingElement) {
    setTimeout(() => {
        typeText();
    }, 1000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe certificate items
document.querySelectorAll('.certificate-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe education items
document.querySelectorAll('.education-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Observe AI cards
document.querySelectorAll('.ai-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// LinkedIn embed script otomatik olarak blockquote.linkedin-post elementlerini işler
// Ekstra JavaScript kodu gerekmez - LinkedIn'in kendi script'i hallediyor
