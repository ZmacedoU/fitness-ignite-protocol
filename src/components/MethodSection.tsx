
import React from 'react';
import { 
  Smartphone, MessageCircle, User, Yoga, 
  Settings, TrendingUp, FlaskRound, Trophy 
} from 'lucide-react';

const MethodSection: React.FC = () => {
  return (
    <section id="metodo" className="py-20 bg-gradient-to-r from-black via-black/95 to-vf-orange/20 relative overflow-hidden">
      {/* Background Orange Glow */}
      <div className="absolute -bottom-1/2 right-0 w-[500px] h-[500px] bg-vf-orange opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Protocolo de Treinamento <span className="text-vf-orange">Exclusivo</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Não é sobre treinar mais. É sobre treinar <span className="text-vf-orange font-bold">certo</span>.
          </p>
        </div>
        
        {/* Method Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 border border-vf-orange/20 shadow-lg shadow-vf-orange/5"
            >
              <div className="text-vf-orange mb-6 text-4xl flex justify-center items-center h-16">
                <pillar.icon size={50} className="opacity-90" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{pillar.title}</h3>
              <p className="text-gray-300 text-center">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">
            Tudo o que você recebe com minha consultoria
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 border border-vf-orange/20 shadow-lg hover:shadow-vf-orange/20 animate-fade-in"
            >
              <div className="flex items-start gap-6">
                <div className="text-vf-orange transition-colors group-hover:text-vf-orange/80">
                  <benefit.icon size={40} className="flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-2xl font-light italic text-gray-300">
            "Na dúvida, faça mais força!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const pillars = [
  {
    title: "Personalização",
    description: "Identificação de pontos fracos e construção de um físico harmônico, adaptado às suas necessidades específicas.",
    icon: User,
  },
  {
    title: "Mentalidade",
    description: "Desenvolvimento de disciplina e consistência, transformando o treinamento em um hábito prazeroso e produtivo.",
    icon: Settings,
  },
  {
    title: "Evolução Constante",
    description: "Protocolos periodizados com progressão científica para garantir resultados contínuos e sustentáveis.",
    icon: TrendingUp,
  },
];

const benefits = [
  {
    title: "🎥 Acesso exclusivo ao meu app de treinos",
    description: "Vídeos gravados por mim ou meus alunos com execução perfeita dos exercícios. Nada terceirizado. Nada copiado.",
    icon: Smartphone
  },
  {
    title: "💬 Suporte direto comigo",
    description: "Atendimento pessoal pelo app de treinos e também via WhatsApp, sem intermediários.",
    icon: MessageCircle
  },
  {
    title: "🧍‍♂️ Análise física completa",
    description: "Avaliação do seu físico para identificar pontos fracos e montar um plano de evolução harmônica.",
    icon: User
  },
  {
    title: "🧘 Correção postural e reequilíbrio corporal",
    description: "Análise postural focada em corrigir desvios e aliviar dores causadas por má postura.",
    icon: Yoga
  },
  {
    title: "🧠 Treino 100% personalizado",
    description: "Protocolos adaptados à sua rotina semanal e ao seu objetivo específico, criados do zero.",
    icon: Settings
  },
  {
    title: "📈 Acompanhamento de evolução",
    description: "Feedbacks e comparações constantes para ajustar o plano e manter sua evolução constante.",
    icon: TrendingUp
  },
  {
    title: "🧪 Estratégias baseadas em ciência e prática",
    description: "Técnicas modernas do fisiculturismo, aplicadas com lógica, estudo e adaptação individual.",
    icon: FlaskRound
  },
  {
    title: "🏆 Protocolos adaptados de campeões",
    description: "Modelos e práticas usados por atletas adaptados para pessoas comuns que querem resultados reais.",
    icon: Trophy
  }
];

export default MethodSection;

