
import React from 'react';
import { Award, Globe, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const photoAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 transform translate-x-0 transition-all duration-1000');
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>('opacity-100 transform translate-x-0 transition-all duration-1000');
  
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white/10 to-black relative">
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            ref={photoAnimation.ref} 
            className={`md:w-2/5 opacity-0 transform -translate-x-8 ${photoAnimation.className}`}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/ae4d02a8-2331-4e52-b495-c3dbb118f8ad.png" 
                alt="Vinicius Di Fiore" 
                className="rounded-lg shadow-2xl border border-vf-orange/30"
              />
            </div>
          </div>
          
          <div 
            ref={titleAnimation.ref} 
            className={`md:w-3/5 opacity-0 transform translate-x-8 ${titleAnimation.className}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight uppercase">
              Quem é <span className="text-vf-orange">Vinicius Di Fiore</span>?
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg">
                Sou treinador especializado em transformação física real, com mais de 6 anos de experiência ajudando pessoas comuns a alcançarem resultados extraordinários.
              </p>
              
              <p className="text-lg">
                Minha missão é levar você ao próximo nível, com um método baseado em ciência, prática e acompanhamento verdadeiro — sem fórmulas genéricas, sem promessas vazias.
              </p>
              
              <p className="text-xl font-bold text-vf-orange">
                "Acredita, vamo!" 💥
              </p>
              
              <p className="text-lg">
                Desenvolvi o Protocolo de Treinamento Di Fiore, um método autoral baseado em resultados reais de alunos e nas estratégias mais atuais do mundo fitness.
              </p>
              
              <p className="text-lg">
                Se você está cansado de não ver resultados, chegou a hora de virar o jogo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {certifications.map((item, index) => {
                const delay = 700 + index * 150;
                const cardAnimation = useScrollAnimation<HTMLDivElement>(
                  'opacity-100 scale-100 transition-all duration-500',
                  0.1,
                  { delay }
                );
                
                return (
                  <div 
                    key={index} 
                    ref={cardAnimation.ref}
                    className={`flex flex-col items-center gap-4 p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-vf-orange/20 hover:bg-white/10 transition-all duration-300 hover:scale-[1.05] hover:shadow-lg opacity-0 scale-90 ${cardAnimation.className}`}
                    style={cardAnimation.style}
                  >
                    <item.icon className="text-vf-orange" size={32} />
                    <div className="text-center">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const certifications = [
  {
    title: "Formação",
    description: "Bacharel em Educação Física (UNIP) e Pós em Bodybuilding Coach",
    icon: GraduationCap
  },
  {
    title: "Certificações",
    description: "Hormonização, Nutrição, Musculação e Performance Física",
    icon: Award
  },
  {
    title: "Atendimento",
    description: "Brasil, Portugal, EUA, Canadá e Austrália",
    icon: Globe
  }
];

export default AboutSection;
