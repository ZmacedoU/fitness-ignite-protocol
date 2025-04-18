
import React from 'react';
import { ArrowRight, Brain, Utensils, Heart, BatteryFull, Check, UserCheck, Activity, Video, MessageCircle, FileText, Trophy, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const PlanoBlack: React.FC = () => {
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });
  
  return (
    <div className="min-h-screen bg-vf-black bg-gradient-to-b from-black to-gray-900 text-white overflow-x-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('data:image/png;base64,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')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Logo in header */}
        <div className="flex justify-center mb-12">
          <Link to="/">
            <img 
              src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
              alt="Vinicius Di Fiore" 
              className="h-20" 
            />
          </Link>
        </div>

        {/* SEÇÃO 1: HERO */}
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

        {/* SEÇÃO 2: O QUE É O PLANO BLACK? */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo o que você precisa em um único plano.</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Brain size={48} className="text-vf-orange" />, title: "Protocolo de treinamento estratégico" },
              { icon: <Utensils size={48} className="text-vf-orange" />, title: "Protocolo dietético exclusivo" },
              { icon: <Heart size={48} className="text-vf-orange" />, title: "Rotina cardiovascular" },
              { icon: <BatteryFull size={48} className="text-vf-orange" />, title: "Descanso inteligente" }
            ].map((item, index) => {
              const cardAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 200 * index });
              
              return (
                <div 
                  key={index} 
                  ref={cardAnimation.ref}
                  className={`bg-black/40 border border-vf-orange/20 hover:border-vf-orange/70 rounded-lg p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] opacity-0 translate-y-10 ${cardAnimation.className}`}
                  style={cardAnimation.style}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* SEÇÃO 3: BENEFÍCIOS COMPLETOS */}
        <section className="mb-24 bg-black/30 py-16 rounded-xl border border-vf-orange/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Você recebe um plano completo e personalizado.</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Suporte exclusivo via app e WhatsApp",
              "Suporte para dúvidas sobre dieta",
              "Análise física e postural personalizada",
              "Protocolo dietético sem terrorismo nutricional",
              "Protocolo de treino estratégico baseado em ciência",
              "Vídeos reais no app com Vinicius e alunos",
              "Feedbacks e ajustes com acompanhamento periódico",
              "Dieta personalizada com acesso no app",
              "Suporte real do treinador e da nutricionista"
            ].map((item, index) => {
              const bulletAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.05, { delay: 100 * index });
              
              return (
                <div 
                  key={index}
                  ref={bulletAnimation.ref}
                  className={`flex items-start space-x-3 opacity-0 translate-y-6 ${bulletAnimation.className}`}
                  style={bulletAnimation.style}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-vf-orange" size={20} />
                  </div>
                  <p className="text-white text-lg">{item}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SEÇÃO 4: RESULTADOS REAIS */}
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
        
        {/* SEÇÃO 5: DIFERENCIAIS DO PLANO BLACK */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que o Plano Black é diferente de tudo que você já tentou?</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { icon: <Trophy size={24} className="text-vf-orange" />, title: "Tudo em 1: treino + dieta", description: "Unificamos treino e alimentação em um único protocolo coordenado." },
              { icon: <UserCheck size={24} className="text-vf-orange" />, title: "Personalização extrema", description: "Seu plano é 100% adaptado às suas características e objetivos." },
              { icon: <MessageCircle size={24} className="text-vf-orange" />, title: "Suporte real com treinador e nutri", description: "Acompanhamento direto com profissionais especializados." },
              { icon: <Sparkles size={24} className="text-vf-orange" />, title: "Liberdade sem terrorismo nutricional", description: "Dieta flexível que se adapta ao seu estilo de vida." },
              { icon: <FileText size={24} className="text-vf-orange" />, title: "Estratégia baseada em ciência e prática", description: "Metodologia comprovada por resultados e embasamento científico." }
            ].map((item, index) => {
              const differentialAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-x-0', 0.1, { delay: 150 * index });
              
              return (
                <div 
                  key={index}
                  ref={differentialAnimation.ref}
                  className={`flex items-center space-x-4 bg-black/30 border border-vf-orange/20 p-5 rounded-lg opacity-0 translate-x-10 ${differentialAnimation.className}`}
                  style={differentialAnimation.style}
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* SEÇÃO 6: CALL TO ACTION FORTE */}
        <section className="mb-24 text-center bg-gradient-to-r from-black to-gray-900 py-16 rounded-xl border border-vf-orange/10">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Chegou a hora de mudar. O que te impede?</h2>
            <p className="text-xl mb-8 text-gray-300">Você já tentou sozinho. Agora você tem suporte de verdade.<br />"Acredita, vamos juntos!"</p>
            
            <Button 
              size="lg" 
              className="bg-vf-orange hover:bg-vf-orange/90 hover:scale-105 transition-all duration-300 text-white font-bold py-6 px-8 rounded-lg text-lg uppercase mt-4 animate-pulse"
            >
              QUERO COMEÇAR MEU PLANO AGORA
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
        
        {/* SEÇÃO 7: FAQ (PERGUNTAS FREQUENTES) */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  question: "Em quanto tempo vejo resultado?", 
                  answer: "Os resultados iniciais já podem ser notados nas primeiras 2-3 semanas, com mudanças significativas em 60-90 dias para quem segue o plano corretamente. Cada organismo responde em seu tempo, mas garantimos transformações reais e duradouras." 
                },
                { 
                  question: "A dieta é muito restritiva?", 
                  answer: "Não. Trabalhamos com um protocolo dietético flexível e sustentável, sem terrorismo nutricional. Nosso objetivo é que você construa uma relação saudável com a comida, sem frustrações e com resultados que duram." 
                },
                { 
                  question: "Posso parcelar o pagamento?", 
                  answer: "Sim, oferecemos opções de parcelamento em até 12x no cartão de crédito. Também aceitamos PIX para pagamento à vista com desconto especial." 
                },
                { 
                  question: "Como funciona o suporte com a nutricionista?", 
                  answer: "Você terá acesso a consultas online com nossa nutricionista para tirar dúvidas, receber ajustes no plano alimentar e acompanhamento personalizado conforme sua evolução." 
                },
                { 
                  question: "É necessário academia?", 
                  answer: "O protocolo é desenhado para ser realizado em academia, mas podemos adaptar para treinos em casa com equipamentos básicos se necessário. O ideal é ter acesso a uma estrutura com pesos para melhores resultados." 
                },
                { 
                  question: "O app funciona em Android e iOS?", 
                  answer: "Sim, nosso aplicativo é compatível com ambos os sistemas operacionais, permitindo que você acompanhe seu plano, vídeos e evolução de qualquer smartphone." 
                }
              ].map((item, index) => {
                const faqAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 100 * index });
                
                return (
                  <div 
                    key={index}
                    ref={faqAnimation.ref}
                    className={`opacity-0 translate-y-6 ${faqAnimation.className}`}
                    style={faqAnimation.style}
                  >
                    <AccordionItem value={`item-${index}`} className="border border-vf-orange/20 rounded-lg overflow-hidden bg-black/30">
                      <AccordionTrigger className="px-6 py-4 hover:bg-black/50 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-gray-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </section>
        
        {/* SEÇÃO 8: FOOTER */}
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default PlanoBlack;
