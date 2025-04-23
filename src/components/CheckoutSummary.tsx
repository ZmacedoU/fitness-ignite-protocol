
import React from "react";
import { ShieldCheck } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string[];
  highlight?: boolean;
  mockupImg?: string;
};

const plans: Plan[] = [
  {
    id: "black",
    name: "Protocolo Black",
    price: "R$ 499,00/mês",
    description: [
      "Acesso ao Método Exclusivo",
      "Acompanhamento semanal",
      "Grupo VIP com Vinicius",
      "Suporte via WhatsApp",
      "Plano alimentar + treino 100% personalizados",
    ],
    mockupImg: "/lovable-uploads/4701071d-6e71-4a25-9cb0-dc4442536325.png",
    highlight: true,
  },
  {
    id: "starter",
    name: "Plano Starter",
    price: "R$ 187,00/mês",
    description: [
      "Protocolos básicos",
      "Grupo de dúvidas",
      "Acesso a treinos gravados",
    ],
    mockupImg: "/lovable-uploads/682ce0d8-b00b-4a89-a96c-a4d1935ae69b.png",
  },
  {
    id: "premium",
    name: "Protocolo Premium",
    price: "R$ 849,00/mês",
    description: [
      "Tudo do Black + Consultoria individual",
      "Reunião de alinhamento mensal",
      "Acesso antecipado a novidades",
    ],
    mockupImg: "/lovable-uploads/6e7054a9-a7ed-4faa-a805-1c5579945f56.png",
  },
];

interface CheckoutSummaryProps {
  selectedPlanId: string;
  onChangePlan: (planId: string) => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  selectedPlanId,
  onChangePlan,
}) => {
  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[0];

  return (
    <aside
      className={`glass animate-fade-slide-left max-w-md w-full min-w-[280px] p-7 mb-10 md:mb-0 md:mr-8
        ${selectedPlan.highlight ? "neon-outline selected" : "neon-outline"} 
        shadow-xl border-2`}
      style={{
        transition: 'box-shadow 0.2s, background 0.2s',
        background: "linear-gradient(120deg,#19130e 67%,#ff5c001a 100%)"
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        <img src={selectedPlan.mockupImg} alt="" className="h-16 w-16 rounded-lg object-cover border-2 border-vf-orange/80 bg-black animate-pulse-subtle" />
        <div>
          <div className="font-bold text-2xl text-vf-orange drop-shadow-[0_2px_10px_#ff5c00aa]">{selectedPlan.name}</div>
          <div className="text-lg font-semibold text-vf-white">{selectedPlan.price}</div>
        </div>
      </div>
      <ul className="space-y-2 mt-6 mb-5">
        {selectedPlan.description.slice(0, 5).map((item, i) => (
          <li key={i} className="flex items-center text-vf-white text-base font-medium animate-fade-in">
            <ShieldCheck size={17} className="mr-2 text-vf-orange" />
            {item}
          </li>
        ))}
      </ul>
      <button
        className="text-vf-orange underline text-base font-semibold hover:text-vf-white transition-all mb-0 mt-2"
        type="button"
        onClick={() => {
          const planId = prompt(
            `Digite o código do plano para trocar:\n- black\n- starter\n- premium`,
            selectedPlanId
          );
          if (planId && plans.some((p) => p.id === planId)) {
            onChangePlan(planId);
          }
        }}
      >
        Trocar plano
      </button>
    </aside>
  );
};

export default CheckoutSummary;
