
import React from "react";
import { CreditCard, PiggyBank, ShieldCheck } from "lucide-react";

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
    <aside className="bg-black border-2 rounded-xl p-6 mb-6 md:mb-0 md:mr-8 border-vf-orange shadow-lg max-w-md w-full min-w-[280px]">
      <div className="flex items-center gap-3 mb-2">
        <img src={selectedPlan.mockupImg} alt="" className="h-14 w-14 rounded-lg object-cover border border-vf-orange bg-black" />
        <div>
          <div className="font-bold text-xl text-vf-orange">{selectedPlan.name}</div>
          <div className="text-lg font-semibold text-vf-white">{selectedPlan.price}</div>
        </div>
      </div>
      <ul className="space-y-1 mt-4 mb-3">
        {selectedPlan.description.slice(0, 5).map((item, i) => (
          <li key={i} className="flex items-center text-vf-white text-sm">
            <ShieldCheck size={15} className="mr-2 text-vf-orange" />
            {item}
          </li>
        ))}
      </ul>
      <button
        className="text-vf-orange underline text-sm hover:text-vf-white transition mb-0"
        type="button"
        onClick={() => {
          // Abre menu simples de seleção de plano
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
