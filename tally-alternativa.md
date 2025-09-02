# Alternativa com Tally.so - Formulário de Personalização

## O que é o Tally.so?

O Tally.so é uma plataforma gratuita para criar formulários interativos e visuais, muito mais avançada que o Google Forms. É perfeita para criar formulários de personalização de produtos.

## Vantagens do Tally.so:

✅ **Gratuito** - Plano gratuito generoso
✅ **Visual** - Suporte a imagens em cada opção
✅ **Lógica Condicional** - Mostra/esconde campos baseado nas respostas
✅ **Integração WhatsApp** - Redireciona automaticamente para WhatsApp
✅ **Design Moderno** - Interface muito mais bonita que Google Forms
✅ **Sem Código** - Fácil de criar e editar

## Como Criar o Formulário no Tally.so:

### 1. Acesse e Crie uma Conta
- Vá para [tally.so](https://tally.so)
- Crie uma conta gratuita
- Clique em "Create new form"

### 2. Estrutura do Formulário

#### **Página 1: Informações Básicas**
- **Título:** "Monte Seu Painel Sensorial Personalizado"
- **Descrição:** "Vamos criar o painel perfeito para o desenvolvimento da sua criança!"

**Campos:**
1. Nome da criança (Texto obrigatório)
2. Idade da criança (Múltipla escolha):
   - 0-6 meses
   - 6-12 meses
   - 1-2 anos
   - 2-3 anos
   - 3-4 anos
   - 4+ anos
3. Necessidades específicas (Texto longo, opcional)
4. Seu nome (Texto obrigatório)
5. WhatsApp (Texto obrigatório)

#### **Página 2: Tamanho e Base**
**Tamanho do Painel (Múltipla escolha com imagens):**
- Mini (20x20cm) - R$ 59,90
- Médio (30x30cm) - R$ 89,90
- Grande (40x40cm) - R$ 119,90

**Cor da Base (Múltipla escolha com cores):**
- Branco
- Bege
- Azul Claro
- Rosa Claro
- Verde Claro
- Amarelo Claro

#### **Página 3: Elementos Sensoriais**
**Elementos Táteis (Múltipla seleção com imagens):**
- Zíper (Coordenação motora fina)
- Velcro (Força e precisão)
- Botões (Destreza manual)
- Cordão (Movimento de pinça)

**Elementos Visuais (Múltipla seleção com imagens):**
- Espelho (Autoconsciência)
- Papel Crepom (Estímulo visual)
- Fitas Coloridas (Movimento e cor)
- Luzes LED (Atenção visual)

**Elementos Sonoros (Múltipla seleção com imagens):**
- Sino (Estímulo auditivo)
- Chocalho (Causa e efeito)
- Papel Barulhento (Textura sonora)

#### **Página 4: Personalização**
**Tema do Painel (Múltipla escolha com imagens):**
- Animais 🐙
- Natureza 🌿
- Cores 🌈
- Espacial 🚀
- Sem tema específico

**Biscuits Decorativos (Múltipla seleção, máximo 3):**
- Polvo 🐙
- Estrela ⭐
- Flor 🌸
- Coração 💖
- Lua 🌙
- Sol ☀️

**Observações Especiais (Texto longo, opcional):**
"Alguma preferência especial, cor favorita, animal preferido, ou qualquer detalhe que gostaria de incluir..."

### 3. Configurar Lógica Condicional

**Baseado no Tamanho:**
- Se "Mini": Máximo 4 elementos + 2 biscuits
- Se "Médio": Máximo 6 elementos + 3 biscuits  
- Se "Grande": Máximo 8 elementos + 3 biscuits

**Baseado na Idade:**
- Se 0-12 meses: Recomendar elementos mais seguros
- Se 2+ anos: Mostrar todos os elementos

### 4. Página de Agradecimento

**Configurar redirecionamento para WhatsApp:**

```
Obrigada! Seu pedido foi registrado.

Você será redirecionada para o WhatsApp para finalizarmos os detalhes.

[Botão: Finalizar no WhatsApp]
```

**URL do WhatsApp (usar nas configurações):**
```
https://wa.me/5516991613320?text=Olá! Acabei de personalizar meu painel sensorial através do formulário. Meu nome é {{nome-responsavel}} e o painel é para {{nome-crianca}} ({{idade}}). Gostaria de finalizar o pedido!
```

### 5. Design e Estilo

**Cores para usar no Tally.so:**
- Cor primária: #B19CD9 (roxo)
- Cor secundária: #FF69B4 (rosa)
- Cor de destaque: #00CED1 (turquesa)

**Configurações de Design:**
- Usar fonte arredondada
- Adicionar logo da Gabriela Simon
- Usar as cores da paleta
- Adicionar imagens para cada opção

### 6. Como Adicionar Imagens

Para cada opção que precisa de imagem:
1. Clique na opção
2. Clique em "Add image"
3. Faça upload da imagem ou use URL
4. Ajuste o tamanho (recomendado: 100x100px)

### 7. Publicar e Integrar

1. **Publicar:** Clique em "Publish" no Tally.so
2. **Copiar Link:** Copie o link público do formulário
3. **Integrar no Site:** Adicione o link nos botões do site

**Exemplo de integração no HTML:**
```html
<a href="https://tally.so/r/seu-formulario-id" class="btn btn-primary" target="_blank">
    Personalizar com Tally.so
</a>
```

### 8. Vantagens da Integração

**No site HTML:**
- Formulário completo em código (controle total)
- Experiência integrada
- Sem dependências externas

**Com Tally.so:**
- Mais rápido de criar e editar
- Interface mais amigável para usuários
- Lógica condicional avançada sem programação
- Fácil de manter e atualizar

## Recomendação:

**Use ambos!** 
- Mantenha o formulário em código no site para quem prefere a experiência integrada
- Ofereça o Tally.so como alternativa para quem prefere uma interface mais simples
- Teste ambos e veja qual gera mais conversões

**Exemplo de botões no site:**
```html
<div class="form-options">
    <a href="formulario.html" class="btn btn-primary">
        Formulário Completo
    </a>
    <a href="https://tally.so/r/seu-id" class="btn btn-secondary" target="_blank">
        Formulário Simplificado
    </a>
</div>
```

Isso dá opções para diferentes tipos de usuários e você pode ver qual funciona melhor!

