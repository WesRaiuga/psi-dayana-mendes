import React, { useState } from "react";
import style from "./Menu.module.css";
import logotipo from "../../assets/img/logos/logotipo-principal-1.png";
import HomeLinks from "../../components/MenuLinks/MenuLinks";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const toggleMenu = () => setMenuAtivo((value) => !value);

  return (
    <div className={style.navbar}>
      <header>
        <div className={style.titulo}>
          <Link to="/" state={{ scrollTo: "banner" }}>
            <img src={logotipo} alt="logotipo da psicóloga, escrito Dayana Mendes Psicóloga CRP: 06/177353" />
          </Link>
        </div>

        <div className={`${style.menuHamburguer} ${menuAtivo ? style.ativo : ""}`} onClick={toggleMenu}>
          <span className={`${style.traco} ${style.traco1}`}></span>
          <span className={`${style.traco} ${style.traco2}`}></span>
          <span className={`${style.traco} ${style.traco3}`}></span>
        </div>

        <HomeLinks className={style.filtros} />
      </header>

      <HomeLinks className={`${style.filtros} ${style.mobile} ${menuAtivo ? style.ativo : ""}`} />
    </div>
  );
};

export default Menu;
