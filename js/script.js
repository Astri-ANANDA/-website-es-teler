/**
 * ============================================================================
 * ES TELER — Konfigurasi & Logika Interaktif Website
 * ============================================================================
 * Website Profil & Informasi Usaha Kuliner Resmi ES TELER
 * ============================================================================
 */

const STORE_CONFIG = {
  brandName: "ES TELER",
  whatsappNumber: "6289506026970", // Nomor resmi: 0895-0602-6970
  mapsUrl: "https://maps.app.goo.gl/bLaHZUj429WmUcu38"
};

/**
 * Format angka ke mata uang Rupiah (contoh: Rp10.000)
 */
function formatRupiah(amount) {
  const number = Number(amount) || 0;
  return "Rp" + number.toLocaleString("id-ID");
}

/**
 * Bersihkan format nomor telepon agar siap dipakai pada URL wa.me
 */
function sanitizePhoneNumber(rawPhone) {
  if (!rawPhone) return "";
  let digits = String(rawPhone).replace(/\D/g, "");
  if (digits.startsWith("0")) {
    digits = "62" + digits.slice(1);
  }
  return digits;
}

/**
 * Buat URL WhatsApp resmi dengan pesan otomatis
 */
function createWhatsAppUrl(messageText) {
  const phone = sanitizePhoneNumber(STORE_CONFIG.whatsappNumber) || "6289506026970";
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Data Produk Resmi ES TELER
 * Menggunakan foto asli dari folder FOTO dan harga resmi yang konsisten.
 */
const PRODUCTS_DATA = [
  {
    id: "es-teler-cup",
    name: "Es Teler 1 Cup",
    price: 10000,
    badge: "Porsi Personal Favorit",
    badgeClass: "",
    image: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.06.jpeg",
    description:
      "Sajian Es Teler segar dalam kemasan 1 Cup penuh berisi potongan buah naga merah, semangka, melon, cendol pandan, cincau hitam, jelly, roti, kacang, biji selasih, dan kuah susu creamy spesial.",
    tags: ["Kemasan Cup Praktis", "Isian Buah & Topping Lengkap", "Kuah Susu Creamy"],
    waMessage: "Halo Admin ES TELER, saya ingin memesan Es Teler 1 Cup (Rp10.000). Apakah saat ini tersedia?"
  },
  {
    id: "es-teler-teko",
    name: "Es Teler 1 Teko",
    price: 25000,
    badge: "Porsi Puas / Keluarga",
    badgeClass: "badge-teko",
    image: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.08.jpeg",
    description:
      "Kemasan 1 Teko jumbo penuh dengan komposisi lengkap buah segar, cendol, cincau, jelly, selasih, ditambah tape singkong (peuyeum) manis dan kuah creamy melimpah. Lebih hemat untuk dinikmati bersama!",
    tags: ["Kemasan Teko Jumbo", "Topping Tape Singkong & Buah", "Cocok Rame-Rame"],
    waMessage: "Halo Admin ES TELER, saya ingin memesan Es Teler 1 Teko (Rp25.000). Apakah saat ini tersedia?"
  }
];

/**
 * Data Galeri Foto Asli dari folder FOTO
 */
const GALLERY_DATA = [
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.06.jpeg",
    title: "Es Teler 1 Cup (Rp10.000)",
    category: "produk",
    categoryLabel: "Produk Utama",
    desc: "Sajian Es Teler 1 Cup dengan potongan buah naga, semangka, melon, cendol, cincau, dan kuah susu pink segar."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.08.jpeg",
    title: "Es Teler 1 Teko (Rp25.000)",
    category: "produk",
    categoryLabel: "Produk Utama",
    desc: "Porsi 1 Teko penuh dengan tambahan tape singkong manis, biji selasih, dan aneka buah segar."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.10.jpeg",
    title: "Varian Sajian Cup ES TELER",
    category: "produk",
    categoryLabel: "Produk Cup & Teko",
    desc: "Lapisan isian yang padat dan kuah creamy segar di setiap cup ES TELER."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.11.jpeg",
    title: "Sajian Teko Jumbo ES TELER",
    category: "produk",
    categoryLabel: "Produk Cup & Teko",
    desc: "Tampilan porsi 1 Teko (Rp25.000) yang siap dinikmati bersama keluarga atau teman."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.28.jpeg",
    title: "Deretan Cup ES TELER Siap Saji",
    category: "produk",
    categoryLabel: "Produk Cup & Teko",
    desc: "Disiapkan segar setiap hari dengan takaran porsi yang konsisten dan melimpah."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.29.jpeg",
    title: "Potongan Buah Naga Merah Segar",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Buah naga merah pilihan yang manis dan memberikan warna alami yang menggugah selera."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.23.jpeg",
    title: "Bola-Bola Buah Semangka",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Buah semangka merah segar yang kaya air dan menambah sensasi dingin menyegarkan."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.05.jpeg",
    title: "Bola-Bola Buah Melon",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Potongan bulat buah melon segar yang manis dan lembut di setiap suapan."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.21.jpeg",
    title: "Cendol Hijau Pandan",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Cendol hijau lembut dengan aroma pandan segar sebagai pelengkap khas ES TELER."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.24.jpeg",
    title: "Cincau Hitam Potong Dadu",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Cincau hitam kenyal dan segar yang menyeimbangkan rasa manis kuah susu."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.22.jpeg",
    title: "Jelly Segar Potong Dadu",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Potongan jelly manis dengan tekstur kenyal yang disukai semua kalangan."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.26.jpeg",
    title: "Tape Singkong (Peuyeum) Manis",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Tape singkong kuning pilihan yang lembut, legit, dan memperkaya cita rasa ES TELER."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.19.jpeg",
    title: "Biji Selasih Segar",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Taburan biji selasih yang memberikan tekstur unik dan menyegarkan."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.25.jpeg",
    title: "Potongan Roti Tawar Dadu",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Potongan roti lembut yang menyerap gurih dan manisnya kuah susu ES TELER."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.11%20(1).jpeg",
    title: "Topping Kacang Gurih",
    category: "bahan",
    categoryLabel: "Isian & Topping",
    desc: "Pelengkap kacang rebus gurih yang menambah tekstur kaya pada sajian ES TELER."
  },
  {
    src: "assets/images/WhatsApp%20Image%202026-11-11%20at%2019.10.12.jpeg",
    title: "Suasana Pelanggan di Gerai ES TELER",
    category: "gerai",
    categoryLabel: "Suasana Gerai",
    desc: "Antusiasme pelanggan yang membeli langsung kesegaran ES TELER di lokasi usaha kami."
  }
];

