import React from 'react';
import { ArrowRight, Brain, Activity, CheckCircle, Zap, UserCheck, Video, MessageCircle, FileText, Award, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import PuzzlePieces from '@/components/PuzzlePieces';
import PlanCard from '@/components/PlanCard';
import BenefitsGrid from '@/components/BenefitsGrid';

const ProtocoloTreinamento: React.FC = () => {
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });

  const scrollToPlans = () => {
    const plansSection = document.getElementById('choose-plan-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a] text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-vf-orange/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-vf-orange/3"></div>
        <PuzzlePieces />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex justify-center mb-12">
          <Link to="/">
            <img 
              src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
              alt="Vinicius Di Fiore" 
              className="h-20" 
            />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-20 mt-8">
          <div 
            ref={heroTitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-1000 ${heroTitleAnimation.className}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-tighter">
              PROTOCOLO DE <span className="text-vf-orange">TREINAMENTO EXCLUSIVO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Transforme seu físico com o <span className="text-vf-orange">acompanhamento pessoal</span> do treinador
            </h2>
          </div>
          
          <p 
            ref={heroSubtitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-700 text-xl text-gray-300 max-w-3xl mb-6 ${heroSubtitleAnimation.className}`}
          >
            <span className="text-vf-orange italic font-medium">"A hora do pesadelo é agora e sorriso depois"</span>
          </p>
          
          <div 
            ref={heroButtonAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-500 ${heroButtonAnimation.className}`}
          >
            <Button 
              onClick={scrollToPlans}
              size="lg" 
              className="bg-vf-orange hover:bg-vf-orange/90 hover:scale-105 transition-all duration-300 text-white font-bold py-6 px-8 rounded-lg text-lg uppercase"
            >
              QUERO EVOLUIR AGORA
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Seção 1 - Você precisa disso se... */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você <span className="text-vf-orange">precisa</span> disso se...
            </h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Activity size={48} className="text-vf-orange" />, title: "Está estagnado nos treinos há meses" },
              { icon: <Brain size={48} className="text-vf-orange" />, title: "Não consegue construir um físico proporcional" },
              { icon: <CheckCircle size={48} className="text-vf-orange" />, title: "Sente dores ou sobrecarga ao treinar" },
              { icon: <Zap size={48} className="text-vf-orange" />, title: "Sabe que pode mais, mas falta direção" }
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
        
        {/* Seção 2 - O que você vai receber */}
        <BenefitsGrid />
        
        {/* Seção 3 - Resultados Reais */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados <span className="text-vf-orange">reais</span> de quem seguiu o protocolo
            </h2>
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
        
        {/* Seção 4 - Por que é diferente de tudo */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que é <span className="text-vf-orange">diferente</span> de tudo
            </h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {[
              { 
                icon: <UserCheck size={32} className="text-vf-orange" />, 
                title: "Nada genérico, tudo personalizado", 
                description: "Cada detalhe é pensado exclusivamente para o seu biotipo e objetivos" 
              },
              { 
                icon: <Video size={32} className="text-vf-orange" />, 
                title: "Vídeos de execução perfeitos", 
                description: "Orientações reais que mostram exatamente como realizar cada exercício" 
              },
              { 
                icon: <MessageCircle size={32} className="text-vf-orange" />, 
                title: "Suporte direto com o treinador", 
                description: "Tire suas dúvidas diretamente com quem criou seu programa" 
              },
              { 
                icon: <FileText size={32} className="text-vf-orange" />, 
                title: "Baseado em ciência e experiência", 
                description: "Métodos testados e aprovados por atletas de competição" 
              },
              { 
                icon: <Award size={32} className="text-vf-orange" />, 
                title: "Foco total no seu resultado", 
                description: "Sistema completo para maximizar seus ganhos e superar limites" 
              }
            ].map((item, index) => {
              const differentialAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 150 * index });
              
              return (
                <div 
                  key={index}
                  ref={differentialAnimation.ref}
                  className={`group p-8 bg-black/40 backdrop-blur-sm border border-vf-orange/10 rounded-2xl transition-all duration-300 hover:bg-black/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-vf-orange/20 opacity-0 translate-y-6 ${differentialAnimation.className}`}
                  style={differentialAnimation.style}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-black/30 inline-block group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-vf-orange transition-colors">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Seção 5 - Adquira o acesso */}
        <section id="choose-plan-section" className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para sua jornada</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Invista em você e transforme seu físico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
            <PlanCard
              title="Protocolo Bimestral"
              subtitle="Acompanhamento por 60 dias"
              price="R$ 319,90 à vista"
              benefits={[
                "Protocolo de treinamento completo",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas",
                "Acompanhamento por 60 dias"
              ]}
              ctaText="Quero esse plano"
              badge={{
                text: "MELHOR CUSTO-BENEFÍCIO",
                type: "economic"
              }}
            />

            <PlanCard
              title="Protocolo Semestral"
              subtitle="Acompanhamento por 180 dias"
              price="R$ 798,00 à vista"
              installments="6x R$ 152,95 no cartão"
              benefits={[
                "3 protocolos de treinamento completos",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas",
                "Acompanhamento por 180 dias"
              ]}
              ctaText="Começar agora"
              badge={{
                text: "MAIS ESCOLHIDO",
                type: "popular"
              }}
              isPopular={true}
            />

            <PlanCard
              title="Protocolo Anual"
              subtitle="Acompanhamento por 365 dias"
              price="R$ 1.438,00 à vista"
              installments="12x R$ 137,80 no cartão"
              benefits={[
                "6 protocolos de treinamento completos",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas",
                "Acompanhamento por 365 dias"
              ]}
              ctaText="Garantir minha vaga"
              badge={{
                text: "ACESSO MAIS COMPLETO",
                type: "premium"
              }}
            />
          </div>
        </section>

        {/* Seção FAQ */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  question: "Isso serve para quem já treina?", 
                  answer: "Sim! O protocolo é adaptado para todos os níveis, desde iniciantes até atletas avançados. O treinamento é personalizado para seu nível atual e objetivos específicos." 
                },
                { 
                  question: "Preciso ter academia?", 
                  answer: "Idealmente sim. O protocolo é desenhado para ser executado em academia, mas podemos adaptar para treinos em casa caso você possua alguns equipamentos básicos." 
                },
                { 
                  question: "Vou ter acesso direto ao treinador?", 
                  answer: "Com certeza! Você terá acesso direto ao treinador via app e WhatsApp para dúvidas, ajustes e feedbacks sobre sua evolução." 
                },
                { 
                  question: "O app funciona em Android e iOS?", 
                  answer: "Sim, nosso aplicativo é compatível com ambos os sistemas operacionais, permitindo que você acompanhe seu plano de qualquer smartphone." 
                },
                { 
                  question: "O plano tem acompanhamento?", 
                  answer: "Sim, todos os planos incluem acompanhamento personalizado. O tempo de acompanhamento varia conforme o plano escolhido: 60 dias para o Bimestral, 180 dias para o Semestral e 365 dias para o Anual." 
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
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="group border border-vf-orange/20 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/40"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:text-vf-orange transition-colors">
                        <span className="text-left">{item.question}</span>
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
        
        <Footer />
        
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default ProtocoloTreinamento;
