# Site da Gabriela Simon - Fisioterapia Infantil

Site profissional para divulgação de painéis sensoriais e serviços de fisioterapia infantil.

## 🚀 Como Configurar Localmente

### 1. **Configuração do WhatsApp**
```bash
# 1. Copie o arquivo de exemplo
cp config.example.js config.js

# 2. Edite o config.js com seus dados reais
# Substitua 'SEU_NUMERO_AQUI' pelo seu número do WhatsApp (com código do país)
```

### 2. **Estrutura do Projeto**
```
site-gabriela/
├── index.html          # Página principal
├── catalogo.html       # Catálogo de painéis prontos
├── formulario.html     # Formulário de personalização
├── styles.css          # Estilos principais
├── script.js           # JavaScript principal
├── config.js           # Configurações (NÃO COMMITADO)
├── config.example.js   # Exemplo de configuração
└── img/               # Imagens do site
```

### 3. **Tecnologias Utilizadas**
- HTML5 + CSS3
- JavaScript Vanilla
- Font Awesome (ícones)
- Google Fonts (Fredoka + Inter)

### 4. **Funcionalidades**
- ✅ Site responsivo
- ✅ Galeria de imagens interativa
- ✅ Formulário de personalização multipasso
- ✅ Integração com WhatsApp
- ✅ Catálogo de produtos com preços
- ✅ Design moderno e acessível

## 🔧 Desenvolvimento

### Executar Localmente
```bash
# Abra o index.html em um navegador
# Ou use um servidor local como Live Server (VS Code)
```

### Deploy no GitHub Pages
1. Faça commit de todos os arquivos (exceto config.js)
2. Push para o repositório no GitHub
3. Ative o GitHub Pages nas configurações do repositório
4. Configure seu config.js diretamente no servidor ou use GitHub Secrets

## 📱 Contato

- **WhatsApp**: Configure no arquivo config.js
- **Instagram**: [@fisiogabrielasimon](https://instagram.com/fisiogabrielasimon)
- **TikTok**: [@_gabrielasimon](https://tiktok.com/@_gabrielasimon)

## 🔒 Segurança

O número do WhatsApp está protegido no arquivo `config.js` que não é commitado ao repositório público. Para configurar:

1. Copie `config.example.js` para `config.js`
2. Substitua `SEU_NUMERO_AQUI` pelo número real
3. O arquivo `config.js` será ignorado pelo Git

---

**© 2024 Gabriela Simon - Fisioterapia Infantil**
python3 -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

### 2. Personalizar Contatos
Antes de publicar, atualize os links de contato:

**WhatsApp:** Substitua `5516991613320` pelo número real
**Instagram:** Substitua `gabrielasimon` pelo perfil real

### 3. Hospedar Gratuitamente
Consulte o arquivo `guia-hospedagem.md` para instruções completas.

**Opções recomendadas:**
- **Netlify** (mais fácil)
- **GitHub Pages** (mais controle)
- **Vercel** (mais rápido)

## 📱 Funcionalidades

### Formulário de Personalização
- **5 passos** interativos
- **Validação** de campos
- **Cálculo automático** de preços
- **Envio direto** para WhatsApp
- **Responsivo** para mobile

### Catálogo de Produtos
- **Filtros** por categoria
- **Modal** com detalhes
- **Botão direto** para WhatsApp
- **Grid responsivo**

### Design Responsivo
- **Mobile-first** approach
- **Breakpoints** otimizados
- **Touch-friendly** para tablets
- **Performance** otimizada

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** com Flexbox e Grid
- **JavaScript** vanilla (sem dependências)
- **Design responsivo**
- **Otimizado para SEO**

## 📋 Checklist Antes de Publicar

- [ ] Atualizar número do WhatsApp
- [ ] Atualizar perfil do Instagram
- [ ] Testar formulário completo
- [ ] Verificar responsividade
- [ ] Testar em diferentes navegadores
- [ ] Otimizar imagens se necessário

## 🔧 Manutenção

### Adicionar Novos Produtos
1. Edite o arquivo `catalogo.js`
2. Adicione o produto no array `produtos`
3. Inclua imagem na pasta (se necessário)

### Atualizar Preços
1. Edite o arquivo `formulario.js`
2. Modifique o objeto `precos`
3. Ajuste `precosAdicionais` se necessário

### Modificar Cores
1. Edite as variáveis CSS em `styles.css`
2. Seção `:root` no início do arquivo

## 📞 Suporte

Para dúvidas sobre o código ou hospedagem:
1. Consulte o `guia-hospedagem.md`
2. Verifique a documentação das plataformas
3. Teste sempre localmente primeiro

## 🎯 Próximas Melhorias

- [ ] Sistema de agendamento online
- [ ] Blog com artigos sobre desenvolvimento infantil
- [ ] Galeria de fotos dos painéis
- [ ] Depoimentos de clientes
- [ ] Newsletter por email
- [ ] Chat online
- [ ] Sistema de pagamento online

## 📈 Analytics e SEO

### Google Analytics
Adicione o código de tracking no `<head>` de todas as páginas.

### Meta Tags
Já incluídas para SEO básico. Personalize conforme necessário.

### Sitemap
Crie um sitemap.xml para melhor indexação.

---

**Desenvolvido com 💜 para Gabriela Simon**

*Site profissional para fisioterapia infantil e painéis sensoriais personalizados.*

