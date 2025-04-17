
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import PlanCard from './plans/PlanCard';
import { plansData } from './plans/plansData';

const PlansSection: React.FC = () => {
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
          {plansData.map((plan, index) => (
            <PlanCard 
              key={index}
              {...plan}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
