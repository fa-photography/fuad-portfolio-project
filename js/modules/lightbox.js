/**
 * Menyiapkan Selected Works Lightbox.
 *
 * Fitur:
 * - Membuka preview gambar
 * - Menampilkan judul dan kategori
 * - Menutup melalui tombol close
 * - Menutup melalui backdrop
 * - Menutup melalui Escape
 * - Mengunci body scroll
 * - Mengembalikan focus ke gallery item sebelumnya
 */
export function initializeLightbox() {
  const galleryItems = Array.from(
    document.querySelectorAll("[data-gallery-item]"),
  );

  const lightbox = document.querySelector("#gallery-lightbox");

  const lightboxImage = document.querySelector("#lightbox-image");

  const lightboxTitle = document.querySelector("#lightbox-title");

  const lightboxCategory = document.querySelector("#lightbox-category");

  const closeButton = document.querySelector("[data-lightbox-close]");

  if (
    galleryItems.length === 0 ||
    !lightbox ||
    !lightboxImage ||
    !lightboxTitle ||
    !lightboxCategory ||
    !closeButton
  ) {
    return;
  }

  let lastTrigger = null;

  /**
   * Membersihkan state setelah Lightbox ditutup.
   */
  function cleanupLightboxState() {
    document.body.classList.remove("lightbox-open");

    const triggerToRestore = lastTrigger;
    lastTrigger = null;

    if (triggerToRestore && triggerToRestore.isConnected) {
      window.requestAnimationFrame(() => {
        triggerToRestore.focus();
      });
    }
  }

  /**
   * Membuka Lightbox berdasarkan Gallery item.
   */
  function openLightbox(item) {
    const sourceImage = item.querySelector("img");

    if (!sourceImage || lightbox.open) {
      return;
    }

    const title = item.dataset.galleryTitle || "Selected Work";

    const category = item.dataset.galleryCategory || "";

    lastTrigger = item;

    lightboxImage.src = sourceImage.currentSrc || sourceImage.src;

    lightboxImage.alt = sourceImage.alt;
    lightboxTitle.textContent = title;
    lightboxCategory.textContent = category;

    document.body.classList.add("lightbox-open");

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }

    window.requestAnimationFrame(() => {
      closeButton.focus();
    });
  }

  /**
   * Menutup Lightbox.
   */
  function closeLightbox() {
    if (!lightbox.open) {
      return;
    }

    if (typeof lightbox.close === "function") {
      lightbox.close();
      return;
    }

    lightbox.removeAttribute("open");
    cleanupLightboxState();
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      openLightbox(item);
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  /**
   * Menutup ketika pengguna mengklik area backdrop.
   */
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  /**
   * Event close juga dijalankan ketika dialog ditutup
   * menggunakan tombol Escape.
   */
  lightbox.addEventListener("close", cleanupLightboxState);
}
