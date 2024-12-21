// Example animation for buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});
// Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Ubah angka 50 untuk mengatur posisi scroll yang memicu efek
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
