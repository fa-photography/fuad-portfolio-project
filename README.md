# Fuad Portfolio Project

Landing page portfolio fotografi untuk **Fuad Abdullah**, seorang fotografer freelance dengan arah visual yang dekat dengan adventure, outdoor activity, travel documentation, community documentation, outdoor event, outdoor portrait, serta brand atau product photography dengan nuansa outdoor.

Website ini dikembangkan sebagai ruang portfolio dan gallery pribadi untuk menampilkan identitas fotografer, karakter visual, pengalaman dokumentasi, kategori karya, karya pilihan, serta jalur kontak dalam satu halaman yang responsif dan interaktif.

## Live Development Preview

Website development preview tersedia melalui GitHub Pages:

```text
https://fuabdullah.github.io/portfolio/
```

Development preview digunakan agar Fuad Abdullah dapat meninjau struktur, tampilan, responsive layout, dan interaksi website sebelum seluruh konten serta asset asli difinalisasi.

## Project Status

Tahap **Project Setup & Frontend Development** telah selesai.

Project saat ini berada pada tahap **frontend refinement, feature development, dan development preview deployment** melalui GitHub Pages. Struktur landing page utama sudah lengkap, responsif, dan interaktif, tetapi sebagian gambar, narasi, pengalaman, caption, alt text, serta data kontak masih menggunakan simulated content atau placeholder.

Revisi dan pengembangan terbaru yang telah diterapkan:

- Section **Photography Services** telah dihapus agar website lebih berfokus sebagai portfolio dan gallery pribadi Fuad Abdullah.
- Menu **Galeri** telah ditambahkan pada Navbar dan Footer.
- Active navigation untuk **Portofolio** dan **Galeri** telah dipisahkan.
- Section **Selected Works / Gallery** menggunakan background terang.
- Lightbox Selected Works tetap menggunakan tampilan gelap agar lebih fokus dan cinematic.
- Enam kartu Portfolio telah dikembangkan menjadi kategori interaktif.
- Setiap kategori sementara memiliki enam gambar utama dan enam thumbnail placeholder.
- Seluruh kategori menggunakan satu reusable dialog.
- Dialog kategori mendukung thumbnail, previous, next, indikator posisi, keyboard navigation, body scroll lock, focus restoration, responsive layout, dan reduced-motion support.
- Selected Works tetap dipertahankan sebagai kurasi dua belas karya pilihan secara campuran.

Tahap visual sebelumnya telah selesai dan dikunci:

- Final Coded Wireframe v1.2
- Final Coded Mockup v1.2
- Final Coded Prototype v1.2
- Visual Handoff v1.0

Prototype v1.2 tetap digunakan sebagai referensi historis untuk keputusan visual dan interaksi. Namun, kode terbaru pada branch `main` merupakan **current development baseline** untuk seluruh revisi dan pengembangan berikutnya.

## Project Goals

Tujuan utama project ini adalah:

- Menyediakan media portfolio digital yang lebih terstruktur daripada hanya menggunakan media sosial.
- Menampilkan karakter fotografi Fuad Abdullah dalam nuansa outdoor, adventure, perjalanan, komunitas, event, portrait, dan brand/product.
- Memberikan pengalaman eksplorasi karya berdasarkan kategori.
- Menampilkan karya pilihan secara terkurasi melalui Selected Works.
- Memperkuat personal branding fotografer dengan tampilan yang profesional tetapi tetap personal.
- Memudahkan pengunjung menghubungi Fuad Abdullah melalui WhatsApp, Instagram, dan email.
- Menjaga website tetap ringan, statis, mudah dipelihara, dan mudah dideploy.

## Main Visual Style

**Clean Cinematic Outdoor Portfolio**

Karakter visual utama:

- Clean
- Cinematic
- Natural
- Outdoor-oriented
- Visual-driven
- Storytelling
- Warm
- Calm
- Authentic
- Explorative
- Professional but personal
- Tidak terlalu corporate
- Tidak terlalu ramai

Foto menjadi elemen utama. Typography, warna, card, dialog, overlay, dan interaksi hanya berfungsi sebagai pendukung agar karya tetap menjadi pusat perhatian.

## Technology

Project MVP menggunakan:

