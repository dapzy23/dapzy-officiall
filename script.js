/*
 * DAPZY OFFICIAL — konfigurasi mudah.
 * WA_ADMIN wajib diganti dengan nomor WhatsApp admin format internasional:
 * contoh Indonesia: 6281234567890 (tanpa tanda +, spasi, atau angka 0 di depan).
 * Website statis ini memakai konfirmasi pesanan manual; belum memverifikasi pembayaran otomatis.
 */
const CONFIG = {
  WA_ADMIN: "62881038298178",
  TELEGRAM_URL: "https://t.me/Dapzygens",
  DANA_NAME: "An daffa",
  DANA_NUMBER: "0881037758526",
  CHANNEL_URL: "https://whatsapp.com/channel/0029VbC326uGU3BCA5oFjt0J"
};

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function normalizedWhatsApp() {
  return String(CONFIG.WA_ADMIN || "").replace(/\D/g, "");
}
function openWhatsApp(message) {
  const number = normalizedWhatsApp();
  if (!number || number.includes("GANTI") || number.length < 10) {
    showToast("Admin WhatsApp belum diatur. Buka script.js dan isi WA_ADMIN.");
    return;
  }
  const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
function rupiah(value) {
  return new Intl.NumberFormat("id-ID", {style:"currency",currency:"IDR",maximumFractionDigits:0}).format(Number(value));
}
document.querySelectorAll("[data-buy]").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-product]");
    if (!card) return;
    const product = card.dataset.product;
    const price = Number(card.dataset.price);
    const message = [
      "Halo Admin DAPZY OFFICIAL 👋",
      "",
      "Saya ingin memesan produk:",
      "📦 Produk: " + product,
      "💰 Harga tertera: " + rupiah(price),
      "",
      "Mohon konfirmasi ketersediaan, total pembayaran, dan instruksi pembayaran QRIS/DANA.",
      "Saya memahami pesanan dan pembayaran dikonfirmasi manual oleh admin."
    ].join("\n");
    openWhatsApp(message);
  });
});
document.querySelectorAll("[data-contact]").forEach(button => {
  button.addEventListener("click", () => openWhatsApp("Halo Admin DAPZY OFFICIAL 👋\nSaya ingin bertanya tentang produk dan layanan."));
});
document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    const value = target ? target.textContent.trim() : "";
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const area = document.createElement("textarea");
        area.value = value; area.style.position = "fixed"; area.style.opacity = "0";
        document.body.appendChild(area); area.select();
        const ok = document.execCommand("copy"); area.remove();
        if (!ok) throw new Error("copy failed");
      }
      showToast("Berhasil disalin: " + value);
    } catch (error) {
      showToast("Salin manual: " + value);
    }
  });
});
const modal = document.getElementById("qrisModal");
document.getElementById("viewQris").addEventListener("click", () => {
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
});
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", () => {
  modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); }
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
