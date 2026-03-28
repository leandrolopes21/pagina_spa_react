import React from "react";
import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo({telaAtual, setTela}) {
    return (
        <header className={estilos.topo}>
            <nav className={estilos.container}>
                <div className={estilos.logo}>
                    Dev<span>Books</span>
                </div>
                <div>
                    <h1>📚 Google Books API</h1>
                    <p>Encontre seus livros favoritos</p>
                </div>
                <nav className={estilos.navegacao}>
                    <Link href="/">Início</Link>
                    <Link href="/sobre">Sobre Mim</Link>
                </nav>
            </nav>
        </header>
    );
}