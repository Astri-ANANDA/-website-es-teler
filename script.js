/**
 * ============================================================================
 * ES TELER — Konfigurasi & Logika Interaktif Website
 * ============================================================================
 * Petunjuk Pengaturan Nomor WhatsApp:
 * Isi properti `whatsappNumber` di bawah ini menggunakan format kode negara
 * tanpa tanda tambah (+) atau spasi, contoh: "6281234567890".
 * ============================================================================
 */

const STORE_CONFIG = {
  brandName: "ES TELER",
  whatsappNumber: "6289506026970", // Nomor resmi: 089506026970
  mapsUrl: "https://maps.app.goo.gl/bLaHZUj429WmUcu38",
  storageKey: "es_teler_cart_v1"
};

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
    tags: ["Kemasan Cup Praktis", "Isian Buah & Topping Lengkap", "Kuah Susu Creamy"]
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
    tags: ["Kemasan Teko Jumbo", "Topping Tape Singkong & Buah", "Cocok Rame-Rame"]
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

/* ================= STATE KERANJANG BELANJA ================= */
let cart = {};
let productCardQuantities = {
  "es-teler-cup": 1,
  "es-teler-teko": 1
};

/**
 * Format angka ke mata uang Rupiah (contoh: Rp10.000)
 */
function formatRupiah(amount) {
  const number = Number(amount) || 0;
  return "Rp" + number.toLocaleString("id-ID");
}

/**
 * Muat keranjang dari localStorage
 */
function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORE_CONFIG.storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        cart = parsed;
      }
    }
  } catch (err) {
    cart = {};
  }
}

/**
 * Simpan keranjang ke localStorage
 */
function saveCartToStorage() {
  try {
    localStorage.setItem(STORE_CONFIG.storageKey, JSON.stringify(cart));
  } catch (err) {
    // Abaikan jika mode privat memblokir storage
  }
}

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
 */
