document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    const totalSteps = 4;
    let formData = { elementos: [] };

    const limites = {
        "Pequeno (45x30cm)": 7,
        "Médio (45x65cm)": 9,
        "Grande (100x60cm)": 12
    };

    const descricoesElementos = {
        'parafusos-porcas': 'Ideal para desenvolver a coordenação motora fina, força de pinça e lateralidade. Brinquedo seguro, resistente e fácil de manusear por mãos pequenas. Indicado para: estimulação tátil, coordenação bilateral e noções de rosca/encaixe.',
        'trinco-trava': 'Item funcional que estimula o movimento de deslizar e a coordenação motora bilateral. Trabalha força, precisão e compreensão de causa e efeito. Material: Metal resistente.',
        'fechadura-chave': 'Componente funcional que convida a criança a experimentar abrir e fechar com chave. Estimula raciocínio lógico, coordenação motora fina e independência funcional. Acompanha: 2 chaves e trava metálica.',
        'registro-torneira': 'Simula o movimento de girar a torneira, excelente para treino de movimentos rotacionais do punho. Material: metal cromado. Indicação: coordenação motora fina, força muscular e imitação de AVDs.',
        'peixe-lantejoula': 'Brinquedo sensorial com lantejoulas que mudam de cor ao toque. Trabalha regulação sensorial, curiosidade tátil e atenção. Indicado para crianças que buscam estímulos visuais e sensoriais calmantes.',
        'espelho-bichinho': 'Espelho infantil com moldura em MDF pintada. Estimula o reconhecimento corporal, percepção visual e autoestima. Ideal para o canto de autocuidado ou interação lúdica com o reflexo.',
        'rodinha-giratoria': 'Rodinha de plástico com base metálica para giro manual. Estimula a coordenação motora fina, percepção tátil e visual, além da noção de causa e efeito.',
        'controle-remoto': 'Controle real (sem funcionamento eletrônico), fixado de forma segura. Estimula o faz de conta, coordenação motora fina (aperto de botões) e vínculo com objetos do cotidiano.',
        'teclado-musical': 'Teclado infantil colorido com botões que emitem sons. Promove estimulação auditiva, coordenação motora fina e atenção compartilhada. Incentiva a musicalidade e o faz de conta.',
        'labirinto-arcoiris': 'Labirinto de trilha em madeira com um balão móvel que desliza pela trilha. Promove coordenação motora fina, percepção visual, concentração e raciocínio lógico.',
        'encaixe-vegetais': 'Conjunto de encaixe em madeira com três vegetais coloridos. Estimula a coordenação motora fina, o reconhecimento de formas e cores, e o desenvolvimento da linguagem.',
        'interruptor': 'Placa de interruptor com três botões. Promove a coordenação motora fina, a causa e efeito (ligar/desligar) e a exploração tátil. Ideal para desenvolver a destreza dos dedos.',
        'telefone': 'Telefone de brinquedo com fio espiralado. Estimula a coordenação motora fina, a imaginação, o faz de conta e o desenvolvimento da linguagem através da simulação de conversas.',
        'abaco': 'Ábaco infantil com cinco fileiras de contas coloridas. Desenvolve a coordenação motora fina, o reconhecimento de cores e números, e habilidades matemáticas básicas.',
        'spinner-borboleta': 'Fidget spinner em formato de borboleta. Proporciona estimulação tátil e visual, ajuda na concentração e no alívio do estresse. Promove a coordenação motora fina.',
        'spinner-abelha': 'Fidget spinner em formato de abelha. Proporciona estimulação tátil e visual, ajuda na concentração e no alívio do estresse. Promove a coordenação motora fina.',
        'alinhavo-animais': 'Peças de madeira em formato de animais com furos para amarrar. Desenvolve a coorderação motora fina, a destreza manual e a concentração.',
        'xilofone': 'Xilofone infantil de madeira com oito barras coloridas. Promove a estimulação auditiva, o reconhecimento de cores e o desenvolvimento do ritmo e da musicalidade.',
        'jogo-agua': 'Jogo de água portátil com argolas que devem ser encaixadas em pinos. Promove a coordenação motora fina, a concentração, a paciência e o raciocínio lógico.',
        'cubo-giratorio': 'Cubo mágico giratório com bolinhas coloridas. Estimula a coordenação motora fina, o raciocínio lógico, a concentração e a resolução de problemas.',
        'lousa-magica': 'Lousa mágica infantil com caneta e botão para apagar. Estimula a coordenação motora fina, a criatividade, a expressão artística e a imaginação.',
        'tomada-plug': 'Adaptadores de tomada que promovem a coordenação motora fina e a compreensão de encaixe e conexão. Pode ser usado para atividades de vida prática.',
        'luz-toque': 'Luz de toque LED redonda. Estimula a visão e o tato, e a compreensão de causa e efeito (tocar para acender/apagar).',
        'tubo-bolinhas': 'Tubo de PVC curvado com caixa e bolinhas. Promove a coordenação motora fina, a percepção de causa e efeito e o raciocínio espacial.',
        'bichinhos-biscuit': 'Modelos de animais feitos à mão com acabamento delicado, ideais para decoração ou uso em propostas sensoriais e educativas. Personalização conforme sua preferência!'
    };

    const form = document.getElementById('painel-form');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnProximo = document.getElementById('btn-proximo');
    const btnFinalizar = document.getElementById('btn-finalizar');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateCurrentStep()) {
            submitForm();
        }
    });

    btnAnterior.addEventListener('click', previousStep);
    btnProximo.addEventListener('click', nextStep);

    document.querySelectorAll('.size-option').forEach(o => o.addEventListener('click', () => selectSize(o.dataset.size)));
    document.querySelectorAll('.color-option').forEach(o => o.addEventListener('click', () => selectColor(o.dataset.color)));
    document.querySelectorAll('.elemento-option').forEach(o => o.addEventListener('click', () => {
        toggleElemento(o.dataset.elemento, o);
        showDescription(o.dataset.elemento);
    }));

    // Inicialização padrão
    formData.tamanho = "Médio (45x65cm)";
    formData.corBase = "Madeira Pinus Natural";
    
    // Atualizar limite de elementos
    const limite = limites[formData.tamanho] || 12;
    document.getElementById('limite-elementos').textContent = limite;

    function showDescription(elementoId) {
        const displayArea = document.getElementById('elemento-descricao-display');
        const description = descricoesElementos[elementoId] || "Selecione um elemento para ver a descrição.";
        const title = getElementoName(elementoId);

        displayArea.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        displayArea.style.display = 'block';
    }

    function selectSize(size) {
        formData.tamanho = size;
        document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector(`[data-size="${size}"]`).classList.add('selected');
        const limite = limites[size] || 6;
        document.getElementById('limite-elementos').textContent = limite;
        if (formData.elementos.length > limite) {
            formData.elementos = formData.elementos.slice(0, limite);
            updateElementosList();
        }
    }

    function selectColor(color) {
        formData.corBase = color;
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        document.querySelector(`[data-color="${color}"]`).classList.add('selected');
    }

    function toggleElemento(elemento, elementOption) {
        const limite = limites[formData.tamanho] || 6;
        const index = formData.elementos.indexOf(elemento);
        if (index > -1) {
            formData.elementos.splice(index, 1);
        } else {
            if (formData.elementos.length < limite) {
                formData.elementos.push(elemento);
            } else {
                alert(`Limite de ${limite} elementos atingido para este tamanho de painel.`);
            }
        }
        updateElementosList();
    }

    function updateElementosList() {
        document.querySelectorAll('.elemento-option').forEach(opt => {
            opt.classList.toggle('selected', formData.elementos.includes(opt.dataset.elemento));
        });
        document.getElementById('count-elementos').textContent = formData.elementos.length;
        const limite = limites[formData.tamanho] || 6;
        document.getElementById('limite-elementos').textContent = limite;
        document.getElementById('lista-elementos').innerHTML = formData.elementos.map(el => `<div class="elemento-tag">${getElementoName(el)}</div>`).join('');
    }

    function getElementoName(elemento) {
        const names = {
            'trinco-trava': 'Trinco de Trava', 'fechadura-chave': 'Fechadura com Chave',
            'registro-torneira': 'Registro de Torneira', 'rodinha-giratoria': 'Rodinha Giratória',
            'interruptor': 'Interruptor Triplo', 'luz-toque': 'Luz de Toque',
            'tomada-plug': 'Adaptador de Tomada', 'parafusos-porcas': 'Parafusos Coloridos',
            'peixe-lantejoula': 'Peixe Lantejoula', 'labirinto-arcoiris': 'Labirinto Arco-Íris',
            'encaixe-vegetais': 'Encaixe de Vegetais', 'amarrar-animais': 'Alinhavo de Animais',
            'tubo-bolinhas': 'Tubo com Bolinhas', 'espelho-bichinho': 'Espelho de Bichinho',
            'teclado-musical': 'Teclado Musical', 'xilofone': 'Xilofone',
            'campainha': 'Campainha', 'abaco': 'Ábaco Colorido', 'lousa-magica': 'Lousa Mágica',
            'controle-remoto': 'Controle Remoto', 'telefone': 'Telefone',
            'fidget-borboleta': 'Spinner Borboleta', 'jogo-agua': 'Jogo de Água',
            'cubo-giratorio': 'Cubo Giratório', 'spinner-abelha': 'Spinner Abelha', 
            'bichinhos-biscuit': 'Bichinhos de Biscuit'
        };
        return names[elemento] || elemento;
    }
    
    function nextStep() {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        }
    }

    function previousStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    function showStep(step) {
        document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
        document.querySelector(`[data-step="${step}"]`).classList.add('active');
        
        document.querySelectorAll('.progress-step').forEach((ps, i) => {
            ps.classList.remove('active', 'completed');
            if (i + 1 < step) ps.classList.add('completed');
            if (i + 1 === step) ps.classList.add('active');
        });

        btnAnterior.style.display = step > 1 ? 'inline-flex' : 'none';
        btnProximo.style.display = step < totalSteps ? 'inline-flex' : 'none';
        btnFinalizar.style.display = step === totalSteps ? 'inline-flex' : 'none';
        
        if (step === totalSteps) generateSummary();
        
        // Scroll para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function validateCurrentStep() {
        const stepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const requiredInputs = stepElement.querySelectorAll('[required]');
        let firstInvalidInput = null;

        requiredInputs.forEach(input => {
            input.style.borderColor = '#e9ecef';
            
            if (input.type === 'checkbox') {
                // Para checkboxes, verificar se está marcado
                if (!input.checked) {
                    if (!firstInvalidInput) firstInvalidInput = input;
                    input.style.borderColor = 'red';
                }
            } else {
                // Para outros inputs, verificar se tem valor
                if (!input.value.trim()) {
                    if (!firstInvalidInput) firstInvalidInput = input;
                    input.style.borderColor = 'red';
                }
            }
        });

        if (firstInvalidInput) {
            alert('Por favor, preencha todos os campos obrigatórios destacados em vermelho.');
            firstInvalidInput.focus();
            return false;
        }

        if (currentStep === 2 && (!formData.tamanho || !formData.corBase)) {
            alert('Por favor, selecione o tamanho e a cor da base.');
            return false;
        }
        
        if (currentStep === 4 && !document.getElementById('aceito-termos').checked) {
            alert('Você precisa autorizar o contato para continuar.');
            return false;
        }

        return true;
    }
    
    function updateFormData() {
        formData.nomeCrianca = document.getElementById('nome-crianca').value;
        formData.idade = document.getElementById('idade').value;
        formData.nomeResponsavel = document.getElementById('nome-responsavel').value;
        formData.whatsapp = document.getElementById('whatsapp').value;
        formData.observacoes = document.getElementById('observacoes').value;
    }

    function generateSummary() {
        updateFormData();
        const resumoContent = document.getElementById('resumo-content');
        resumoContent.innerHTML = `
            <div class="resumo-item"><span class="resumo-label">Criança:</span><span class="resumo-value">${formData.nomeCrianca || '...'}</span></div>
            <div class="resumo-item"><span class="resumo-label">Idade:</span><span class="resumo-value">${formData.idade || '...'}</span></div>
            <div class="resumo-item"><span class="resumo-label">Tamanho:</span><span class="resumo-value">${formData.tamanho || '...'}</span></div>
            <div class="resumo-item"><span class="resumo-label">Cor Base:</span><span class="resumo-value">${formData.corBase || '...'}</span></div>
            <div class="resumo-item"><span class="resumo-label">Elementos (${formData.elementos.length}):</span><span class="resumo-value">${formData.elementos.map(e => getElementoName(e)).join(', ') || '...'}</span></div>
        `;
    }

    function submitForm() {
        updateFormData();
        let message = `🐙 *SOLICITAÇÃO DE ORÇAMENTO - PAINEL SENSORIAL*\n\n`;
        message += `*INFORMAÇÕES:*\n`;
        message += `👤 *Responsável:* ${formData.nomeResponsavel}\n`;
        message += `👶 *Criança:* ${formData.nomeCrianca}\n`;
        message += `🎂 *Idade:* ${formData.idade}\n\n`;
        
        message += `*DETALHES DO PAINEL:*\n`;
        message += `📏 *Tamanho:* ${formData.tamanho}\n`;
        message += `🎨 *Cor da Base:* ${formData.corBase}\n\n`;
        
        if (formData.elementos.length > 0) {
            message += `🧩 *Elementos Escolhidos (${formData.elementos.length}):*\n`;
            formData.elementos.forEach(el => { message += `• ${getElementoName(el)}\n`; });
            message += `\n`;
        }
        
        if (formData.observacoes) {
            message += `*Observações e Detalhes:*\n${formData.observacoes}\n\n`;
        }
        
        message += `Aguardando o orçamento. Obrigado(a)!`;
        
        const whatsappNumber = '5516991613320';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, '_blank');
    }
});