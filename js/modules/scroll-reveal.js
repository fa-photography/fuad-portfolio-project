function prepareRevealGroups() {
  const revealGroups = document.querySelectorAll("[data-reveal-group]");

  revealGroups.forEach((group) => {
    const animationType = group.dataset.revealGroup || "fade-up";
    const children = Array.from(group.children);

    children.forEach((child, index) => {
      if (!child.hasAttribute("data-reveal")) {
        child.dataset.reveal = animationType;
      }

      const delay = Math.min(index * 80, 400);

      child.style.setProperty("--reveal-delay", `${delay}ms`);
    });
  });
}

export function initializeScrollReveal() {
  prepareRevealGroups();

  const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

  if (revealElements.length === 0) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-revealed");
    });

    return;
  }

  revealElements.forEach((element) => {
    element.classList.add("reveal-target");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  requestAnimationFrame(() => {
    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  });
}