- HTML
- CSS
- JavaScript
- ES Modules
- Native HTML `<dialog>`
- Static assets
- Git dan GitHub
- GitHub Pages

Project tidak menggunakan:

- Backend
- Database
- Authentication
- Login
- Admin panel
- CMS
- Frontend framework
- Booking system
- Payment system
- Dynamic upload system
- Contact form kompleks

## Project Structure

```text
portfolio/
├── index.html
├── README.md
├── .editorconfig
├── .gitignore
├── .vscode/
│   └── settings.json
├── assets/
│   ├── icons/
│   │   ├── fa_favicon.svg
│   │   └── favicon.svg
│   └── images/
│       ├── about/
│       ├── contact/
│       ├── gallery/
│       ├── hero/
│       └── portfolio/
│           ├── collections/
│           │   ├── adventure/
│           │   │   ├── adventure_01.svg
│           │   │   ├── ...
│           │   │   ├── adventure_06.svg
│           │   │   └── thumbs/
│           │   ├── community/
│           │   │   └── thumbs/
│           │   ├── travel/
│           │   │   └── thumbs/
│           │   ├── portrait/
│           │   │   └── thumbs/
│           │   ├── event/
│           │   │   └── thumbs/
│           │   └── brand-product/
│           │       └── thumbs/
│           └── portfolio cover and legacy assets
├── css/
│   ├── components.css
│   ├── foundation.css
│   ├── home.css
│   └── motion.css
└── js/
    ├── data/
    │   └── portfolio-collections.js
    ├── modules/
    │   ├── lightbox.js
    │   ├── navigation.js
    │   ├── portfolio-gallery.js
    │   └── scroll-reveal.js
    └── main.js
```

## File Responsibilities

### `index.html`

Berisi struktur semantic landing page, Navbar, seluruh section, enam kartu kategori Portfolio, reusable Portfolio Category Dialog, Selected Works Lightbox, Contact CTA, Footer, serta pemanggilan entry point JavaScript.

### `css/foundation.css`

Berisi foundation dan design system dasar, seperti:

- CSS custom properties
- color tokens
- typography tokens
- spacing tokens
- reset dasar
- container
- section theme
- button dasar
- focus-visible
- reduced-motion global

### `css/components.css`

Berisi reusable component dan interaction styling, seperti:

- Navbar
- mobile navigation
- button
- tags
- Portfolio cards
- Event Experience list
- Selected Works grid
- Portfolio Category Dialog
- Selected Works Lightbox
- Footer
- state class dan responsive component

### `css/home.css`

Berisi styling khusus halaman utama dan masing-masing section, seperti:

- Hero
- About
- Portfolio
- Experience
- Gallery
- Contact
- Footer section-level layout

### `css/motion.css`

Berisi scroll reveal state, transition, dan motion enhancement yang tetap menghormati preferensi reduced motion pengguna.

### `js/main.js`

Berfungsi sebagai entry point JavaScript dan menginisialisasi seluruh module utama.

### `js/modules/navigation.js`

Menangani:

- fixed Navbar
- Navbar scrolled state
- smooth navigation
- active navigation berdasarkan section
- mobile menu
- outside click
- Escape
- sinkronisasi menu saat viewport berubah

### `js/modules/lightbox.js`

Menangani lightbox pada Selected Works, termasuk:

- membuka gambar pilihan
- menampilkan judul dan kategori
- tombol close
- Escape
- body scroll lock
- keyboard interaction
- focus restoration

### `js/modules/scroll-reveal.js`

Menangani reveal animation berdasarkan elemen dan group yang memiliki data attribute terkait.

### `js/data/portfolio-collections.js`

Menjadi sumber data terpusat untuk enam kategori Portfolio, meliputi:

- slug kategori
- nama kategori
- deskripsi kategori
- path gambar utama
- path thumbnail
- judul foto
- caption
- alt text

Narasi dan asset di dalam file ini masih bersifat simulasi dan placeholder.

### `js/modules/portfolio-gallery.js`

Menangani seluruh interaksi Portfolio Category Gallery, termasuk:

- membuka reusable dialog berdasarkan kategori
- render thumbnail secara dinamis
- mengganti foto utama
- previous dan next navigation
- indikator posisi
- title, caption, dan alt text
- Arrow Left dan Arrow Right
- Home dan End
- Escape
- backdrop close
- body scroll lock
- focus restoration
- reduced-motion-aware thumbnail scrolling

