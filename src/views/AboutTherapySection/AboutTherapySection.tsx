import style from "./AboutTherapySection.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Card from "../../components/Card/Card";

const pillarsData = [
  {
    title: "Escuta ética e sensível",
    text: [
      "A escuta é a base de tudo.",
      "Mas não qualquer escuta — e sim uma escuta técnica, afetiva e comprometida, capaz de perceber nuances, respeitar silêncios e acolher dores que talvez nunca tenham sido nomeadas.",
      "Muitas vezes, a queixa que chega não é o que mais dói — é apenas o que deu para ser dito naquele momento.",
      "Por isso, o cuidado começa no modo como se escuta: com atenção genuína, curiosidade respeitosa e um olhar que entende o sofrimento como parte de vínculos, histórias, padrões e contextos sociais.",
      "Aqui, não é preciso se justificar para receber acolhimento.",
      "Este é um espaço onde a escuta vai além da neutralidade: é ativa, participativa e implicada com o processo de quem se permite narrar a própria história.",
      "Apesar de ser um contexto profissional, construímos uma relação humana — com afeto, colaboração e presença verdadeira.",
      "A escuta, nesse lugar, é também forma de cuidado."
    ],
  },
  {
    title: "Protagonismo de quem busca pela terapia",
    text: [
      "Você conhece sua história como ninguém.",
      "Na terapia, esse saber tem valor.",
      "Aqui, não se trata de seguir respostas prontas ou fórmulas externas, mas de se reconhecer como parte ativa da própria trajetória.",
      "Na correria do dia a dia, é comum faltar tempo para olhar pra dentro.",
      "A terapia oferece essa pausa rara: um tempo onde é possível se escutar com mais calma, se demorar em si e sustentar escolhas que façam sentido.",
      "É um processo que convida à autonomia e ao agenciamento da própria vida — saindo do lugar de espera e se envolvendo, no seu tempo, com as mudanças que já podem começar a acontecer.",
      "Meu papel é caminhar junto: oferecendo ferramentas clínicas, apoio e perguntas que ampliem o olhar.",
      "Com o tempo, é possível se valorizar com mais consciência, dar nome ao que antes parecia confuso e sustentar quem se é — com intenção, responsabilidade e afeto."
    ],
  },
  {
    title: "Parceria e co-construção",
    text: [
      "A terapia é um espaço de troca, vínculo e construção conjunta.",
      "As transformações que acontecem aqui não surgem de um saber imposto, mas da parceria entre quem busca cuidado e quem sustenta o processo com presença clínica e ética.",
      "Nas Práticas Narrativas da Terapia Sistêmica, chamamos isso de co-construção: a ideia de que o significado das experiências não está pronto nem fixo, mas pode ser ampliado, ressignificado e reconstruído por meio da linguagem, da escuta e do encontro.",
      "Cada sessão é uma oportunidade para nomear dores, reconhecer recursos esquecidos, construir ferramentas de cuidado e recontar a própria história com mais liberdade e coerência.",
      "Há direção, sim — cada passo é sustentado por intencionalidade terapêutica e sensibilidade ao tempo de quem chega.",
      "Essa parceria envolve engajamento mútuo: abertura para a troca, responsabilidade nos combinados e presença possível para o processo."
    ],
  },
  {
    title: "Confiança e segurança relacional",
    text: [
      "A confiança é um dos alicerces do cuidado psicológico.",
      "Ela se constrói com tempo, coerência e respeito aos limites de cada pessoa.",
      "Aqui, o sigilo é um compromisso inegociável. A escuta é protegida — ética, humana e sensível às histórias que atravessam quem chega até mim.",
      "Este é um espaço pensado para não ferir novamente: livre de revitimizações, julgamentos ou interpretações que culpabilizam.",
      "O cuidado acontece no vínculo real entre duas pessoas: uma que deseja ser escutada com dignidade, e outra que sustenta essa escuta com responsabilidade clínica.",
      "Quando há segurança, torna-se possível relaxar as defesas e tocar em partes da história que merecem ser vistas, nomeadas e cuidadas com delicadeza."
    ],
  },
  {
    title: "Responsabilidade compartilhada",
    text: [
      "Cuidar da saúde mental é um compromisso que se constrói em parceria.",
      "A terapia só se sustenta quando há intenção mútua de preservar o que está sendo cultivado.",
      "Por isso, valorizo acordos claros, comunicação aberta e responsabilidade de ambas as partes com aquilo que foi combinado: comparecer às sessões, respeitar os horários, realizar os pagamentos acordados e avisar com antecedência quando necessário.",
      "Esses cuidados práticos também sustentam o vínculo, o ritmo e a continuidade do percurso.",
      "Do meu lado, me comprometo com uma escuta ética, presença real e preparo técnico constante.",
      "E convido quem chega a cuidar desse espaço também — com o que for possível no momento, mas com presença verdadeira.",
      "É nesse pacto silencioso de cuidado mútuo que o processo ganha força."
    ],
  },
  {
    title: "Transformações possíveis e coerentes",
    text: [
      'Nem toda mudança faz barulho. Às vezes, ela chega no silêncio de um pensamento novo ou na coragem de dizer “não”.',
      'A terapia é um espaço para desacelerar e escutar o que já se move por dentro. Uma travessia sem receita, mas com direção.',
      'Não se trata de virar outra pessoa, e sim de se reconhecer com mais inteireza. Cuidar do que dói — e também do que quer crescer.',
      'As mudanças não precisam ser gigantes. Elas nascem nos detalhes: respeitar um limite, pedir ajuda, respirar fundo antes de repetir um padrão.',
      'É assim, aos poucos, sem pressa e sem cobrança de performance, que as transformações se tornam possíveis — e duradouras.'
    ],
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works">
      <Subtitle>Sobre a Terapia</Subtitle>
      <h2>Os Principais Pilares</h2>
      <div className={style.introText}>
        <p>A psicoterapia é um espaço onde histórias se desdobram com tempo, dignidade e escuta.</p>
        <p>Cada encontro é uma chance de respirar fundo, se aproximar de si e construir sentidos novos para aquilo que ainda machuca ou confunde.</p>
        <p>Aqui compartilho os pilares que sustentam o cuidado que ofereço:</p>
      </div>
      <div className={style.carousel}>
        <Carousel className="w-full max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4">
          <CarouselContent style={{padding: "10px", gap: "20px"}}>
            {pillarsData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card 
                    title={`${index + 1}. ${item.title}`}
                    description=""
                    icon=""
                    className={style.card}
                  >
                    <div className={style.text}>
                      {item.text.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                  </Card>
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
    <CarouselPrevious className="static translate-y-0" />
    <CarouselNext className="static translate-y-0" />
  </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HowItWorksSection;
