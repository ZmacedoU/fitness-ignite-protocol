
import React from 'react';
import { Users, Brain, TrendingUp, CheckCircle } from 'lucide-react';

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

        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-vf-orange/20 shadow-lg shadow-vf-orange/5">
          <h3 className="text-3xl font-bold mb-8">✅ Você vai ter:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10 border border-vf-orange/10"
              >
                <CheckCircle className="text-vf-orange mt-1 flex-shrink-0" />
                <p className="text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
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
    icon: Users,
  },
  {
    title: "Mentalidade",
    description: "Desenvolvimento de disciplina e consistência, transformando o treinamento em um hábito prazeroso e produtivo.",
    icon: Brain,
  },
  {
    title: "Evolução Constante",
    description: "Protocolos periodizados com progressão científica para garantir resultados contínuos e sustentáveis.",
    icon: TrendingUp,
  },
];

const benefits = [
  "Um app exclusivo com vídeos gravados por mim ou por meus alunos mostrando execuções de exercícios com qualidade máxima. Nada terceirizado. Nada copiado.",
  "Suporte direto comigo pelo app de treinamento e também via WhatsApp.",
  "Análise completa do seu físico, focada em identificar seus pontos fracos e construir um físico mais harmônico e evoluído.",
  "Análise postural para correção de desvios, desenvolvimento equilibrado e eliminação de dores causadas por má postura.",
  "Protocolos de treino personalizados, baseados na sua rotina semanal, criados especialmente para o seu objetivo físico.",
  "Acompanhamento periódico da sua evolução, com comparações, feedbacks e reajustes de rota.",
  "Estratégias de treino com técnicas e métodos avançados, embasados na ciência do fitness e no que há de mais moderno no mundo do fisiculturismo.",
  "Protocolos adaptados dos campeões e campeãs do fisiculturismo, pensados para o público geral alcançar resultados reais.",
];

export default MethodSection;
