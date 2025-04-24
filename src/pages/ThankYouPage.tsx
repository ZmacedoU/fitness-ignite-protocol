import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Film, ShieldCheck, Clock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import WhatsappIcon from "@/components/WhatsappIcon";

const viniciusImage = "/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png";

const ThankYouPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Fade-in animation for elements with animate-fade-up class
    const fadeElements = document.querySelectorAll('.animate-fade-up');
    fadeElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const quotes = [
    "A hora do pesadelo é agora e o sorriso depois.",
    "É você contra você.",
    "Acredita, vamo!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-vf-black to-vf-orange/40 flex flex-col items-center overflow-x-hidden px-4 pb-24 md:pb-12">
      {/* Main Content */}
      <main className="max-w-4xl w-full flex flex-col items-center">
        {/* Title Section */}
        <section className="w-full text-center mb-8 md:mb-12 mt-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white animate-fade-up">
            Parabéns! Sua Transformação Começa Agora
          </h1>
          <h2 className="text-xl md:text-2xl mt-4 text-vf-orange animate-fade-up">
            Seu plano está ativo e sua transformação épica começa agora.
          </h2>
        </section>

        {/* Photo Section */}
        <section className="mb-8 md:mb-12 animate-fade-up">
          <div className="glass rounded-xl p-2 border border-vf-orange/40 mb-6">
            <img 
              src={viniciusImage} 
              alt="Vinicius Di Fiore agradecendo" 
              className="rounded-lg w-full max-w-md max-h-[400px] object-cover mx-auto" 
            />
          </div>
        </section>

        {/* Quotes Carousel */}
        <section className="w-full mb-10 md:mb-16 animate-fade-up">
          {isMobile ? (
            <Carousel className="w-full px-4">
              <CarouselContent>
                {quotes.map((quote, index) => (
                  <CarouselItem key={index} className="pl-2 md:basis-1/1">
                    <div className="glass p-5 rounded-xl border border-vf-orange/30 h-full flex items-center justify-center text-center">
                      <p className="text-xl font-bold text-white">{quote}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quotes.map((quote, index) => (
                <div 
                  key={index}
                  className="glass p-5 rounded-xl border border-vf-orange/30 h-full flex items-center justify-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-xl font-bold text-white">{quote}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="w-full mb-12 text-center animate-fade-up">
          <p className="text-xl text-white mb-6">
            Para receber seu Guia de Boas-Vindas e acessar o app, me chame agora no WhatsApp.
          </p>
          
          <a 
            href="https://wa.me/5511999999999?text=Oi%20Vinicius%2C%20acabei%20de%20adquirir%20o%20Protocolo%20Black%20e%20quero%20começar!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              className="btn-animated text-xl p-6 flex gap-3 rounded-lg group transform hover:scale-105 transition-all"
            >
              <WhatsappIcon size={24} className="text-white" />
              <span>🚀 Me chama no WhatsApp</span>
            </Button>
          </a>
        </section>

        {/* What You'll Receive Section */}
        <section className="w-full mb-10 animate-fade-up">
          <h3 className="text-2xl font-bold text-white text-center mb-6">O que você vai receber</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass border border-vf-orange/30 p-6 flex flex-col items-center text-center">
              <FileText size={48} className="text-vf-orange mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Guia de Boas-Vindas (PDF)</h4>
              <p className="text-gray-300">Instruções detalhadas para começar sua jornada</p>
            </Card>
            
            <Card className="glass border border-vf-orange/30 p-6 flex flex-col items-center text-center">
              <Film size={48} className="text-vf-orange mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Acesso ao app e vídeos exclusivos</h4>
              <p className="text-gray-300">Conteúdo premium para sua transformação</p>
            </Card>
          </div>
        </section>

        {/* Guarantee & Support Section */}
        <section className="w-full mb-8 animate-fade-up">
          <div className="glass border border-vf-orange/20 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-center gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <ShieldCheck size={24} className="text-vf-orange" />
                <p className="text-white">Garantia de satisfação de 7 dias — sem burocracia.</p>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Clock size={24} className="text-vf-orange" />
                <p className="text-white">Suporte via WhatsApp de seg a sex</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center py-6 mt-auto">
        <p className="text-gray-500 text-sm">
          © 2025 Vinicius Di Fiore. Todos os direitos reservados.
        </p>
      </footer>

      {/* Fixed CTA for Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-black via-black to-transparent pt-10 pb-4 px-4 flex justify-center">
          <a 
            href="https://wa.me/5511999999999?text=Oi%20Vinicius%2C%20acabei%20de%20adquirir%20o%20Protocolo%20Black%20e%20quero%20começar!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              className="btn-animated w-full text-lg py-5 flex gap-2 rounded-lg"
            >
              <WhatsappIcon size={20} />
              <span>Me chama no WhatsApp</span>
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ThankYouPage;
