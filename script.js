document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Galeria
    const galeriaContent = document.getElementById('galeria-content');
    
    const galeriaData = [
        { src: './img/paineis/painel-fazendinha-1.jpg', alt: 'Painel Sensorial Temático Fazendinha - Vista Lateral' },
        { src: './img/paineis/painel-fazendinha-2.jpg', alt: 'Painel Sensorial Temático Fazendinha - Vista Frontal' },
        { src: './img/paineis/painel-colorido-detalhe.jpg', alt: 'Painel Sensorial Colorido - Detalhe' },
        { src: './img/elementos/bichinhos-biscuit.jpg', alt: 'Detalhe dos biscuits de animais na fazendinha' },
        { src: './img/elementos/tubo-bolinhas.jpg', alt: 'Detalhe do cano e torneira no painel' }
    ];
    
    function loadGaleria() {
        if (!galeriaContent) return;
        galeriaContent.innerHTML = galeriaData.map(item => `
            <div class="galeria-item">
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
            </div>
        `).join('');
    }
    
    if (galeriaContent) {
        loadGaleria();
    }
});