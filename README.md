# ES TELER — Website Promosi & Pemesanan Online

Website statis modern, segar, dan responsif untuk usaha kuliner dan minuman **ES TELER**. Dilengkapi katalog produk resmi, keranjang belanja otomatis, galeri foto produk asli, lokasi Google Maps resmi, serta fitur checkout langsung ke WhatsApp.

---

## 1. Identitas & Produk Resmi

- **Nama Usaha:** ES TELER
- **Bidang Usaha:** Kuliner dan Minuman
- **Daftar Produk & Harga:**
  - **Es Teler 1 Cup** — **Rp10.000**
  - **Es Teler 1 Teko** — **Rp25.000**
- **Lokasi Google Maps Resmi:** [https://maps.app.goo.gl/bLaHZUj429WmUcu38](https://maps.app.goo.gl/bLaHZUj429WmUcu38)
- **Nomor WhatsApp Resmi:** `089506026970` (`6289506026970`)

---

## 2. Struktur Folder Proyek

```text
WEB ES BARU/
├── index.html              # Halaman utama website ES TELER
├── css/
│   └── style.css           # Desain visual, warna, layout responsif, dan komponen UI
├── js/
│   └── script.js           # Data produk, logika keranjang belanja, galeri, & checkout WhatsApp
├── assets/
│   └── images/             # Aset foto produk asli ES TELER yang digunakan halaman website
├── FOTO/                   # Folder arsip foto asli yang tetap dipertahankan utuh
└── README.md               # Dokumentasi penggunaan & panduan deployment
```

---

## 3. Cara Menjalankan Website Secara Lokal

Website ini dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript** murni tanpa ketergantungan database atau server backend:

1. **Membuka Langsung:**
   Klik dua kali file `index.html` untuk membukanya langsung di browser (Chrome, Edge, Firefox, Safari).
2. **Menggunakan Live Server (VS Code):**
   Jika menggunakan Visual Studio Code, klik kanan pada `index.html` lalu pilih **"Open with Live Server"**.

---

## 4. Cara Mengatur Nomor WhatsApp Usaha

Nomor WhatsApp pemesanan dikelola pada satu tempat agar mudah diperbarui kapan saja:

1. Buka file `js/script.js`.
2. Pada bagian paling atas (`STORE_CONFIG`), isi properti `whatsappNumber` dengan nomor WhatsApp aktif menggunakan awalan kode negara `62` (tanpa tanda `+` atau spasi):

```javascript
const STORE_CONFIG = {
  brandName: "ES TELER",
  whatsappNumber: "6289506026970", // Nomor WhatsApp resmi ES TELER (089506026970)
  mapsUrl: "https://maps.app.goo.gl/bLaHZUj429WmUcu38",
  storageKey: "es_teler_cart_v1"
};
```

3. Simpan file `js/script.js`. Seluruh tombol Checkout dan Chat WhatsApp di website akan otomatis mengarah ke nomor tersebut.

---

## 5. Cara Mengubah Data Produk & Harga

Jika di kemudian hari Anda ingin memperbarui deskripsi atau menambah varian produk, buka file `js/script.js` dan ubah array `PRODUCTS_DATA`.

---

## 6. Panduan Hosting Gratis di Vercel

Website ini sudah siap di-deploy ke **Vercel** secara gratis:

1. Upload folder proyek ini ke repositori **GitHub**, atau gunakan fitur drag-and-drop / Vercel CLI.
2. Masuk ke dashboard [Vercel](https://vercel.com) dan klik **"Add New Project"**.
3. Pilih repositori proyek ini.
4. Biarkan pengaturan **Framework Preset** pada `Other` (Static Site) dan **Root Directory** pada `./` (karena `index.html` sudah berada di root).
5. Klik **Deploy** — website **ES TELER** langsung aktif dan siap diakses pelanggan.
