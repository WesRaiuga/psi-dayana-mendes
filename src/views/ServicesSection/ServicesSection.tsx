import style from "../ServicesSection/ServicesSection.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const servicesData = [
  {
    title: "Psicoterapia Individual",
    text: ["Atendimentos online semanais com duração de 50 minutos. Voltados para mulheres e pessoas LGBTQIAPN+ que desejam compreender suas dores com mais profundidade e encontrar formas mais saudáveis de existir. Durante os encontros, trabalhamos temas como ansiedade, autocrítica, padrões familiares, relações afetivas e sobrecarga emocional, a partir de uma escuta atenta à tua história. Sempre que fizer sentido, indico materiais complementares para acompanhar o processo."],
  },
  {
    title: "Terapia de Casal",
    text: ["Sessões de 1h a 1h15 para casais (heterossexuais ou LGBTQIAPN+) que desejam melhorar o diálogo, cuidar de feridas emocionais e fortalecer a conexão. O espaço é conduzido com base em uma perspectiva sistêmica e interseccional, onde os dois lados são escutados e questões como comunicação, confiança, ciúmes, sexualidade e diferenças culturais são trabalhadas com profundidade. A terapia se adapta às queixas e demandas específicas de cada casal."]
  },
  {
    title: "Supervisão para Psis",
    text: ["Espaço de trocas clínicas com foco em psicólogas que desejam sustentar sua prática com segurança, profundidade e ética. A supervisão pode ser individual ou em grupo e acolhe desde dúvidas técnicas até os atravessamentos pessoais que emergem nos atendimentos. Utilizo uma perspectiva sistêmica, narrativa e feminista, com atenção aos marcadores sociais que atravessam a clínica."]
  },
  {
    title: "Desenvolvimento de Jogos",
    text: ["Atuo no desenvolvimento de jogos com foco em saúde mental e narrativa sensível. Colaboro com roteiristas e designers na criação de personagens, diálogos e interações que representem vivências subjetivas com ética, afeto e profundidade. Integro psicologia sistêmica e narrativa ao processo criativo, tornando segura a experiência de quem joga."]
  },
  {
    title: "Saúde Mental nas Empresas",
    text: ["Parcerias com empresas e coletivos que desejam criar ambientes mais saudáveis emocionalmente. Desenvolvo ações como grupos terapêuticos, formações, escuta especializada e rodas de conversa. As propostas são pensadas conforme a demanda de cada instituição, com foco em prevenção, cuidado e cultura organizacional."
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className={style.servicesSection}>
      <Subtitle>Serviços</Subtitle>
      <h2>Formas De Estar Presente</h2>
      <div className={style.dialogs}>
        {servicesData.map((item, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <div className={style.dialogTrigger}>{item.title}</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className={style.dialogBody}>
                <DialogTitle className={style.dialogTitle}>{item.title}</DialogTitle>
                {item.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
