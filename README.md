# Fuad Portfolio Project

Landing page portfolio fotografi untuk Fuad Abdullah, seorang fotografer freelance dengan arah visual yang dekat dengan adventure, outdoor activity, travel documentation, community documentation, outdoor event, outdoor portrait, serta brand atau product photography dengan nuansa outdoor.

## Project Status

Tahap Project Setup & Frontend Development telah selesai.

Project saat ini berada pada tahap development preview deployment melalui
GitHub Pages. Landing page sudah lengkap, responsif, dan interaktif, tetapi
beberapa gambar, teks, pengalaman, layanan, serta data kontak masih menggunakan
simulated content atau placeholder.

Development preview dibuat agar Fuad Abdullah dapat meninjau template website
secara online sebelum content dan asset asli difinalisasi.

Tahap visual sebelumnya telah selesai dan dikunci:

- Final Coded Wireframe v1.2
- Final Coded Mockup v1.2
- Final Coded Prototype v1.2
- Visual Handoff v1.0

Prototype v1.2 digunakan sebagai referensi implementasi utama. Kode prototype akan diadaptasi dan dirapikan menjadi frontend final yang lebih terstruktur, mudah dipelihara, responsif, accessible, dan siap dideploy.

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
- Professional but personal

## Technology

Project MVP menggunakan:

- HTML
- CSS
- JavaScript
- ES Modules

Project tidak menggunakan:

- Backend
- Database
- Authentication
- Admin panel
- CMS
- Frontend framework
- Booking system
- Payment system

## Project Structure

```text
fuad-portfolio-project/
├── index.html
├── README.md
├── .editorconfig
├── .gitignore
├── assets/
│   ├── icons/
│   └── images/
│       ├── about/
│       ├── contact/
│       ├── gallery/
│       ├── hero/
│       └── portfolio/
├── css/
│   ├── components.css
│   ├── foundation.css
│   └── home.css
└── js/
    ├── main.js
    └── modules/
        ├── lightbox.js
        └── navigation.js
```

## Landing Page Structure

Urutan section final:

1. Navbar
2. Hero Section
3. About Photographer
4. Portfolio Highlights
5. Event Experience
6. Photography Services
7. Selected Works / Gallery
8. Contact / CTA
9. Footer

Urutan section tersebut sudah dikunci dan tidak diubah tanpa pembahasan terlebih dahulu.

## Typography

- Heading: Bebas Neue, weight 400
- Body and interface: Manrope

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

## Development Workflow

```text
Project Setup
→ Base HTML
→ Global CSS and Design Tokens
→ Base JavaScript
→ Navbar
→ Hero Section
→ About Photographer
→ Portfolio Highlights
→ Event Experience
→ Photography Services
→ Selected Works / Gallery
→ Contact / CTA
→ Footer
→ Responsive Refinement
→ Interaction Testing
→ Content and Asset Finalization
→ Performance and Accessibility
→ Deployment Preparation
```

## Content Status

Sebagian konten dan gambar masih menggunakan simulated content dan placeholder.

Sebelum publikasi, bagian berikut harus dikonfirmasi atau diganti:

- Hero image
- About image
- Portfolio images
- Gallery images
- Contact background
- Hero headline dan subheadline
- About biography
- Event Experience asli
- Photography Services asli
- WhatsApp
- Instagram
- Email
- Caption dan alt text
- Bahasa final website

Simulated Event Experience tidak boleh dianggap sebagai pengalaman faktual Fuad Abdullah.

## Running the Project

Project sebaiknya dijalankan menggunakan local development server.

Contoh menggunakan VS Code Live Server:

1. Buka folder project melalui VS Code.
2. Klik kanan file `index.html`.
3. Pilih **Open with Live Server**.
4. Website akan terbuka di browser.

Alternatif menggunakan Python:

```bash
python -m http.server 5500
```

Kemudian buka:

```text
http://localhost:5500
```

## Development Rules

- Jangan membuat desain baru dari awal.
- Gunakan Prototype v1.2 sebagai referensi utama.
- Jangan mengubah urutan section tanpa pembahasan.
- Jangan mengganti typography atau palet warna tanpa pembahasan.
- Jangan menganggap placeholder sebagai data final.
- Perubahan pada satu bagian tidak boleh mengubah bagian lain tanpa kebutuhan.
- Setiap tahap harus diuji sebelum masuk ke tahap berikutnya.
