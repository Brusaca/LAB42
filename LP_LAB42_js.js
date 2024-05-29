document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let carouselInterval;

    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    function startCarousel() {
        carouselInterval = setInterval(showNextItem, 5000); // Muda a cada 5 segundos
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    document.querySelector('.carousel').addEventListener('mouseenter', stopCarousel);
    document.querySelector('.carousel').addEventListener('mouseleave', startCarousel);

    // Iniciar o primeiro item como ativo e começar o carrossel
    carouselItems[currentItem].classList.add('active');
    startCarousel();

    // Destaque o item do menu ativo
    const menuItems = document.querySelectorAll('.menu-item');

    window.addEventListener('scroll', () => {
        menuItems.forEach(item => {
            const section = document.getElementById(item.getAttribute('data-section'));
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});
