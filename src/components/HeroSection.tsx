import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-vf-orange/30 z-0"></div>
      
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase">
              Protocolo de <br />
              <span className="text-vf-orange">Treinamento</span>
            </h1>
            <h2 className="text-3xl md:text-5xl mb-12 font-light tracking-wide">
              Torne sua <span className="text-vf-orange">melhor</span> versão
            </h2>
            
            {/* Experience & Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 border border-vf-orange/20 shadow-lg shadow-vf-orange/5">
                <h3 className="text-5xl font-bold text-vf-orange mb-3">+6</h3>
                <p className="text-sm uppercase tracking-wider font-light">Anos de Experiência</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 border border-vf-orange/20 shadow-lg shadow-vf-orange/5">
                <h3 className="text-5xl font-bold text-vf-orange mb-3">+100</h3>
                <p className="text-sm uppercase tracking-wider font-light">Transformações</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 border border-vf-orange/20 shadow-lg shadow-vf-orange/5">
                <h3 className="text-5xl font-bold text-vf-orange mb-3">+5</h3>
                <p className="text-sm uppercase tracking-wider font-light">Países com Atendimento</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('planos')}
              className="btn-primary orange-glow text-xl px-8 py-6 h-auto font-bold flex items-center gap-2"
            >
              Quero transformar meu corpo agora
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          <div className="lg:w-2/5 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* Video Space */}
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 shadow-lg shadow-vf-orange/5 border border-vf-orange/20">
              <p className="text-xl text-center text-gray-400 font-light">
                Espaço reservado para vídeo do YouTube
              </p>
            </div>
          </div>
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
