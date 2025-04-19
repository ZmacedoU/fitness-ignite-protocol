
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Dumbbell, Heart, Target, Award, Book } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const ProtocoloStarter: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Animations for different sections
  const heroTitleAnimation = useScrollAnimation('animate-fade-in', 0.1, { noInitialHidden: false });
  const heroSubtitleAnimation = useScrollAnimation('animate-fade-in', 0.1, { delay: 300, noInitialHidden: false });
  const heroButtonAnimation = useScrollAnimation('animate-fade-in', 0.1, { delay: 600, noInitialHidden: false });
  
  const benefitsAnimation = useScrollAnimation('animate-slide-in-bottom', 0.1);
  const featureAnimation1 = useScrollAnimation('animate-fade-in', 0.1, { delay: 100 });
  const featureAnimation2 = useScrollAnimation('animate-fade-in', 0.1, { delay: 200 });
  const featureAnimation3 = useScrollAnimation('animate-fade-in', 0.1, { delay: 300 });
  
  const ctaAnimation = useScrollAnimation('animate-scale-in', 0.1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToPlans = () => {
    const plansSection = document.getElementById('cta-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black/90">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/feafe30c-8486-41d5-a0bc-ce63abb5c6d8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* Fixed Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-2 bg-black/90 backdrop-blur-md shadow-md' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
                alt="Vinicius Di Fiore" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
              />
            </a>
            <Button 
              onClick={scrollToPlans}
              className="bg-vf-orange hover:bg-vf-orange/90 text-white font-bold"
            >
              COMEÇAR AGORA
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 pt-28">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div 
                {...heroTitleAnimation}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-tighter">
                  PROTOCOLO <span className="text-vf-orange">STARTER</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Combo emagrecimento do <span className="text-vf-orange">0 a 100%</span>
                </h2>
              </div>
              
              <p 
                {...heroSubtitleAnimation}
                className="text-xl md:text-2xl text-vf-orange font-bold max-w-3xl mx-auto mb-8"
              >
                "Conquiste uma mudança brutal com um protocolo de treinamento de 35 minutos por dia e realizando uma reeducação alimentar"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-black/40 backdrop-blur-sm border border-vf-orange/20 rounded-xl p-6 transform transition-all hover:scale-105">
                  <h3 className="text-xl font-bold text-vf-orange mb-2">Saia do zero</h3>
                  <p className="text-gray-300">Sua jornada fitness começa aqui, com passos simples e eficazes.</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-vf-orange/20 rounded-xl p-6 transform transition-all hover:scale-105">
                  <h3 className="text-xl font-bold text-vf-orange mb-2">Ganhe da Netflix e do iFood</h3>
                  <p className="text-gray-300">Substitua hábitos sedentários por uma rotina que transforma seu corpo e mente.</p>
                </div>
              </div>
              
              <div 
                {...heroButtonAnimation}
              >
                <Button 
                  onClick={scrollToPlans}
                  className="btn-primary orange-glow text-xl px-8 py-6 h-auto font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  QUERO COMEÇAR MINHA TRANSFORMAÇÃO
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Oferecemos a você um <span className="text-vf-orange">START</span> na sua vida!
              </h2>
              
              <div 
                {...benefitsAnimation}
                className="mb-16"
              >
                <p className="text-lg md:text-xl text-center mb-8">
                  Um protocolo de treinamento e dietético para você sair do 0 e começar a sua jornada fitness de uma vez!!
                </p>
                
                <div className="border-l-4 border-vf-orange pl-6 py-2 mb-8">
                  <p className="text-lg italic">
                    "Você vai começar a entender o que significa treinamento e uma melhor alimentação. 
                    Neste combo te oferecemos sua autoestima de volta, melhora dos seus hábitos, evolução física e um START na sua nova vida."
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-10">
                Uma introdução à <span className="text-vf-orange">vida fitness</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                  {...featureAnimation1}
                  className="bg-black/40 backdrop-blur-sm border border-vf-orange/20 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-vf-orange/20"
                >
                  <div className="text-vf-orange mb-4 flex justify-center">
                    <Dumbbell size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Protocolo de Treinamento</h4>
                  <p className="text-gray-300">Exercícios simples e eficazes para iniciantes, apenas 35 minutos por dia.</p>
                </div>
                
                <div 
                  {...featureAnimation2}
                  className="bg-black/40 backdrop-blur-sm border border-vf-orange/20 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-vf-orange/20"
                >
                  <div className="text-vf-orange mb-4 flex justify-center">
                    <Heart size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Reeducação Alimentar</h4>
                  <p className="text-gray-300">Aprenda a se alimentar melhor sem dietas restritivas ou complicadas.</p>
                </div>
                
                <div 
                  {...featureAnimation3}
                  className="bg-black/40 backdrop-blur-sm border border-vf-orange/20 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-vf-orange/20"
                >
                  <div className="text-vf-orange mb-4 flex justify-center">
                    <Book size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">eBook Exclusivo</h4>
                  <p className="text-gray-300">Material completo de introdução ao treinamento e alimentação saudável.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What You'll Get Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                O Que Você Vai <span className="text-vf-orange">Receber</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-black to-black/80 border border-vf-orange/10 rounded-lg transition-all hover:border-vf-orange/30">
                  <div className="text-vf-orange mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Protocolo de Treinamento Starter</h4>
                    <p className="text-gray-300">Treinos de 35 minutos que podem ser feitos em casa ou na academia, projetados para iniciantes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-black to-black/80 border border-vf-orange/10 rounded-lg transition-all hover:border-vf-orange/30">
                  <div className="text-vf-orange mt-1">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Guia de Reeducação Alimentar</h4>
                    <p className="text-gray-300">Aprenda a se alimentar melhor sem complicações, com dicas práticas para o dia a dia.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-black to-black/80 border border-vf-orange/10 rounded-lg transition-all hover:border-vf-orange/30">
                  <div className="text-vf-orange mt-1">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">eBook: Do Zero ao Fitness</h4>
                    <p className="text-gray-300">Material exclusivo com conceitos fundamentais, dicas motivacionais e plano de ação.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="cta-section" className="py-20 bg-gradient-to-b from-black/90 via-black to-vf-orange/10">
          <div className="container mx-auto px-6">
            <div 
              {...ctaAnimation}
              className="max-w-3xl mx-auto text-center bg-black/60 backdrop-blur-sm border border-vf-orange/30 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Saia do <span className="text-vf-orange">0</span>!
              </h2>
              
              <p className="text-xl mb-8">
                Receba seu treinamento para iniciar nosso protocolo start com o ebook exclusivo de introdução ao treinamento e reeducação alimentar.
              </p>
              
              <div className="mb-8">
                <div className="bg-vf-orange/10 rounded-lg p-4 mb-4">
                  <p className="text-2xl md:text-3xl font-bold">
                    <span className="text-vf-orange">R$ 97,00</span> à vista
                  </p>
                  <p className="text-gray-300">ou 12x de R$ 9,90</p>
                </div>
              </div>
              
              <a 
                href="https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20no%20Protocolo%20Starter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xl px-8 py-6 w-full md:w-auto inline-flex items-center justify-center gap-2"
              >
                <span>VAMOS JUNTOS!</span>
                <ArrowRight />
              </a>
              
              <p className="mt-6 text-sm text-gray-400">
                Ao clicar, você será redirecionado para o WhatsApp para finalizar sua compra.
              </p>
            </div>
          </div>
        </section>
        
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default ProtocoloStarter;
