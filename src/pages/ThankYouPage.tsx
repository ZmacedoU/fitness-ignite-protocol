
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import WhatsappIcon from "@/components/WhatsappIcon";

const viniciusImage = "/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png";

const ThankYouPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Fade-in animation for elements with animate-fade-up class
    const fadeElements = document.querySelectorAll('.animate-fade-up');
    fadeElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  const quotes = [
    "A hora do pesadelo é agora e o sorriso depois.",
    "É você contra você.",
    "Acredita, vamo!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-vf-orange/20 flex flex-col items-center overflow-x-hidden px-4">
      {/* Main Content */}
      <main className="max-w-5xl w-full flex flex-col items-center py-12 md:py-20">
        
        {/* Hero Section */}
        <section className="w-full text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sua Transformação
            <span className="block text-vf-orange">Começa Agora!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Parabéns! Seu plano está ativo e sua jornada épica rumo ao corpo dos seus sonhos começa agora mesmo.
          </p>
        </section>

        {/* Photo & Quote Section */}
        <section className="w-full flex flex-col lg:flex-row items-center gap-12 mb-20 animate-fade-up">
          
          {/* Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-vf-orange/20 rounded-2xl blur-xl transform rotate-3"></div>
              <img 
                src={viniciusImage} 
                alt="Vinicius Di Fiore" 
                className="relative rounded-2xl w-full max-w-sm h-auto object-cover shadow-2xl border-2 border-vf-orange/30" 
              />
            </div>
          </div>

          {/* Quotes */}
          <div className="flex-1 space-y-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="group cursor-default"
                style={{ animationDelay: `${(index + 2) * 0.3}s` }}
              >
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed relative pl-6 border-l-4 border-vf-orange group-hover:border-vf-orange/60 transition-all duration-300">
                  <span className="block group-hover:text-vf-orange/90 transition-colors duration-300">
                    "{quote}"
                  </span>
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full text-center animate-fade-up">
          <div className="glass rounded-3xl p-8 md:p-12 border border-vf-orange/30 max-w-4xl mx-auto">
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Me chame agora no WhatsApp para receber seu <strong className="text-vf-orange">Guia de Boas-Vindas</strong>, 
              acesso ao app e vídeos exclusivos. Vamos começar sua transformação!
            </p>
            
            <a 
              href="https://wa.me/5511999999999?text=Oi%20Vinicius%2C%20acabei%20de%20adquirir%20o%20Protocolo%20Black%20e%20quero%20começar!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                className="btn-animated text-xl md:text-2xl py-6 px-12 flex gap-4 rounded-2xl group transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <WhatsappIcon size={28} className="text-white group-hover:animate-pulse" />
                <span>🚀 Me chama no WhatsApp</span>
              </Button>
            </a>

            {/* Benefits List */}
            <div className="mt-8 pt-8 border-t border-vf-orange/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-vf-orange/20 flex items-center justify-center mb-3">
                    <span className="text-2xl">📚</span>
                  </div>
                  <p className="text-gray-300">Guia de Boas-Vindas</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-vf-orange/20 flex items-center justify-center mb-3">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <p className="text-gray-300">Vídeos Exclusivos</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-vf-orange/20 flex items-center justify-center mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-gray-300">Acesso ao App</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center py-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-2">
            <span className="text-vf-orange">🛡️</span>
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-vf-orange">💬</span>
            <span>Suporte via WhatsApp</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          © 2025 Vinicius Di Fiore. Todos os direitos reservados.
        </p>
      </footer>

      {/* Fixed CTA for Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/95 to-transparent pt-8 pb-6 px-4 flex justify-center z-50">
          <a 
            href="https://wa.me/5511999999999?text=Oi%20Vinicius%2C%20acabei%20de%20adquirir%20o%20Protocolo%20Black%20e%20quero%20começar!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <Button 
              className="btn-animated w-full text-lg py-6 flex gap-3 rounded-xl shadow-2xl"
            >
              <WhatsappIcon size={24} />
              <span>🚀 Me chama no WhatsApp</span>
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ThankYouPage;
