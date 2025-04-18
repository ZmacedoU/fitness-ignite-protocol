
import React from 'react';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  "Suporte exclusivo via app e WhatsApp",
  "Suporte para dúvidas sobre dieta",
  "Análise física e postural personalizada",
  "Protocolo dietético sem terrorismo nutricional",
  "Protocolo de treino estratégico baseado em ciência",
  "Vídeos reais no app com Vinicius e alunos",
  "Feedbacks e ajustes com acompanhamento periódico",
  "Dieta personalizada com acesso no app",
  "Suporte real do treinador e da nutricionista"
];

const BenefitsList = () => {
  return (
    <section className="mb-24 bg-black/30 py-16 rounded-xl border border-vf-orange/10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Você recebe um plano completo e personalizado.</h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
      </div>
      
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((item, index) => {
          const bulletAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 100 * index });
          
          return (
            <div 
              key={index}
              ref={bulletAnimation.ref}
              className={`flex items-start space-x-3 opacity-0 translate-y-6 ${bulletAnimation.className}`}
              style={bulletAnimation.style}
            >
              <div className="flex-shrink-0 mt-1">
                <Check className="text-vf-orange" size={20} />
              </div>
              <p className="text-white text-lg">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsList;
