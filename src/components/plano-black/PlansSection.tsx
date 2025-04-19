
import React from 'react';
import PlanCard from '@/components/PlanCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PlansSection = () => {
  const titleAnimation = useScrollAnimation<HTMLDivElement>(
    'animate-fade-in',
    0.1,
    { delay: 200, noInitialHidden: true }
  );

  return (
    <section id="planos" className="mb-24">
      <div 
        ref={titleAnimation.ref}
        className={`text-center mb-10 ${titleAnimation.className}`}
        style={titleAnimation.style}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para sua jornada</h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Invista em você e transforme sua vida
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
        <PlanCard
          title="Protocolo Bimestral"
          subtitle="Acompanhamento por 60 dias"
          price="R$ 639,80 à vista"
          benefits={[
            "Protocolo de treinamento & dietético",
            "Acompanhamento por 60 dias",
            "App exclusivo com vídeos",
            "Suporte com contato para dúvidas"
          ]}
          ctaText="Quero esse plano"
          badge={{
            text: "MELHOR CUSTO-BENEFÍCIO",
            type: "economic"
          }}
        />

        <PlanCard
          title="Protocolo Semestral"
          subtitle="Acompanhamento por 180 dias"
          price="R$ 1.596,00 à vista"
          installments="6x R$ 305,90 no cartão"
          benefits={[
            "3 protocolos de treinamento & dietético completos",
            "Acompanhamento total por 180 dias",
            "App exclusivo com vídeos",
            "Suporte com contato para dúvidas"
          ]}
          ctaText="Começar agora"
          badge={{
            text: "MAIS ESCOLHIDO",
            type: "popular"
          }}
          isPopular={true}
        />

        <PlanCard
          title="Protocolo Anual"
          subtitle="Acompanhamento por 365 dias"
          price="R$ 2.876,00 à vista"
          installments="12x R$ 287,60 no cartão"
          benefits={[
            "6 protocolos de treinamento & dietético completos",
            "Acompanhamento total por 365 dias",
            "App exclusivo com vídeos",
            "Suporte com contato para dúvidas"
          ]}
          ctaText="Garantir minha vaga"
          badge={{
            text: "ACESSO MAIS COMPLETO",
            type: "premium"
          }}
        />
      </div>
    </section>
  );
};

export default PlansSection;
