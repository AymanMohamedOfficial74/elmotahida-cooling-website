// ======================
// Scroll Animation
// ======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ======================
// Header scroll effect
// ======================
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

// ======================
// Smooth scroll
// ======================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ======================
// Active nav link on scroll
// ======================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.pageYOffset >= top) current = sec.getAttribute('id');
  });

  navLinks.forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`nav a[href="#${current}"]`);
  if (activeLink) activeLink.classList.add('active');
});

// ======================
// Particles.js
// ======================
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#00c2ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00c2ff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  },
  retina_detect: true
});
