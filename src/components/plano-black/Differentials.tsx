
import React from 'react';
import { Trophy, UserCheck, MessageCircle, Sparkles, FileText } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const differentials = [
  { icon: <Trophy size={24} className="text-vf-orange" />, title: "Tudo em 1: treino + dieta", description: "Unificamos treino e alimentação em um único protocolo coordenado." },
  { icon: <UserCheck size={24} className="text-vf-orange" />, title: "Personalização extrema", description: "Seu plano é 100% adaptado às suas características e objetivos." },
  { icon: <MessageCircle size={24} className="text-vf-orange" />, title: "Suporte real com treinador e nutri", description: "Acompanhamento direto com profissionais especializados." },
  { icon: <Sparkles size={24} className="text-vf-orange" />, title: "Liberdade sem terrorismo nutricional", description: "Dieta flexível que se adapta ao seu estilo de vida." },
  { icon: <FileText size={24} className="text-vf-orange" />, title: "Estratégia baseada em ciência e prática", description: "Metodologia comprovada por resultados e embasamento científico." }
];

const Differentials = () => {
  return (
    <section className="mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que o Plano Black é diferente de tudo que você já tentou?</h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
      </div>
      
      <div className="space-y-6 max-w-3xl mx-auto">
        {differentials.map((item, index) => {
          const differentialAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 150 * index });
          
          return (
            <div 
              key={index}
              ref={differentialAnimation.ref}
              className={`flex items-center space-x-4 bg-black/30 border border-vf-orange/20 p-5 rounded-lg opacity-0 translate-x-10 ${differentialAnimation.className}`}
              style={differentialAnimation.style}
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Differentials;
