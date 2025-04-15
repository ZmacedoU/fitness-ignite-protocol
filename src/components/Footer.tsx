
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-vf-orange/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
              alt="Vinicius Di Fiore" 
              className="h-12 mb-4" 
            />
            <p className="text-gray-400 max-w-md">
              Transformando vidas através de treinamentos personalizados 
              e focados em resultados reais.
            </p>
          </div>
          
          <div>
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-vf-white hover:text-vf-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-vf-white hover:text-vf-orange transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-vf-white hover:text-vf-orange transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <a href="mailto:contato@viniciusdifiori.com" className="text-gray-400 hover:text-vf-orange mb-2">
                contato@viniciusdifiori.com
              </a>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Vinicius Di Fiore. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
