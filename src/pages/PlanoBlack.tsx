import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PuzzlePieces from '@/components/PuzzlePieces';
import HeroBanner from '@/components/plano-black/HeroBanner';
import FeatureCardGrid from '@/components/plano-black/FeatureCardGrid';
import FAQSection from '@/components/plano-black/FAQSection';
import ResultsSection from '@/components/plano-black/ResultsSection';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import PlanCard from '@/components/PlanCard';

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

        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para sua jornada</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Invista em você e transforme sua vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
            <PlanCard
              title="Protocolo Bimestral"
              subtitle="Acompanhamento por 60 dias"
              price="R$ 639,80 à vista"
              benefits={[
                "Protocolo de treinamento & dietético",
                "Acompanhamento por 60 dias",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas"
              ]}
              ctaText="Quero esse plano"
              badge={{
                text: "MELHOR CUSTO-BENEFÍCIO",
                type: "economic"
              }}
            />

            <PlanCard
              title="Protocolo Semestral"
              subtitle="Acompanhamento por 180 dias"
              price="R$ 1.596,00 à vista"
              installments="6x R$ 305,90 no cartão"
              benefits={[
                "3 protocolos de treinamento & dietético completos",
                "Acompanhamento total por 180 dias",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas"
              ]}
              ctaText="Começar agora"
              badge={{
                text: "MAIS ESCOLHIDO",
                type: "popular"
              }}
              isPopular={true}
            />

            <PlanCard
              title="Protocolo Anual"
              subtitle="Acompanhamento por 365 dias"
              price="R$ 2.876,00 à vista"
              installments="12x R$ 287,60 no cartão"
              benefits={[
                "6 protocolos de treinamento & dietético completos",
                "Acompanhamento total por 365 dias",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas"
              ]}
              ctaText="Garantir minha vaga"
              badge={{
                text: "ACESSO MAIS COMPLETO",
                type: "premium"
              }}
            />
          </div>
        </section>

        <FeatureCardGrid />
        <FAQSection />
        
        <Footer />
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default PlanoBlack;
