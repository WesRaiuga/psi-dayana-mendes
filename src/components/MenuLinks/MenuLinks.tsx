import { Link } from "react-router-dom";

interface MenuLinksProps {
  className?: string;
}

const MenuLinks = ({ className }: MenuLinksProps) => {
  return (
    <nav className={`${className ? " " + className : ""}`}>
      <Link to="/" state={{ scrollTo: "about-me" }}>
        Sobre mim
      </Link>

      <Link to="/" state={{ scrollTo: "symptoms" }}>
        Sintomas
      </Link>

      <Link to="/" state={{ scrollTo: "how-it-works" }}>
        Como funciona
      </Link>

      <Link to="/" state={{ scrollTo: "services" }}>
        Serviços
      </Link>

      <Link to="/" state={{ scrollTo: "faq" }}>
        Perguntas
      </Link>
    </nav>
  );
};

export default MenuLinks;
