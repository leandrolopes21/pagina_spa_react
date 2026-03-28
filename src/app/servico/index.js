import axios from "axios";

export async function buscarLivro(textoDigitado) {
    
    try {

        // Pegando a chave do arquivo .env.local
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

        const resposta = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${textoDigitado}&key=${apiKey}`);
        const dados = resposta.data;

        return dados;
    } catch (error) {
        return {erro: "Erro ao acessar a API de livros: " + error.message};
    }
}