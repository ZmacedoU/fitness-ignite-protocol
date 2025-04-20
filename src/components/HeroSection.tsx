import React from 'react';
import { ArrowDown, ArrowRight, Calendar, Users, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useCountAnimation } from '../hooks/useCountAnimation';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experienceCounter = useCountAnimation({ end: 6 });
  const transformationsCounter = useCountAnimation({ end: 100 });
  const countriesCounter = useCountAnimation({ end: 5 });

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-vf-orange/30 z-0"></div>
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/lovable-uploads/fe36d5d4-16a5-4249-b236-2816f3a8a0f5.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70%',
          filter: 'blur(1px)',
        }}
      ></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-vf-orange/20 to-transparent animate-pulse-subtle"></div>
        <div className="smoke-1 absolute bottom-0 left-1/4 w-1/2 h-24 bg-vf-orange/10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
        <div className="smoke-2 absolute bottom-0 right-1/3 w-1/3 h-32 bg-vf-orange/15 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.2s' }}></div>
        <div className="smoke-3 absolute bottom-0 left-1/3 w-1/4 h-28 bg-vf-orange/10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase opacity-0 transform translate-y-4 animate-fade-in" style={{ animationDelay: '300ms', animationDuration: '600ms', animationFillMode: 'forwards' }}>
              Protocolo de <br />
              <span className="text-vf-orange">Treinamento</span>
            </h1>
            <h2 className="text-3xl md:text-5xl mb-12 font-light tracking-wide opacity-0 transform translate-y-4 animate-fade-in" style={{ animationDelay: '500ms', animationDuration: '600ms', animationFillMode: 'forwards' }}>
              Torne sua <span className="text-vf-orange">melhor</span> versão
            </h2>
          </div>
          
          <div className="lg:w-2/5 relative opacity-0 animate-fade-in" style={{ animationDelay: '700ms', animationDuration: '800ms', animationFillMode: 'forwards' }}>
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 shadow-lg shadow-vf-orange/10 border border-vf-orange/20 relative overflow-hidden transition-all duration-300 hover:shadow-vf-orange/20 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-vf-orange/5 z-0"></div>
              <div className="relative z-10 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                <div className="w-16 h-16 rounded-full bg-vf-orange/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="absolute bottom-4 text-center text-gray-400 font-light">
                  Espaço reservado para vídeo do YouTube
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          <div ref={experienceCounter.elementRef} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-vf-orange/20 transition-all duration-300 hover:shadow-lg hover:shadow-vf-orange/20 hover:scale-[1.03] group opacity-0 animate-fade-in" style={{ minHeight: '280px', animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <div className="text-vf-orange mb-6">
              <Calendar size={48} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-6xl font-bold text-vf-orange mb-4 transition-colors">
              <span className="inline-block">+</span>
              <span className="inline-block">{experienceCounter.count}</span>
            </h3>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-light text-center">Anos de Experiência</p>
          </div>
          
          <div ref={transformationsCounter.elementRef} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-vf-orange/20 transition-all duration-300 hover:shadow-lg hover:shadow-vf-orange/20 hover:scale-[1.03] group opacity-0 animate-fade-in" style={{ minHeight: '280px', animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <div className="text-vf-orange mb-6">
              <Users size={48} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-6xl font-bold text-vf-orange mb-4 transition-colors">
              <span className="inline-block">+</span>
              <span className="inline-block">{transformationsCounter.count}</span>
            </h3>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-light text-center">Transformações</p>
          </div>
          
          <div ref={countriesCounter.elementRef} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-vf-orange/20 transition-all duration-300 hover:shadow-lg hover:shadow-vf-orange/20 hover:scale-[1.03] group opacity-0 animate-fade-in" style={{ minHeight: '280px', animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <div className="text-vf-orange mb-6">
              <Globe size={48} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-6xl font-bold text-vf-orange mb-4 transition-colors">
              <span className="inline-block">+</span>
              <span className="inline-block">{countriesCounter.count}</span>
            </h3>
            <p className="text-gray-300 text-sm uppercase tracking-wider font-light text-center">Países com Atendimento</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={() => scrollToSection('planos')}
            className="btn-primary orange-glow text-xl px-8 py-6 h-auto font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
            style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
          >
            QUERO TRANSFORMAR MEU CORPO AGORA
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-vf-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
