# DAPZY OFFICIAL — Website Portofolio 3D + Digital Store

Website statis responsif dengan tema hitam-biru neon, efek 3D CSS, katalog produk, QRIS, detail DANA, tombol salin, dan pemesanan lewat WhatsApp.

## Isi folder
- `index.html` — struktur halaman
- `style.css` — desain responsif dan animasi 3D
- `script.js` — tombol pesan, salin nomor/nama, modal QRIS, dan konfigurasi
- `assets/qris.jpg` — gambar QRIS yang diberikan

## WAJIB sebelum dipublikasikan
1. Buka `script.js`.
2. Cari `WA_ADMIN: "GANTI_DENGAN_NOMOR_WHATSAPP_62"`.
3. Ganti dengan nomor WhatsApp admin format internasional, contoh `6281234567890` (contoh saja, jangan pakai nomor contoh tersebut).
4. Simpan perubahan.

Nama DANA, nomor DANA, dan tautan saluran dapat diubah pada objek `CONFIG` di bagian atas `script.js` dan detail yang tampil pada `index.html` jika perlu.

## Jalankan di HP
Buka `index.html` menggunakan editor/preview HTML yang tersedia di Android. Untuk menguji semua fitur, gunakan browser.

## Publikasikan gratis dengan GitHub Pages
1. Buat repository baru di GitHub.
2. Unggah isi folder ini (`index.html`, `style.css`, `script.js`, `assets/`, dan `.nojekyll`) ke root repository. Jangan unggah folder ZIP ke dalam repository sebagai pengganti file-file ini.
3. Di repository, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
6. Tunggu proses publikasi selesai, lalu buka alamat Pages yang diberikan GitHub.

## Catatan pembayaran dan keamanan
- Versi ini menggunakan **konfirmasi manual via WhatsApp**. QRIS ditampilkan sebagai gambar, dan tombol pesan hanya mengirim ringkasan pesanan.
- Website ini **tidak** mendeteksi pembayaran otomatis, tidak mengubah status menjadi lunas secara otomatis, dan tidak mengirim produk otomatis.
- Jangan pernah menaruh PIN, OTP, password, atau secret key payment gateway di file frontend.
- Untuk pembayaran otomatis di masa depan, gunakan payment gateway resmi dan backend server-side untuk membuat invoice serta memverifikasi webhook.
- Pastikan QRIS dan nomor pembayaran masih benar sebelum dipakai menerima pembayaran.
- Harga adalah harga awal yang diberikan pemilik; admin sebaiknya mengonfirmasi total dan ketersediaan sebelum pelanggan membayar.

## Mengubah produk dan harga
Produk berada di `index.html` pada elemen dengan atribut `data-product` dan `data-price`. Perbarui nama, deskripsi, teks harga, serta nilai atribut tersebut bersama-sama.


Catatan versi perbaikan: gambar QRIS sudah ditanam langsung sebagai data URL di index.html, jadi tidak memerlukan folder assets atau file qris.jpg terpisah. Pada layar ponsel, kartu produk ditampilkan satu kolom untuk mencegah terpotong ke samping.
