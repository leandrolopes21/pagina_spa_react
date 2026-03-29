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
            console.warn("Aviso: Chave de API não encontrada. A busca pode ser limitada ou falhar em produção.");
        }

        const resposta = await axios.get(url);
        const dados = resposta.data;

        return dados;
    } catch (error) {
        // Log mais detalhado para identificar o motivo do erro 400 no console do navegador
        const mensagemErro = error.response?.data?.error?.message || error.message;
        console.error("Erro na chamada da API:", mensagemErro);

        // Tratamento específico para cota excedida
        if (mensagemErro.includes("Quota exceeded")) {
            return { erro: "Limite de buscas diárias atingido. Tente novamente amanhã ou use sua própria API Key." };
        }

        return { erro: "Erro ao acessar a API de livros: " + mensagemErro };
    }
}