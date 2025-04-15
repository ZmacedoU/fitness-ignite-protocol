
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-vf-orange to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-black to-gray-900 p-10 rounded-xl border border-vf-orange shadow-[0_0_30px_rgba(255,92,0,0.3)]">
          <div className="text-center mb-10">
            <h2 className="section-title mx-auto">
              VAMOS FAZER <span className="text-vf-orange">1 X 0</span> PRA VOCÊ
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-xl">
                "Não consegue mais usar aquele biquíni que amava na praia?"
              </p>
              <p className="text-xl">
                "Está cansado(a), sem disposição, sem energia?"
              </p>
              <p className="text-2xl font-bold text-vf-orange">
                "Vamos sair do zero!"
              </p>
            </div>
            
            <p className="text-xl mb-8">
              Oferecemos a você um <span className="text-vf-orange font-bold">START</span> na sua vida! 
              Um protocolo de treinamento e dieta para transformar seu corpo e sua mente de verdade!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {plans.map((plan, index) => (
                <div key={index} className="bg-black border-2 border-vf-orange rounded-lg p-6 flex flex-col hover:transform hover:scale-105 transition-all">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-vf-orange text-3xl font-bold mb-4">R$ {plan.price}</p>
                  <ul className="mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2 flex items-start">
                        <span className="text-vf-orange mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <span>COMEÇAR</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              ))}
            </div>
            
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-xl px-12 py-4 orange-glow"
            >
              <span>CLIQUE AQUI PARA VER OS PLANOS</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const plans = [
  {
    name: "Mensal",
    price: "297",
    features: [
      "Protocolo personalizado",
      "Suporte via WhatsApp",
      "Acesso ao app exclusivo",
      "1 ajuste mensal"
    ],
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20Mensal"
  },
  {
    name: "Trimestral",
    price: "747",
    features: [
      "Protocolo personalizado",
      "Suporte via WhatsApp",
      "Acesso ao app exclusivo",
      "Ajustes semanais",
      "Desconto de 16%"
    ],
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20Trimestral"
  },
  {
    name: "Semestral",
    price: "1.377",
    features: [
      "Protocolo personalizado",
      "Suporte via WhatsApp prioritário",
      "Acesso ao app exclusivo",
      "Ajustes semanais",
      "Consultas por vídeo",
      "Desconto de 23%"
    ],
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20Semestral"
  }
];

export default CTASection;
