
import React, { useState } from "react";
import CheckoutSummary from "@/components/CheckoutSummary";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutFAQ from "@/components/CheckoutFAQ";
import SecurityBar from "@/components/SecurityBar";

const CheckoutPage: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("black");
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <header className="flex justify-center items-center py-6 bg-black z-40 border-b border-vf-orange">
        <img
          src="/lovable-uploads/988273f0-e092-4366-bf1a-b33a782abf43.png"
          alt="Vinicius Di Fiore"
          className="h-16 md:h-20"
        />
      </header>
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center mt-6 px-3 md:px-0 gap-8">
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
        <CheckoutFAQ />
        <SecurityBar />
        <footer className="w-full mt-6 pb-5 flex flex-col items-center text-gray-400 text-xs">
          Suporte: <a href="https://wa.me/5500000000000" className="text-vf-orange underline ml-1">Fale com nosso time</a>
          <div className="mt-2">&copy; {new Date().getFullYear()} Vinicius Di Fiore. Todos os direitos reservados.</div>
        </footer>
      </main>
    </div>
  );
};

export default CheckoutPage;
