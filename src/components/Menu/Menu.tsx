import React, { useState } from "react";
import Link from "../Link/Link";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
	const [menuAtivo, setMenuAtivo] = useState(false);
	const toggleMenu = () => setMenuAtivo((value) => !value);
	
	return (
		<div className={styles.navbar}>
			<header>
				<div className={styles.titulo}>
					<h2>Psi Dayana Mendes</h2>
				</div>
				
				<div className={`${styles.menuHamburguer} ${menuAtivo ? styles.ativo : ""}`}
				onClick={toggleMenu}
				>
					<span className={`${styles.traco} ${styles.traco1}`} ></span>
					<span className={`${styles.traco} ${styles.traco2}`} ></span>
					<span className={`${styles.traco} ${styles.traco3}`} ></span>
				</div>
				
				<div className={styles.filtros}>
					<Link href="#about-me">Sobre mim</Link>
					<Link href="#contact">Contato</Link>
				</div>
			</header>
			
			<nav className={`${styles.filtros} ${styles.mobile} ${menuAtivo ? styles.ativo : ""}`}>
				<Link href="#about-me">Sobre mim</Link>
				<Link href="#contact">Contato</Link>
			</nav>
		</div>
	);
};

export default Menu;