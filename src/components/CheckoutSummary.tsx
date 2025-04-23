import React from "react";
import { ShieldCheck } from "lucide-react";
import PlanSelectPopover from "./PlanSelectPopover";

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
      className={`bg-black/10 border border-gray-800 w-full max-w-md p-7 mb-10 md:mb-0 md:mr-8 relative rounded-2xl`}
    >
      <div className="flex items-center gap-4 mb-2">
        <img
          src={selectedPlan.mockupImg}
          alt=""
          className="h-16 w-16 rounded-xl object-cover border-2 border-gray-700 bg-black"
        />
        <div>
          <div className="font-extrabold text-2xl text-vf-orange">{selectedPlan.name}</div>
          <div className="text-lg font-semibold text-vf-white mt-1">{selectedPlan.price}</div>
        </div>
      </div>
      <ul className="space-y-2 mt-6 mb-5">
        {selectedPlan.description.slice(0, 5).map((item, i) => (
          <li key={i} className="flex items-center text-vf-white text-base font-medium">
            <ShieldCheck size={17} className="mr-2 text-vf-orange" />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <PlanSelectPopover
          plans={plans.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            highlight: p.highlight,
            mockupImg: p.mockupImg || "",
          }))}
          selectedPlanId={selectedPlanId}
          onChange={onChangePlan}
        />
      </div>
    </aside>
  );
};

export default CheckoutSummary;
