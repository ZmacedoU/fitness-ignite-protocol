
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-vf-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/167c89d1-45ae-470d-9b2a-0e3ad7f022d7.png" 
              alt="Vinicius Di Fiore" 
              className="rounded-lg shadow-lg border-2 border-vf-orange"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">VINCIUS <span className="text-vf-orange">DI FIORE</span></h2>
            <h3 className="section-subtitle">TREINADOR</h3>
            
            <p className="text-lg mb-6">
              Um protocolo de treinamento não pode ser negligenciado, cada pessoa precisa
              trabalhar regiões do corpo de forma específica, cada treino tem que ser exclusivo ou
              você apenas estará brincando igual a grande maioria das pessoas que não tem
              resultados.
            </p>
            
            <p className="text-lg mb-6">
              O foco do treinamento precisa ser nos pontos fracos e desvios posturais mas sem
              esquecer de manter o físico bem harmonioso.
            </p>
            
            <p className="text-lg mb-8">
              A análise que faço do seu físico faz total diferença na hora de elaborar o protocolo,
              além de levar em consideração sua rotina e frequência semanal de treinamento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Treinos exclusivos', 'Análise postural', 'Suporte personalizado', 'Resultados reais'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-vf-orange" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <blockquote className="quote">
                "Vamos, acredita!"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
