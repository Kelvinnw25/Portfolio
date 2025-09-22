/* ===== EFEK 1: SHADOW DI NAVIGASI SAAT SCROLL ===== */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    // Tambahkan class 'header-scrolled' jika scroll lebih dari 50px
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Ini tetap jalanin animasi 'fade-in' buat card-nya
            entry.target.classList.add('show-anim');

            // ===== TAMBAHAN KHUSUS UNTUK SKILLS (INI KODENYA)=====
            // Cek apakah card yg masuk adalah 'skills-content'
            if (entry.target.classList.contains('skills-content')) {
                
                // Ambil semua skill-item di DALAM card itu
                const skillItems = entry.target.querySelectorAll('.skill-item');
                
                // Loop satu per satu dan kasih delay
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100); // Muncul tiap 100ms (0.1 detik)
                });
            }
            // ================================================

        } 
        else {
            entry.target.classList.remove('show-anim');
            // (Nanti tambahin kode buat remove 'show' dari skill-item juga)
        }
    });
}, { 
    threshold: 0.1 // Animasi jalan pas 10% card-nya keliatan
});

const animatedElements = document.querySelectorAll('.hidden-anim');
// Daftarkan semua elemen itu ke 'observer'
animatedElements.forEach((el) => observer.observe(el));


/* ===== EFEK 3: SMOOTH SCROLLING DARI NAVIGASI ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Hentikan perilaku default 'loncat'

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Efek smooth scroll
            });
        }
    });
});