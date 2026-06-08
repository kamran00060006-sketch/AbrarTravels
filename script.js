// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  // ── Mobile Menu Toggle ──────────────────────────────────────────────────
  // FIX #7: Toggle now works correctly because CSS hides nav on mobile by default
  const navToggle = document.createElement("button");
  navToggle.innerText = "☰";
  navToggle.classList.add("nav-toggle");
  navToggle.setAttribute("aria-label", "Toggle navigation menu");
  document.querySelector("header").appendChild(navToggle);

  navToggle.addEventListener("click", () => {
    const navUl = document.querySelector("nav ul");
    navUl.classList.toggle("show");
    navToggle.innerText = navUl.classList.contains("show") ? "✕" : "☰";
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("nav ul").classList.remove("show");
      navToggle.innerText = "☰";
    });
  });

  // ── Smooth Scroll for anchor links ─────────────────────────────────────
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ── Contact Form Handling ───────────────────────────────────────────────
  // FIX #8: Added proper form submit handling with validation feedback
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.className = "form-status error";
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.className = "form-status error";
        return;
      }

      // Simulate successful submission (replace with real API/email service call)
      formStatus.textContent = "Thank you! Your message has been sent. We'll get back to you shortly.";
      formStatus.className = "form-status success";
      form.reset();
    });
  }

  // ── Destination Slider ──────────────────────────────────────────────────
  // FIX #9: Kept slider logic but guarded safely; no .slider element in HTML yet
  // To use: add <div class="slider"> with <div class="slide"> children in index.html
  const slider = document.querySelector(".slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.style.display = idx === i ? "block" : "none";
      });
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    if (slides.length > 0) {
      showSlide(index);
      setInterval(nextSlide, 4000);
    }
  }

});