## Landing Page Structure

Urutan section terbaru:

1. Navbar
2. Hero Section
3. About Photographer
4. Portfolio Categories
5. Event Experience
6. Selected Works / Gallery
7. Contact / CTA
8. Footer

Section Photography Services telah dihapus berdasarkan arah terbaru website, yaitu sebagai portfolio dan gallery pribadi Fuad Abdullah, bukan katalog layanan fotografi.

Perubahan struktur berikutnya harus dibahas dan diuji terlebih dahulu sebelum diterapkan.

## Navigation Structure

Menu Navbar dan Footer:

- Tentang → `#about`
- Portofolio → `#portfolio`
- Pengalaman → `#experience`
- Galeri → `#gallery`
- Kontak → `#contact`

Brand `Fuad Abdullah.` dapat diklik untuk kembali ke Hero.

Perilaku active navigation:

- Hero tidak menampilkan menu aktif.
- Portofolio aktif saat section Portfolio Categories berada di area aktif.
- Galeri aktif saat section Selected Works / Gallery berada di area aktif.
- Active indicator mengikuti klik dan scroll.

## Portfolio Categories

Section Portfolio memiliki enam kategori:

1. Adventure
2. Community
3. Travel
4. Portrait
5. Event
6. Brand / Product

Setiap kartu kategori:

- mempertahankan layout visual Portfolio sebelumnya;
- menggunakan cover kategori;
- menampilkan jumlah foto;
- dapat diklik pada seluruh area kartu;
- dapat difokuskan dan diaktifkan melalui keyboard;
- memiliki slug kategori melalui data attribute;
- membuka reusable Portfolio Category Dialog.

### Current Placeholder Count

Setiap kategori sementara memiliki:

- 6 gambar utama SVG placeholder
- 6 thumbnail SVG placeholder

Total asset kategori sementara:

```text
6 kategori × 6 gambar utama = 36 gambar utama
6 kategori × 6 thumbnail    = 36 thumbnail
Total                        = 72 asset placeholder
```

Placeholder digunakan untuk menguji struktur, responsive layout, data binding, thumbnail, navigasi, dan accessibility sebelum foto asli tersedia.

## Portfolio Category Gallery

Seluruh kategori menggunakan satu reusable dialog, bukan enam dialog terpisah.

Fitur dialog kategori:

- Label kategori
- Nama kategori
- Deskripsi kategori
- Foto utama
- Thumbnail
- Thumbnail aktif
- Previous navigation
- Next navigation
- Indikator posisi, misalnya `1 / 6`
- Judul foto
- Caption foto
- Dynamic alt text
- Tombol close
- Backdrop close
- Keyboard Arrow Left
- Keyboard Arrow Right
- Keyboard Home
- Keyboard End
- Keyboard Escape
- Circular navigation dari foto terakhir ke pertama dan sebaliknya
- Body scroll lock
- Focus restoration ke kartu pembuka
- Responsive desktop, tablet, mobile portrait, dan mobile landscape
- Reduced-motion support

Responsive behavior:

- Desktop: foto utama berada di kiri dan thumbnail tersusun `2 × 3` di kanan.
- Tablet: thumbnail berpindah menjadi horizontal di bawah foto utama.
- Mobile: dialog menggunakan satu kolom, thumbnail horizontal, dan internal scrolling untuk layar pendek.

## Selected Works / Gallery

Selected Works tetap dipertahankan sebagai kumpulan dua belas karya pilihan secara campuran.

Fungsi Selected Works berbeda dari Portfolio Categories:

- **Portfolio Categories** digunakan untuk eksplorasi karya berdasarkan jenis fotografi.
- **Selected Works** digunakan untuk menampilkan karya terbaik yang dikurasi secara campuran.

Karakter Selected Works:

- 12 item
- mixed grid
- variasi item normal, tinggi, dan lebar
- background section terang
- hover caption
- keyboard-accessible buttons
- lightbox terpisah
- lightbox tetap gelap dan cinematic

## Main Features

Fitur yang tersedia saat ini:

