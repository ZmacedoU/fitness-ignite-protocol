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
import PuzzlePieces from '@/components/PuzzlePieces';
import PlanCard from '@/components/PlanCard';
import FeatureCard from '@/components/FeatureCard';

const PlanoBlack: React.FC = () => {
  const heroTitleAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { noInitialHidden: true });
  const heroSubtitleAnimation = useScrollAnimation<HTMLParagraphElement>('opacity-100 translate-y-0', 0.1, { delay: 200 });
  const heroButtonAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1, { delay: 400 });
  
  const featureSectionAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 translate-y-0', 0.1);
  
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
            <p className="text-lg italic text-vf-orange font-medium mb-6">
              "Acredita, vamos juntos!"
            </p>
          </div>
          
          <p 
            ref={heroSubtitleAnimation.ref}
            className={`opacity-0 translate-y-8 transition-all duration-700 text-xl text-gray-300 max-w-3xl mb-10 ${heroSubtitleAnimation.className}`}
          >
            A fusão perfeita entre treino, dieta e <span className="text-vf-orange">resultado real</span>.
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

        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo o que você precisa em um <span className="text-vf-orange">único plano</span>.
            </h2>
            <p className="text-lg italic text-vf-orange font-medium mt-4">
              "A hora do pesadelo é agora e sorriso depois"
            </p>
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
        
        <section className="mb-24 bg-black/30 py-16 rounded-xl border border-vf-orange/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você recebe um plano <span className="text-vf-orange">completo</span> e <span className="text-vf-orange">personalizado</span>.
            </h2>
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

        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados <span className="text-vf-orange">reais</span> de quem seguiu o plano.
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
        
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que o Plano Black é <span className="text-vf-orange">diferente</span> de tudo que você já tentou?
            </h2>
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

        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para sua jornada</h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Invista em você e transforme sua vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
            <PlanCard
              title="Protocolo Bimestral"
              subtitle="Acompanhamento por 60 dias"
              price="R$ 639,80 à vista"
              benefits={[
                "Protocolo de treinamento & dietético",
                "Acompanhamento por 60 dias",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas"
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
              price="R$ 1.596,00 à vista"
              installments="6x R$ 305,90 no cartão"
              benefits={[
                "3 protocolos de treinamento & dietético completos",
                "Acompanhamento total por 180 dias",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas"
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
              price="R$ 2.876,00 à vista"
              installments="12x R$ 287,60 no cartão"
              benefits={[
                "6 protocolos de treinamento & dietético completos",
                "Acompanhamento total por 365 dias",
                "App exclusivo com vídeos",
                "Suporte com contato para dúvidas"
              ]}
              ctaText="Garantir minha vaga"
              badge={{
                text: "ACESSO MAIS COMPLETO",
                type: "premium"
              }}
            />
          </div>
        </section>

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
        
        <section className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-vf-orange/5 to-black/0 pointer-events-none" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Você recebe um plano <span className="text-vf-orange">completo</span> e{' '}
              <span className="text-vf-orange">personalizado</span>.
            </h2>
            <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
          </div>
          
          <div 
            ref={featureSectionAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 opacity-0 translate-y-8 transition-all duration-700 ${featureSectionAnimation.className}`}
          >
            <FeatureCard
              icon={Trophy}
              title="Tudo em 1: treino + dieta"
              description="Unificamos treino e alimentação em um único protocolo coordenado para maximizar seus resultados."
            />
            <FeatureCard
              icon={UserCheck}
              title="Personalização extrema"
              description="Seu plano é 100% adaptado às suas características individuais e objetivos específicos."
            />
            <FeatureCard
              icon={MessageCircle}
              title="Suporte real com profissionais"
              description="Acompanhamento direto com treinador e nutricionista especializados no seu objetivo."
            />
            <FeatureCard
              icon={Sparkles}
              title="Liberdade nutricional"
              description="Dieta flexível e sustentável que se adapta ao seu estilo de vida, sem restrições extremas."
            />
            <FeatureCard
              icon={FileText}
              title="Estratégia comprovada"
              description="Metodologia baseada em ciência e prática, com resultados comprovados por centenas de alunos."
            />
            <FeatureCard
              icon={Activity}
              title="Evolução monitorada"
              description="Acompanhamento detalhado da sua evolução com ajustes periódicos para garantir resultados."
            />
          </div>
        </section>
        
        <Footer />
        
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default PlanoBlack;
