// Ambil elemen popup dan tombol
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const showPopup = document.getElementById("showPopup");

// Munculkan popup otomatis saat halaman dibuka
window.addEventListener("load", () => {
  popup.style.display = "flex";
});

// Tutup popup saat tombol diklik
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Bisa buka ulang popup lewat tombol
showPopup.addEventListener("click", () => {
  popup.style.display = "flex";
});
