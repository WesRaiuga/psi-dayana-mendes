import { useState } from "react";
import style from "../FaqSection/FaqSection.module.css";
import { Link } from "react-router-dom";
import Subtitle from "../../components/Subtitle/Subtitle";

const faqData = [
  {
    question: "Qual é o valor das sessões?",
    answer: ["Por uma questão de ética e respeito às diretrizes da Psicologia, os valores das sessões não podem ser divulgados abertamente. Por isso, assim que você me chamar pelo WhatsApp, te explico com calma todos os detalhes: valores, formas de pagamento e como funciona o processo.", "Nesse primeiro contato, você também recebe o contrato psicoterapêutico, onde estão descritos seus direitos, deveres e informações importantes sobre o nosso trabalho juntas. Tudo de forma transparente, acolhedora e respeitosa.", "Se quiser entender melhor ou tirar dúvidas, é só me chamar."],
  },
  {
    question: "Nunca fiz terapia individual, como saber se esse espaço é pra mim?",
    answer: ["É super comum ter dúvidas no começo, principalmente se você nunca passou por um processo terapêutico. Por isso, nosso primeiro contato é um momento para conversar com calma, sem compromisso, entender o que você busca e se o meu espaço faz sentido pra você.", "Cada pessoa tem seu tempo, e aqui o acolhimento acontece com respeito à sua história e às suas necessidades."],
  },
  {
    question: "Como faço para iniciar a minha terapia com você?",
    answer: [
      <>
        É simples! Você pode me chamar pelo WhatsApp no número{" "}
        <Link to="https://wa.me/5511960765640?text=Oi%20Day,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão"
        target="_blank" rel="noopener noreferrer"
        style={{ color: "#5b99a1" }}>
          (11) 96076-5640
        </Link>
        {" "}e combinamos a sua primeira sessão.
      </>,
      "Nesse primeiro contato, te explico como funciona o processo, tiramos dúvidas e, se você sentir que faz sentido, já agendamos o melhor dia e horário para o nosso encontro. Se quiser, pode me mandar mensagem sem compromisso — vou ter o maior cuidado em te escutar.",
    ],
  },
  {
    question: "Preciso ter um grande problema pra começar a terapia?",
    answer: [
      "Não. Muita gente acredita que só deve procurar terapia em situações extremas, mas o cuidado emocional pode (e deve) ser preventivo também.",
      "A terapia é um espaço para se escutar, se conhecer melhor e fortalecer a autonomia, independentemente do tamanho da dor ou da fase que você está vivendo."
    ]
  },
  {
    question: "Os atendimentos são presenciais ou online?",
    answer: [
      "Meus atendimentos são 100% online, o que me permite acompanhar mulheres e pessoas LGBTQIA+ de diferentes lugares do Brasil e também quem está morando fora do país.",
      "O cuidado continua o mesmo, com atenção às suas vivências, cultura e identidade."
    ]
  },
  {
    question: "Você atende casais LGBTQIA+?",
    answer: [
      "Sim, atendo casais de todas as configurações e identidades.",
      "Meu consultório é um espaço seguro e acolhedor, pensado para que todas as pessoas possam cuidar das suas relações com respeito e profundidade."
    ]
  },
  {
    question: "Como funciona a terapia de casal? Precisa estar em crise?",
    answer: [
      "Não precisa esperar o relacionamento chegar ao limite para buscar ajuda. A terapia de casal serve tanto para atravessar conflitos quanto para fortalecer o vínculo, melhorar a comunicação e construir formas mais saudáveis de se relacionar.",
      "Cada processo é único e respeita o ritmo e as necessidades de quem participa. Os encontros têm duração de 1h a 1h15, oferecendo o tempo necessário para que ambos possam ser escutados, refletir juntos e construir novos caminhos para a relação."
    ]
  },
  {
    question: "Posso falar de sexualidade, gênero ou temas delicados nas sessões?",
    answer: [
      "Sim. Esse é um espaço seguro, ético e preparado para te acolher por inteiro. Minha prática tem um olhar feminista e interseccional, e sei o quanto temas como sexualidade, identidade, corpo e relações podem ser atravessados por silenciamentos, julgamentos ou inseguranças.",
      "Aqui, não existem assuntos proibidos. Você pode trazer a sua história, suas dúvidas, suas dores e o que sentir necessidade de compartilhar — sempre no seu tempo, do seu jeito, com o cuidado e o respeito que sua vivência merece."
    ]
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer: [
      "O tempo de duração da terapia varia conforme as necessidades, os objetivos e o momento de cada pessoa ou casal. Não existe um prazo fixo ou um caminho único — cada processo é construído de forma personalizada, respeitando tua história, teu ritmo e as demandas que vão surgindo ao longo dos encontros.",
      "Por uma questão ética e de responsabilidade profissional, não é possível — e nem permitido pelo Código de Ética da Psicologia — fazer estimativas exatas de tempo ou prometer resultados.",
      "Cada história é única, e o cuidado precisa acompanhar o que emerge ao longo do processo, sempre com sensibilidade e respeito. O que posso te garantir é um espaço seguro, onde caminhamos juntas, sem pressa, mas com o compromisso de cuidar da tua história de forma ética, acolhedora e responsável."
    ]
  },
  {
    question: "A psicóloga só me escuta? Ou ela fala também?",
    answer: [
      "Pode ficar tranquila, aqui o processo é ativo, acolhedor e humano. Vou te escutar com atenção e respeito, mas não fico só te olhando em silêncio — esse estereótipo não faz parte do meu jeito de trabalhar.",
      "Minha escuta é humanizada. Você vai lembrar, em cada encontro, que tem outro ser humano do outro lado, alguém que se conecta, se envolve e caminha contigo de forma próxima e verdadeira. A identificação e a conexão entre psicóloga e paciente são fundamentais. Não é só sobre técnica, mas sobre criar um espaço seguro, onde você possa se abrir de verdade.",
      "Além de te ouvir, também trago reflexões, provocações e, quando necessário, ferramentas práticas para te ajudar a compreender os padrões que te atravessam e construir alternativas mais saudáveis."
    ]
  },
  {
    question: "Você atende por planos de saúde?",
    answer: [
      "Não atendo diretamente por convênios, mas emito recibo pela plataforma Receita Saúde. Esse recibo pode ser utilizado para solicitar reembolso no seu plano de saúde, caso o benefício esteja disponível, ou para controle financeiro e declaração do Imposto de Renda. Recomendo confirmar diretamente com o seu convênio se essa possibilidade existe.",
    ]
  },
  {
    question: "Como funciona o pagamento?",
    answer: [
      "O pagamento das sessões é sempre antecipado. Assim que você envia o comprovante, já deixo sua sessão reservada no meu calendário.",
      "Você pode realizar o pagamento por Pix ou transferência bancária, da forma que for mais prática pra você.",
      "Após cada encontro, emito o recibo pela plataforma Receita Saúde, que pode ser utilizado para reembolso no seu plano de saúde (caso esse benefício esteja disponível), para organização financeira ou declaração do Imposto de Renda.",
      "Antes de iniciarmos o processo, conversamos sobre todos os detalhes de valores e formas de pagamento, , para que tudo aconteça de maneira transparente e respeitosa."
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
        {/* <h1>
          <span>F.A.Q.</span>
        </h1> */}
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
