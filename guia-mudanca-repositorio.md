# Guia: Como Mover o Site Para Outro Repositório GitHub

## **PARTE 1: Preparar o Novo Repositório**

### 1.1 No GitHub do outro perfil:
1. Acesse GitHub e faça login no **outro perfil**
2. Clique em **"New repository"** (botão verde)
3. **Nome do repositório**: `site-gabriela` (ou outro nome de sua escolha)
4. **Visibilidade**: Marque **Public**
5. **IMPORTANTE**: NÃO marque "Add a README file" (deixe vazio)
6. **IMPORTANTE**: NÃO marque "Add .gitignore" 
7. **IMPORTANTE**: NÃO marque "Choose a license"
8. Clique **"Create repository"**

### 1.2 Copiar URL do novo repositório:
- Após criar, copie a URL que aparece (algo como):
  ```
  https://github.com/NOVO-USUARIO/site-gabriela.git
  ```
https://github.com/Fisiogabrielasimon/site-gabriela
---

## **PARTE 2: Comandos no Terminal**

### 2.1 Abrir o terminal e navegar para a pasta:
```powershell
cd "c:\Users\ianca\Documents\Repositorios Ian\site-gabriela"
```

### 2.2 Verificar status atual:
```powershell
git status
git remote -v
```

### 2.3 Adicionar o novo repositório como "origin2":
```powershell
git remote add origin2 https://github.com/Fisiogabrielasimon/site-gabriela.git
```
> SUBSTITUIR: `NOVO-USUARIO` pelo nome real do outro perfil

### 2.4 Verificar se foi adicionado:
```powershell
git remote -v
```
> Deve mostrar tanto `origin` (atual) quanto `origin2` (novo)

### 2.5 Fazer push para o novo repositório:
```powershell
git push origin2 main
```

### 2.6 Escolher qual repositório será o principal:

**OPÇÃO A - Manter ambos repositórios (RECOMENDADO):**
```powershell
# Não fazer nada - manter os dois
# origin = repositório atual
# origin2 = repositório novo
```

**OPÇÃO B - Trocar qual é o principal:**
```powershell
git remote remove origin
git remote rename origin2 origin
```

**OPÇÃO C - Trabalhar apenas com o novo:**
```powershell
git remote remove origin
git remote rename origin2 origin
```

---

## **PARTE 3: Ativar GitHub Pages no Novo Repositório**

### 3.1 No GitHub do novo perfil:
1. Vá para o repositório recém-criado
2. Clique em **"Settings"** (aba superior)
3. No menu lateral esquerdo, clique em **"Pages"**
4. Em **"Source"**, selecione **"Deploy from a branch"**
5. Em **"Branch"**, selecione **"main"** 
6. Deixe **"/ (root)"** selecionado
7. Clique **"Save"**

### 3.2 Aguardar deploy:
- O GitHub levará 1-3 minutos para fazer o deploy
- A URL do site será: `https://Fisiogabrielasimon.github.io/site-gabriela`

### 3.3 Resultado final - Você terá 2 sites online:
- **Site atual**: `https://IanCasaroti.github.io/site-gabriela` (seu perfil)
- **Site novo**: `https://Fisiogabrielasimon.github.io/site-gabriela` (outro perfil)
- **Ambos funcionam perfeitamente** e são independentes

---

## **PARTE 4: Verificação Final**

### 4.1 Testar ambos os sites:
1. Aguarde alguns minutos após o deploy
2. **Teste o site atual**: `https://IanCasaroti.github.io/site-gabriela`
3. **Teste o site novo**: `https://Fisiogabrielasimon.github.io/site-gabriela`
4. Verifique se ambos têm todas as funcionalidades:
   - WhatsApp links funcionando
   - Formulário enviando para WhatsApp
   - Catálogo com botões funcionando
   - Imagens carregando

### 4.2 Gerenciar repositórios:

**Se manteve AMBOS os repositórios (OPÇÃO A):**
- ✅ **Vantagem**: Backup automático em dois locais
- ✅ **Flexibilidade**: Pode alternar entre perfis facilmente
- 🔄 **Para atualizar**: Use `git push origin main` (perfil atual) ou `git push origin2 main` (perfil novo)

**Se trocou o principal (OPÇÃO B):**
- ✅ **Vantagem**: Comandos normais funcionam com o novo repositório
- 🔄 **Para atualizar**: Use `git push origin main` (vai para o novo perfil)

**Se removeu o antigo (OPÇÃO C):**
- ⚠️ **CUIDADO**: Sem backup no perfil original
- 🔄 **Para atualizar**: Use `git push origin main` (apenas novo perfil)

---

## RESUMO DOS COMANDOS PRINCIPAIS

**OPÇÃO A - Manter ambos (RECOMENDADO):**
```powershell
# 1. Navegar para a pasta
cd "c:\Users\ianca\Documents\Repositorios Ian\site-gabriela"

# 2. Adicionar novo repositório
git remote add origin2 https://github.com/Fisiogabrielasimon/site-gabriela.git

# 3. Fazer push para o novo
git push origin2 main

# 4. Manter ambos - não fazer mais nada!
# Para atualizar: git push origin main (perfil atual) 
#             ou: git push origin2 main (perfil novo)
```

