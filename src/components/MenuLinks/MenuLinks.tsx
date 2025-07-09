import { Link } from "react-router-dom";

interface HomeLinksProps {
  className?: string;
}

const MenuLinks = ({ className }: HomeLinksProps) => {
  return (
    <nav className={`${className ? " " + className : ""}`}>
      <Link to="/" state={{ scrollTo: "about-me" }}>
        Sobre mim
      </Link>

      <Link to="/" state={{ scrollTo: "education" }}>
        Formações
      </Link>

      <Link to="/" state={{ scrollTo: "services" }}>
        Serviços
      </Link>

      <Link to="/" state={{ scrollTo: "contact" }}>
        Contato
      </Link>

      <Link to="/" state={{ scrollTo: "faq" }}>
        FAQ
      </Link>
    </nav>
  );
};

export default MenuLinks;
