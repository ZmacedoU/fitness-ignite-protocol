
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import PlanLabel from './PlanLabel';

export interface PlanProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  buttonText: string;
  link: string;
  features: string[];
  index: number;
}

const PlanCard: React.FC<PlanProps> = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  discount, 
  buttonText, 
  link, 
  features,
  index 
}) => {
  const delay = 100 + index * 100; // Reduced delay between cards
  const cardAnimation = useScrollAnimation<HTMLDivElement>(
    'opacity-100 transform-none',
    0.1,
    { delay }
  );
  
  const labelDelay = 300 + index * 50; // Reduced label delay
  
  return (
    <div 
      ref={cardAnimation.ref}
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-lg ${
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
        {index === 0 && <PlanLabel type="value" delay={labelDelay} />}
        {index === 1 && <PlanLabel type="popular" delay={labelDelay} />}
        {index === 2 && <PlanLabel type="premium" delay={labelDelay} />}
        
        <div className="mb-4 bg-gray-800 h-40 rounded-lg flex items-center justify-center">
          <p className="text-sm text-gray-500">Mockup do plano</p>
        </div>
        
        <h3 className={`text-2xl font-bold mb-1 ${
          index === 1 ? 'text-vf-orange' : index === 2 ? 'text-white' : ''
        }`}>
          {title}
        </h3>
        <p className="text-gray-400 mb-4 h-12">{description}</p>
        
        <div className="flex items-end justify-between mb-2">
          <div>
            <span className="text-gray-400 text-sm line-through mr-2">
              {originalPrice && `R$ ${originalPrice}`}
            </span>
            <span className="text-3xl font-bold text-white">R$ {price}</span>
          </div>
          {discount && (
            <span className="bg-vf-orange/20 text-vf-orange px-2 py-1 rounded text-xs font-bold">
              {discount}% OFF
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="font-bold mb-4 text-gray-300">O que está incluso:</h4>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={link}
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
          <span>{buttonText}</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
