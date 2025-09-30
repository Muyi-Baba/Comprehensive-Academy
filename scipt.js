document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  
    // Contact form
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for contacting Comprehensive Academy!");
      form.reset();
    });
  });
  