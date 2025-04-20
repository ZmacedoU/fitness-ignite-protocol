
import React from 'react';
import { CheckCircle, Flame, Diamond, ArrowRight, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PlansSectionProps {
  onPerformanceClick?: () => void;
}

const PlansSection: React.FC<PlansSectionProps> = ({ onPerformanceClick }) => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(
    'opacity-100',
    0.1,
    { delay: 100 }
  );
  
  return (
    <section id="planos" className="py-20 relative overflow-hidden">
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Top edge gradient only */}
      <div className="absolute inset-0 z-0">
        {/* Top edge gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-vf-orange/20 to-transparent"></div>
      </div>
      
      {/* Radial Glow Effect (reduced opacity) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-vf-orange opacity-[0.03] blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 opacity-0 transition-all duration-500 transform translate-y-4 ${titleAnimation.className}`}
          style={titleAnimation.style}
        >
          <h2 className="section-title mx-auto">
            Escolha o plano <span className="text-vf-orange">ideal</span> para sua jornada
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Invista em você e transforme sua vida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const delay = 300 + index * 200;
            const cardAnimation = useScrollAnimation<HTMLDivElement>(
              'opacity-100 transform-none',
              0.1,
              { delay }
            );
            
            const labelDelay = 800 + index * 50;
            const labelAnimation = useScrollAnimation<HTMLDivElement>(
              'opacity-100 scale-100',
              0.1,
              { delay: labelDelay }
            );
            
            return (
              <div 
                key={index} 
                ref={cardAnimation.ref}
                className={`rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.03] hover:shadow-lg ${
                  index === 0 
                    ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/10 border-2 border-[#B0B0B0] shadow-lg hover:shadow-[#B0B0B0]/20' 
                    : index === 1
                      ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/30 border-2 border-[#FF6600] shadow-lg hover:shadow-[#FF6600]/30'
                      : index === 2
                        ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/20 border-2 border-[#E1E1E1] shadow-lg hover:shadow-[#E1E1E1]/40'
                        : 'bg-white/5 backdrop-blur-sm border border-vf-orange/20'
                } opacity-0 transform translate-y-8 ${cardAnimation.className}`}
                style={cardAnimation.style}
              >
                <div className="p-6 bg-black/50 backdrop-blur-sm relative">
                  {index === 0 && (
                    <div 
                      ref={labelAnimation.ref}
                      className={`absolute top-0 right-0 bg-white/10 text-white px-3 py-1 rounded-bl-lg flex items-center opacity-0 scale-90 transition-all duration-300 ${labelAnimation.className}`}
                      style={labelAnimation.style}
                    >
                      <DollarSign className="mr-1" size={16} />
                      <span className="text-xs font-bold">MELHOR CUSTO-BENEFÍCIO</span>
                    </div>
                  )}
                  {index === 1 && (
                    <div 
                      ref={labelAnimation.ref}
                      className={`absolute top-0 right-0 bg-vf-orange text-white px-3 py-1 rounded-bl-lg flex items-center opacity-0 scale-90 transition-all duration-300 ${labelAnimation.className}`}
                      style={labelAnimation.style}
                    >
                      <Flame className="mr-1" size={16} />
                      <span className="text-xs font-bold">MAIS ESCOLHIDO</span>
                    </div>
                  )}
                  {index === 2 && (
                    <div 
                      ref={labelAnimation.ref}
                      className={`absolute top-0 right-0 bg-gradient-to-r from-white/80 to-white/30 text-black px-3 py-1 rounded-bl-lg flex items-center opacity-0 scale-90 transition-all duration-300 ${labelAnimation.className}`}
                      style={labelAnimation.style}
                    >
                      <Diamond className="mr-1" size={16} />
                      <span className="text-xs font-bold">PREMIUM</span>
                    </div>
                  )}
                  
                  <div className="mb-4 bg-gray-800 h-40 rounded-lg flex items-center justify-center">
                    <p className="text-sm text-gray-500">Mockup do plano</p>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-1 ${
                    index === 1 ? 'text-vf-orange' : index === 2 ? 'text-white' : ''
                  }`}>
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 mb-4 h-12">{plan.description}</p>
                  
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <span className="text-gray-400 text-sm line-through mr-2">
                        {plan.originalPrice && `R$ ${plan.originalPrice}`}
                      </span>
                      <span className="text-3xl font-bold text-white">R$ {plan.price}</span>
                    </div>
                    {plan.discount && (
                      <span className="bg-vf-orange/20 text-vf-orange px-2 py-1 rounded text-xs font-bold">
                        {plan.discount}% OFF
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold mb-4 text-gray-300">O que está incluso:</h4>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {index === 1 && onPerformanceClick ? (
                    <button 
                      onClick={onPerformanceClick}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-all duration-200 bg-vf-orange text-white hover:bg-vf-orange/90"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <a 
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-all duration-200 ${
                        index === 1 
                          ? 'bg-vf-orange text-white hover:bg-vf-orange/90'
                          : index === 2
                            ? 'bg-gradient-to-r from-white/90 to-white/70 text-black hover:from-white hover:to-white/80'
                            : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const plans = [
  {
    title: "Protocolo START",
    description: "Para quem quer sair do sedentarismo com um plano simples e prático",
    price: "297",
    buttonText: "Quero esse plano",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20START",
    features: [
      "PDF com exercícios básicos (iniciante)",
      "Introdução à reeducação alimentar",
      "Conteúdo entregue automaticamente após pagamento",
      "Plano pronto, sem personalização",
      "Sem acompanhamento individual"
    ]
  },
  {
    title: "Protocolo de Treinamento",
    description: "Treinamento exclusivo com análise corporal e acesso direto ao Vinicius",
    originalPrice: "891",
    price: "747",
    discount: 16,
    buttonText: "Começar agora",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20Protocolo%20de%20Treinamento",
    features: [
      "Avaliação do físico (pontos fortes e fracos)",
      "Protocolo de treino 100% personalizado",
      "Acesso direto ao treinador",
      "Ajustes conforme evolução",
      "Suporte contínuo via WhatsApp"
    ]
  },
  {
    title: "Protocolo Black",
    description: "Treinamento + dieta supervisionada por Vinicius e Mayra (nutri)",
    originalPrice: "1.797",
    price: "1.377",
    discount: 23,
    buttonText: "Garantir minha vaga",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20Protocolo%20Black",
    features: [
      "Tudo do plano de treinamento",
      "Protocolo dietético elaborado pela Mayra (nutri)",
      "Supervisão direta de treino + dieta",
      "Suporte completo",
      "Resultados integrados com foco em alta performance"
    ]
  }
];

export default PlansSection;
