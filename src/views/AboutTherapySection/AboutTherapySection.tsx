import style from "./AboutTherapySection.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Card from "../../components/Card/Card";

const pillarsData = [
  {
    title: "Escuta ética e sensível",
    text: [
      'Na terapia, muitas pessoas estreiam no direito de serem ouvidas com dignidade.',
      'Sem pressa, sem interrupções, sem alguém tentando consertar o que foi dito.',
      'Mas não é qualquer escuta — há técnica, há ciência, e também uma pessoa inteira ali, que não esquece o quanto é valioso se conectar de forma genuína.',
      'Interessa a queixa, mas também o que pulsa por trás dela: histórias, vínculos, repetições.',
      'Nem toda dor chega nomeada. Aqui, até o seu silêncio é escutado com respeito.'
    ],
  },
  {
    title: "Protagonismo de quem busca pela terapia",
    text: [
      'Você conhece sua história como ninguém e, na terapia, esse saber tem valor.',
      'Não se trata de seguir respostas prontas, mas de se reconhecer como parte ativa do próprio caminho.',
      'Em meio à correria, é raro ter um tempo pra se escutar com calma.',
      'A terapia oferece essa pausa: um espaço pra se demorar em si, sustentar escolhas que façam sentido e sair do lugar de espera.',
      'Com apoio, perguntas e presença clínica, é possível ampliar o olhar e, aos poucos, sustentar quem se é — com intenção, consciência e afeto.'
    ],
  },
  {
    title: "Parceria e co-construção",
    text: [
      'Na terapia, nada é imposto. Escutamos, nomeamos e questionamos como equipe.',
      'Observamos padrões, pensamentos, emoções e comportamentos que se repetem e o impacto disso nas suas escolhas e vínculos.',
      'Com recursos narrativos e cognitivos — como externalização, escrita terapêutica, perguntas reflexivas e pequenas ações no cotidiano, vamos criando sentidos novos para o que antes parecia fixo.',
      'É no encontro entre saberes que o cuidado se torna caminho.'
    ],
  },
  {
    title: "Confiança e segurança relacional",
    text: [
      'Mesmo sendo um serviço, a terapia também é uma relação e como toda relação, precisa de uma abertura mínima pra acontecer.',
      'A escuta é protegida por sigilo, ética e sensibilidade às histórias que chegam.',
      'Este é um espaço pensado para não ferir: livre de revitimizações, julgamentos ou interpretações que culpabilizam.',
      'Se você tiver qualquer dúvida ou feedback, lembre-se que comigo você tem um canal aberto. O vínculo também se fortalece quando é possível conversar sobre ele.'
    ],
  },
  {
    title: "Responsabilidade compartilhada",
    text: [
      'Cuidar da saúde mental é um compromisso que se constrói em parceria.',
      'A terapia só se sustenta quando há intenção mútua de preservar o que está sendo cultivado.',
      'Por isso, valorizo acordos claros: presença nas sessões, respeito aos horários, avisos com antecedência e alinhamento sobre pagamentos.',
      'Esses cuidados práticos sustentam o vínculo, o percurso.',
      'Do meu lado, me comprometo com uma escuta ética, presença real e aperfeiçoamento técnico constante.',
      'É nesse combinado de cuidado mútuo que o processo ganha força.'
    ],
  },
  {
    title: "Transformações possíveis e coerentes",
    text: [
      'Nem toda mudança faz barulho. Às vezes, ela chega no silêncio de um pensamento novo ou na coragem de dizer “não”.',
      'A terapia é um espaço para desacelerar e escutar o que já se move por dentro. Uma travessia sem receita, mas com direção.',
      'Não se trata de virar outra pessoa, e sim de se reconhecer com mais inteireza. Cuidar do que dói e também do que quer crescer.',
      'As mudanças não precisam ser gigantes. Elas nascem nos detalhes: respeitar um limite, pedir ajuda, respirar fundo antes de repetir um padrão.',
      'É assim, aos poucos, sem pressa e sem cobrança de performance, que as transformações se tornam possíveis e duradouras.'
    ],
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className={style.aboutTherapy}>
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
