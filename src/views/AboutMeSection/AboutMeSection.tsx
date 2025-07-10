import style from "../AboutMeSection/AboutMeSection.module.css";
import profileImage from "../../assets/img/photos/day.png";

const AboutMeSection = () => {
  return (
    <section id="about-me"
    className={style.aboutMeSection}>
      <div className={style.profileImageContainer}>
        <img src={profileImage} alt="foto da psicóloga Dayana Mendes" />
      </div>
      <div>
        <h2 className={style.sectionTitle}>Sobre mim</h2>
        <p>Heyy, boas-Vindas! Me chamo Dayana Mendes, sou psicóloga clínica (CRP 06/177353) e criadora de conteúdo digital sobre saúde mental.. Atuo com Psicoterapia Individual e de Casais, com foco especial em mulheres jovens adultas e pessoas LGBTQIAPN+ que buscam ressignificar suas histórias, construir vínculos mais saudáveis e fortalecer sua autonomia emocional.</p>
        <p>Minha trajetória não começa no título de psicóloga. Venho de uma origem simples, sou filha de migrantes nordestinos e fui criada por mulheres extremamente humanas que me ensinaram sobre afeto, resistência — e também sobre o cansaço de tentar dar conta de tudo sozinha.</p>
        <p>Já me senti perdida dentro da minha própria história. Foi através da terapia — e do estudo — que reencontrei caminhos, me reconstruí e passei a olhar pra minha vida com mais respeito e humanidade.</p>
        <p>Hoje meu compromisso é criar espaços seguros onde você possa se escutar, se fortalecer e construir novas formas de existir, sem fórmulas prontas, sem julgamentos.</p>
        <p>Minha escuta é sistêmica, narrativa, feminista e atravessada pela vida real, com suas camadas, desafios e possibilidades de recomeço.</p>
      </div>
    </section>
  );
};

export default AboutMeSection;
