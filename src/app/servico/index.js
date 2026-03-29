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
        
        if (apiKey && apiKey !== "undefined") {
            url += `&key=${apiKey}`;
        }

        const resposta = await axios.get(url);
        const dados = resposta.data;

        return dados;
    } catch (error) {
        console.error("Erro na chamada da API:", error.response?.data || error.message);
        return {erro: "Erro ao acessar a API de livros: " + error.message};
    }
}