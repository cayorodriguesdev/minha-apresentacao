document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Efeito de cursor personalizado
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Animação ao rolar
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .project-card, .price-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar

    // Efeito de digitação
    new TypeIt("#typing-effect", {
        strings: ["sites incríveis", "landing pages", "aplicações web"],
        speed: 100,
        breakLines: false,
        loop: true
    }).go();
});