function renderProductsCatalog() {
  const gridEl = document.getElementById("productsGrid");
  if (!gridEl) return;

  gridEl.innerHTML = PRODUCTS_DATA.map((product) => {
    const defaultQty = productCardQuantities[product.id] || 1;
    const tagsHtml = product.tags
      .map((tag) => `<span class="product-tag">${tag}</span>`)
      .join("");

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-image-wrap">
          <img
            src="${product.image}"
            alt="${product.name} - ${formatRupiah(product.price)}"
            class="product-image"
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
            <div class="qty-selector" aria-label="Pengatur jumlah ${product.name}">
              <button
                type="button"
                class="qty-btn"
                data-action="card-dec"
                data-id="${product.id}"
                aria-label="Kurangi jumlah ${product.name}"
              >&minus;</button>
              <input
                type="text"
                class="qty-input"
                id="card-qty-${product.id}"
                value="${defaultQty}"
                readonly
                aria-label="Jumlah ${product.name}"
              />
              <button
                type="button"
                class="qty-btn"
                data-action="card-inc"
                data-id="${product.id}"
                aria-label="Tambah jumlah ${product.name}"
              >&#43;</button>
            </div>
            <button
              type="button"
              class="btn btn-primary add-to-cart-btn"
              data-action="add-to-cart"
              data-id="${product.id}"
            >
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Tambah ke Keranjang</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Hitung total item dan total harga di keranjang
 */
function calculateCartTotals() {
  let totalQty = 0;
  let totalPrice = 0;
  const items = [];

  PRODUCTS_DATA.forEach((product) => {
    const qty = Number(cart[product.id]) || 0;
    if (qty > 0) {
      const subtotal = qty * product.price;
      totalQty += qty;
      totalPrice += subtotal;
      items.push({
        ...product,
        qty,
        subtotal
      });
    }
  });

  return { totalQty, totalPrice, items };
}

/**
 * Render tampilan Keranjang Belanja & perbarui seluruh indikator
 */
function renderCart() {
  const { totalQty, totalPrice, items } = calculateCartTotals();

  const navCartCountEl = document.getElementById("navCartCount");
  const cartTotalItemsLabelEl = document.getElementById("cartTotalItemsLabel");
  const clearCartBtnEl = document.getElementById("clearCartBtn");
  const cartItemsContainerEl = document.getElementById("cartItemsContainer");
  const summaryTotalQtyEl = document.getElementById("summaryTotalQty");
  const summarySubtotalEl = document.getElementById("summarySubtotal");
  const summaryGrandTotalEl = document.getElementById("summaryGrandTotal");

  if (navCartCountEl) {
    navCartCountEl.textContent = String(totalQty);
  }

  if (cartTotalItemsLabelEl) {
    cartTotalItemsLabelEl.textContent = `${totalQty} Produk Dipilih`;
  }

  if (clearCartBtnEl) {
    clearCartBtnEl.hidden = items.length === 0;
  }

  if (summaryTotalQtyEl) {
    summaryTotalQtyEl.textContent = `${totalQty} item`;
  }

  if (summarySubtotalEl) {
    summarySubtotalEl.textContent = formatRupiah(totalPrice);
  }

  if (summaryGrandTotalEl) {
    summaryGrandTotalEl.textContent = formatRupiah(totalPrice);
  }

  if (!cartItemsContainerEl) return;

  if (items.length === 0) {
    cartItemsContainerEl.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">🍧</div>
        <p>Keranjang belanja Anda masih kosong.</p>
        <p>Silakan pilih <strong>Es Teler 1 Cup (Rp10.000)</strong> atau <strong>Es Teler 1 Teko (Rp25.000)</strong> di atas untuk mulai memesan.</p>
      </div>
    `;
    return;
  }

  cartItemsContainerEl.innerHTML = items
    .map(
      (item) => `
      <div class="cart-item-row" data-cart-item="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-unit-price">Harga satuan: ${formatRupiah(item.price)}</span>
        </div>
        <div class="qty-selector" aria-label="Ubah jumlah ${item.name} di keranjang">
          <button
            type="button"
            class="qty-btn"
            data-action="cart-dec"
            data-id="${item.id}"
            aria-label="Kurangi ${item.name}"
          >&minus;</button>
          <input
            type="text"
            class="qty-input"
            value="${item.qty}"
            readonly
            aria-label="Jumlah ${item.name} di keranjang"
          />
          <button
            type="button"
            class="qty-btn"
            data-action="cart-inc"
            data-id="${item.id}"
            aria-label="Tambah ${item.name}"
          >&#43;</button>
        </div>
        <div class="cart-item-subtotal">${formatRupiah(item.subtotal)}</div>
        <button
          type="button"
          class="cart-remove-btn"
          data-action="cart-remove"
          data-id="${item.id}"
          aria-label="Hapus ${item.name} dari keranjang"
          title="Hapus produk"
        >
          &times;
        </button>
      </div>
    `
    )
    .join("");
}

/**
 * Tambah produk ke keranjang
 */
function addToCart(productId, qtyToAdd = 1) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const currentQty = Number(cart[productId]) || 0;
  cart[productId] = currentQty + Math.max(1, Number(qtyToAdd) || 1);

  saveCartToStorage();
  renderCart();
  showToast(`✓ ${qtyToAdd}x ${product.name} ditambahkan ke keranjang`);
}

/**
 * Ubah jumlah item di dalam keranjang
 */
function updateCartItemQty(productId, delta) {
  const currentQty = Number(cart[productId]) || 0;
  const nextQty = currentQty + delta;

  if (nextQty <= 0) {
    delete cart[productId];
    showToast("Produk dihapus dari keranjang");
  } else {
    cart[productId] = nextQty;
  }

  saveCartToStorage();
  renderCart();
}

/**
 * Hapus satu jenis produk dari keranjang
 */
function removeCartItem(productId) {
  if (cart[productId]) {
    delete cart[productId];
    saveCartToStorage();
    renderCart();
    showToast("Produk dihapus dari keranjang");
  }
}

/**
 * Kosongkan seluruh keranjang
 */
function clearCart() {
  cart = {};
  saveCartToStorage();
  renderCart();
  showToast("Keranjang belanja dikosongkan");
}

/**
 * Susun teks pesan WhatsApp yang rapi sesuai standar ES TELER
 */
function buildWhatsappMessage() {
  const { totalQty, totalPrice, items } = calculateCartTotals();
  const customerNameInput = document.getElementById("customerName");
  const customerNotesInput = document.getElementById("customerNotes");

  const customerName = customerNameInput ? customerNameInput.value.trim() : "";
  const customerNotes = customerNotesInput ? customerNotesInput.value.trim() : "";

  const lines = [
    `Halo Admin *${STORE_CONFIG.brandName}*, saya ingin memesan:`,
    ""
  ];

  items.forEach((item, idx) => {
    lines.push(
      `${idx + 1}. *${item.name}*`,
      `   Jumlah: ${item.qty} x ${formatRupiah(item.price)} = *${formatRupiah(item.subtotal)}*`
    );
  });

  lines.push(
    "",
    `Total Jumlah Produk: *${totalQty} item*`,
    `*Total Pembayaran: ${formatRupiah(totalPrice)}*`
  );

  if (customerName) {
    lines.push("", `Nama Pemesan: ${customerName}`);
  }
  if (customerNotes) {
    lines.push(`Catatan: ${customerNotes}`);
  }

  lines.push("", "Mohon konfirmasi pesanan saya. Terima kasih!");

  return lines.join("\n");
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
 * Buka Modal Ringkasan Pesanan sebelum mengarahkan ke WhatsApp
 */
function openCheckoutModal() {
  const { items, totalPrice } = calculateCartTotals();

  if (items.length === 0) {
    showToast("Pilih produk terlebih dahulu sebelum checkout!");
    const menuSection = document.getElementById("menu");
    if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const modalEl = document.getElementById("checkoutModal");
  const tbodyEl = document.getElementById("modalOrderItemsBody");
  const grandTotalEl = document.getElementById("modalGrandTotal");
  const previewEl = document.getElementById("whatsappMessagePreview");
  const configNoticeEl = document.getElementById("whatsappConfigNotice");

  if (tbodyEl) {
    tbodyEl.innerHTML = items
      .map(
        (item) => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td class="text-center">${item.qty}</td>
          <td class="text-right">${formatRupiah(item.price)}</td>
          <td class="text-right"><strong>${formatRupiah(item.subtotal)}</strong></td>
        </tr>
      `
      )
      .join("");
  }

  if (grandTotalEl) {
    grandTotalEl.textContent = formatRupiah(totalPrice);
  }

  if (previewEl) {
    previewEl.textContent = buildWhatsappMessage();
  }

  const configuredPhone = sanitizePhoneNumber(STORE_CONFIG.whatsappNumber);
  if (configNoticeEl) {
    configNoticeEl.hidden = Boolean(configuredPhone);
  }

  if (modalEl) {
    modalEl.classList.add("active");
    modalEl.setAttribute("aria-hidden", "false");
  }
}

function closeCheckoutModal() {
  const modalEl = document.getElementById("checkoutModal");
  if (modalEl) {
    modalEl.classList.remove("active");
    modalEl.setAttribute("aria-hidden", "true");
  }
}

/**
 * Arahkan pelanggan ke WhatsApp dengan format pesan otomatis
 */
function proceedToWhatsapp() {
  const message = buildWhatsappMessage();
  const encodedMessage = encodeURIComponent(message);

  const tempInputEl = document.getElementById("tempWhatsappInput");
  const tempPhone = tempInputEl ? sanitizePhoneNumber(tempInputEl.value) : "";
  const configuredPhone = sanitizePhoneNumber(STORE_CONFIG.whatsappNumber);
  const targetPhone = configuredPhone || tempPhone;

  const whatsappUrl = targetPhone
    ? `https://wa.me/${targetPhone}?text=${encodedMessage}`
    : `https://api.whatsapp.com/send?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
}

function closeLightbox() {
  const modalEl = document.getElementById("lightboxModal");
  if (modalEl) {
    modalEl.classList.remove("active");
    modalEl.setAttribute("aria-hidden", "true");
  }
}

/**
 * Perbarui Tampilan Nomor WhatsApp di Bagian Kontak
 */
function renderContactWhatsappInfo() {
  const displayEl = document.getElementById("contactWhatsappDisplay");
  if (!displayEl) return;

  const configuredPhone = sanitizePhoneNumber(STORE_CONFIG.whatsappNumber);
  if (configuredPhone) {
    displayEl.innerHTML = `Nomor WhatsApp Resmi: <strong>0895-0602-6970</strong>`;
  } else {
    displayEl.innerHTML = `Siap menerima pesanan online <strong>ES TELER</strong> via WhatsApp.`;
  }
}

/* ================= INISIALISASI & EVENT LISTENERS ================= */
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderProductsCatalog();
  renderCart();
  renderGallery("all");
  renderContactWhatsappInfo();

  // Tahun otomatis di footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Event Delegation untuk Katalog Produk
  const productsGridEl = document.getElementById("productsGrid");
  if (productsGridEl) {
    productsGridEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const action = btn.getAttribute("data-action");
      const id = btn.getAttribute("data-id");
      if (!id) return;

      if (action === "card-inc") {
        productCardQuantities[id] = (productCardQuantities[id] || 1) + 1;
        const inputEl = document.getElementById(`card-qty-${id}`);
        if (inputEl) inputEl.value = String(productCardQuantities[id]);
      } else if (action === "card-dec") {
        productCardQuantities[id] = Math.max(1, (productCardQuantities[id] || 1) - 1);
        const inputEl = document.getElementById(`card-qty-${id}`);
        if (inputEl) inputEl.value = String(productCardQuantities[id]);
      } else if (action === "add-to-cart") {
        const qty = productCardQuantities[id] || 1;
        addToCart(id, qty);
      }
    });
  }

  // Event Delegation untuk Keranjang Belanja
  const cartItemsContainerEl = document.getElementById("cartItemsContainer");
  if (cartItemsContainerEl) {
    cartItemsContainerEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const action = btn.getAttribute("data-action");
      const id = btn.getAttribute("data-id");
      if (!id) return;

      if (action === "cart-inc") {
        updateCartItemQty(id, 1);
      } else if (action === "cart-dec") {
        updateCartItemQty(id, -1);
      } else if (action === "cart-remove") {
        removeCartItem(id);
      }
    });
  }

  // Tombol Kosongkan Keranjang
  const clearCartBtnEl = document.getElementById("clearCartBtn");
  if (clearCartBtnEl) {
    clearCartBtnEl.addEventListener("click", clearCart);
  }

  // Tombol Keranjang di Navbar -> Scroll ke Keranjang
  const openCartBtnEl = document.getElementById("openCartBtn");
  if (openCartBtnEl) {
    openCartBtnEl.addEventListener("click", () => {
      const cartSection = document.getElementById("keranjang-section");
      if (cartSection) cartSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Input Nama & Catatan memperbarui preview jika modal dibuka
  const customerNameInput = document.getElementById("customerName");
  const customerNotesInput = document.getElementById("customerNotes");
  [customerNameInput, customerNotesInput].forEach((inputEl) => {
    if (inputEl) {
      inputEl.addEventListener("input", () => {
        const previewEl = document.getElementById("whatsappMessagePreview");
        if (previewEl) previewEl.textContent = buildWhatsappMessage();
      });
    }
  });

  // Tombol Checkout & Modal WhatsApp
  const checkoutPreviewBtnEl = document.getElementById("checkoutPreviewBtn");
  const closeCheckoutModalBtnEl = document.getElementById("closeCheckoutModalBtn");
  const cancelCheckoutBtnEl = document.getElementById("cancelCheckoutBtn");
  const confirmSendWhatsappBtnEl = document.getElementById("confirmSendWhatsappBtn");

  if (checkoutPreviewBtnEl) {
    checkoutPreviewBtnEl.addEventListener("click", openCheckoutModal);
  }
  if (closeCheckoutModalBtnEl) {
    closeCheckoutModalBtnEl.addEventListener("click", closeCheckoutModal);
  }
  if (cancelCheckoutBtnEl) {
    cancelCheckoutBtnEl.addEventListener("click", closeCheckoutModal);
  }
  if (confirmSendWhatsappBtnEl) {
    confirmSendWhatsappBtnEl.addEventListener("click", proceedToWhatsapp);
  }

  // Tombol Chat via WhatsApp di bagian Kontak
  const directWhatsappContactBtnEl = document.getElementById("directWhatsappContactBtn");
  if (directWhatsappContactBtnEl) {
    directWhatsappContactBtnEl.addEventListener("click", () => {
      const { items } = calculateCartTotals();
      if (items.length > 0) {
        openCheckoutModal();
      } else {
        const configuredPhone = sanitizePhoneNumber(STORE_CONFIG.whatsappNumber);
        const text = encodeURIComponent(
          "Halo Admin *ES TELER*, saya ingin menanyakan informasi pemesanan Es Teler (1 Cup Rp10.000 / 1 Teko Rp25.000)."
        );
        const url = configuredPhone
          ? `https://wa.me/${configuredPhone}?text=${text}`
          : `https://api.whatsapp.com/send?text=${text}`;
        window.open(url, "_blank", "noopener,noreferrer");
      }
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

  // Tutup modal saat klik backdrop atau tekan Escape
  window.addEventListener("click", (e) => {
    const checkoutModal = document.getElementById("checkoutModal");
    const lightboxModal = document.getElementById("lightboxModal");
    if (e.target === checkoutModal) closeCheckoutModal();
    if (e.target === lightboxModal) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCheckoutModal();
      closeLightbox();
    }
  });

  // Menu Navigasi Mobile (Hamburger)
  const mobileMenuBtnEl = document.getElementById("mobileMenuBtn");
  const navLinksEl = document.getElementById("navLinks");
  if (mobileMenuBtnEl && navLinksEl) {
    mobileMenuBtnEl.addEventListener("click", () => {
      const isOpen = navLinksEl.classList.toggle("open");
      mobileMenuBtnEl.setAttribute("aria-expanded", String(isOpen));
    });

    navLinksEl.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinksEl.classList.remove("open");
        mobileMenuBtnEl.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight link navigasi aktif saat scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links .nav-link");
  const navbarEl = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (navbarEl) {
      navbarEl.classList.toggle("scrolled", window.scrollY > 16);
    }

    let currentSectionId = "beranda";
    const scrollPos = window.scrollY + 140;

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
