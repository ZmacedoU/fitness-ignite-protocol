
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ResultsSection = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Resultados <span className="text-vf-orange">reais</span>
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
              {[...Array(3)].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="bg-black/40 border border-vf-orange/20 rounded-xl overflow-hidden">
                      <div className="h-[500px] w-full flex flex-col lg:flex-row">
                        <div className="flex-1 bg-gray-800 flex items-center justify-center p-4">
                          <div className="text-center">
                            <h3 className="text-xl mb-2">Antes</h3>
                            <div className="border-2 border-vf-orange/30 w-full h-[300px] flex items-center justify-center text-gray-500">
                              Foto "Antes"
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 bg-black flex items-center justify-center p-4">
                          <div className="text-center">
                            <h3 className="text-xl mb-2">Depois</h3>
                            <div className="border-2 border-vf-orange/30 w-full h-[300px] flex items-center justify-center text-gray-500">
                              Foto "Depois"
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12 bg-black border-vf-orange/20 hover:bg-vf-orange/20" />
            <CarouselNext className="right-0 lg:-right-12 bg-black border-vf-orange/20 hover:bg-vf-orange/20" />
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

export default ResultsSection;
