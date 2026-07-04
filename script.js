/*
  Small interactions for the resume site.
  This file is optional for GitHub Pages and does not need any API keys or build tools.
*/

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const downloadButton = document.querySelector("#download-resume");
const year = document.querySelector("#year");
const serviceWorkerPath = "./sw.js";

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  const closeNav = () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      closeNav();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    window.print();
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(serviceWorkerPath).catch(() => {});
  });
}
