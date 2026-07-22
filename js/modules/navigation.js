/**
 * Menyiapkan seluruh perilaku Navbar:
 *
 * - Mobile menu
 * - Outside click
 * - Escape key
 * - Header scroll state
 * - Active navigation
 * - Responsive state synchronization
 */
export function initializeNavigation() {
  const siteHeader = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mainNavigation = document.querySelector("[data-main-navigation]");

  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));

  const brandLink = document.querySelector('.brand[href="#hero"]');

  if (!siteHeader || !menuToggle || !mainNavigation) {
    return;
  }

  const mobileMediaQuery = window.matchMedia("(max-width: 900px)");

  /**
   * Menutup mobile navigation.
   */
  function closeMenu({ restoreFocus = false } = {}) {
    mainNavigation.classList.remove("is-open");
    menuToggle.classList.remove("is-active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    document.body.classList.remove("menu-open");

    if (mobileMediaQuery.matches) {
      mainNavigation.setAttribute("aria-hidden", "true");
    }

    if (restoreFocus) {
      menuToggle.focus();
    }
  }

  /**
   * Membuka mobile navigation.
   */
  function openMenu() {
    mainNavigation.classList.add("is-open");
    menuToggle.classList.add("is-active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");

    mainNavigation.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");

    window.requestAnimationFrame(() => {
      navLinks[0]?.focus();
    });
  }

  /**
   * Menyelaraskan accessibility state antara
   * mode desktop dan mobile.
   */
  function synchronizeResponsiveState() {
    if (mobileMediaQuery.matches) {
      const isOpen = mainNavigation.classList.contains("is-open");

      mainNavigation.setAttribute("aria-hidden", String(!isOpen));

      return;
    }

    closeMenu();
    mainNavigation.removeAttribute("aria-hidden");
  }

  /**
   * Membuka atau menutup menu melalui tombol hamburger.
   */
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  /**
   * Menutup menu setelah salah satu link dipilih.
   */
  mainNavigation.addEventListener("click", (event) => {
    const targetLink = event.target.closest("a");

    if (!targetLink) {
      return;
    }

    closeMenu();
  });

  /**
   * Menutup menu ketika pengguna mengklik area di luar Navbar.
   */
  document.addEventListener("click", (event) => {
    if (!mainNavigation.classList.contains("is-open")) {
      return;
    }

    if (!(event.target instanceof Node)) {
      return;
    }

    const clickInsideNavigation = mainNavigation.contains(event.target);

    const clickOnToggle = menuToggle.contains(event.target);

    if (!clickInsideNavigation && !clickOnToggle) {
      closeMenu();
    }
  });

  /**
   * Menutup menu menggunakan tombol Escape.
   */
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      mainNavigation.classList.contains("is-open")
    ) {
      closeMenu({ restoreFocus: true });
    }
  });

  /**
   * Mengubah visual Navbar setelah halaman mulai di-scroll.
   */
  function updateHeaderState() {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  /**
   * Hubungan section terhadap menu Navbar.
   *
   * Hero tidak memiliki menu aktif.
   * Gallery tetap menggunakan menu Portfolio.
   */
  const sectionToNavigation = new Map([
    ["hero", null],
    ["about", "about"],
    ["portfolio", "portfolio"],
    ["experience", "experience"],
    ["gallery", "gallery"],
    ["contact", "contact"],
  ]);

  /**
   * Mengaktifkan menu berdasarkan section.
   */
  function setActiveNavigation(sectionId) {
    const navigationTarget = sectionToNavigation.get(sectionId);

    navLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href")?.replace("#", "");

      const isActive =
        Boolean(navigationTarget) && linkTarget === navigationTarget;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const observedSections = Array.from(sectionToNavigation.keys())
    .map((sectionId) => document.getElementById(sectionId))
    .filter(Boolean);

  let pendingTargetId = null;
  let pendingTargetUntil = 0;

  /**
   * Mencari section yang sedang aktif berdasarkan posisi scroll.
   */
  function getCurrentSectionId() {
    const headerHeight =
      siteHeader.offsetHeight ||
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height-desktop",
        ),
        10,
      ) ||
      78;

    const marker =
      window.scrollY + headerHeight + Math.min(window.innerHeight * 0.24, 180);

    let currentSectionId = "hero";

    observedSections.forEach((section) => {
      if (section.offsetTop <= marker) {
        currentSectionId = section.id;
      }
    });

    const hasReachedPageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;

    if (hasReachedPageBottom) {
      currentSectionId = "contact";
    }

    return currentSectionId;
  }

  /**
   * Memperbarui menu aktif ketika halaman di-scroll.
   */
  function updateActiveNavigation() {
    if (pendingTargetId && performance.now() < pendingTargetUntil) {
      const pendingTarget = document.getElementById(pendingTargetId);

      const headerHeight = siteHeader.offsetHeight || 78;

      const hasReachedTarget = pendingTarget
        ? Math.abs(pendingTarget.getBoundingClientRect().top - headerHeight) <
          18
        : true;

      if (!hasReachedTarget) {
        setActiveNavigation(pendingTargetId);
        return;
      }
    }

    pendingTargetId = null;

    setActiveNavigation(getCurrentSectionId());
  }

  /**
   * Memberikan active state langsung ketika menu diklik.
   */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href")?.replace("#", "");

      if (!targetId) {
        return;
      }

      pendingTargetId = targetId;
      pendingTargetUntil = performance.now() + 1400;

      setActiveNavigation(targetId);
    });
  });

  /**
   * Brand kembali ke Hero dan menghapus active menu.
   */
  brandLink?.addEventListener("click", () => {
    pendingTargetId = "hero";
    pendingTargetUntil = performance.now() + 1400;

    setActiveNavigation("hero");
    closeMenu();
  });

  /**
   * Membatasi update scroll agar tetap ringan.
   */
  let scrollAnimationFrame = null;

  function requestScrollUpdate() {
    if (scrollAnimationFrame !== null) {
      return;
    }

    scrollAnimationFrame = window.requestAnimationFrame(() => {
      updateHeaderState();
      updateActiveNavigation();

      scrollAnimationFrame = null;
    });
  }

  window.addEventListener("scroll", requestScrollUpdate, {
    passive: true,
  });

  window.addEventListener("resize", () => {
    synchronizeResponsiveState();
    updateActiveNavigation();
  });

  mobileMediaQuery.addEventListener("change", synchronizeResponsiveState);

  /**
   * Initial state.
   */
  synchronizeResponsiveState();
  updateHeaderState();
  updateActiveNavigation();
}
