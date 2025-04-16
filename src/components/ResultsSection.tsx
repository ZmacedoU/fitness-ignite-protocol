
import React from 'react';
import { Star, Users, Calendar, BarChart3 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ResultsSection: React.FC = () => {
  return (
    <section id="resultados" className="py-20 bg-gradient-to-br from-black via-black to-vf-orange/20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Resultados <span className="text-vf-orange">Reais</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Transformações que falam por si
          </p>
        </div>

        {/* Results in Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-vf-orange/20 shadow-lg shadow-vf-orange/5 text-center">
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-vf-orange" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Before/After Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Antes e Depois</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {transformations.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <div className="rounded-xl overflow-hidden border border-vf-orange/20 shadow-lg shadow-vf-orange/5">
                      <div className="relative">
                        <div className="flex">
                          <div className="w-1/2 relative">
                            <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 text-xs rounded">ANTES</span>
                            <div className="aspect-square bg-gray-900 flex items-center justify-center">
                              <p className="text-sm text-gray-500">Imagem Antes</p>
                            </div>
                          </div>
                          <div className="w-1/2 relative">
                            <span className="absolute top-2 right-2 bg-vf-orange/70 text-white px-2 py-1 text-xs rounded">DEPOIS</span>
                            <div className="aspect-square bg-gray-800 flex items-center justify-center">
                              <p className="text-sm text-gray-500">Imagem Depois</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-black/50 backdrop-blur-sm">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="text-vf-orange fill-vf-orange" />
                            ))}
                          </div>
                          <p className="text-sm italic mb-2">"{item.testimonial}"</p>
                          <p className="text-xs text-gray-400">{item.name}, {item.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 bg-vf-orange/10 border-vf-orange/30 hover:bg-vf-orange/30 text-white" />
            <CarouselNext className="absolute -right-12 bg-vf-orange/10 border-vf-orange/30 hover:bg-vf-orange/30 text-white" />
          </Carousel>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Depoimentos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg shadow-vf-orange/5 border border-vf-orange/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-vf-orange fill-vf-orange" />
                  ))}
                </div>
                <p className="mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-vf-orange rounded-full flex items-center justify-center text-vf-black font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const stats = [
  { 
    value: "+100", 
    label: "Alunos Transformados", 
    icon: Users 
  },
  { 
    value: "94%", 
    label: "Taxa de Adesão", 
    icon: BarChart3
  },
  { 
    value: "Até 10kg", 
    label: "Em 3 Meses", 
    icon: Calendar 
  }
];

const transformations = [
  {
    name: "Rafael Silva",
    location: "São Paulo, SP",
    testimonial: "Perdi 15kg e ganhei um novo estilo de vida!"
  },
  {
    name: "Amanda Oliveira", 
    location: "Rio de Janeiro, RJ",
    testimonial: "Transformação incrível em apenas 3 meses!"
  },
  {
    name: "Carlos Mendes",
    location: "Belo Horizonte, MG", 
    testimonial: "O método realmente funciona! Resultados impressionantes."
  },
  {
    name: "Fernanda Lima",
    location: "Florianópolis, SC",
    testimonial: "Nunca me senti tão confiante com meu corpo!"
  }
];

const testimonials = [
  {
    name: "Rafael Silva",
    location: "São Paulo, SP",
    text: "Após meses de estagnação, o protocolo do Vinicius me fez quebrar barreiras que eu nem imaginava. Em 3 meses meu corpo mudou completamente!"
  },
  {
    name: "Carla Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Acredita, vamo! Foi isso que ouvi quando achei que não conseguiria mais. Hoje estou 12kg mais leve e com uma disposição incrível."
  },
  {
    name: "Marcelo Oliveira",
    location: "Curitiba, PR",
    text: "O diferencial é a análise postural. Minhas dores nas costas acabaram e meus treinos renderam muito mais. Vale cada centavo investido."
  }
];

export default ResultsSection;
