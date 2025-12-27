// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementById("header");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Form Submission
// Form Submission - Redirect to WhatsApp
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "918488877692";
  const whatsappMessage = `Hello, I would like to contact you.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
  
  // Optional: You can still reset the form if you want
  // this.reset(); 
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Project cards animation on scroll
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

projectCards.forEach((card) => {
  observer.observe(card);
});

// Add typing effect to hero text
const heroTitle = document.querySelector(".hero h1");
const originalText = heroTitle.innerHTML;
heroTitle.innerHTML = "";

let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    heroTitle.innerHTML += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing effect after a short delay
// Start typing effect after a short delay
setTimeout(typeWriter, 500);

// Initialize AOS Animation
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Theme Toggle Logic
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});
