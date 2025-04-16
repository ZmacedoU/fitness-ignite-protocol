
import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-vf-orange/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
              alt="Vinicius Di Fiore" 
              className="h-14 mb-4" 
            />
            <p className="text-gray-400 max-w-md">
              Transformando corpos, construindo mentes.
            </p>
          </div>
          
          <div>
            <div className="flex space-x-6 mb-6">
              <SocialLink href="https://instagram.com" icon={Instagram} />
              <SocialLink href="https://wa.me/5500000000000" icon={MessageCircle} />
              <SocialLink href="https://youtube.com" icon={Youtube} />
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <a href="mailto:contato@viniciusdifiore.com" className="text-gray-400 hover:text-vf-orange mb-2 transition-colors">
                contato@viniciusdifiore.com
              </a>
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Vinicius Di Fiore. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vf-orange/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-6">
                <NavLink href="#metodo">O Método</NavLink>
                <NavLink href="#resultados">Resultados</NavLink>
                <NavLink href="#sobre">Sobre</NavLink>
                <NavLink href="#planos">Planos</NavLink>
                <NavLink href="#contato">Contato</NavLink>
              </ul>
            </nav>
            <div>
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Termos de Uso
              </a>
              <span className="mx-2 text-gray-600">|</span>
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ElementType;
};

const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-vf-orange hover:text-white transition-all duration-200"
  >
    <Icon size={20} />
  </a>
);

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-vf-orange transition-colors animated-underline"
    >
      {children}
    </a>
  </li>
);

export default Footer;
