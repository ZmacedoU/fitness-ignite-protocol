
import React from 'react';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/feafe30c-8486-41d5-a0bc-ce63abb5c6d8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.4)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent py-4">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              PROTOCOLO DE <br />
              <span className="text-vf-orange">TREINAMENTO</span>
            </h1>
            <h2 className="text-3xl md:text-5xl mb-8">
              TORNE SUA <span className="text-vf-orange">MELHOR</span> VERSÃO
            </h2>
            
            {/* Video Space */}
            <div className="bg-black/50 rounded-lg p-8 mb-12 border border-vf-orange/20">
              <p className="text-xl text-center text-gray-400">
                Espaço reservado para vídeo de apresentação
              </p>
            </div>

            {/* Experience & Presence */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/70 p-8 rounded-lg border border-vf-orange/20">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-vf-orange">6+</span> Anos
                </h3>
                <p className="text-xl">
                  De experiência transformando vidas através do treinamento personalizado
                </p>
              </div>
              <div className="bg-black/70 p-8 rounded-lg border border-vf-orange/20">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-vf-orange">4+</span> Países
                </h3>
                <p className="text-xl">
                  Atendendo alunos internacionalmente com resultados comprovados
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