- Fixed Navbar
- Navbar scrolled state
- Brand link kembali ke Hero
- Smooth scrolling
- Active navigation
- Mobile hamburger menu
- Outside click untuk mobile menu
- Escape untuk mobile menu
- Responsive desktop, tablet, dan mobile
- Hero CTA
- About Photographer
- Six Portfolio Categories
- Portfolio Category Dialog
- Event Experience
- Selected Works mixed gallery
- Selected Works Lightbox
- Contact CTA
- WhatsApp link
- Instagram link
- Email link
- Footer navigation
- Scroll reveal animation
- Reduced-motion support
- Keyboard interaction
- Focus-visible state
- Focus restoration
- Body scroll lock
- Dynamic copyright year

## Typography

Typography final:

- Heading: **Bebas Neue**, weight 400
- Body and interface: **Manrope**

Bebas Neue digunakan pada heading utama dan judul section. Manrope digunakan pada body text, navigation, button, label, caption, dialog information, dan interface.

## Color Direction

```text
Dark Charcoal  : #10130F
Soft Black     : #171B16
Warm White     : #F3EFE6
Sand Beige     : #EBE6DC
Earth Brown    : #8A6A43
Muted Green    : #75846D
Warm Gold      : #D0A768
Muted Gray     : #B9B6AE
```

Prinsip warna:

- Foto tetap menjadi fokus utama.
- Warm gold digunakan sebagai aksen, bukan warna dominan.
- Background gelap dan terang digunakan untuk membangun ritme antarseksi.
- Gallery section menggunakan warm white.
- Selected Works Lightbox dan Portfolio Category Dialog menggunakan tema gelap agar lebih fokus dan cinematic.

## Accessibility and Interaction

Implementasi saat ini mempertimbangkan:

- semantic HTML
- heading hierarchy
- native button untuk elemen interaktif
- native `<dialog>`
- `aria-label`
- `aria-labelledby`
- `aria-describedby`
- `aria-current`
- keyboard navigation
- visible focus state
- Escape handling
- focus restoration
- body scroll lock
- alt text
- reduced-motion support
- responsive touch target

Accessibility masih perlu diperiksa kembali setelah gambar dan konten asli dimasukkan.

## Responsive Direction

Website menggunakan satu halaman responsif yang sama untuk desktop, tablet, dan mobile.

### Desktop

- Navbar horizontal
- Hero full-width
- About split layout
- Portfolio 3 kolom
- Experience editorial list
- Selected Works mixed grid
- Portfolio dialog dua kolom

### Tablet

- Grid menyesuaikan menjadi 2 kolom jika diperlukan
- Navbar dapat beralih ke mobile menu sesuai breakpoint
- Portfolio dialog menjadi satu kolom
- Thumbnail kategori menjadi horizontal

### Mobile

- Navbar menggunakan hamburger menu
- Semua section disederhanakan
- About menjadi satu kolom
- Portfolio menjadi satu kolom
- Selected Works menyesuaikan komposisi grid
- CTA mudah ditekan
- Dialog dapat discroll pada layar pendek
- Thumbnail kategori horizontal
- Lightbox tetap nyaman digunakan

## Content and Asset Status

Sebagian konten dan gambar masih menggunakan simulated content atau placeholder.

Sebelum publikasi final, bagian berikut harus dikonfirmasi atau diganti:

- Hero image
- About image
- Enam cover kategori Portfolio
- Foto utama setiap kategori Portfolio
- Thumbnail setiap kategori Portfolio
- Selected Works images
- Contact background
- Hero headline dan subheadline jika ada revisi
- About biography
- Event Experience asli
- Nama, judul, dan caption karya
- Alt text berdasarkan foto asli
- WhatsApp
- Instagram
- Email
- Lokasi atau area jika ingin ditampilkan
- Bahasa dan istilah akhir website

Catatan penting:

- Narasi pada `portfolio-collections.js` masih simulasi.
- SVG collection saat ini hanya placeholder development.
- Simulated Event Experience tidak boleh dianggap sebagai pengalaman faktual Fuad Abdullah.
- Semua foto harus memiliki izin penggunaan.
- Metadata EXIF sensitif harus dihapus dari asset publik.
- Gambar asli perlu di-resize, dikompres, dan dioptimalkan sebelum publikasi final.

