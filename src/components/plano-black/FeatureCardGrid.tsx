
import React from 'react';
import { Trophy, UserCheck, MessageCircle, Sparkles, FileText, Activity } from 'lucide-react';
import FeatureCard from '../FeatureCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FeatureCardGrid = () => {
  const featureSectionAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1);

  return (
    <section className="mb-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-vf-orange/5 to-black/0 pointer-events-none" />
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Você recebe um plano <span className="text-vf-orange">completo</span> e{' '}
          <span className="text-vf-orange">personalizado</span>.
        </h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
      </div>
      
      <div 
        ref={featureSectionAnimation.ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 opacity-0 translate-y-8 transition-all duration-700 ${featureSectionAnimation.className}`}
      >
        <FeatureCard
          icon={Trophy}
          title="Tudo em 1: treino + dieta"
          description="Unificamos treino e alimentação em um único protocolo coordenado para maximizar seus resultados."
        />
        <FeatureCard
          icon={UserCheck}
          title="Personalização extrema"
          description="Seu plano é 100% adaptado às suas características individuais e objetivos específicos."
        />
        <FeatureCard
          icon={MessageCircle}
          title="Suporte real com profissionais"
          description="Acompanhamento direto com treinador e nutricionista especializados no seu objetivo."
        />
        <FeatureCard
          icon={Sparkles}
          title="Liberdade nutricional"
          description="Dieta flexível e sustentável que se adapta ao seu estilo de vida, sem restrições extremas."
        />
        <FeatureCard
          icon={FileText}
          title="Estratégia comprovada"
          description="Metodologia baseada em ciência e prática, com resultados comprovados por centenas de alunos."
        />
        <FeatureCard
          icon={Activity}
          title="Evolução monitorada"
          description="Acompanhamento detalhado da sua evolução com ajustes periódicos para garantir resultados."
        />
      </div>
    </section>
  );
};

export default FeatureCardGrid;
