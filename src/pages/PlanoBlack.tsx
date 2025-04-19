
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PuzzlePieces from '@/components/PuzzlePieces';
import HeroBanner from '@/components/plano-black/HeroBanner';
import FeatureCardGrid from '@/components/plano-black/FeatureCardGrid';
import FAQSection from '@/components/plano-black/FAQSection';
import ResultsSection from '@/components/plano-black/ResultsSection';
import PlansSection from '@/components/plano-black/PlansSection';

const PlanoBlack: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a] text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-vf-orange/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-vf-orange/3"></div>
        <PuzzlePieces />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex justify-center mb-12">
          <Link to="/">
            <img 
              src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
              alt="Vinicius Di Fiore" 
              className="h-20" 
            />
          </Link>
        </div>

        <HeroBanner />
        <ResultsSection />
        <PlansSection />
        <FeatureCardGrid />
        <FAQSection />
        
        <Footer />
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default PlanoBlack;