**OPÇÃO B - Trocar o principal:**
```powershell
# 1-3. Mesmos passos da OPÇÃO A

# 4. Trocar qual é o principal
git remote remove origin
git remote rename origin2 origin

# Agora git push origin main vai para o novo perfil
```

---

## OBSERVAÇÕES IMPORTANTES

1. **O perfil de destino é `Fisiogabrielasimon`** - já configurado no guia
2. **RECOMENDADO**: Manter ambos repositórios (OPÇÃO A) para ter backup
3. **Se der erro 403**: Siga as soluções na seção "Em caso de problemas"
4. **O arquivo `config.js` não será enviado** (está protegido pelo .gitignore)
5. **O WhatsApp funcionará normalmente** (número está nos outros arquivos)
6. **Ambos sites ficam online** - cada um com sua URL própria
7. **Teste ambos os sites** antes de decidir remover algum repositório

## Comandos úteis para gerenciar ambos:

```powershell
# Ver todos os repositórios configurados
git remote -v

# Atualizar repositório atual (seu perfil)
git push origin main

# Atualizar repositório novo (outro perfil)  
git push origin2 main

# Atualizar ambos de uma vez
git push origin main && git push origin2 main
```

---

## Em caso de problemas

### Erro de permissão (403 Forbidden):
```
remote: Permission to Fisiogabrielasimon/site-gabriela.git denied to IanCasaroti.
fatal: unable to access 'https://github.com/Fisiogabrielasimon/site-gabriela.git/': The requested URL returned error: 403
```

**SOLUÇÕES:**

**SOLUÇÃO 1 - Fazer login no outro perfil (JÁ TENTOU):**
```powershell
# Configurar Git para usar o outro perfil
git config --global user.name "Fisiogabrielasimon"
git config --global user.email "gabisimon.2509@hotmail.com"

# Tentar push novamente
git push origin2 main
```
❌ **Status**: Não funcionou - erro 403 persiste

**🚀 PRÓXIMO PASSO RECOMENDADO - SOLUÇÃO 2:**
Execute estes comandos no seu terminal:

```powershell
# Limpar credenciais armazenadas
git config --global --unset credential.helper
git config --global credential.helper manager

# Remover credenciais do Windows
cmdkey /delete:git:https://github.com

# Tentar push - vai pedir login
git push origin2 main
```

Quando aparecer a tela de login, use:
- **Usuário**: Fisiogabrielasimon  
- **Senha**: senha do perfil Fisiogabrielasimon

**SOLUÇÃO 3 - Usar Personal Access Token:**
```powershell
# Limpar credenciais armazenadas
git config --global --unset credential.helper
git config --global credential.helper manager

# Remover credenciais do Windows (se existir)
cmdkey /delete:git:https://github.com

# Tentar push - vai pedir login
git push origin2 main
```
Quando pedir login, use as credenciais do perfil `Fisiogabrielasimon`.

**SOLUÇÃO 3 - Usar Personal Access Token:**
1. No GitHub do perfil `Fisiogabrielasimon`:
   - Vá em Settings > Developer settings > Personal access tokens
   - Generate new token (classic)
   - Marque: `repo`, `workflow`, `write:packages`
   - Copie o token gerado

2. Use o token na URL:
```powershell
git remote remove origin2
git remote add origin2 https://TOKEN-AQUI@github.com/Fisiogabrielasimon/site-gabriela.git
git push origin2 main
```

**SOLUÇÃO 4 - Adicionar colaborador (MAIS FÁCIL):**
1. No perfil `Fisiogabrielasimon`, vá ao repositório
2. Settings > Manage access > Invite a collaborator
3. Adicione `IanCasaroti` como colaborador
4. Aceite o convite no perfil `IanCasaroti`
5. Tente o push novamente:
```powershell
git push origin2 main
```

**SOLUÇÃO 5 - Upload manual (EMERGÊNCIA):**
Se nada funcionar, faça upload manual:
1. Baixe o projeto como ZIP: Code > Download ZIP
2. Extraia o ZIP
3. No perfil `Fisiogabrielasimon`, vá ao repositório vazio
4. Arraste e solte todos os arquivos na página do GitHub
5. Commit: "Upload inicial do site"
6. Ative o GitHub Pages normalmente

### Erro de autenticação:
```powershell
git config --global user.name "Nome do Outro Perfil"
git config --global user.email "email@do-outro-perfil.com"
```

### Erro de permissão:
- Certifique-se de estar logado no GitHub com o outro perfil
- Use um Personal Access Token se necessário

### Site não carrega:
- Aguarde até 5 minutos
- Verifique se o GitHub Pages está ativado corretamente
- Teste a URL: `https://Fisiogabrielasimon.github.io/site-gabriela`
