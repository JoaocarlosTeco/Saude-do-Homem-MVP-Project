# Health On Time - Saúde do Homem MVP

Solução tecnológica inovadora para promoção da Saúde do Homem.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
  - Baixe em: [https://nodejs.org/](https://nodejs.org/)
  - Verifique a instalação: `node --version`
- **npm** (geralmente vem com o Node.js)
  - Verifique a instalação: `npm --version`

## 🚀 Como rodar o projeto

### 1. Clone o repositório (se ainda não tiver)

```bash
git clone <url-do-repositório>
cd Saude-do-Homem-MVP-Project
```

### 2. Instale as dependências

```bash
npm install
```

Este comando irá instalar todas as dependências listadas no `package.json`.

### 3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

O projeto será iniciado e estará disponível em:

- **URL local**: `http://localhost:3000`
- O navegador será aberto automaticamente

### 4. Outros comandos disponíveis

#### Build para produção

```bash
npm run build
```

Gera os arquivos otimizados para produção na pasta `dist/`.

#### Preview da build de produção

```bash
npm run preview
```

Visualiza a versão de produção localmente antes de fazer deploy.

#### Verificar código (lint)

```bash
npm run lint
```

Verifica problemas de código e formatação.

## 📦 Tecnologias utilizadas

- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **Vite 5.0.8** - Build tool e dev server
- **React Router DOM 6.20.0** - Roteamento
- **Tailwind CSS 3.4.0** - Framework CSS
- **Lucide React** - Ícones
- **date-fns** - Manipulação de datas

## 📁 Estrutura do projeto

```
Saude-do-Homem-MVP-Project/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilitários
│   └── styles/         # Estilos globais
├── public/             # Arquivos estáticos
└── package.json        # Dependências e scripts
```

## ⚠️ Solução de problemas

### Erro ao instalar dependências

- Certifique-se de ter Node.js instalado
- Tente limpar o cache: `npm cache clean --force`
- Delete a pasta `node_modules` e o arquivo `package-lock.json`, depois execute `npm install` novamente

### Porta 3000 já está em uso

- O Vite tentará usar outra porta automaticamente
- Ou altere a porta no arquivo `vite.config.js`

### Problemas com o Tailwind CSS

- Certifique-se de que o PostCSS está configurado corretamente
- Verifique o arquivo `tailwind.config.js`

## 📝 Notas

- O projeto está configurado para abrir automaticamente no navegador ao iniciar
- O servidor de desenvolvimento suporta Hot Module Replacement (HMR) para atualizações instantâneas
