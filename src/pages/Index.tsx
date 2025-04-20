
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MethodSection from '../components/MethodSection';
import ResultsSection from '../components/ResultsSection';
import PlansSection from '../components/PlansSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Navbar from '../components/Navbar';

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handlePerformanceClick = () => {
    navigate('/protocolo-starter');
  };

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
        {/* Navigation */}
        <Navbar />

        {/* Hero Section - Section 1 */}
        <HeroSection />

        {/* About Section - Section 2: Quem é Vinicius Di Fiore? */}
        <AboutSection />

        {/* Method Section - Section 3: Protocolo */}
        <MethodSection />

        {/* Results Section - Section 4 */}
        <ResultsSection />

        {/* Plans Section - Section 5 */}
        <PlansSection onPerformanceClick={handlePerformanceClick} />

        <Footer />
        
        {/* WhatsApp Floating Button - visible across all sections */}
        <WhatsAppButton phoneNumber="5511999999999" />
      </div>
    </div>
  );
};

export default Index;

