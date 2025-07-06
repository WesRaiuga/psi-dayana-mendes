import style from './Banner.module.css';

const Banner = () => {
  return (
    <div className={style.bannerContent}>
        <h1>Dayana Mendes</h1>
        <p>Psicóloga Clínica</p>
        <div className={style.scrollArrow}>
            <a href="#about-me">
                <i className="fa-solid fa-chevron-down"></i>
            </a>
        </div>
    </div>
  )
}

export default Banner