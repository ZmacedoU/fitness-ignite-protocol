
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });

  return (
    <div className="flex justify-center mb-12">
      <Link to="/">
        <img 
          src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
          alt="Vinicius Di Fiore" 
          className="h-20" 
        />
      </Link>
      
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-20 mt-8">
        <div 
          ref={heroTitleAnimation.ref}
          className={`opacity-0 translate-y-8 transition-all duration-1000 ${heroTitleAnimation.className}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-tighter">
            PLANO <span className="text-vf-orange">BLACK</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Protocolo de Treinamento + Protocolo Dietético. <span className="text-vf-orange">Tudo em 1!</span>
          </h2>
        </div>
        
        <p 
          ref={heroSubtitleAnimation.ref}
          className={`opacity-0 translate-y-8 transition-all duration-700 text-xl text-gray-300 max-w-3xl mb-10 ${heroSubtitleAnimation.className}`}
        >
          A fusão perfeita entre treino, dieta e resultado real.
        </p>
        
        <div 
          ref={heroButtonAnimation.ref}
          className={`opacity-0 translate-y-8 transition-all duration-500 ${heroButtonAnimation.className}`}
        >
          <Button 
            size="lg" 
            className="bg-vf-orange hover:bg-vf-orange/90 hover:scale-105 transition-all duration-300 text-white font-bold py-6 px-8 rounded-lg text-lg uppercase"
          >
            QUERO TRANSFORMAR MEU FÍSICO AGORA
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
