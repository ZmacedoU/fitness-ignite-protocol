
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
          src="/lovable-uploads/6d39ec73-1446-4393-91ca-afc00abe04e4.png"
          alt="Logo Vinicius Di Fiore"
          className="h-20 w-auto drop-shadow-[0_0_16px_#FF6600cc]"
          style={{ maxHeight: 86 }}
        />
      </header>

      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        {/* Dynamic Title */}
        <DynamicTitle selectedPlanId={selectedPlanId} />

        {/* Estrutura do layout - bloco esquerda (plano), direita (form), FAQ abaixo */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center mt-4 px-3 md:px-0 gap-8">
          <CheckoutSummary
            selectedPlanId={selectedPlanId}
            onChangePlan={setSelectedPlanId}
          />
          <CheckoutForm
            selectedPlanId={selectedPlanId}
            customerName={customerName}
            setCustomerName={setCustomerName}
            hideBoleto={true}
          />
        </div>
        
        <div className="w-full max-w-4xl">
          <CheckoutFAQ />
        </div>
        
        {/* Footer só com segurança */}
        <footer className="w-full mt-10 pb-8 flex flex-col items-center text-gray-400 text-xs animate-fade-slide-up">
          <div className="flex items-center gap-3 mb-2 px-3 py-2 rounded-xl bg-black/70 border border-vf-orange/40 neon-outline shadow-lg">
            <ShieldCheck size={23} className="text-vf-orange mr-2" />
            <span className="text-vf-orange font-bold text-base tracking-wide">Pagamento 100% seguro</span>
            <span className="mx-2 text-white/70 text-lg">•</span>
            <span className="text-vf-orange font-bold text-base tracking-wide">SSL Certificado</span>
            <span className="mx-2 text-white/70 text-lg">•</span>
            <span className="text-vf-orange font-bold text-base tracking-wide">Garantia 7 dias</span>
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
