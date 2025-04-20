
import React from 'react';
import { Card } from "@/components/ui/card";

interface ProfessionalCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ name, role, imageUrl }) => {
  return (
    <Card className="group overflow-hidden bg-black/40 border border-vf-orange/20 hover:border-vf-orange/70 transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-vf-orange">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfessionalCard;
