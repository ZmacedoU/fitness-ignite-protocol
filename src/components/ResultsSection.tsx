
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

  const titleAnimation = useScrollAnimation<HTMLHeadingElement>(
    'animate-fade-in',
    0.1, 
    { delay: 200, noInitialHidden: true }
  );
  
  const subtitleAnimation = useScrollAnimation<HTMLParagraphElement>(
    'animate-fade-in', 
    0.1, 
    { delay: 300, noInitialHidden: true }
  );
  
  const carouselAnimation = useScrollAnimation<HTMLDivElement>(
    'animate-fade-in',
    0.1, 
    { delay: 400, noInitialHidden: true }
  );
  
  const ctaButtonAnimation = useScrollAnimation<HTMLDivElement>(
    'animate-fade-in',
    0.1, 
    { noInitialHidden: true }
  );

  return (
    <section id="resultados" className="py-20 relative">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleAnimation.ref} 
            className={`section-title mx-auto ${titleAnimation.className}`}
            style={titleAnimation.style}
          >
            Resultados <span className="text-vf-orange">Reais</span>
          </h2>
          <p 
            ref={subtitleAnimation.ref}
            className={`text-xl max-w-3xl mx-auto text-gray-300 ${subtitleAnimation.className}`}
            style={subtitleAnimation.style}
          >
            Transformações que falam por si
          </p>
        </div>

        <div 
          ref={carouselAnimation.ref}
          className={`mb-16 ${carouselAnimation.className}`}
          style={carouselAnimation.style}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {transformations.map((item, index) => {
                const delay = 400 + index * 150;
                const itemAnimation = useScrollAnimation<HTMLDivElement>(
                  'opacity-100 transform-none',
                  0.1,
                  { delay, noInitialHidden: true }
                );
                
                return (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <div 
                        ref={itemAnimation.ref}
                        className={`rounded-xl overflow-hidden border border-vf-orange/20 shadow-lg shadow-vf-orange/10 transition-all duration-300 hover:scale-105 ${itemAnimation.className}`} 
                        style={{
                          ...itemAnimation.style,
                          transform: isNaN(index % 2) ? 'none' : index % 2 === 0 ? 'translateX(-20px)' : 'translateX(20px)'
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
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center">
          <div 
            ref={ctaButtonAnimation.ref} 
            className={ctaButtonAnimation.className}
            style={ctaButtonAnimation.style}
          >
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
