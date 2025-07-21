import style from "../EducationSection/EducationSection.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
// import profileImage from "../../assets/img/photos/day.jpg";

const EducationSection = () => {
  return (
    <section id="education" className={style.educationSection}>
      <div className={style.profileImageContainer}>
        {/* <img src={profileImage} alt="foto da psicóloga Dayana Mendes" /> */}
      </div>
      <div>
        <Subtitle>Minhas Formações</Subtitle>
        <h2 className={style.sectionTitle}>Aprendizados Que Caminham Comigo</h2>
        <p>Minha trajetória é feita de estudo, prática clínica e muita escuta:</p>

        <ul>
          <li>
            {/* <i className="fa-brands fa-instagram"></i> */}
            Psicóloga formada pelo Centro Universitário Universidade Paulista (CRP ativo);
          </li>
          <li>Pós-graduanda em Terapia Sistêmica pela Viver Mais Psicologia;</li>
          <li>Capacitação em Terapia de Casais e Relações Amorosas;</li>
          <li>Estudo contínuo em Tanatologia — para acolher os lutos, as despedidas e os encerramentos, sejam eles concretos ou simbólicos;</li>
          <li>Participante de grupos e cursos sobre Práticas Narrativas, Gênero, Sexualidade, Violências e Saúde Mental;</li>
          <li>Pesquisadora dos atravessamentos entre Cultura Geek e jogos — integro o desenvolvimento de jogos sobre saúde mental, aproximando psicologia e narrativas interativas de forma segura e acessível.</li>
          <li>Mais de 3 anos de experiência clínica, oferecendo escuta afetiva e responsável.</li>
        </ul>

        <p>Acredito que estudar também é um ato de cuidado. Por isso, sigo me aprofundando para te acompanhar com mais presença, ética e humanidade — respeitando sua história, seus limites e o tempo do seu processo.</p>
      </div>
    </section>
  );
};

export default EducationSection;
