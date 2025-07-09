import style from './Footer.module.css';
import logotipo from '../../assets/img/logotipo-para-fundo-preto.png';
import HomeLinks from '../../components/MenuLinks/MenuLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={style.firstRow}>

        <div className={style.logo}>
          <Link to="/">
            <img src={logotipo} alt="logotipo da psicóloga, escrito Dayana Mendes Psicóloga CRP: 06/177353" />
          </Link>
        </div>
        
        <div>
          <HomeLinks className={style.homeLinks} />
        </div>

        <div className={style.socialIcons}>
          <a href="https://www.instagram.com/dayanamendes.psi/" target="_blank" rel="noopener noreferrer" title='Instagram'>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/dayanamendes/" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

      </div>

      <div>
        <hr />

        <div className={style.psiInfo}>
          <p>Psicóloga Dayana Mendes © 2025. Todos os direitos reservados.</p>
          <p>CRP: 06/177353</p>
        </div>

        <div className={style.devInfo}>
          <p>Site desenvolvido por <span> </span>
            <a href="https://www.linkedin.com/in/wesraiuga/" target="_blank" rel="noopener noreferrer">
              Weslley Aguiar
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer