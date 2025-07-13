import { Link } from "react-router-dom";
import style from "./Banner.module.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

const Banner = () => {
  return (
    <div id="banner" className={style.bannerContent}>
      <h1>Dayana Mendes</h1>
      <p>Psicóloga Clínica</p>
      <WhatsappButton />
      <div className={style.scrollArrow}>
        <Link to="/" state={{ scrollTo: "about-me" }}>
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
