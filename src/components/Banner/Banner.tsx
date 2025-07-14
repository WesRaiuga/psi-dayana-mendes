import { Link } from "react-router-dom";
import style from "./Banner.module.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import { SparklesCore } from "../ui/sparkles";

const Banner = () => {
  return (
    <div id="banner" className={style.bannerContainer}>
      <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={2.4} particleDensity={40} className="w-full h-full" particleColor="#8772cf" />
      <div className={style.bannerContent}>
        <div>
          <h1>Dayana Mendes</h1>
          <p>Psicóloga Clínica</p>
        </div>
        <WhatsappButton />
      </div>
      <div className={style.scrollArrow}>
        <Link to="/" state={{ scrollTo: "about-me" }}>
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
