
import React, { useState } from "react";
import CheckoutSummary from "@/components/CheckoutSummary";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutFAQ from "@/components/CheckoutFAQ";
import SecurityBar from "@/components/SecurityBar";

const CheckoutPage: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("black");
  const [customerName, setCustomerName] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col bg-black relative"
      style={{
        background: "linear-gradient(110deg,#0d0a08 0%,#1a1a1a 72%,#ff5c0011 100%)",
      }}
    >
      {/* Animated orange-glassmorphism overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 80% 10%, #ff5c0266 0%, transparent 72%)" }}/>
      <header className="flex justify-center items-center py-6 bg-black z-40 border-b border-vf-orange glass animate-fade-slide-up">
        <img
          src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png"
          alt="Vinicius Di Fiore"
          className="h-16 md:h-20 drop-shadow-md"
        />
      </header>
      <main className="flex-1 w-full flex flex-col items-center relative z-10">
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center mt-10 px-3 md:px-0 gap-8">
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
          Suporte: <a href="https://wa.me/5500000000000" className="text-vf-orange underline ml-1">Fale com nosso time</a>
          <div className="mt-2">&copy; {new Date().getFullYear()} Vinicius Di Fiore. Todos os direitos reservados.</div>
        </footer>
      </main>
    </div>
  );
};

export default CheckoutPage;
