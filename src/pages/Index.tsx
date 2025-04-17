
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MethodSection from '../components/MethodSection';
import ResultsSection from '../components/ResultsSection';
import PlansSection from '../components/PlansSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-black/90">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/feafe30c-8486-41d5-a0bc-ce63abb5c6d8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm py-4">
          <div className="container mx-auto px-6">
            <img 
              src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png" 
              alt="Vinicius Di Fiore" 
              className="h-12" 
            />
          </div>
        </div>

        {/* Hero Section - Section 1 */}
        <HeroSection />

        {/* About Section - Section 2: Quem é Vinicius Di Fiore? */}
        <AboutSection />

        {/* Method Section - Section 3: Protocolo */}
        <MethodSection />

        {/* Results Section - Section 4 */}
        <ResultsSection />

        {/* Plans Section - Section 5 */}
        <PlansSection />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
