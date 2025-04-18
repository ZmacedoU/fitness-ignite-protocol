
import React from 'react';
import { Brain, Utensils, Heart, BatteryFull } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  { icon: <Brain size={48} className="text-vf-orange" />, title: "Protocolo de treinamento estratégico" },
  { icon: <Utensils size={48} className="text-vf-orange" />, title: "Protocolo dietético exclusivo" },
  { icon: <Heart size={48} className="text-vf-orange" />, title: "Rotina cardiovascular" },
  { icon: <BatteryFull size={48} className="text-vf-orange" />, title: "Descanso inteligente" }
];

const FeaturesGrid = () => {
  return (
    <section className="mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo o que você precisa em um único plano.</h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => {
          const cardAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 200 * index });
          
          return (
            <div 
              key={index} 
              ref={cardAnimation.ref}
              className={`bg-black/40 border border-vf-orange/20 hover:border-vf-orange/70 rounded-lg p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] opacity-0 translate-y-10 ${cardAnimation.className}`}
              style={cardAnimation.style}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesGrid;