## Recommended Image Preparation

Untuk asset asli Portfolio Category Gallery:

### Gambar utama

- Format rekomendasi: WebP
- Lebar maksimum: sekitar 1600–1920 px
- Quality target: sekitar 80–85%
- Metadata EXIF: dihapus
- Digunakan pada area foto utama dialog

### Thumbnail

- Format rekomendasi: WebP
- Lebar: sekitar 320–480 px
- Quality target: sekitar 70–80%
- Metadata EXIF: dihapus
- Digunakan pada tombol thumbnail

Gambar utama dan thumbnail menampilkan foto yang sama, tetapi menggunakan spesifikasi ukuran yang berbeda agar loading lebih efisien.

## Running the Project

Project harus dijalankan melalui local development server karena menggunakan ES Modules.

### VS Code Live Server

1. Buka folder project melalui VS Code.
2. Klik kanan file `index.html`.
3. Pilih **Open with Live Server**.
4. Website akan terbuka di browser.

### Python HTTP Server

```bash
python -m http.server 5500
```

Kemudian buka:

```text
http://localhost:5500
```

Jangan menjalankan project hanya dengan membuka file `index.html` langsung melalui `file://`, karena import ES Modules dapat dibatasi oleh browser.

## Development Workflow

Alur development yang telah dilakukan:

```text
Planning and Concept
→ Content and Asset Preparation
→ Reference and Wireframe Planning
→ Coded Wireframe
→ Coded Mockup
→ Coded Prototype
→ Project Setup
→ Base HTML, CSS, and JavaScript
→ Section-by-Section Development
→ Responsive Refinement
→ Interaction Testing
→ GitHub Pages Development Preview
→ Frontend Audit
→ Services Section Removal
→ Gallery Visual Adjustment
→ Portfolio Category Gallery Development
→ Final Refinement and Quality Check
```

Alur pekerjaan berikutnya:

```text
Real Content and Asset Finalization
→ Image Optimization
→ Accessibility and Performance Review
→ Final Quality Assurance
→ Production Deployment Preparation
→ Documentation and Project Handoff
→ Project Closure
```

## Testing Checklist

### Navigation

- [ ] Brand kembali ke Hero
- [ ] Menu Tentang bekerja
- [ ] Menu Portofolio bekerja
- [ ] Menu Pengalaman bekerja
- [ ] Menu Galeri bekerja
- [ ] Menu Kontak bekerja
- [ ] Active navigation mengikuti scroll
- [ ] Mobile menu dapat dibuka dan ditutup
- [ ] Outside click menutup mobile menu
- [ ] Escape menutup mobile menu

### Portfolio Categories

- [ ] Enam kartu tampil
- [ ] Semua cover tampil
- [ ] Jumlah foto tampil
- [ ] Seluruh area kartu dapat diklik
- [ ] Kartu dapat difokuskan melalui keyboard
- [ ] Kategori yang benar membuka dialog yang benar

### Portfolio Category Dialog

- [ ] Nama kategori tampil
- [ ] Deskripsi kategori tampil
- [ ] Foto utama tampil
- [ ] Enam thumbnail tampil
- [ ] Thumbnail aktif terlihat
- [ ] Previous bekerja
- [ ] Next bekerja
- [ ] Circular navigation bekerja
- [ ] Indikator posisi berubah
- [ ] Judul dan caption berubah
- [ ] Arrow Left bekerja
- [ ] Arrow Right bekerja
- [ ] Home bekerja
- [ ] End bekerja
- [ ] Escape menutup dialog
- [ ] Backdrop close bekerja
- [ ] Body scroll terkunci
- [ ] Focus kembali ke kartu pembuka

### Selected Works

- [ ] Terdapat 12 item
- [ ] Mixed grid tidak memiliki gap yang tidak direncanakan
- [ ] Hover caption bekerja
- [ ] Item dapat difokuskan
- [ ] Lightbox dapat dibuka
- [ ] Lightbox tetap gelap
- [ ] Escape menutup lightbox
- [ ] Focus restoration bekerja

### Responsive

- [ ] Desktop aman
- [ ] Tablet aman
- [ ] Mobile portrait aman
- [ ] Mobile landscape aman
- [ ] Tidak ada horizontal overflow
- [ ] Heading tidak keluar viewport
- [ ] Thumbnail horizontal dapat discroll
- [ ] Dialog dapat discroll pada layar pendek

