import React from 'react';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black/90 to-vf-orange/20">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('/lovable-uploads/feafe30c-8486-41d5-a0bc-ce63abb5c6d8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm py-4">
          <div className="container mx-auto px-6">
            <img 
              src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
              alt="Vinicius Di Fiore" 
              className="h-12" 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              PROTOCOLO DE <br />
              <span className="text-vf-orange">TREINAMENTO</span>
            </h1>
            <h2 className="text-3xl md:text-5xl mb-8 font-light tracking-wide">
              TORNE SUA <span className="text-vf-orange">MELHOR</span> VERSÃO
            </h2>
            
            {/* Video Space */}
            <div className="backdrop-blur-md bg-black/20 rounded-2xl p-8 mb-12 border border-white/10 shadow-lg">
              <p className="text-xl text-center text-gray-400 font-light">
                Espaço reservado para vídeo de apresentação
              </p>
            </div>

            {/* Experience & Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:border-vf-orange/30 hover:bg-black/30">
                <h3 className="text-5xl font-bold text-vf-orange mb-3">+6</h3>
                <p className="text-sm uppercase tracking-wider font-light">Anos de Experiência</p>
              </div>
              <div className="backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:border-vf-orange/30 hover:bg-black/30">
                <h3 className="text-5xl font-bold text-vf-orange mb-3">+100</h3>
                <p className="text-sm uppercase tracking-wider font-light">Transformações</p>
              </div>
              <div className="backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:border-vf-orange/30 hover:bg-black/30">
                <h3 className="text-5xl font-bold text-vf-orange mb-3">+5</h3>
                <p className="text-sm uppercase tracking-wider font-light">Países com Atendimento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections */}
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
