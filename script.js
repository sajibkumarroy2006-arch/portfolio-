// AOS Animation Library Init
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Typing Effect Code (আপনার নতুন স্কিলগুলোর টাইপিং থিম)
const typingText = document.querySelector(".typing-text");
const roles = ["Full Stack Developer.", "Python & PHP Expert.", "Tailwind CSS Designer.", "Java Developer."];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 150;
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}

// Animated Progress Bars & Counters
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');

    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const targetPercent = bar.getAttribute('data-percent');

            bar.style.width = targetPercent + '%';

            const percentText = bar.parentElement.querySelector('.skill-percent-text');
            let currentCount = 0;
            const duration = 2000;
            const stepTime = Math.floor(duration / targetPercent);

            const counterInterval = setInterval(() => {
                currentCount++;
                percentText.textContent = currentCount + '%';
                if (currentCount >= targetPercent) {
                    clearInterval(counterInterval);
                }
            }, stepTime);
        }
    });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
    animateProgressBars();
});
// =======================================================
// SCROLL TO TOP BUTTON LOGIC
// =======================================================
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    // ইউজার যদি পেজের উপর থেকে ৩০০ পিক্সেলের বেশি নিচে স্ক্রোল করে
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
        scrollToTopBtn.style.transform = "translateY(0)"; // নিজের জায়গায় চলে আসবে
    } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
        scrollToTopBtn.style.transform = "translateY(20px)"; // আবার নিচে লুকিয়ে যাবে
    }
});

// বাটনে ক্লিক করলে স্মুথলি উপরে যাওয়ার ইভেন্ট
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // মসৃণভাবে স্ক্রোল হবে
    });
});

// =======================================================
// MOBILE HAMBURGER MENU LOGIC
// =======================================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("open"); // বাটন ক্রস (X) হবে
    navLinks.classList.toggle("active");    // মেনু স্লাইড করে আসবে
});

// কোনো লিংকে ক্লিক করলে যেন মোবাইল মেনু অটোমেটিক বন্ধ হয়ে যায়
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("open");
        navLinks.classList.remove("active");
    });
});
