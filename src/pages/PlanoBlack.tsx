
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
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a] text-white overflow-x-hidden">
      {/* Enhanced background with subtle orange gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-vf-orange/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-vf-orange/3"></div>
        <div className="h-full w-full bg-[url('data:image/png;base64,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')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Content wrapper */}
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
