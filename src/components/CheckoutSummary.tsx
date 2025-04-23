
import React, { useState, useEffect } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [selectedPlanId]);

  return (
    <aside
      className={`glass max-w-sm w-full min-w-[260px] p-5 mb-10 md:mb-0
        flex flex-col justify-between gap-1 shadow-xl border-2 overflow-hidden transition-all duration-300 rounded-2xl
        ${isAnimating ? "transform scale-[1.02]" : "transform scale-100"}
        ${
          selectedPlan.highlight
            ? "border-vf-orange/80"
            : "border-vf-orange/30"
        }
      `}
      style={{
        transition: "transform 0.4s, box-shadow 0.4s, background 0.3s",
        background: "linear-gradient(120deg,#19130e 75%,#ff5c0020 100%)",
        boxShadow:
          selectedPlan.highlight
            ? "0 0 32px 0 #ff5c0034"
            : "0 0 14px 0 #ff5c0034",
        minHeight: 440,
        maxHeight: 550,
      }}
    >
      {/* Gradient overlay highlight */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl z-0 transition-all duration-500 ${
          selectedPlan.highlight ? "opacity-40" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, #ff5c00bb 0%, transparent 75%)",
        }}
      />
      <div className="flex items-center gap-3 mb-3 relative z-10">
        <img
          src={selectedPlan.mockupImg}
          alt=""
          className={`h-14 w-14 rounded-xl object-cover border-2 border-vf-orange/90 bg-black animate-pulse-subtle ${isAnimating ? 'animate-pulse' : ''}`}
        />
        <div>
          <div className="font-extrabold text-xl text-vf-orange drop-shadow-[0_2px_10px_#ff5c00bb] animate-fade-in">{selectedPlan.name}</div>
          <div className="text-base font-semibold text-vf-white mt-1">{selectedPlan.price}</div>
        </div>
      </div>

      <div className="py-1.5 px-3 bg-gradient-to-r from-vf-orange/10 to-transparent rounded-lg mb-2 border border-vf-orange/20">
        <h3 className="font-bold text-vf-orange mb-1 text-sm">O que você receberá:</h3>
      </div>

      <ul className="space-y-1 mt-1 mb-2 relative z-10">
        {selectedPlan.description.map((item, i) => (
          <li
            key={i}
            className="flex items-center text-vf-white text-sm font-medium animate-fade-in delay-100"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ShieldCheck size={19} className="mr-2 text-vf-orange flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center z-10 mt-3 w-full gap-2">
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
