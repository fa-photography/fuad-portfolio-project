/**
 * Data sementara untuk galeri berdasarkan kategori Portfolio.
 *
 * Seluruh judul, caption, dan alt text masih berupa simulasi.
 * Data dapat diganti setelah foto dan informasi asli dari Fuad tersedia.
 */

const COLLECTION_BASE_PATH = "assets/images/portfolio/collections";

/**
 * Membentuk path gambar utama dan thumbnail secara konsisten.
 */
function createCollectionImages(categorySlug, imageData) {
  return imageData.map((image, index) => {
    const number = String(index + 1).padStart(2, "0");
    const filename = `${categorySlug}_${number}.svg`;

    return {
      id: `${categorySlug}-${number}`,
      src: `${COLLECTION_BASE_PATH}/${categorySlug}/${filename}`,
      thumbnail: `${COLLECTION_BASE_PATH}/${categorySlug}/thumbs/${filename}`,
      title: image.title,
      caption: image.caption,
      alt: image.alt,
    };
  });
}

/**
 * Data enam kategori Portfolio.
 */
export const portfolioCollections = {
  adventure: {
    slug: "adventure",
    name: "Adventure",
    description: "Perjalanan, pendakian, dan cerita dari alam terbuka.",
    images: createCollectionImages("adventure", [
      {
        title: "Jejak Menuju Puncak",
        caption:
          "Langkah pertama dalam perjalanan menyusuri jalur menuju ketinggian.",
        alt: "Sekelompok pendaki berjalan menyusuri jalur pegunungan.",
      },
      {
        title: "Di Antara Kabut",
        caption:
          "Perjalanan terus bergerak meskipun pandangan tertutup oleh kabut.",
        alt: "Pendaki berjalan di kawasan pegunungan yang tertutup kabut.",
      },
      {
        title: "Menyusuri Punggungan",
        caption:
          "Momen ketika perjalanan membawa langkah melewati punggungan terbuka.",
        alt: "Pendaki menyusuri punggungan gunung di alam terbuka.",
      },
      {
        title: "Istirahat di Jalur",
        caption:
          "Jeda singkat untuk mengumpulkan tenaga sebelum perjalanan dilanjutkan.",
        alt: "Pendaki beristirahat di tengah jalur perjalanan gunung.",
      },
      {
        title: "Cahaya di Ketinggian",
        caption:
          "Cahaya sore menemani perjalanan ketika mendekati titik tertinggi.",
        alt: "Pemandangan pegunungan dengan cahaya sore di ketinggian.",
      },
      {
        title: "Pulang Membawa Cerita",
        caption:
          "Setiap perjalanan berakhir dengan pengalaman yang tetap tersimpan.",
        alt: "Pendaki berjalan pulang setelah menyelesaikan perjalanan.",
      },
    ]),
  },

  community: {
    slug: "community",
    name: "Community",
    description: "Kebersamaan, interaksi, dan momen yang tumbuh bersama.",
    images: createCollectionImages("community", [
      {
        title: "Cerita dalam Kebersamaan",
        caption:
          "Momen sederhana yang tumbuh ketika banyak orang berkumpul bersama.",
        alt: "Sekelompok anggota komunitas berkumpul dalam kegiatan bersama.",
      },
      {
        title: "Langkah yang Sama",
        caption:
          "Setiap anggota bergerak menuju tujuan yang sama dalam satu perjalanan.",
        alt: "Anggota komunitas berjalan bersama dalam kegiatan outdoor.",
      },
      {
        title: "Ruang untuk Bertemu",
        caption:
          "Sebuah pertemuan yang menghadirkan interaksi dan cerita baru.",
        alt: "Pertemuan komunitas yang berlangsung di ruang terbuka.",
      },
      {
        title: "Tawa di Perjalanan",
        caption:
          "Kebersamaan terasa melalui percakapan dan momen spontan di perjalanan.",
        alt: "Anggota komunitas tertawa bersama selama kegiatan berlangsung.",
      },
      {
        title: "Bergerak Bersama",
        caption:
          "Energi kelompok terlihat dalam setiap aktivitas yang dilakukan.",
        alt: "Komunitas melakukan aktivitas kelompok secara bersama-sama.",
      },
      {
        title: "Kenangan Satu Komunitas",
        caption:
          "Dokumentasi yang menyimpan hubungan dan pengalaman dari satu kegiatan.",
        alt: "Foto kebersamaan anggota komunitas pada akhir kegiatan.",
      },
    ]),
  },

  travel: {
    slug: "travel",
    name: "Travel",
    description:
      "Tempat, perjalanan, dan cerita yang ditemui di sepanjang jalan.",
    images: createCollectionImages("travel", [
      {
        title: "Langkah di Kota Singgah",
        caption:
          "Sebuah perjalanan singkat untuk mengenal suasana dari tempat yang baru.",
        alt: "Suasana perjalanan di sebuah kota yang menjadi tempat singgah.",
      },
      {
        title: "Jalan yang Belum Dikenal",
        caption:
          "Perjalanan membuka kesempatan untuk menemukan arah dan pengalaman baru.",
        alt: "Jalan baru yang dilewati dalam sebuah perjalanan.",
      },
      {
        title: "Pagi dari Perjalanan",
        caption:
          "Cahaya pagi menandai dimulainya cerita di tempat yang berbeda.",
        alt: "Suasana pagi saat melakukan perjalanan di tempat baru.",
      },
      {
        title: "Detail di Setiap Sudut",
        caption:
          "Cerita perjalanan tidak hanya hadir dari tempat besar, tetapi juga detail kecil.",
        alt: "Detail suasana dan objek yang ditemukan selama perjalanan.",
      },
      {
        title: "Jeda di Tengah Perjalanan",
        caption:
          "Berhenti sejenak untuk menikmati suasana sebelum kembali melanjutkan jalan.",
        alt: "Seorang pelancong beristirahat di tengah perjalanan.",
      },
      {
        title: "Cerita Sebelum Pulang",
        caption:
          "Momen terakhir yang disimpan sebelum meninggalkan tempat persinggahan.",
        alt: "Pemandangan terakhir sebelum perjalanan pulang.",
      },
    ]),
  },

  portrait: {
    slug: "portrait",
    name: "Portrait",
    description: "Wajah, karakter, dan ekspresi dalam suasana yang natural.",
    images: createCollectionImages("portrait", [
      {
        title: "Wajah dalam Cahaya",
        caption:
          "Cahaya alami membantu menghadirkan karakter dalam sebuah portrait.",
        alt: "Portrait seseorang menggunakan pencahayaan alami.",
      },
      {
        title: "Tatapan yang Tenang",
        caption:
          "Ekspresi sederhana dapat menyimpan cerita tanpa banyak arahan.",
        alt: "Portrait seseorang dengan tatapan yang tenang.",
      },
      {
        title: "Di Antara Alam",
        caption:
          "Lingkungan terbuka menjadi bagian dari suasana dan karakter portrait.",
        alt: "Portrait seseorang dengan latar suasana alam terbuka.",
      },
      {
        title: "Ekspresi Tanpa Arahan",
        caption:
          "Momen natural muncul ketika subjek merasa nyaman di depan kamera.",
        alt: "Portrait candid dengan ekspresi natural.",
      },
      {
        title: "Cahaya Menjelang Sore",
        caption:
          "Warna hangat sore memberi suasana yang lebih personal pada portrait.",
        alt: "Portrait outdoor dalam cahaya sore yang hangat.",
      },
      {
        title: "Cerita dari Satu Wajah",
        caption:
          "Satu ekspresi dapat menyampaikan karakter dan suasana yang berbeda.",
        alt: "Portrait dekat yang menampilkan karakter wajah seseorang.",
      },
    ]),
  },

  event: {
    slug: "event",
    name: "Event",
    description: "Energi, suasana, dan momen penting dalam sebuah acara.",
    images: createCollectionImages("event", [
      {
        title: "Semangat di Titik Kumpul",
        caption:
          "Para peserta mulai berkumpul sebelum rangkaian kegiatan dimulai.",
        alt: "Peserta berkumpul pada awal sebuah acara outdoor.",
      },
      {
        title: "Awal Sebuah Kegiatan",
        caption: "Momen pembuka yang membangun suasana dan energi acara.",
        alt: "Suasana pembukaan sebuah kegiatan atau acara.",
      },
      {
        title: "Gerak di Tengah Acara",
        caption:
          "Aktivitas peserta menjadi bagian penting dari cerita sebuah event.",
        alt: "Peserta melakukan aktivitas di tengah berlangsungnya acara.",
      },
      {
        title: "Momen yang Dinanti",
        caption:
          "Sebuah kejadian penting yang menjadi pusat perhatian para peserta.",
        alt: "Momen utama yang terjadi dalam sebuah event.",
      },
      {
        title: "Energi Para Peserta",
        caption:
          "Ekspresi dan interaksi peserta memperlihatkan suasana sebenarnya.",
        alt: "Ekspresi peserta yang bersemangat selama acara.",
      },
      {
        title: "Penutup yang Berkesan",
        caption:
          "Rangkaian kegiatan berakhir dengan momen yang tetap layak disimpan.",
        alt: "Momen penutupan dan kebersamaan pada akhir acara.",
      },
    ]),
  },

  "brand-product": {
    slug: "brand-product",
    name: "Brand / Product",
    description: "Produk dan identitas brand dalam nuansa outdoor yang kuat.",
    images: createCollectionImages("brand-product", [
      {
        title: "Bekal untuk Menjelajah",
        caption:
          "Produk diperlihatkan sebagai bagian dari kebutuhan dalam perjalanan.",
        alt: "Produk outdoor yang digunakan sebagai perlengkapan perjalanan.",
      },
      {
        title: "Produk dalam Perjalanan",
        caption:
          "Visual produk ditempatkan dalam situasi penggunaan yang natural.",
        alt: "Produk digunakan dalam sebuah aktivitas perjalanan outdoor.",
      },
      {
        title: "Detail yang Dipilih",
        caption:
          "Setiap detail produk ditampilkan untuk memperlihatkan karakter dan fungsinya.",
        alt: "Foto detail sebuah produk dengan nuansa outdoor.",
      },
      {
        title: "Digunakan di Alam Terbuka",
        caption:
          "Lingkungan outdoor membantu memperlihatkan konteks penggunaan produk.",
        alt: "Produk brand digunakan oleh seseorang di alam terbuka.",
      },
      {
        title: "Cerita di Balik Produk",
        caption:
          "Visual tidak hanya menunjukkan bentuk, tetapi juga pengalaman penggunaannya.",
        alt: "Foto lifestyle yang menceritakan penggunaan sebuah produk.",
      },
      {
        title: "Siap Menemani Perjalanan",
        caption:
          "Produk menjadi bagian dari cerita sebelum perjalanan kembali dimulai.",
        alt: "Produk outdoor dipersiapkan untuk menemani sebuah perjalanan.",
      },
    ]),
  },
};

/**
 * Mengambil data collection berdasarkan slug kategori.
 *
 * @param {string} categorySlug
 * @returns {object|null}
 */
export function getPortfolioCollection(categorySlug) {
  return portfolioCollections[categorySlug] ?? null;
}
