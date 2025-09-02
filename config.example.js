// Configurações públicas do site - EXEMPLO
// Copie este arquivo para config.js e configure com seus dados reais
const CONFIG = {
    whatsapp: {
        number: 'SEU_NUMERO_AQUI',  // Substitua pelo seu número completo com código do país
        defaultMessage: 'Olá! Gostaria de saber mais sobre os painéis sensoriais.'
    }
};

// Função para gerar link do WhatsApp
function getWhatsAppLink(customMessage = null) {
    const message = customMessage || CONFIG.whatsapp.defaultMessage;
    return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
