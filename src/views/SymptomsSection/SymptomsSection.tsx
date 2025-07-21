import style from "./SymptomSection.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import Card from "../../components/Card/Card";

const SymptomsSection = () => {
  return (
    <section id='symptoms'  className={style.symptomSection}>
      <Subtitle>Sintomas</Subtitle>
      <h2>Como posso te ajudar</h2>
      <p><b>Talvez você ainda não tenha conseguido nomear o que sente.</b></p>
      <p>A sua curiosidade pela terapia pode ser incômodo difícil de explicar. Uma sensação de esgotamento. A impressão de estar repetindo ciclos. Ou uma vontade de cuidar de si que surgiu no meio do caos. Os motivos que levam alguém a buscar terapia são tão diversos quanto as histórias que carregamos. Mas alguns temas aparecem com frequência no consultório, e talvez você se reconheça em um ou em vários deles.</p>
      <div className={style.cards}>
        <Card 
          title="Dificuldades nos relacionamentos"
          description="Quando o diálogo falha, os desencontros se acumulam e o vínculo perde o cuidado. Relações amorosas, familiares ou profissionais começam a machucar mais do que acolher."
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Sobrecarga emocional e sensação de invisibilidade"
          description="Você cuida de tudo e de todos, mas quase ninguém repara quando é você quem precisa. A rotina engole, o corpo dá sinais — mas pedir ajuda parece egoísmo."
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Oscilações Emocionais e Desânimo Persistente"
          description="Tristeza sem motivo aparente, vontade de se isolar, crises de choro. A exaustão emocional e mental não passa, mas você segue em silêncio, como se ninguém percebesse o peso que carrega."
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Ansiedade, insegurança e autocrítica paralisante"
          description="O corpo vive em alerta. O pensamento acelera, o medo de errar aperta o peito. Você se cobra, se compara, se julga. Planejar tudo nos mínimos detalhes já foi uma forma de se sentir segura — mas, agora, só aumenta o cansaço."
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Padrões familiares que se repetem"
          description="Histórias de escassez, controle ou abandono atravessam gerações e ecoam nas suas escolhas. E quando você tenta quebrar o ciclo, a culpa aparece."
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Dificuldade de se escutar e se priorizar"
          description='Você aprendeu a se moldar para caber nos papéis que esperavam de você. Agora, diante da pergunta "o que você quer?", o vazio assusta.'
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Sexualidade atravessada por dor, culpa ou desconexão"
          description="Sentir prazer é um direito — mas nem sempre foi vivido assim. Seu corpo carrega silenciamentos, medos ou feridas. E talvez ainda esteja aprendendo a habitar-se."
          icon=""
          hover={true}
          className={style.card}
        />
        <Card 
          title="Lutos e despedidas difíceis de elaborar"
          description="Nem todo luto envolve a morte. Pode ser o fim de uma fase, de um vínculo ou de quem você foi. Toda despedida merece tempo, cuidado e dignidade."
          icon=""
          hover={true}
          className={style.card}
        />
      </div>
    </section>
  )
}

export default SymptomsSection;