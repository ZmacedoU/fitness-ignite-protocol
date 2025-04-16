import React from 'react';
import { CheckCircle, Flame, Diamond, ArrowRight } from 'lucide-react';

const plans = [
  {
    title: "PROTOCOLO START",
    description: "Para quem quer sair do sedentarismo com um plano simples e prático",
    price: "297",
    buttonText: "Quero esse plano",
    badge: {
      text: "💰 Melhor custo-benefício",
      style: "bg-gray-200/10 text-gray-200"
    },
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20STARTER",
    features: [
      "PDF com exercícios básicos (iniciante)",
      "Introdução à reeducação alimentar",
      "Conteúdo entregue automaticamente após pagamento",
      "Plano pronto, sem personalização",
      "Sem acompanhamento individual"
    ]
  },
  {
    title: "PROTOCOLO DE TREINAMENTO",
    description: "Treinamento exclusivo com análise corporal e acesso direto ao Vinicius",
    originalPrice: "891",
    price: "747",
    discount: 16,
    badge: {
      text: "🔥 Mais escolhido",
      style: "bg-vf-orange text-white"
    },
    buttonText: "Começar agora",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20EVOLUÇÃO",
    features: [
      "Avaliação do físico (pontos fortes e fracos)",
      "Protocolo de treino 100% personalizado",
      "Acesso direto ao treinador",
      "Ajustes conforme evolução",
      "Suporte contínuo via WhatsApp"
    ]
  },
  {
    title: "PROTOCOLO BLACK",
    description: "Treinamento + dieta supervisionada por Vinicius e Mayra (nutri)",
    originalPrice: "1.797",
    price: "1.377",
    discount: 23,
    badge: {
      text: "💎 Premium",
      style: "bg-gradient-to-r from-white/90 to-white/70 text-black"
    },
    buttonText: "Garantir minha vaga",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20PREMIUM",
    features: [
      "Tudo do plano de treinamento",
      "Protocolo dietético elaborado pela Mayra (nutri)",
      "Supervisão direta de treino + dieta",
      "Suporte completo",
      "Resultados integrados com foco em alta performance"
    ]
  }
];

const PlansSection: React.FC = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-black via-black/95 to-vf-orange/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vf-orange opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Escolha o plano <span className="text-vf-orange">ideal</span> para sua jornada
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Invista em você e transforme sua vida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                index === 1 
                  ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/30 border-2 border-vf-orange/70 shadow-lg shadow-vf-orange/20' 
                  : index === 2
                    ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/20 border border-vf-orange/40 shadow-lg shadow-vf-orange/10'
                    : 'bg-white/5 backdrop-blur-sm border border-vf-orange/20'
              }`}
            >
              {/* Plan Header */}
              <div className="p-6 bg-black/50 backdrop-blur-sm relative">
                {/* Badge */}
                <div className={`absolute top-0 right-0 ${plan.badge.style} px-3 py-1 rounded-bl-lg text-xs font-bold`}>
                  {plan.badge.text}
                </div>
                
                {/* Mockup Image */}
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
              
              {/* Plan Features */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
