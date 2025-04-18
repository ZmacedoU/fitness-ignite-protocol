
import React from 'react';
import { ArrowRight, CheckCircle, DollarSign, Flame, Crown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PlansSection = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(
    'opacity-100 translate-y-0',
    0.1,
    { delay: 100 }
  );

  const plans = [
    {
      seal: "MELHOR CUSTO-BENEFÍCIO",
      title: "Protocolo Bimestral",
      subtitle: "Acompanhamento por 60 dias",
      price: "639,80",
      installments: null,
      benefits: [
        "Protocolo de treinamento & dietético",
        "Acompanhamento por 60 dias",
        "App exclusivo com vídeos",
        "Suporte com contato para dúvidas"
      ],
      cta: "Quero esse plano",
      variant: "basic",
      icon: <DollarSign className="mr-1" size={16} />
    },
    {
      seal: "MAIS ESCOLHIDO",
      title: "Protocolo Semestral",
      subtitle: "Acompanhamento por 180 dias",
      price: "1.596,00",
      installments: "6x R$ 305,90",
      benefits: [
        "3 protocolos de treinamento & dietético completos",
        "Acompanhamento total por 180 dias",
        "App exclusivo com vídeos",
        "Suporte com contato para dúvidas"
      ],
      cta: "Começar agora",
      variant: "featured",
      icon: <Flame className="mr-1" size={16} />
    },
    {
      seal: "ACESSO MAIS COMPLETO",
      title: "Protocolo Anual",
      subtitle: "Acompanhamento por 365 dias",
      price: "2.876,00",
      installments: "12x R$ 287,60",
      benefits: [
        "6 protocolos de treinamento & dietético completos",
        "Acompanhamento total por 365 dias",
        "App exclusivo com vídeos",
        "Suporte com contato para dúvidas"
      ],
      cta: "Garantir minha vaga",
      variant: "premium",
      icon: <Crown className="mr-1" size={16} />
    }
  ];

  return (
    <section className="py-20 relative bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vf-orange/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-vf-orange/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 opacity-0 translate-y-4 transition-all duration-500 ${titleAnimation.className}`}
          style={titleAnimation.style}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha o plano <span className="text-vf-orange">ideal</span> para você
          </h2>
          <p className="text-xl text-gray-400">
            Invista em você e transforme sua vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const cardAnimation = useScrollAnimation<HTMLDivElement>(
              'opacity-100 translate-y-0',
              0.1,
              { delay: 200 + index * 100 }
            );

            return (
              <div
                key={index}
                ref={cardAnimation.ref}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] ${
                  plan.variant === 'featured'
                    ? 'bg-gradient-to-br from-black via-black/95 to-vf-orange/20 border-2 border-vf-orange shadow-lg'
                    : plan.variant === 'premium'
                      ? 'bg-gradient-to-br from-black via-black/95 to-white/10 border-2 border-white/20 shadow-lg'
                      : 'bg-gradient-to-br from-black via-black/95 to-gray-900/50 border-2 border-gray-800'
                } opacity-0 translate-y-8 ${cardAnimation.className}`}
                style={cardAnimation.style}
              >
                {/* Seal */}
                <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-lg flex items-center text-xs font-bold ${
                  plan.variant === 'featured'
                    ? 'bg-vf-orange text-white'
                    : plan.variant === 'premium'
                      ? 'bg-white/90 text-black'
                      : 'bg-white/10 text-white'
                }`}>
                  {plan.icon}
                  {plan.seal}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Mockup */}
                  <div className="bg-gray-800/50 h-40 rounded-lg flex items-center justify-center mb-6">
                    <p className="text-gray-500 text-sm">Mockup do plano</p>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.variant === 'featured' ? 'text-vf-orange' : 'text-white'
                  }`}>
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.installments && (
                      <p className="text-gray-400 text-sm mb-1">{plan.installments}</p>
                    )}
                    <p className="text-3xl font-bold text-white">
                      R$ {plan.price}
                      <span className="text-sm text-gray-400 ml-2">à vista</span>
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {plan.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-vf-orange flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-all duration-200 ${
                      plan.variant === 'featured'
                        ? 'bg-vf-orange text-white hover:bg-vf-orange/90'
                        : plan.variant === 'premium'
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
