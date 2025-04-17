
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-vf-orange/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <img 
              src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
              alt="Vinicius Di Fiore" 
              className="h-14 mb-4" 
            />
            <p className="text-gray-400 max-w-md text-center">
              Transformando corpos, construindo mentes.
            </p>
          </div>
          
          <div className="border-t border-vf-orange/10 pt-6 w-full opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Vinicius Di Fiore. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
