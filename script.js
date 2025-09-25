window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-anim');

            if (entry.target.classList.contains('skills-content')) {
                
                const skillItems = entry.target.querySelectorAll('.skill-item');
                
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100);
                });
            }

        } 
        else {
            entry.target.classList.remove('show-anim');
        }
    });
}, { 
    threshold: 0.1
});

const animatedElements = document.querySelectorAll('.hidden-anim');
animatedElements.forEach((el) => observer.observe(el));


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});