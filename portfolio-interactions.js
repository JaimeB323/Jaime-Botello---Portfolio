/*
  Restrained shared motion for the portfolio.
  Adds reveal behavior, lightbox support for selected images, and mobile-safe nav handling.
*/

(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealSelectors = [
    ".section",
    ".case-section",
    ".content-section",
    ".strategy-section",
    ".impact-section",
    ".meeting-overview",
    ".section-header",
    ".section-heading",
    ".home-section-header",
    ".activation-card",
    ".collection-card",
    ".project-card",
    ".asset-card",
    ".capability-case-card",
    ".case-hero-image",
    ".results-mindmap",
    ".placeholder-results",
    ".rv-results-infographic",
    ".dna-results"
  ];

  const candidates = [...document.querySelectorAll(revealSelectors.join(","))]
    .filter((element) => !element.closest(".nav-links"));

  candidates.forEach((element) => {
    if (!element.classList.contains("reveal") && !element.classList.contains("visible")) {
      element.classList.add("reveal");
    }
  });

  if (prefersReducedMotion) {
    candidates.forEach((element) => element.classList.add("is-visible", "visible"));
    return;
  }

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible", "visible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    candidates.forEach((element, index) => {
      if (
        element.matches(".activation-card, .collection-card, .project-card, .asset-card, .capability-case-card")
      ) {
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
      }
      revealObserver.observe(element);
    });
  } else {
    candidates.forEach((element) => element.classList.add("is-visible", "visible"));
  }

})();
