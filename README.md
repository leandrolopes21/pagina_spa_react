# 📚 Busca de Livros - Google Books API

Este é um projeto desenvolvido com **Next.js** que permite pesquisar e explorar livros utilizando a Google Books API. A aplicação oferece uma interface moderna, responsiva e otimizada para buscas rápidas.

## ✨ Funcionalidades

- **Busca Inteligente (Debounce):** A pesquisa inicia automaticamente 500ms após o usuário parar de digitar, evitando múltiplas requisições desnecessárias.
- **Tratamento de Caracteres Especiais:** Suporte para buscas de termos técnicos como "C#" ou "C++" através de codificação de URL segura.
- **Interface Responsiva:** Layout em grade (*grid*) que se adapta a dispositivos móveis, tablets e desktops.
- **Feedback de Status:** Mensagens dinâmicas para estados de carregamento, resultados encontrados ou campo vazio.
- **Limpeza de Busca:** Opção para resetar instantaneamente o campo de pesquisa e a lista de resultados.

## 🚀 Tecnologias Utilizadas

- Next.js (App Router)
- React (Hooks: `useState`, `useEffect`)
- Axios para consumo da API
- CSS Modules para estilização encapsulada

## 🛠️ Configuração e Instalação

### 1. Pré-requisitos

Você precisará do Node.js instalado em sua máquina.

### 2. Obtenção da Chave de API

Para que as buscas funcionem, você precisa de uma chave de API do Google Cloud:
1. Vá ao Google Cloud Console.
2. Crie um novo projeto e ative a **Google Books API**.
3. Em "Credenciais", crie uma **Chave de API**.

### 3. Variáveis de Ambiente

Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a sua chave:

```env
NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY=SUA_CHAVE_AQUI
```

### 4. Instalação e Execução

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em http://localhost:3000.

---
Desenvolvido como parte de um estudo sobre consumo de APIs e React Hooks.
