document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        {
            id: 1,
            nome: "Painel Sensorial de Madeira Pinus - Modelo Casinha",
            tamanho: "100x60 cm",
            faixaEtaria: "A partir de 1 ano",
            badge: "Prazo: 30 dias úteis",
            descricao: "Um convite ao brincar com propósito. Produto exclusivo, desenvolvido para oferecer uma experiência rica em estímulos sensoriais e motores. Este painel interativo foi pensado para promover o desenvolvimento afetivo, cognitivo e psicomotor das crianças, por meio de atividades que estimulam o tato, a visão, a audição, a coordenação motora e habilidades como concentração, estratégia e raciocínio lógico.",
            material: "Madeira pinus natural (espessura de 20 mm)",
            pintura: "Atóxica e segura para crianças",
            fixacao: "Todos os itens são fixados com segurança",
            ideal: "Ambientes residenciais, escolares, terapêuticos ou espaços lúdicos",
            preco: "3x de R$ 260 sem juros ou R$ 747 à vista via Pix (5% de desconto)",
            imagens: [
                "./img/paineis/painel-sensorialfazendinha-frente.jpg",
                "./img/paineis/painel-sensorialfazendinha-ble.jpg",
                "./img/paineis/painel-sensorialfazendinha-bld.jpg",
                "./img/paineis/painel-sensorialfazendinha-cle.jpg",
                "./img/paineis/painel-sensorialfazendinha-cld.jpg",
                "./img/paineis/painel-sensorialfazendinha-cmeio.jpg"
            ]
        },
        {
            id: 2,
            nome: "Painel Sensorial Temático - Fazendinha",
            tamanho: "100x60 cm",
            faixaEtaria: "A partir de 1 ano", 
            badge: "Prazo: 30 dias úteis",
            descricao: "Uma experiência lúdica, personalizada e cheia de encantamento. Inspirado na vida no campo, traz elementos em biscuit como vaquinha, porquinho, galinha e cercadinhos de madeira, integrados com estímulos sensoriais como texturas, zíperes e sons. Uma proposta encantadora que trabalha linguagem, reconhecimento de animais e vínculo com o cotidiano.",
            material: "Madeira pinus natural (espessura de 20 mm)",
            pintura: "Atóxica e segura para crianças",
            personalizacao: "Temas como fazendinha, floresta, espaço sideral disponíveis",
            ideal: "Ambientes residenciais, escolares, terapêuticos ou espaços lúdicos",
            imagens: [
                "./img/paineis/painel-sensorial1-frente.jpg",
                "./img/paineis/painel-sensorial1-ladoe.jpg",
                "./img/paineis/painel-sensorial1-ble.jpg",
                "./img/paineis/painel-sensorial1-cle.jpg",
                "./img/paineis/painel-sensorial1-meioproximo.jpg"
            ]
        }
    ];

    const grid = document.getElementById('produtos-grid');

    function renderizarProdutos() {
        if (!grid) return;
        grid.innerHTML = produtos.map((produto, index) => `
            <div class="produto-card">
                <div class="produto-image-gallery">
                    ${produto.imagens.map((img, imgIndex) => `
                        <img src="${img}" alt="${produto.nome} - imagem ${imgIndex + 1}" class="gallery-img ${imgIndex === 0 ? 'active' : ''}" loading="lazy">
                    `).join('')}
                    <button class="gallery-btn prev" onclick="navigateGallery(${index}, -1)">❮</button>
                    <button class="gallery-btn next" onclick="navigateGallery(${index}, 1)">❯</button>
                    ${produto.badge ? `<div class="produto-badge">${produto.badge}</div>` : ''}
                </div>
                <div class="produto-info">
                    <h3 class="produto-title">${produto.nome}</h3>
                    <div class="produto-specs">
                        <span><i class="fas fa-ruler-combined"></i> ${produto.tamanho}</span>
                        <span><i class="fas fa-baby"></i> ${produto.faixaEtaria}</span>
                    </div>
                    <p class="produto-description">${produto.descricao}</p>
                    ${produto.material ? `<p class="produto-detail"><strong>Material:</strong> ${produto.material}</p>` : ''}
                    ${produto.pintura ? `<p class="produto-detail"><strong>Pintura:</strong> ${produto.pintura}</p>` : ''}
                    ${produto.ideal ? `<p class="produto-detail"><strong>Ideal para:</strong> ${produto.ideal}</p>` : ''}
                    <div class="produto-price">
                        ${produto.preco ? `<span class="price">${produto.preco}</span>` : '<span class="price">Sob Consulta</span>'}
                        <button class="btn-ver-mais" onclick="solicitarOrcamento('${produto.nome}')">
                           <i class="fab fa-whatsapp"></i> Pedir Orçamento
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderizarProdutos();
});

function navigateGallery(cardIndex, direction) {
    const card = document.querySelectorAll('.produto-card')[cardIndex];
    const images = card.querySelectorAll('.gallery-img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    
    let nextIndex = activeIndex + direction;
    
    if (nextIndex >= images.length) {
        nextIndex = 0;
    } else if (nextIndex < 0) {
        nextIndex = images.length - 1;
    }

    images[nextIndex].classList.add('active');
}

function solicitarOrcamento(nomeProduto) {
    const mensagem = `Olá! Tenho interesse no painel pronto "${nomeProduto}" que vi no catálogo. Poderia me passar um orçamento?`;
    const whatsappURL = getWhatsAppLink(mensagem);
    window.open(whatsappURL, '_blank');
}