/**
 * Tampilkan notifikasi singkat (Toast)
 */
let toastTimeout = null;
function showToast(message) {
  const toastEl = document.getElementById("toastNotification");
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

/**
 * Render Katalog Produk (1 Cup Rp10.000 & 1 Teko Rp25.000)
 * Dengan tombol langsung Pesan via WhatsApp yang responsif & praktis
 */
function renderProductsCatalog() {
  const gridEl = document.getElementById("productsGrid");
  if (!gridEl) return;

  gridEl.innerHTML = PRODUCTS_DATA.map((product) => {
    const tagsHtml = product.tags
      .map((tag) => `<span class="product-tag">${tag}</span>`)
      .join("");

    const waUrl = createWhatsAppUrl(product.waMessage);

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-image-wrap">
          <img
            src="${product.image}"
            alt="${product.name} - ${formatRupiah(product.price)}"
            class="product-image"
            loading="lazy"
          />
          <span class="product-badge ${product.badgeClass}">${product.badge}</span>
        </div>
        <div class="product-body">
          <div class="product-title-row">
            <h3 class="product-name">${product.name}</h3>
            <span class="product-price">${formatRupiah(product.price)}</span>
          </div>
          <p class="product-desc">${product.description}</p>
          <div class="product-tags">${tagsHtml}</div>
          <div class="product-actions">
            <a
              href="${waUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-whatsapp btn-block"
              aria-label="Pesan ${product.name} via WhatsApp"
            >
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Render Galeri Foto Produk & Bahan Asli
 */
function renderGallery(filter = "all") {
  const galleryGridEl = document.getElementById("galleryGrid");
  if (!galleryGridEl) return;

  const filteredItems =
    filter === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === filter);

  galleryGridEl.innerHTML = filteredItems
    .map(
      (item, index) => `
      <figure class="gallery-item" data-gallery-index="${index}" data-src="${item.src}" data-title="${item.title}" data-desc="${item.desc}">
        <div class="gallery-img-wrap">
          <img
            src="${item.src}"
            alt="${item.title} - ES TELER"
            loading="lazy"
          />
        </div>
        <figcaption class="gallery-caption">
          <span class="gallery-category-tag">${item.categoryLabel}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </figcaption>
      </figure>
    `
    )
    .join("");
}

/**
 * Buka & Tutup Lightbox Galeri
 */
function openLightbox(src, title, desc) {
  const modalEl = document.getElementById("lightboxModal");
  const imgEl = document.getElementById("lightboxImage");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");

  if (!modalEl || !imgEl) return;

  imgEl.src = src;
  imgEl.alt = title || "Foto Galeri ES TELER";
  if (titleEl) titleEl.textContent = title || "";
  if (descEl) descEl.textContent = desc || "";

  modalEl.classList.add("active");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modalEl = document.getElementById("lightboxModal");
  if (modalEl) {
    modalEl.classList.remove("active");
    modalEl.setAttribute("aria-hidden", "true");
  }
  document.body.style.overflow = "";
}

/**
 * Inisialisasi Tampilan Nomor WhatsApp di Bagian Kontak
 */
function renderContactWhatsappInfo() {
  const displayEl = document.getElementById("contactWhatsappDisplay");
  if (!displayEl) return;
  displayEl.innerHTML = `Nomor WhatsApp Resmi: <strong>0895-0602-6970</strong>`;
}

/* ================= INISIALISASI & EVENT LISTENERS ================= */
document.addEventListener("DOMContentLoaded", () => {
  renderProductsCatalog();
  renderGallery("all");
  renderContactWhatsappInfo();

  // Tahun otomatis di footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Tombol Chat via WhatsApp di bagian Kontak
  const directWhatsappContactBtnEl = document.getElementById("directWhatsappContactBtn");
  if (directWhatsappContactBtnEl) {
    directWhatsappContactBtnEl.addEventListener("click", () => {
      const waUrl = createWhatsAppUrl(
        "Halo Admin *ES TELER*, saya ingin menanyakan informasi seputar produk dan pemesanan Es Teler (1 Cup Rp10.000 / 1 Teko Rp25.000)."
      );
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }

  // Filter Galeri
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter") || "all";
      renderGallery(filterValue);
    });
  });

  // Klik Item Galeri -> Buka Lightbox
  const galleryGridEl = document.getElementById("galleryGrid");
  if (galleryGridEl) {
    galleryGridEl.addEventListener("click", (e) => {
      const figure = e.target.closest(".gallery-item");
      if (!figure) return;
      const src = figure.getAttribute("data-src");
      const title = figure.getAttribute("data-title");
      const desc = figure.getAttribute("data-desc");
      if (src) openLightbox(src, title, desc);
    });
  }

  const closeLightboxBtnEl = document.getElementById("closeLightboxBtn");
  if (closeLightboxBtnEl) {
    closeLightboxBtnEl.addEventListener("click", closeLightbox);
  }

  // Tutup lightbox saat klik backdrop atau tekan Escape
  window.addEventListener("click", (e) => {
    const lightboxModal = document.getElementById("lightboxModal");
    if (e.target === lightboxModal) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // Menu Navigasi Mobile (Hamburger)
  const mobileMenuBtnEl = document.getElementById("mobileMenuBtn");
  const navLinksEl = document.getElementById("navLinks");
  if (mobileMenuBtnEl && navLinksEl) {
    mobileMenuBtnEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navLinksEl.classList.toggle("open");
      mobileMenuBtnEl.classList.toggle("active", isOpen);
      mobileMenuBtnEl.setAttribute("aria-expanded", String(isOpen));
    });

    // Ketika menu diklik, tutup menu otomatis dan scroll ke target
    navLinksEl.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinksEl.classList.remove("open");
        mobileMenuBtnEl.classList.remove("active");
        mobileMenuBtnEl.setAttribute("aria-expanded", "false");
      });
    });

    // Tutup menu otomatis jika pengguna mengklik area luar menu
    document.addEventListener("click", (e) => {
      if (
        navLinksEl.classList.contains("open") &&
        !navLinksEl.contains(e.target) &&
        !mobileMenuBtnEl.contains(e.target)
      ) {
        navLinksEl.classList.remove("open");
        mobileMenuBtnEl.classList.remove("active");
        mobileMenuBtnEl.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight link navigasi aktif saat scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links .nav-link");
  const navbarEl = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (navbarEl) {
      navbarEl.classList.toggle("scrolled", window.scrollY > 12);
    }

    let currentSectionId = "beranda";
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentSectionId = section.getAttribute("id") || currentSectionId;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentSectionId}`);
    });
  });
});
