
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/0f03115a-9368-47e7-9a7f-a5d450dc1e32.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-vf-white">
              PROTOCOLO DE <br />
              <span className="text-vf-orange">TREINAMENTO</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-vf-white max-w-lg">
              TORNE SUA <span className="text-vf-orange font-bold">MELHOR</span> VERSÃO
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-primary orange-glow"
              >
                START AGORA
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-vf-white text-vf-white font-bold py-3 px-8 rounded-md text-lg uppercase transition-all hover:bg-vf-white hover:text-vf-black"
              >
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('sobre')}
      >
        <ArrowDown size={32} className="text-vf-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
