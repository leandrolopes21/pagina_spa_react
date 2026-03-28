import React from "react";
import estilos from "./Sobre.module.css";

export default function Sobre() {
    return (
    <div className={estilos.container}>
      <section className={estilos.profileCard}>
        <h1 className={estilos.title}>Leandro Lopes</h1>
        <span className={estilos.subtitle}>Desenvolvedor Full Stack em Formação</span>

        <p className={estilos.bio}>
          Entusiasta de tecnologia baseado em Curitiba, com foco em transformar lógica complexa 
          em interfaces funcionais. Atualmente dedico meus estudos ao ecossistema React, 
          Node.js e integração de APIs, buscando sempre otimizar processos através do código.
        </p>

        <h3>Projetos e Experiência Técnica</h3>
        
        <div className={estilos.projectsSection}>
          <div className={estilos.projectItem}>
            <h4>Otimizador de Metalurgia</h4>
            <p>Desenvolvimento de algoritmo para cálculo e aproveitamento máximo de chapas metálicas.</p>
          </div>

          <div className={estilos.projectItem}>
            <h4>Gestão de Ativos</h4>
            <p>Aplicação para controle financeiro e monitoramento de rendimentos de ativos.</p>
          </div>

          <div className={estilos.projectItem}>
            <h4>Integração CAD (Autodesk)</h4>
            <p>Experiência com extração de dados técnicos (PDF/JSON) para automação de inventário.</p>
          </div>

          <div className={estilos.projectItem}>
            <h4>Sistemas de Agendamento</h4>
            <p>Desenvolvimento de SPA para gestão de serviços e fluxo de clientes em estabelecimentos comerciais.</p>
          </div>
        </div>

        <div className={estilos.skillsTags}>
          <span className={estilos.tag}>React.js</span>
          <span className={estilos.tag}>JavaScript (ES6+)</span>
          <span className={estilos.tag}>Axios & APIs</span>
          <span className={estilos.tag}>CSS Modules</span>
          <span className={estilos.tag}>Git</span>
          <span className={estilos.tag}>Logic Optimization</span>
        </div>
      </section>
    </div>
  );
}