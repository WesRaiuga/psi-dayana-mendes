import style from "../AboutMeSection/AboutMeSection.module.css";
import profileImage from "../../assets/img/photos/day-filosofa.jpg";
import WhatsappButton from "../../components/WhatsappButton/WhatsappButton";
import Subtitle from "../../components/Subtitle/Subtitle";

const AboutMeSection = () => {
  return (
    <>
      <section id="about-me" className={style.aboutMeSection}>
        <div className={style.sectionTitle}>
          <Subtitle>Sobre Mim</Subtitle>
          <h2>Conheça Sua Psicóloga</h2>
        </div>
        <div className={style.aboutMeContent}>
          <div className={style.profileImageContainer}>
            <img src={profileImage} alt="foto da psicóloga Dayana Mendes" />
          </div>
          <div className={style.aboutMeText}>
            <div>
              <p>Heyy, eu sou a Dayana Mendes — mas pode me chamar de Day.</p>
              <p>Sou psicóloga clínica (CRP 06/177353), filha de migrantes nordestinos e nascida em São Paulo. Cresci cercada por mulheres que me ensinaram sobre afeto, força e redes de cuidado. Minha trajetória é atravessada por ancestralidade, curiosidade e desejo de transformação.</p>
              <p>Atendo principalmente mulheres jovens adultas e pessoas LGBTQIAPN+ que desejam ressignificar vivências, revisar padrões e encontrar formas mais livres e conscientes de existir.</p>
              <p>Construo uma clínica ética, sensível e politicamente implicada. Compreendo o sofrimento psíquico de forma integral — como algo que envolve corpo, história, afetos, vínculos e também os contextos sociais em que vivemos. Minha escuta é orientada pelas Práticas Narrativas da Terapia Sistêmica e por uma ética feminista e interseccional.</p>
              <p>Gosto de ler, maratonar séries, assistir filmes sensíveis e jogar — especialmente quando as produções trazem boas histórias ou exploram o emocional de forma crítica e sensível. Também acompanho animes, animações e a cultura geek com carinho.</p>
              <p>Se algo em você está pedindo por reconexão, talvez aqui seja um bom lugar pra começar.</p>
            </div>
          </div>
        </div>
        <WhatsappButton />
      </section>
      
    </>
  );
};

export default AboutMeSection;
