
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
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
  ];

  return (
    <section className="mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
        <div className="h-1 w-20 bg-vf-orange mx-auto mb-6"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((item, index) => {
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
  );
};

export default FAQSection;
