
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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

  const titleAnimation = useScrollAnimation<HTMLHeadingElement>('animate-fade-in delay-200');
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>('animate-fade-in delay-300');
  const carouselAnimation = useScrollAnimation<HTMLDivElement>('animate-fade-in delay-400');
  const ctaButtonAnimation = useScrollAnimation<HTMLDivElement>('animate-fade-in');

  return (
    <section id="resultados" className="py-20 relative">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleAnimation.ref} 
            className={`section-title mx-auto ${titleAnimation.className}`}
          >
            Resultados <span className="text-vf-orange">Reais</span>
          </h2>
          <p 
            ref={subtitleAnimation.ref}
            className={`text-xl max-w-3xl mx-auto text-gray-300 ${subtitleAnimation.className}`}
          >
            Transformações que falam por si
          </p>
        </div>

        <div 
          ref={carouselAnimation.ref}
          className={`mb-16 ${carouselAnimation.className}`}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {transformations.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <div 
                      className="rounded-xl overflow-hidden border border-vf-orange/20 shadow-lg shadow-vf-orange/10 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" 
                      style={{ 
                        animationDelay: `${400 + index * 150}ms`, 
                        animationFillMode: 'forwards',
                        transform: index % 2 === 0 ? 'translateX(-20px)' : 'translateX(20px)'
                      }}
                    >
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <div ref={ctaButtonAnimation.ref} className={ctaButtonAnimation.className}>
            <Button 
              onClick={() => scrollToSection('planos')}
              className="btn-primary orange-glow text-xl px-8 py-6 h-auto font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Quero começar minha transformação
              <ArrowRight className="ml-2" />
            </Button>
          </div>
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
