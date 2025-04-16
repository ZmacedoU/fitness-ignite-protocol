
import React from 'react';
import { CheckCircle, Sparkles, Diamond, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const PlansSection: React.FC = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-black via-black/95 to-vf-orange/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vf-orange opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Escolha o plano <span className="text-vf-orange">ideal</span> para sua jornada
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Invista em você e transforme sua vida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Starter Plan */}
          <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 bg-white/5 backdrop-blur-sm border border-vf-orange/20">
            <div className="p-6 bg-black/50 backdrop-blur-sm relative">
              <Badge variant="secondary" className="absolute top-4 right-4 bg-gray-200/10 text-gray-300">
                Melhor custo-benefício
              </Badge>
              
              <div className="mb-4 bg-gray-800/50 h-40 rounded-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">Mockup do plano</p>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">
                Protocolo Start
              </h3>
              <p className="text-gray-400 mb-4 h-12">Para quem quer sair do sedentarismo com um plano simples e direto.</p>
              
              <div className="flex items-end justify-between mb-2">
                <div>
                  <span className="text-3xl font-bold text-white">R$ 80</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-gray-400 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">PDF com exercícios básicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gray-400 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Introdução à reeducação alimentar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gray-400 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Material entregue após pagamento</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                onClick={() => window.location.href = "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20STARTER"}
              >
                Quero começar agora
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* Most Popular Plan */}
          <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-br from-black via-black/95 to-vf-orange/30 border-2 border-vf-orange/70 shadow-lg shadow-vf-orange/20">
            <div className="p-6 bg-black/50 backdrop-blur-sm relative">
              <Badge className="absolute top-4 right-4 bg-vf-orange text-white">
                <Sparkles className="w-4 h-4 mr-1" /> Mais escolhido
              </Badge>
              
              <div className="mb-4 bg-black/40 h-40 rounded-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">Mockup do plano</p>
              </div>
              
              <h3 className="text-2xl font-bold mb-1 text-vf-orange">
                Protocolo de Treinamento
              </h3>
              <p className="text-gray-400 mb-4 h-12">Treinamento exclusivo com suporte direto do treinador.</p>
              
              <div className="flex items-end justify-between mb-2">
                <div>
                  <span className="text-3xl font-bold text-white">R$ XXX</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Avaliação do físico e pontos fracos/fortes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Protocolo 100% personalizado de treino</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Acesso direto ao Vinicius</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-vf-orange mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Suporte individual e ajustes mensais</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-vf-orange hover:bg-vf-orange/90"
                onClick={() => window.location.href = "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20EVOLUÇÃO"}
              >
                Começar com suporte direto
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-br from-gray-900 to-black border border-white/20">
            <div className="p-6 bg-black/50 backdrop-blur-sm relative">
              <Badge variant="outline" className="absolute top-4 right-4 bg-white/10 border-white/30">
                <Diamond className="w-4 h-4 mr-1" /> Tudo incluso
              </Badge>
              
              <div className="mb-4 bg-white/5 h-40 rounded-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">Mockup do plano</p>
              </div>
              
              <h3 className="text-2xl font-bold mb-1 text-white">
                Protocolo Black
              </h3>
              <p className="text-gray-400 mb-4 h-12">Treinamento + protocolo nutricional completo, com suporte direto.</p>
              
              <div className="flex items-end justify-between mb-2">
                <div>
                  <span className="text-3xl font-bold text-white">R$ XXX</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Tudo do plano Protocolo de Treinamento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Protocolo dietético personalizado pela Mayra</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Supervisão conjunta (treinador + nutri)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-white mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300 text-sm">Acompanhamento completo e suporte 24/7</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-white text-black hover:bg-gray-100"
                onClick={() => window.location.href = "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20PREMIUM"}
              >
                Quero tudo no mesmo plano
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
