'use client';
import estilos from "./page.module.css";
import React, { useState, useEffect } from "react";
import { buscarLivro } from "./servico";

export default function Home() {

  const [busca, setBusca] = useState('');
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(false);

  // Efeito para busca automática enquanto digita (Debounce)
  useEffect(() => {
    // Se o campo estiver vazio, limpamos a lista e não fazemos a requisição
    if (!busca.trim()) {
      setLivros([]);
      return;
    }

    // Aguarda 500ms após a última tecla antes de pesquisar
    const timer = setTimeout(() => {
      pesquisarLivros();
    }, 500);

    // Limpa o timer se o usuário digitar novamente dentro do intervalo
    return () => clearTimeout(timer);
  }, [busca]);

  // Função para buscar os dados na API do Google Books
  async function pesquisarLivros() {
    setCarregando(true);
    try {
        // Codifica o termo de busca para tratar caracteres especiais como #
        const dados = await buscarLivro(encodeURIComponent(busca.trim()));
        if (dados.erro) {
            console.error(dados.erro);
        } else {
            setLivros(dados.items || []);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    } finally {
        setCarregando(false);
    }
  }

  function limparBusca() {
    if (!busca.trim()) {
        alert('Nada para limpar!');
    } else {
        setBusca(''); // Volta o input para vazio
        setLivros([]); // Esvazia a lista de livros, o que faz a tela inicial voltar a aparecer
    }
  }

  return (

    <div>
        <div className={estilos.container}>
            <div className={estilos.campo_busca}>
                <input
                    type="text"
                    value={busca}
                    onChange={(event) => setBusca(event.target.value)}
                    placeholder="Busque por título ou autor..."
                />
                <div className={estilos.botoes}>
                    <button
                        onClick={limparBusca}
                        disabled={carregando}
                        className={estilos.btnLimpar}
                    >
                        Limpar
                    </button>
                </div>
            </div>

            <div className={estilos.informa_status}>
                <p>{carregando ? 'Pesquisando...' : (busca ? 'Resultados para: ' + busca : 'Digite algo para pesquisar')}</p>
            </div>

            <main className={estilos.grade_livros}>
                {livros.length > 0 ? (
                    livros.map((livro) => (
                        <div key={livro.id} className={estilos.card_livros}>
                            <div className={estilos.cardImage}>
                                <img
                                    src={livro.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'} alt={livro.volumeInfo.title}
                                />
                            </div>
                            <div className={estilos.bookInfo}>
                                <div>
                                    <h3>{livro.volumeInfo.title}</h3>
                                    <p className={estilos.author}>
                                        {Array.isArray(livro.volumeInfo.authors) ? livro.volumeInfo.authors.join(', ') : 'Autor não informado'}
                                    </p>
                                </div>
                                <button className={estilos.btnDetalhe}>Ver Detalhes</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={estilos.estado_vazio}>
                        <p>Nenhum livro encontrado no momento.</p>
                    </div>
                )}
            </main>

            <footer className={estilos.rodape}>
                <p>Desenvolvido com React e Next.js</p>
            </footer>
        </div>
    </div>
  );
}