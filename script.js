// AI Portfolio Website
console.log("Welcome to Afnan Alroaished Portfolio");

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card, .project-card, .section").forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "0.8s";
  observer.observe(item);
});
