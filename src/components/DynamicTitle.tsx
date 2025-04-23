
import React, { useEffect, useState } from 'react';

interface DynamicTitleProps {
  selectedPlanId: string;
}

function getHighlightParts(selectedPlanId: string) {
  switch (selectedPlanId) {
    case 'black':
      return [
        'Transforme seu corpo com o',
        <span key="p1" className="text-vf-orange font-extrabold"> Protocolo Black</span>
      ];
    case 'starter':
      return [
        'Saia do zero com o',
        <span key="p2" className="text-vf-orange font-extrabold"> plano Starter</span>
      ];
    case 'premium':
      return [
        'Eleve seu corpo ao próximo nível com o',
        <span key="p3" className="text-vf-orange font-extrabold"> Protocolo Premium</span>
      ];
    default:
      return [
        'Transforme seu corpo com o',
        <span key="p1" className="text-vf-orange font-extrabold"> Protocolo Black</span>
      ];
  }
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ selectedPlanId }) => {
  const [titleParts, setTitleParts] = useState<React.ReactNode[]>(getHighlightParts(selectedPlanId));
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  useEffect(() => {
    setAnimateOut(true);

    const timeout = setTimeout(() => {
      setTitleParts(getHighlightParts(selectedPlanId));
      setAnimateOut(false);
    }, 280);

    return () => clearTimeout(timeout);
  }, [selectedPlanId]);

  return (
    <h1
      className={
        `text-center mb-8 mt-10 font-montserrat font-extrabold
         text-3xl md:text-5xl lg:text-6xl tracking-tight
         transition-all duration-500 ease-in-out
         ${animateOut ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`
      }
      style={{
        fontFamily: "'Montserrat', 'Poppins', sans-serif"
      }}
    >
      <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent drop-shadow-md">
        {titleParts[0]}{titleParts[1]}
      </span>
    </h1>
  );
};

export default DynamicTitle;
