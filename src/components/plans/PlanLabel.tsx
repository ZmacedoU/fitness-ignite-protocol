
import React from 'react';
import { Flame, Diamond, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PlanLabelProps {
  type: 'popular' | 'premium' | 'value';
  delay: number;
}

const PlanLabel: React.FC<PlanLabelProps> = ({ type, delay }) => {
  const labelAnimation = useScrollAnimation<HTMLDivElement>(
    'opacity-100 scale-100',
    0.1,
    { delay }
  );

  if (type === 'popular') {
    return (
      <div 
        ref={labelAnimation.ref}
        className={`absolute top-0 right-0 bg-vf-orange text-white px-3 py-1 rounded-bl-lg flex items-center opacity-0 scale-90 transition-all duration-200 ${labelAnimation.className}`}
        style={labelAnimation.style}
      >
        <Flame className="mr-1" size={16} />
        <span className="text-xs font-bold">MAIS ESCOLHIDO</span>
      </div>
    );
  }

  if (type === 'premium') {
    return (
      <div 
        ref={labelAnimation.ref}
        className={`absolute top-0 right-0 bg-gradient-to-r from-white/80 to-white/30 text-black px-3 py-1 rounded-bl-lg flex items-center opacity-0 scale-90 transition-all duration-200 ${labelAnimation.className}`}
        style={labelAnimation.style}
      >
        <Diamond className="mr-1" size={16} />
        <span className="text-xs font-bold">PREMIUM</span>
      </div>
    );
  }

  // Default is value
  return (
    <div 
      ref={labelAnimation.ref}
      className={`absolute top-0 right-0 bg-white/10 text-white px-3 py-1 rounded-bl-lg flex items-center opacity-0 scale-90 transition-all duration-200 ${labelAnimation.className}`}
      style={labelAnimation.style}
    >
      <DollarSign className="mr-1" size={16} />
      <span className="text-xs font-bold">MELHOR CUSTO-BENEFÍCIO</span>
    </div>
  );
};

export default PlanLabel;
