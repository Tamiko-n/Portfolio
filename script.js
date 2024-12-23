function toggleTheme() {
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark');
}

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter effect
var typed = new Typed(".typewriter-text", {
    strings: ["DEVELOPER", "AI SCIENTIST", "FRONTEND SPECIALIST"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

function openWhatsApp() {
    window.open('https://wa.me/923188465567', '_blank');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'TAMIA NAEEM CV.pdf';
    link.download = 'TAMIA NAEEM CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress');
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
}

// Run animation when skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Save theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.className = savedTheme;
    }
});

// Update theme preference when toggled
const originalToggleTheme = toggleTheme;
toggleTheme = () => {
    originalToggleTheme();
    localStorage.setItem('theme', document.documentElement.className);
};

