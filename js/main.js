import { initializeNavigation } from "./modules/navigation.js";
import { initializeLightbox } from "./modules/lightbox.js";

/**
 * Memperbarui semua elemen yang membutuhkan tahun berjalan.
 *
 * Elemen footer nantinya menggunakan:
 * data-current-year
 */
function updateCurrentYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const currentYear = String(new Date().getFullYear());

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

/**
 * Menjalankan seluruh fitur utama website.
 */
function initializeProject() {
  initializeNavigation();
  initializeLightbox();
  updateCurrentYear();

  console.info("Fuad Portfolio Project initialized successfully.");
}

/**
 * Memastikan project dijalankan setelah DOM siap.
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeProject, {
    once: true,
  });
} else {
  initializeProject();
}