### Accessibility and Motion

- [ ] Focus-visible terlihat
- [ ] Keyboard navigation bekerja
- [ ] Alt text tersedia
- [ ] Reduced-motion mode tetap berfungsi
- [ ] Dialog tidak membuat fokus berpindah ke halaman belakang

### Console and Assets

- [ ] Tidak ada JavaScript error
- [ ] Tidak ada module import error
- [ ] Tidak ada asset 404
- [ ] Semua gambar utama collection tersedia
- [ ] Semua thumbnail collection tersedia

## Git Workflow

Project menggunakan satu branch utama:

```text
main
```

Alur yang digunakan:

```text
Kerjakan satu tahap
→ Testing
→ Review
→ Commit
→ Push
→ Verifikasi GitHub Pages
→ Lanjut ke tahap berikutnya
```

Contoh pemeriksaan sebelum commit:

```bash
git status
git diff --check
```

Contoh commit fitur galeri kategori:

```bash
git add .
git commit -m "feat: add portfolio category galleries"
git push origin main
```

## Deployment

Platform development preview:

- GitHub Pages

Repository dan URL deployment:

```text
Repository : fuabdullah/portfolio
URL        : https://fuabdullah.github.io/portfolio/
Branch     : main
```

Setelah push, lakukan pemeriksaan ulang pada versi online karena asset path, cache, dan perilaku browser dapat berbeda dari local development.

## Development Rules

- Gunakan kode terbaru pada branch `main` sebagai current development baseline.
- Gunakan Prototype v1.2 sebagai referensi historis visual dan interaksi.
- Jangan membuat desain baru dari awal tanpa pembahasan.
- Jangan mengubah urutan section tanpa pembahasan.
- Jangan mengganti typography atau palet warna tanpa pembahasan.
- Jangan menganggap placeholder sebagai data final.
- Jangan menganggap simulated content sebagai pengalaman faktual Fuad Abdullah.
- Perubahan pada satu bagian tidak boleh mengubah bagian lain tanpa kebutuhan.
- Portfolio Categories dan Selected Works memiliki fungsi berbeda dan harus tetap dipertahankan.
- Perubahan fitur tidak boleh merusak keyboard interaction, focus restoration, body scroll lock, responsive layout, atau reduced-motion support.
- Asset placeholder harus diganti dengan gambar asli yang sudah dioptimalkan sebelum publikasi final.
- Seluruh link kontak harus diuji sebelum publikasi final.
- Setiap tahap harus diuji sebelum masuk ke tahap berikutnya.
- Commit sebaiknya berisi satu tujuan perubahan yang jelas.
- Jangan memasukkan file rahasia, credential, atau data sensitif ke repository.

## Current Known Limitations

- Sebagian besar collection masih menggunakan SVG placeholder.
- Data kategori masih menggunakan narasi simulasi.
- Asset asli Fuad Abdullah belum sepenuhnya tersedia.
- Sebagian gambar lama masih perlu dioptimalkan.
- Data kontak final masih perlu diverifikasi.
- Website belum memiliki CMS atau admin panel.
- Penambahan atau penggantian karya masih dilakukan melalui file dan kode.

## Next Stage

Tahap selanjutnya setelah fitur Portfolio Category Gallery dikunci:

1. Mengumpulkan foto asli per kategori.
2. Menentukan cover final setiap kategori.
3. Membuat gambar utama dan thumbnail teroptimasi.
4. Mengganti narasi simulasi dengan data asli.
5. Memperbarui caption dan alt text.
6. Memverifikasi Event Experience.
7. Memverifikasi seluruh link kontak.
8. Menjalankan audit accessibility dan performance.
9. Melakukan final quality assurance.
10. Menyiapkan dokumentasi, handoff, dan project closure.

## Credits

**Photographer:** Fuad Abdullah
**Frontend Development:** Farhan Maulana

---

Project ini merupakan static photographer portfolio landing page yang masih berada pada tahap development preview dan content finalization. Seluruh placeholder harus diganti atau dikonfirmasi sebelum website dianggap sebagai versi publikasi final.
