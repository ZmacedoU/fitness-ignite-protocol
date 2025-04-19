
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-vf-orange/20 rounded-2xl p-6 shadow-lg 
                    hover:border-vf-orange/40 hover:shadow-vf-orange/5 transition-all duration-300 
                    flex flex-col md:flex-row gap-4 items-start">
      <div className="flex-shrink-0">
        <Icon size={48} className="text-vf-orange" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
