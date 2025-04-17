import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection: React.FC = () => {
  // Section heading animation
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>(
    'animate-fade-in',
    0.1, 
    { delay: 200, noInitialHidden: true }
  );
  
  // Service cards with staggered animations
  const serviceAnimations = services.map((_, index) => {
    return useScrollAnimation<HTMLDivElement>(
      'animate-fade-in',
      0.1,
      { 
        staggerIndex: index, 
        staggerDelay: 100, 
        delay: 300, 
        duration: 600,
        noInitialHidden: true 
      }
    );
  });
  
  // Benefits section animations
  const benefitsContainerAnimation = useScrollAnimation<HTMLDivElement>(
    'animate-fade-in',
    0.1, 
    { delay: 500, noInitialHidden: true }
  );
  
  // Benefit items with staggered animations
  const benefitAnimations = benefits.map((_, index) => {
    return useScrollAnimation<HTMLDivElement>(
      'animate-fade-in',
      0.1,
      { 
        staggerIndex: index, 
        staggerDelay: 80, 
        delay: 600, 
        duration: 500,
        noInitialHidden: true 
      }
    );
  });
  
  // Quote animation
  const quoteAnimation = useScrollAnimation<HTMLBlockquoteElement>(
    'animate-fade-in',
    0.1, 
    { delay: 1200, noInitialHidden: true }
  );

  return (
    <section className="py-20 bg-gradient-to-r from-black via-black/95 to-vf-orange/40">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleAnimation.ref} 
          className={`section-title mx-auto text-center mb-12 ${titleAnimation.className}`}
          style={titleAnimation.style}
        >
          Nossos <span className="text-vf-orange">Serviços</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const animation = serviceAnimations[index];
            return (
              <div 
                key={index} 
                ref={animation.ref}
                className={`backdrop-blur-sm bg-white/5 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 transform-gpu ${animation.className}`}
                style={{
                  ...animation.style,
                  animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', 
                }}
              >
                <div className="text-vf-orange mb-6 text-4xl">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div 
          ref={benefitsContainerAnimation.ref}
          className={`backdrop-blur-sm bg-white/5 rounded-3xl p-12 ${benefitsContainerAnimation.className}`}
          style={benefitsContainerAnimation.style}
        >
          <h3 className="text-3xl font-bold mb-8">✅ Você vai ter:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const animation = benefitAnimations[index];
              return (
                <div 
                  key={index} 
                  ref={animation.ref}
                  className={`flex items-start gap-4 p-4 backdrop-blur-sm bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10 transform-gpu ${animation.className}`}
                  style={{
                    ...animation.style,
                    animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <CheckCircle className="text-vf-orange mt-1 flex-shrink-0" />
                  <p className="text-gray-200">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote 
            ref={quoteAnimation.ref}
            className={`text-2xl font-light italic text-gray-300 ${quoteAnimation.className}`}
            style={quoteAnimation.style}
          >
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
