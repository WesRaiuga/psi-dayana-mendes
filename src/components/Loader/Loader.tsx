import React from 'react';
import logo from '../../assets/img/logotipo-principal-1.png';
import style from './Loader.module.css';

const Loader: React.FC<{ loading: boolean }> = ({loading}) => {
  return (
    <div
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
      }}
      className={style.loaderContainer}
    >
      <img 
        className={style.loaderImage}
        src={logo} alt="loader carregando a página com logo da psicóloga" />
    </div>
  )
}

export default Loader;