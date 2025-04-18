
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="mb-24 text-center bg-gradient-to-r from-black to-gray-900 py-16 rounded-xl border border-vf-orange/10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Chegou a hora de mudar. O que te impede?</h2>
        <p className="text-xl mb-8 text-gray-300">Você já tentou sozinho. Agora você tem suporte de verdade.<br />"Acredita, vamos juntos!"</p>
        
        <Button 
          size="lg" 
          className="bg-vf-orange hover:bg-vf-orange/90 hover:scale-105 transition-all duration-300 text-white font-bold py-6 px-8 rounded-lg text-lg uppercase mt-4 animate-pulse"
        >
          QUERO COMEÇAR MEU PLANO AGORA
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
