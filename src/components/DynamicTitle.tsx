
import React, { useEffect, useState } from 'react';

interface DynamicTitleProps {
  selectedPlanId: string;
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ selectedPlanId }) => {
  const [title, setTitle] = useState<string>("");
  const [animateOut, setAnimateOut] = useState<boolean>(false);
  
  useEffect(() => {
    // Inicia animação de saída
    setAnimateOut(true);
    
    // Espera a animação de saída terminar antes de mudar o título
    const timeout = setTimeout(() => {
      switch (selectedPlanId) {
        case 'black':
          setTitle("Transforme seu corpo com o Protocolo Black");
          break;
        case 'starter':
          setTitle("Saia do zero com o plano Starter");
          break;
        case 'premium':
          setTitle("Eleve seu corpo ao próximo nível com o Protocolo Premium");
          break;
        default:
          setTitle("Transforme seu corpo com o Protocolo Black");
      }
      
      // Inicia animação de entrada
      setAnimateOut(false);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [selectedPlanId]);
  
  return (
    <h1 
      className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 mt-10 font-montserrat
                 ${animateOut ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}
                 transition-all duration-500 ease-in-out`}
    >
      <span className="bg-gradient-to-r from-vf-orange to-orange-400 bg-clip-text text-transparent drop-shadow-md">
        {title}
      </span>
    </h1>
  );
};

export default DynamicTitle;
