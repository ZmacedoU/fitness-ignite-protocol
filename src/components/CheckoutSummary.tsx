
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
      className={`glass animate-fade-slide-left max-w-md w-full min-w-[280px] p-7 mb-10 md:mb-0 md:mr-8 relative
        shadow-xl border-2 overflow-hidden
        ${
          selectedPlan.highlight
            ? "neon-outline selected"
            : "neon-outline"
        }
      `}
      style={{
        transition: "box-shadow 0.4s, background 0.3s",
        background: "linear-gradient(120deg,#19130e 66%,#ff5c0029 100%)",
        boxShadow:
          selectedPlan.highlight
            ? "0 0 40px 0 #ff5c0034, 0 0 62px 6px #ff5c0144"
            : "0 0 14px 0 #ff5c0034, 0 0 18px 3px #ff5c0122",
      }}
    >
      {/* Gradient overlay highlight */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl z-0 transition-all duration-500 ${
          selectedPlan.highlight
            ? "opacity-40"
            : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, #ff5c00bb 0%, transparent 75%)",
        }}
      />
      <div className="flex items-center gap-4 mb-2 relative z-10">
        <img
          src={selectedPlan.mockupImg}
          alt=""
          className="h-16 w-16 rounded-xl object-cover border-2 border-vf-orange/90 bg-black animate-pulse-subtle neon-outline"
        />
        <div>
          <div className="font-extrabold text-2xl text-vf-orange drop-shadow-[0_2px_10px_#ff5c00bb] animate-fade-in">{selectedPlan.name}</div>
          <div className="text-lg font-semibold text-vf-white mt-1">{selectedPlan.price}</div>
        </div>
      </div>
      <ul className="space-y-2 mt-6 mb-5 relative z-10">
        {selectedPlan.description.slice(0, 5).map((item, i) => (
          <li key={i} className="flex items-center text-vf-white text-base font-medium animate-fade-in delay-100">
            <ShieldCheck size={17} className="mr-2 text-vf-orange" />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-end z-10">
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
