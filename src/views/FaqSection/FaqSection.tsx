import { useState } from "react";
import style from "../FaqSection/FaqSection.module.css";
import { Link } from "react-router-dom";
import Subtitle from "../../components/Subtitle/Subtitle";

const faqData = [
  {
    question: "Como faço para iniciar a minha terapia com você?",
    answer: [
      "Fico muito feliz que esteja considerando começar sua terapia comigo. Sei que essa escolha envolve coragem, e quero que saiba que será recebida com respeito, sensibilidade e compromisso desde o primeiro contato.",
      <>
        É só me chamar no WhatsApp:{" "}
        <Link to="https://wa.me/5511960765640?text=Oi%20Day,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão"
        target="_blank" rel="noopener noreferrer"
        style={{ color: "#5b99a1" }}>
          (11) 96076-5640
        </Link>
        .
      </>,
      "Te explico como funciona o processo, falamos sobre valores, formas de pagamento, frequência e, se fizer sentido pra você, já deixamos sua primeira sessão agendada com carinho. Se quiser saber mais sobre meu trabalho ou tiver dúvidas antes de decidir, basta me enviar uma mensagem.",
    ],
  },
  {
    question: "Como funciona a primeira sessão?",
    answer: ["A primeira sessão é um espaço de chegada — o momento em que nos conhecemos e começamos a construir, com cuidado, o nosso vínculo. Não tem um roteiro fixo. É uma pausa na rotina pra você falar, no seu tempo, sobre o que tem vivido, o que anda pesando ou te fazendo repensar escolhas, vínculos e emoções. Não precisa ter tudo organizado nem saber por onde começar. Basta vir como puder.  A minha escuta é ativa, acolhedora e humana. Eu vou te ouvir com atenção e respeito, mas sem aquele silêncio distante que tantas vezes afasta. Esse estereótipo não faz parte da minha prática. Ao longo do processo, além da escuta, também trago reflexões, provocações clínicas e, quando fizer sentido, ferramentas práticas que ajudam a reconhecer padrões, ressignificar vivências e construir alternativas mais saudáveis — no seu tempo, com respeito à sua história."],
  },
  {
    question: "Quanto custa a sessão e como funciona o pagamento?",
    answer: ["Por uma questão de ética e respeito às diretrizes da Psicologia, os valores das sessões não podem ser divulgados abertamente. Por isso, assim que você me chamar pelo WhatsApp, te explico com calma todos os detalhes: valores, formas de pagamento, como funciona o processo psicoterapêutico, etc."],
  },
  {
    question: "Preciso ter um grande problema pra começar a terapia?",
    answer: [
      "Não. Muitas pessoas acreditam que só devem buscar terapia em momentos extremos, mas o cuidado emocional também pode ser preventivo — e isso faz toda a diferença. A terapia é um espaço pra escutar o que anda silencioso, entender os efeitos das suas escolhas, dos seus vínculos e dos contextos que te atravessam. Um lugar pra criar outras perguntas, ampliar perspectivas e sustentar movimentos mais conscientes, mesmo quando a dor ainda não tem nome. Não é sobre o “tamanho” do problema, mas sobre o desejo de viver com mais presença e autoria.",
    ]
  },
  {
    question: "Os atendimentos são presenciais ou online?",
    answer: [
      "Atendo exclusivamente online. Isso permite que eu acompanhe pessoas em diferentes fases da vida e de diferentes partes do mundo. A terapia online oferece flexibilidade, continuidade e acolhimento, mesmo com rotinas corridas ou mudanças de cidade. Basta um espaço reservado e uma boa conexão. O cuidado, o vínculo e a escuta seguem firmes, onde quer que você esteja.",
    ]
  },
  {
    question: "Você atende apenas casais LGBTQIAPN+?",
    answer: [
      "Atendo casais e relações afetivas em diferentes configurações, orientações e identidades — incluindo casais hétero, LGBTQIAPN+, vínculos não monogâmicos e outras formas de se relacionar com afeto e compromisso. O mais importante é que todas as pessoas envolvidas estejam dispostas a olhar com mais consciência e responsabilidade para a relação e investir em formas mais saudáveis de se conectar.",
    ]
  },
  {
    question: "Como funciona a terapia de casal? Precisa estar em crise?",
    answer: [
      "Não precisa esperar o relacionamento chegar ao limite para buscar ajuda. A terapia de casal pode ser buscada tanto para atravessar conflitos quanto para fortalecer o vínculo, melhorar a comunicação e construir formas mais saudáveis de se relacionar."
    ]
  },
  {
    question: "Posso falar de sexualidade, gênero ou temas delicados nas sessões?",
    answer: [
      "Sim. Esse é um espaço seguro, ético e preparado para te acolher por inteiro. Minha prática tem um olhar feminista e interseccional, e sei o quanto temas como sexualidade, identidade, corpo e relações podem ser atravessados por silenciamentos, julgamentos ou inseguranças. Aqui, não existem assuntos proibidos. Você pode trazer a sua história, suas dúvidas, suas dores e o que sentir necessidade de compartilhar — sempre no seu tempo, do seu jeito, com o cuidado e o respeito que sua vivência merece."
    ]
  },
  {
    question: "Você atende por planos de saúde?",
    answer: [
      "Meus atendimentos são particulares. Após cada sessão, emito um recibo eletrônico pelo sistema da Receita Federal, por meio da plataforma Receita Saúde — disponível no aplicativo oficial da Receita. Esse recibo pode ser usado para controle financeiro, declaração do Imposto de Renda ou solicitação de reembolso, caso o seu plano de saúde ofereça essa opção. Como as regras variam entre os convênios, recomendo confirmar diretamente com o seu plano se esse benefício está disponível. Se for solicitado algum documento complementar, posso tentar te ajudar com o que estiver ao meu alcance enquanto sua psicóloga, para facilitar esse processo da melhor forma possível."
    ]
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={style.faqSection}>
      <div className={style.sectionTitle}>
        <Subtitle>F.A.Q.</Subtitle>
        <h2>Perguntas Frequentes</h2>
      </div>
      <div className={style.sectionContent}>
        {faqData.map((item, idx) => (
          <div className={style.questionContainer} key={idx}>
            <button className={`${style.question} ${openIndex === idx ? style.questionActive : ""}`} onClick={() => handleToggle(idx)} aria-expanded={openIndex === idx} aria-controls={`faq-answer-${idx}`}>
              <i className={`fa-solid fa-caret-down`} style={{ transform: openIndex === idx ? "rotateX(-180deg)" : "none" }}></i>
              <span>{item.question}</span>
            </button>
            <div id={`faq-answer-${idx}`} className={`${style.answer} ${openIndex === idx ? style.answerOpen : ""}`}>
              {item.answer.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
