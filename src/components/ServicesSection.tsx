
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-vf-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            PROTOCOLO DE <span className="text-vf-orange">TREINAMENTO</span> EXCLUSIVO
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            O protocolo de treinamento é para você que busca atingir um novo nível.
            Se você se sente estagnado com o seu físico e quer realmente evoluir, meu acompanhamento 
            é feito para transformar o seu corpo e a sua rotina com consistência e estratégia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-4 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-vf-black to-gray-900 p-8 rounded-lg border border-vf-orange">
          <h3 className="text-2xl font-bold mb-6">✅ Você vai ter:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 mb-4">
                <CheckCircle className="text-vf-orange mt-1 flex-shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <blockquote className="quote text-2xl">
            "Na dúvida, faça mais força!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Análise completa do físico",
    description: "Identificação de pontos fracos e construção de um físico harmônico e evoluído.",
    icon: <span className="text-3xl">🔍</span>,
  },
  {
    title: "Análise postural",
    description: "Correção de desvios, desenvolvimento equilibrado e eliminação de dores.",
    icon: <span className="text-3xl">⚖️</span>,
  },
  {
    title: "Treinos personalizados",
    description: "Protocolos baseados na sua rotina semanal, criados para seu objetivo físico.",
    icon: <span className="text-3xl">📈</span>,
  },
  {
    title: "Estratégias avançadas",
    description: "Técnicas e métodos avançados embasados na ciência do fitness.",
    icon: <span className="text-3xl">🔬</span>,
  },
  {
    title: "Suporte direto",
    description: "Acompanhamento pelo app de treinamento e também via WhatsApp.",
    icon: <span className="text-3xl">💬</span>,
  },
  {
    title: "Acompanhamento periódico",
    description: "Evolução com comparações, feedbacks e reajustes de rota quando necessário.",
    icon: <span className="text-3xl">🔄</span>,
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

export default ServicesSection;
