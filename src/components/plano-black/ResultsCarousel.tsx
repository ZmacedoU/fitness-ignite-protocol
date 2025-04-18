
import React from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ResultsCarousel = () => {
  return (
    <section className="mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados reais de quem seguiu o plano.</h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
      </div>
      
      <Carousel className="w-full max-w-4xl mx-auto">
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
    </section>
  );
};

export default ResultsCarousel;
