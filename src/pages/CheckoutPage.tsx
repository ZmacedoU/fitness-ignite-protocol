
import React, { useState } from "react";
import CheckoutSummary from "@/components/CheckoutSummary";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutFAQ from "@/components/CheckoutFAQ";
import SecurityBar from "@/components/SecurityBar";
import DynamicTitle from "@/components/DynamicTitle";
import { Clock, ShieldCheck } from "lucide-react";

const CheckoutPage: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("black");
  const [customerName, setCustomerName] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col bg-black relative font-montserrat"
      style={{
        background: "linear-gradient(110deg, #0d0a08 0%, #1a1a1a 72%, #ff5c0011 100%)",
      }}
    >
      {/* Animated orange-glassmorphism overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 80% 10%, #ff5c0266 0%, transparent 72%)" }}/>
        
      <header className="flex justify-center items-center py-6 bg-black/90 z-40 border-b border-vf-orange/30 backdrop-blur-md animate-fade-slide-up sticky top-0">
        <img
          src="/lovable-uploads/f80129a3-b2c9-4b04-b670-532897c303e6.png"
          alt="Fiore Got Fridit"
          className="h-16 md:h-20 drop-shadow-md"
        />
      </header>
      
      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        {/* Dynamic Title */}
        <DynamicTitle selectedPlanId={selectedPlanId} />
        
        {/* Urgency Counter */}
        <div className="flex items-center justify-center mb-10 bg-gradient-to-r from-vf-orange/20 to-red-700/20 py-2 px-4 rounded-full shadow-lg animate-pulse-subtle max-w-md mx-auto">
          <Clock className="text-vf-orange mr-2" size={18} />
          <span className="text-vf-white/90 text-sm">
            Vagas limitadas: <span className="font-bold text-vf-orange">apenas 7 disponíveis</span> para acompanhamento VIP
          </span>
        </div>
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center mt-4 px-3 md:px-0 gap-8">
          <CheckoutSummary
            selectedPlanId={selectedPlanId}
            onChangePlan={setSelectedPlanId}
          />
          <CheckoutForm
            selectedPlanId={selectedPlanId}
            customerName={customerName}
            setCustomerName={setCustomerName}
          />
        </div>
        
        <div className="w-full max-w-4xl">
          <CheckoutFAQ />
        </div>
        
        <SecurityBar />
        
        <footer className="w-full mt-8 pb-6 flex flex-col items-center text-gray-400 text-xs animate-fade-slide-up">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-vf-orange" />
            <span>Suporte: <a href="https://wa.me/5500000000000" className="text-vf-orange underline ml-1">Fale com nosso time</a></span>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <div>&copy; {new Date().getFullYear()} Vinicius Di Fiore. Todos os direitos reservados.</div>
            <div className="mt-1 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-vf-orange transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-vf-orange transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CheckoutPage;
