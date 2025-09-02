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
git remote add origin2 https://github.com/NOVO-USUARIO/site-gabriela.git
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

### 2.6 (Opcional) Trocar o origin principal:
Se quiser que o novo seja o principal:
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
- A URL do site será: `https://NOVO-USUARIO.github.io/site-gabriela`

---

## **PARTE 4: Verificação Final**

### 4.1 Testar o novo site:
1. Aguarde alguns minutos
2. Acesse: `https://NOVO-USUARIO.github.io/site-gabriela`
3. Teste todas as funcionalidades:
   - WhatsApp links funcionando
   - Formulário enviando para WhatsApp
   - Catálogo com botões funcionando
   - Imagens carregando

### 4.2 (Opcional) Remover repositório antigo:
CUIDADO: Só faça isso DEPOIS de confirmar que tudo funciona no novo!

No GitHub antigo:
1. Vá para Settings do repositório antigo
2. Role até o final da página
3. Na seção "Danger Zone", clique "Delete this repository"
4. Digite o nome do repositório para confirmar
5. Clique "I understand the consequences, delete this repository"

---

## RESUMO DOS COMANDOS PRINCIPAIS

```powershell
# 1. Navegar para a pasta
cd "c:\Users\ianca\Documents\Repositorios Ian\site-gabriela"

# 2. Adicionar novo repositório
git remote add origin2 https://github.com/NOVO-USUARIO/site-gabriela.git

# 3. Fazer push para o novo
git push origin2 main

# 4. (Opcional) Trocar origin
git remote remove origin
git remote rename origin2 origin
```

---

## OBSERVAÇÕES IMPORTANTES

1. **Substitua `NOVO-USUARIO`** pelo nome real do outro perfil GitHub
2. **O arquivo `config.js` não será enviado** (está protegido pelo .gitignore)
3. **O WhatsApp funcionará normalmente** (número está nos outros arquivos)
4. **Faça backup local** antes de remover o repositório antigo
5. **Teste tudo** antes de excluir o repositório original

---

## Em caso de problemas

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
- Teste a URL: `https://NOVO-USUARIO.github.io/site-gabriela`
