# Guia Completo de Hospedagem Gratuita
## Site da Gabriela Simon - Fisioterapia Infantil

### Introdução

Este guia apresenta todas as opções para hospedar seu site gratuitamente na internet, permitindo que qualquer pessoa acesse através de um link público. Você aprenderá passo a passo como fazer o deploy (publicação) do seu site usando diferentes plataformas gratuitas.

### Opções de Hospedagem Gratuita

#### 1. GitHub Pages (Recomendado)
**Vantagens:**
- Totalmente gratuito
- Muito confiável (usado por milhões de desenvolvedores)
- Permite domínio personalizado
- Integração com Git para controle de versão
- HTTPS automático

**Desvantagens:**
- Requer conhecimento básico de Git
- Apenas sites estáticos

#### 2. Netlify (Mais Fácil)
**Vantagens:**
- Interface muito amigável
- Deploy automático
- HTTPS gratuito
- Formulários funcionais
- Domínio personalizado gratuito

**Desvantagens:**
- Limite de largura de banda (100GB/mês no plano gratuito)

#### 3. Vercel
**Vantagens:**
- Deploy extremamente rápido
- Otimizado para performance
- Interface moderna
- Domínio personalizado

**Desvantagens:**
- Mais focado em desenvolvedores

#### 4. Cloudflare Pages
**Vantagens:**
- CDN global incluído
- Performance excelente
- Integração com Cloudflare

**Desvantagens:**
- Interface mais técnica

### Método 1: GitHub Pages (Passo a Passo)

#### Passo 1: Criar Conta no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em "Sign up"
3. Crie sua conta gratuita
4. Confirme seu email

#### Passo 2: Criar Repositório
1. Após fazer login, clique no botão verde "New" ou "+"
2. Nome do repositório: `gabriela-simon-site`
3. Marque "Public"
4. Marque "Add a README file"
5. Clique em "Create repository"

#### Passo 3: Fazer Upload dos Arquivos
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos do site:
   - index.html
   - styles.css
   - script.js
   - catalogo.html
   - catalogo.css
   - catalogo.js
   - formulario.html
   - formulario.css
   - formulario.js
   - logo.png
   - design-plan.md
   - tally-alternativa.md

3. Escreva uma mensagem de commit: "Adicionar site da Gabriela Simon"
4. Clique em "Commit changes"

#### Passo 4: Ativar GitHub Pages
1. No repositório, clique na aba "Settings"
2. Role para baixo até encontrar "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main"
5. Deixe "/ (root)" selecionado
6. Clique em "Save"

#### Passo 5: Acessar Seu Site
1. Aguarde alguns minutos
2. O GitHub mostrará o link do seu site: `https://seu-usuario.github.io/gabriela-simon-site`
3. Clique no link para ver seu site online!

### Método 2: Netlify (Mais Simples)

#### Passo 1: Preparar Arquivos
1. Crie uma pasta no seu computador chamada "gabriela-simon-site"
2. Coloque todos os arquivos do site nesta pasta
3. Compacte a pasta em um arquivo ZIP

#### Passo 2: Deploy no Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up" e crie uma conta
3. No painel, clique em "Add new site"
4. Selecione "Deploy manually"
5. Arraste o arquivo ZIP para a área indicada
6. Aguarde o upload e deploy

#### Passo 3: Personalizar URL (Opcional)
1. Após o deploy, clique em "Site settings"
2. Clique em "Change site name"
3. Digite: `gabriela-simon-fisioterapia`
4. Seu site ficará: `https://gabriela-simon-fisioterapia.netlify.app`

### Método 3: Vercel

#### Passo 1: Criar Conta
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign up"
3. Use sua conta do GitHub para facilitar

#### Passo 2: Importar Projeto
1. No painel, clique em "New Project"
2. Selecione "Import Git Repository"
3. Escolha o repositório `gabriela-simon-site` do GitHub
4. Clique em "Import"
5. Mantenha as configurações padrão
6. Clique em "Deploy"

#### Passo 3: Acessar Site
1. Após o deploy, você receberá um link como: `https://gabriela-simon-site.vercel.app`
2. O site estará online imediatamente!

### Atualizando o Site

#### GitHub Pages:
1. Faça alterações nos arquivos localmente
2. No GitHub, clique em "Upload files" ou edite diretamente
3. Faça commit das mudanças
4. O site será atualizado automaticamente

