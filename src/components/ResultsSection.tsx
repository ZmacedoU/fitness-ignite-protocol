
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ResultsSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="resultados" className="py-20 relative">
      {/* Inverted Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#3d1500] z-0"></div>
      
      {/* Subtle Vertical Lines */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Resultados <span className="text-vf-orange">Reais</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Transformações que falam por si
          </p>
        </div>

        <div className="mb-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {transformations.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <div className="rounded-xl overflow-hidden border border-vf-orange/20 shadow-lg shadow-vf-orange/10 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <div className="flex">
                          <div className="w-1/2 relative">
                            <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded">ANTES</span>
                            <div className="aspect-square bg-gray-900"></div>
                          </div>
                          <div className="w-1/2 relative">
                            <span className="absolute top-2 right-2 bg-vf-orange/70 text-white px-2 py-1 text-xs rounded">DEPOIS</span>
                            <div className="aspect-square bg-gray-800"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 bg-vf-orange/10 border-vf-orange/30 hover:bg-vf-orange/30 text-white" />
            <CarouselNext className="absolute -right-12 bg-vf-orange/10 border-vf-orange/30 hover:bg-vf-orange/30 text-white" />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={() => scrollToSection('planos')}
            className="btn-primary orange-glow text-xl px-8 py-6 h-auto font-bold flex items-center gap-2"
          >
            Quero começar minha transformação
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const transformations = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

export default ResultsSection;
