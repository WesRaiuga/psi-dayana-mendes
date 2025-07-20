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
          description="Quando o diálogo falha, os desentendimentos se acumulam e os vínculos deixam de acolher. Relações amorosas, familiares ou de trabalho podem adoecer em silêncio. Às vezes, o afeto vira cobrança, e se posicionar parece arriscado demais."
          icon=""
        />
        <Card 
          title="Sobrecarga emocional e sensação de invisibilidade"
          description="Você cuida de tudo, de todos — mas quase ninguém repara quando é você quem precisa. A rotina te engole, o corpo dá sinais, mas pedir ajuda parece egoísmo. Ser sempre “forte” tem um preço: o seu próprio bem-estar e saúde."
          icon=""
        />
        <Card 
          title="Oscilações Emocionais e Desânimo Persistente"
          description="Tristeza sem motivo aparente, raiva acumulada, vontade de se isolar, crises de choro, aquela exaustão emocional e mental que não passa. Nem sempre é um diagnóstico — mas ainda assim, é sofrimento. E você merece escuta segura com acolhimento, respeito e cuidado."
          icon=""
        />
        <Card 
          title="Ansiedade, insegurança e autocrítica paralisante"
          description="O corpo vive em alerta. O pensamento acelera, o coração dispara e até o silêncio pesa. O medo de errar, decepcionar ou não dar conta te acompanha o dia todo. Você se cobra, se compara, se julga. E, no fundo, sente que nunca é suficiente, mesmo fazendo o impossível. O que um dia foi estratégia pra se proteger, hoje só te machuca."
          icon=""
        />
        <Card 
          title="Padrões familiares que se repetem"
          description="Histórias de escassez, rigidez ou abandono atravessaram gerações e ainda ecoam nas suas escolhas, medos e dores. A culpa aparece justo quando você tenta se diferenciar, abrir caminhos e construir uma vida mais saudável. E, mesmo desejando algo novo, é como se algo te puxasse de volta. Às vezes, seguir em frente parece desleal à família — mesmo quando permanecer no mesmo lugar é o que mais machuca."
          icon=""
        />
        <Card 
          title="Dificuldade de se escutar e se priorizar"
          description="Você passou a vida tentando se encaixar — nos papéis que queriam que voce performasse, no que esperavam de você, no que parecia “certo”. Foi aprendendo a calar o que sentia, a esconder o que pensava, a deixar seus desejos pra depois. Agora, quando alguém pergunta “o que você quer?”, você trava. Parece simples, mas não é. Se colocar em primeiro lugar ainda soa errado. Ser quem você é, às vezes, parece demais para os outros. Mas se esconder, se podar, se calar... é uma violência que te fere toda vez que acontece."
          icon=""
        />
        <Card 
          title="Sexualidade atravessada por dor, culpa ou desconexão"
          description="Sentir prazer é um direito — mas nem sempre foi vivido assim. Seu corpo carrega memórias, medos ou silenciamentos. Às vezes, o problema não é o desejo, mas o quanto você teve que se desconectar dele pra sobreviver."
          icon=""
        />
        <Card 
          title="Lutos e despedidas difíceis de elaborar"
          description="Nem todo luto envolve a morte de alguém, mas todo luto merece cuidado. Pode ser o fim de uma amizade, um relacionamento que se rompeu, uma fase da vida que ficou para trás, um sonho que não vingou, uma versão sua que já não faz mais sentido. Pode ser também a morte de um bichinho de estimação, uma perda gestacional, o falecimento de alguém que você ama — ou até alguém com quem o vínculo era confuso, mas a ausência ainda dói."
          icon=""
        />
      </div>
    </section>
  )
}

export default SymptomsSection;