#### Netlify:
1. Faça alterações nos arquivos
2. Compacte novamente em ZIP
3. No painel do Netlify, arraste o novo ZIP
4. O site será atualizado

#### Vercel:
1. Se conectado ao GitHub, qualquer mudança no repositório atualiza automaticamente
2. Ou faça upload manual de nova versão

### Configurações Importantes

#### Atualizando Links de WhatsApp e Instagram
Antes de publicar, atualize os links nos arquivos:

**No index.html, catalogo.html e formulario.html:**
```html
<!-- Substitua este número pelo WhatsApp real -->
<a href="https://wa.me/5516991613320" target="_blank">

<!-- Substitua pelo Instagram real -->
<a href="https://instagram.com/gabrielasimon" target="_blank">
```

**No formulario.js:**
```javascript
// Linha 462 - Substitua o número do WhatsApp
const whatsappUrl = `https://wa.me/5516991613320?text=${encodeURIComponent(mensagem)}`;
```

#### Adicionando Domínio Personalizado (Opcional)

Se você quiser um domínio como `www.gabrielasimon.com.br`:

1. **Compre um domínio** em sites como:
   - Registro.br (domínios .com.br)
   - Namecheap
   - GoDaddy

2. **Configure DNS:**
   - **GitHub Pages:** Adicione um arquivo `CNAME` com seu domínio
   - **Netlify:** Vá em "Domain settings" e adicione o domínio
   - **Vercel:** Vá em "Domains" e adicione o domínio

### Monitoramento e Analytics

#### Google Analytics (Gratuito)
1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Adicione o código de tracking no `<head>` de todas as páginas
3. Monitore visitantes, páginas mais acessadas, etc.

#### Hotjar (Opcional)
1. Para ver como usuários interagem com o site
2. Mapas de calor e gravações de sessões
3. Plano gratuito disponível

### Backup e Segurança

#### Backup Regular
1. **GitHub:** Automaticamente versionado
2. **Netlify/Vercel:** Mantenha cópias locais dos arquivos
3. **Recomendação:** Sempre mantenha uma cópia local atualizada

#### Segurança
1. **HTTPS:** Todas as plataformas oferecem HTTPS gratuito
2. **Formulários:** Use serviços como Tally.so para segurança
3. **Não exponha:** Nunca coloque informações sensíveis no código

### Otimizações de Performance

#### Imagens
1. **Compressão:** Use ferramentas como TinyPNG
2. **Formato:** WebP quando possível
3. **Tamanho:** Redimensione para o tamanho necessário

#### CSS e JavaScript
1. **Minificação:** Use ferramentas online para minificar
2. **CDN:** Use CDNs para bibliotecas externas
3. **Cache:** Configurado automaticamente pelas plataformas

### Troubleshooting (Resolução de Problemas)

#### Site não carrega
1. Verifique se todos os arquivos foram enviados
2. Confirme que o `index.html` está na raiz
3. Aguarde alguns minutos para propagação

#### Links quebrados
1. Verifique se todos os arquivos CSS/JS estão no lugar correto
2. Confirme que os nomes dos arquivos estão corretos
3. Verifique se não há espaços nos nomes dos arquivos

#### Formulário não funciona
1. Teste localmente primeiro
2. Verifique console do navegador para erros
3. Confirme que os links do WhatsApp estão corretos

### Próximos Passos

#### Melhorias Futuras
1. **SEO:** Adicionar meta tags, sitemap
2. **Blog:** Adicionar seção de blog com artigos
3. **Depoimentos:** Seção de feedback de clientes
4. **Agendamento:** Integração com calendário online

#### Marketing Digital
1. **Google My Business:** Criar perfil da empresa
2. **Redes Sociais:** Compartilhar link do site
3. **WhatsApp Business:** Usar recursos profissionais
4. **Email Marketing:** Coletar emails para newsletter

### Conclusão

Você agora tem todas as ferramentas necessárias para colocar seu site no ar gratuitamente. Recomendo começar com o **Netlify** pela simplicidade, ou **GitHub Pages** se quiser aprender sobre controle de versão.

Lembre-se de:
- Atualizar os links de contato antes de publicar
- Testar todas as funcionalidades após o deploy
- Fazer backup regular dos arquivos
- Monitorar o desempenho do site

Seu site profissional estará disponível 24/7 para seus clientes, ajudando a expandir seu negócio de painéis sensoriais!

