
import React from 'react';
import { Award, Globe, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white/10 to-black relative">
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src="/lovable-uploads/167c89d1-45ae-470d-9b2a-0e3ad7f022d7.png" 
                alt="Vinicius Di Fiore" 
                className="rounded-lg shadow-2xl border border-vf-orange/30"
              />
              
              {/* Orange Glow Effect */}
              <div className="absolute -inset-4 rounded-lg bg-vf-orange/20 filter blur-xl z-0"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight uppercase">
              Vinicius <span className="text-vf-orange">Di Fiore</span>
            </h2>
            <h3 className="text-xl md:text-2xl mb-8 text-vf-orange/90">TREINADOR</h3>
            
            <p className="text-lg mb-6">
              Sou apaixonado por transformar vidas através do treinamento personalizado e ciência aplicada.
              Há mais de 6 anos, desenvolvo protocolos exclusivos que vão muito além do simples "treinar por treinar".
            </p>
            
            <p className="text-lg mb-8">
              Um protocolo de treinamento não pode ser negligenciado, cada pessoa precisa
              trabalhar regiões do corpo de forma específica, cada treino tem que ser exclusivo ou
              você apenas estará brincando igual a grande maioria das pessoas que não tem
              resultados.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {certifications.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-4 p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-vf-orange/20 hover:bg-white/10 transition-colors"
                >
                  <item.icon className="text-vf-orange" size={32} />
                  <div className="text-center">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <blockquote className="text-2xl font-light italic text-gray-300 border-l-4 border-vf-orange pl-6">
              "O foco do treinamento precisa ser nos pontos fracos e desvios posturais, 
              mas sem esquecer de manter o físico bem harmonioso."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

const certifications = [
  {
    title: "Formação",
    description: "Bacharel em Educação Física e especialista em Hipertrofia",
    icon: GraduationCap
  },
  {
    title: "Certificações",
    description: "NSCA, ACSM e outras certificações de elite",
    icon: Award
  },
  {
    title: "Atendimento",
    description: "Brasil, Portugal, EUA, Canadá e Austrália",
    icon: Globe
  }
];

export default AboutSection;
