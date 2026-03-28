import './globals.css';
import Topo from './componentes/Topo';

export const metadata = {
  title: "Criado com Next",
  description: "Buscador de livros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
