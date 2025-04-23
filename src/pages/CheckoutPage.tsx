
import React, { useState } from "react";
import CheckoutSummary from "@/components/CheckoutSummary";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutFAQ from "@/components/CheckoutFAQ";
import SecurityBar from "@/components/SecurityBar";
import DynamicTitle from "@/components/DynamicTitle";
import { ShieldCheck } from "lucide-react";

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

        {/* REMOVIDO: Urgency Counter */}
        
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
        
        {/* Footer now absorbs security info */}
        <footer className="w-full mt-10 pb-10 flex flex-col items-center text-gray-400 text-xs animate-fade-slide-up">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={18} className="text-vf-orange" />
            <span className="text-vf-orange font-bold">Pagamento seguro</span>
            <span className="mx-2 text-white/70">•</span>
            <span className="text-vf-orange font-bold">SSL Certificado</span>
            <span className="mx-2 text-white/70">•</span>
            <span className="text-vf-orange font-bold">Garantia 7 dias</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span>Suporte:&nbsp;</span>
            <a href="https://wa.me/5500000000000" className="text-vf-orange underline">Fale com nosso time</a>
          </div>
          <div className="mt-4 text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Vinicius Di Fiore. Todos os direitos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CheckoutPage;
