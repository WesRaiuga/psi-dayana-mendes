import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>404 - Página não encontrada</h2>
      <p>Ops! A página que você tentou acessar não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </section>
  );
};

export default NotFound;
