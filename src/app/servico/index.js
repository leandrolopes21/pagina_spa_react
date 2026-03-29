import axios from "axios";

export async function buscarLivro(textoDigitado) {
    
    try {

        // Pegando a chave do arquivo .env.local
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

        // Linha original removida para evitar erro 400 quando a chave é undefined:
        // const resposta = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${textoDigitado}&key=${apiKey}`);

        // Constrói a URL dinamicamente. 
        // Enviar "&key=undefined" causa erro 400 na API do Google.
        let url = `https://www.googleapis.com/books/v1/volumes?q=${textoDigitado}`;

        // Verifica se a chave existe e não é uma string "undefined" (comum em builds de CI)
        if (apiKey && apiKey !== "undefined" && apiKey !== "") {
            url += `&key=${apiKey}`;
        } else {
            // Se cair aqui em produção, significa que você esqueceu de configurar a variável no painel da Vercel/GitHub
            throw new Error("API_KEY_MISSING");
        }

        const resposta = await axios.get(url);
        const dados = resposta.data;

        return dados;
    } catch (error) {
        // Log mais detalhado para identificar o motivo do erro 400 no console do navegador
        const mensagemErro = error.response?.data?.error?.message || error.message;
        console.error("Erro na chamada da API:", mensagemErro);

        // Identifica se o erro é falta de configuração
        if (error.message === "API_KEY_MISSING") {
            return { erro: "Chave de API não configurada. Adicione NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY nas variáveis de ambiente da sua hospedagem (Vercel/GitHub)." };
        }

        // Tratamento específico para cota excedida
        if (mensagemErro.includes("Quota exceeded")) {
            return { erro: "Limite de buscas diárias atingido. Tente novamente amanhã ou use sua própria API Key." };
        }

        return { erro: "Erro ao acessar a API de livros: " + mensagemErro };
    }
}