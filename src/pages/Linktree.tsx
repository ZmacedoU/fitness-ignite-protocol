
import React from 'react';
import { Card } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface LinkCardProps {
  title: string;
  link: string;
  bgImage?: string;
  bgColor?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, link, bgImage, bgColor = 'bg-black' }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full mb-4 transition-all duration-300 hover:scale-[1.02]"
    >
      <Card 
        className={`${bgColor} border border-vf-orange/20 hover:border-vf-orange/50 hover:shadow-[0_0_15px_rgba(255,92,0,0.3)] overflow-hidden rounded-lg relative h-[150px] flex items-center justify-center`}
      >
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImage} 
              alt={title} 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        )}
        <div className="relative z-10 text-center px-4">
          <h3 className="font-oswald uppercase text-2xl tracking-wider text-white">{title}</h3>
        </div>
      </Card>
    </a>
  );
};

const Linktree: React.FC = () => {
  const logoAnimation = useScrollAnimation<HTMLDivElement>('opacity-100 scale-100', 0.1, { noInitialHidden: true });
  
  return (
    <div className="min-h-screen bg-vf-black bg-gradient-to-b from-black to-gray-900 flex flex-col items-center">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATASURBVGhD7ZpbSBVRFIb3aVFERFlBRBERERERERERERFREUFERERERERERBQRUURFREVUVERURBRRERERlREZGZGRkZGRkZGRkZGRkWn7D/8em7PWPnP2mfHcJB/4YM5ea+219jkz56LzXzrpNDo6OgmWwxpYAYnfB+E7fIUP8BwGYcQSUaN4BnAm7IJ9cAAOwQHYEzEAu2EHbIO1MBfa4LuV09DgwOtgI5yEc3ABLkacgXNwGk7BUVgP0wF/6lcrv3FAzToLzkbsgYuwO+IAnIwAx6615zmL4Rt4fY0NBrEY9sOZiGj4NBwF77lO2AGfoduq1AcDmQVH4FLEOTgIkz5QAl5/GSjm9+BZ9UCmgLd/HfbCJPR9HKxdLdIMlMMjeAWeXUOQkUKgh+EiePYbQYWI5rNnvxCaCVQirQCV8AKSx7z0TJEOVDwtgXvgxdFMoBJpWajUe+DFUsugJdIyuQZeLM0OVCLaKNfgHXixNStQibQVrsJH8OJrdKASzcfrcAeS8WWhlkBzQM/qC6cngPqneajSn8IQ5O1LnUAlWgevwYsrDzQ47faH8AQ0zaKfX8FTuA36jN71kZ52va7X9WnQvCC9fwxEvXvA86jVQCWagu/Ai0tEA1GJGvxpSE+jTDyBBTAF9P60RJ+98t6No13fAZ+gI+nQaqAS7YIPEI8vSDSgQ1BKkBJN2U7IArehpFjLQHneBU+jEm2HYfDiC1IPeo9ngWeQjNfyFMrBi7Mc9MzXkM5Xea6FpD9dt5pAJToPXnxBWgJLoN7BZuE4TCTQPGgX9+Ddge0uZzr/aqAS6WPOiy9IswYbp3Yq2ELQ2uOtu1mBSqTPZC++IC2FZgQqUcl6X+LrZ6ASaWd6BF58QeoF7zaoBzWmlgpMvi+iGbQbJM/ntLtApVMl6kl68q5XQj1h6RajZ7YUqEQqWY8gHV+QehNb9aDGVYlnoBJdgi/gxRek7TDhKSCDz5AnUIn06ePFF6QzodXh3QK1BpqLdD7KU982el/cX6uBSrQWXHv55LGWQC3xZaE8M6fefNATUT1BequYOMLSjai06gm0DIrK86In0HoClfSCZ1troBLpkuI+eDHmQdR3PYHqFkO3GfXGmIVuM3SroVsOZsxekO+r4Nl7NnlQbaCaBtFtiHebodsMT6+mQKNApbNQKMwgOgi5UU+guo3QrYRuJ7z+agq0EKiGQXS74dlPBJ5jLYHqtkK3FrpF8PqqKdBSoBoG0S1HNIss+zwH9V9PoLrF0K2Gbjm8fmoKtBSoejLSLUfWbUahPgsJVCLtbr1f6BZDtxrJPkrV59l7Nj0R1ROoRGtbt952dABo/+iAnC/qV/ci6lcHnA5SHZjqPL0PlY9n79mURbWBSpSD+k/3r09YvWLPgXrw7D2bPKolUIn2htZ39EvgKhT7maSeQHWboVsN3XJ4vTQUqEQvaT9onWSRVj/8U6A6nHRIJfso9qufTlGtp0i/y0l/+GUFWghUoqmmA0tT7zvoJ0QtBf2SpePds/dsyqKWQDUlJfop8V8C1S1ItCfLDrSeQCNbvXzvF9p28HzKptZAJZfBO6C8Z/Kk1kC1ZnlXVNqznr1nUxb1BKopFe1UzyvLvt5A1dfZiNeg21tPp2zqDVSXkvrl9C7of5cYgGdTFtoDQdBdYvQTpCRpj3k2ZaFLDG8giWB3iUkE+FeXmMExMf4CJo9G0uW06gsAAAAASUVORK5CYII=')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div 
          ref={logoAnimation.ref}
          className={`flex flex-col items-center mb-10 opacity-0 scale-95 transition-all duration-700 ${logoAnimation.className}`}
        >
          {/* Logo */}
          <img 
            src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
            alt="Vinicius Di Fiore" 
            className="h-28 mb-3" 
          />
          
          {/* Username */}
          <p className="text-gray-400 text-lg font-light">@viniciusdifiore</p>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Cards */}
          <LinkCard 
            title="Site Oficial" 
            link="/"
            bgImage="/lovable-uploads/167c89d1-45ae-470d-9b2a-0e3ad7f022d7.png"
          />
          
          <LinkCard 
            title="Plano Black" 
            link="/plano-black"
            bgColor="bg-gradient-to-r from-gray-900 to-black"
          />
          
          <LinkCard 
            title="Plano Performance" 
            link="/plano-performance"
            bgColor="bg-gradient-to-br from-black to-gray-800"
          />
          
          <LinkCard 
            title="Plano Emagrecimento" 
            link="/plano-emagrecimento"
            bgColor="bg-gradient-to-r from-gray-800 to-black"
          />
        </div>
        
        {/* WhatsApp button */}
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-vf-orange/30 transition-all hover:scale-105 hover:border-vf-orange z-20"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={24} className="text-white hover:text-vf-orange transition-colors" />
        </a>
        
        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Todos os direitos reservados - Vinicius Di Fiore</p>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
