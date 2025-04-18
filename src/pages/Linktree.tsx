
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
      className="block w-full mb-6 transition-all duration-300 hover:scale-[1.02]"
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
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATASURBVGhD7ZpbSBVRFIb3aVFERFlBRERERERERERERFREVEVERERERARARFQUUBBREVUVERURBRERERkRERkZGRkZGRkZGRkZGZkWn7D/8em7TWPnP2mfHcJB/4YZM5ea+299jkz56LzXzrpNDo6OgmWwxpYAYnfB+E7fIUP8BwGYcQSUaN4BnAm7IJ9cBAOwxpYAYnfB+E7fIQP8BwGYcQSUaN4BnAm7IJ9cBAOwxpYAcDu2EHbAOVgP0wF/6lcrv3FAzToLzkbsgYuwO+IAnIwAx+615zmLgM+71vg1w2AWjIOtgGuwF87CKTgKm2E9TAfwBr16z44DBrUI9sOZiGj4NBwF7zmO2Amfodu6gYHMgCNwOeI8HIQJB8c6NoFKo+3veEBDpWsUXL0I4UcrDY19shGjboHO8Mj+GCyHZGmmPU5bcjrU6kl7W3LanqeBjS21tNYFugGUe4NwrCxDYTflZZPPeub6MhjvQRBeMTgC7fanrfhVq56nRPUPT8uHdzfT4Dmz7XtZIeRanbXqXcvExT3RrOYI6wzu86AHsQQIcdKXXDXZFow0HOQ3ygM0GaI6bwFnAo0Kv+OFuyPXfPZdOElYxvVyBZ/DRhoi3MGicfwRh7tyWnKWcCQCXq4jEEZVYkv1GVjpS64ahc7RdQSiKwRXInUgQRH8lG+17CqdVpCgQt0tsaV6XIhnIEx9BsO3BxRuTZ8BGJXZgmOs6DyhPG09rQ+BO++IHpYRr9VK9ispRGpugLtcI8oRB4zUHgVLrakxAHelzjqjhzVrEBhmy6BnhdGtlB+4O6LNqKnvAS2kCRAjQT3ehLBD/miTVDU0tpIPI4qrkIAV7r2JuJXWLGSH+uk8DX0XiRauG41UB2Y7lzCqQIXw/mdHfxbY2dF7nS/UTqaQefY5OsS+PVRr4LwpURTqtDXswM4OO+c5jliZTwT9LCdSF5tpOUSkqdCVj2BCFZhGK1l3RPvuaCgZ+2Kkp+WEDwYNkpHCHdKegzaDJZoJGSjtHb9ctyovgbf91dFlJu3jECbqMup1fcit9FmXKeUohwKYkVDrcdZ4HMiyCO2MYMM4nC0iPgPn2aL3CHAjG2kBqgyRoAOmGJ0DCcWw5+jM+CCGPgvNiIUaC4FSPhj71ELZ1bKFkOimWhvWrkw+j9aOfmXdGd9IY6KcXQ4kBxqk1Xt37LkUt1G4j+5bcFMm/q6axwjvQhwQlk01ZVgilugscEzriYkrBkkLhGXjPmchVw3pNRE/FdoH0zAYJ4xQ4bLezR8VVwgA55w5J0OEIh/LIOcHIbQZXEpGZVa3XgxHqshgTlGoDyvMGyD+ZPBQEDFEYnsWosgdxlk4eK4cQFBYzPTnYkNZeq5AvgNTHIXRq1QzMuH3AEftM/g9RYFnxiA4iXtXrGIzBm0MNcE0JSrXtWshpFyPu5MhvNgtl7VUaEZY2/CZ9QBFbVRm+B41BrQSQlFg82kPhvtipZd5az71z0gIEa/OXIXr+JCYVC4UVyFyGSbFFQo5xDMbQn2Pmea0FPIMnyOllWshlrIju12KnJ4zDcJuhe+QqBrNu5CuPAupMnp3InEz5X5+V2QjuzeZ2qQkFp/RPSvelAFtGkkLbehMgn2SCRQCUHODtDgtJ/UjbcpSlgI7CfZJJkk4MEkYeP4HJIdG0uW06gsAAAAASUVORK5CYII=')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div 
          ref={logoAnimation.ref}
          className={`flex flex-col items-center mb-[32px] opacity-0 scale-95 transition-all duration-700 ${logoAnimation.className}`}
        >
          <img 
            src="/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png" 
            alt="Vinicius Di Fiore" 
            className="h-28 mb-3" 
          />
        </div>

        <div className="w-full max-w-md mx-auto space-y-6">
          <LinkCard 
            title="Site Oficial" 
            link="/site"
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
        
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-vf-orange/30 transition-all hover:scale-105 hover:border-vf-orange z-20"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={24} className="text-white hover:text-vf-orange transition-colors" />
        </a>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Todos os direitos reservados - Vinicius Di Fiore</p>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
