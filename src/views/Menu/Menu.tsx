import React, { useState } from "react";
import styles from "./Menu.module.css";
import logotipo from "../../assets/img/logos/logotipo-principal-1.png";
import HomeLinks from "../../components/MenuLinks/MenuLinks";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const toggleMenu = () => setMenuAtivo((value) => !value);

  return (
    <div className={styles.navbar}>
      <header>
        <div className={styles.titulo}>
          <Link to="/" state={{ scrollTo: "banner" }}>
            <img src={logotipo} alt="logotipo da psicóloga, escrito Dayana Mendes Psicóloga CRP: 06/177353" />
          </Link>
        </div>

        <div className={`${styles.menuHamburguer} ${menuAtivo ? styles.ativo : ""}`} onClick={toggleMenu}>
          <span className={`${styles.traco} ${styles.traco1}`}></span>
          <span className={`${styles.traco} ${styles.traco2}`}></span>
          <span className={`${styles.traco} ${styles.traco3}`}></span>
        </div>

        <HomeLinks className={styles.filtros} />
      </header>

      <HomeLinks className={`${styles.filtros} ${styles.mobile} ${menuAtivo ? styles.ativo : ""}`} />
    </div>
  );
};

export default Menu;
