
import React, { useState, useEffect } from "react";
import { ShieldCheck, Puzzle, Activity } from "lucide-react";
import PlanSelectPopover from "./PlanSelectPopover";

// Imagem circular - Protocolo premium nova logo
const premiumAvatar = "/lovable-uploads/bcd6a0e6-55b4-42d2-a3ea-5353cf9f8f6f.png";

// Icônico SVG peça de quebra-cabeça black usando lucide Puzzle
const BlackIcon = () => (
  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black border-2 border-vf-orange shadow-md neon-outline selected">
    <Puzzle size={50} className="text-vf-orange" />
  </div>
);

// Starter boneco correndo - SVG (ou imagem se desejado)
const StarterIcon = () => (
  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black border-2 border-vf-orange shadow-md neon-outline">
    <Activity size={50} className="text-vf-orange" />
  </div>
);

// Premium circular logo (imagem enviada)
const PremiumIcon = () => (
  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black border-2 border-vf-orange shadow-md neon-outline">
    <img src={premiumAvatar} alt="" className="w-16 h-16 object-cover rounded-full border-2 border-vf-orange" />
  </div>
);

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string[];
  highlight?: boolean;
  avatarType: "icon-black" | "icon-premium" | "icon-starter";
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
    highlight: true,
    avatarType: "icon-black",
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
    avatarType: "icon-premium", // TROCA: agora Starter usa o avatar premium antigo
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
    avatarType: "icon-starter", // TROCA: agora Premium usa o Starter (imagem enviada)
  },
];

interface CheckoutSummaryProps {
  selectedPlanId: string;
  onChangePlan: (planId: string) => void;
}

const getAvatar = (type: Plan["avatarType"]) => {
  if (type === "icon-black") return <BlackIcon />;
  if (type === "icon-premium") {
    // Starter agora usa avatar antigo premium (círculo laranja das antigas)
    return (
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-black border-2 border-vf-orange shadow-md neon-outline">
        <img
          src="/lovable-uploads/3206fd3b-ea81-4963-ab04-476093f41da7.png"
          alt="Premium antigo"
          className="w-16 h-16 object-cover rounded-full border-2 border-vf-orange"
        />
      </div>
    );
  }
  // Premium agora usa a nova logo enviada
  return <PremiumIcon />;
};

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
      className={`glass min-w-[320px] w-[390px] max-w-sm p-7 mb-10 md:mb-0 flex flex-col justify-start gap-2 shadow-xl border-2 overflow-hidden transition-all duration-300 rounded-2xl text-white relative
        ${isAnimating ? "transform scale-[1.03]" : "transform scale-100"}
        ${selectedPlan.highlight ? "border-vf-orange/80" : "border-vf-orange/30"}
      `}
      style={{
        minHeight: 410,
        maxHeight: 550,
        background: "linear-gradient(125deg,#18130e 80%,#ff5c0025 100%)",
        boxShadow: selectedPlan.highlight
          ? "0 0 32px 0 #ff5c0034"
          : "0 0 14px 0 #ff5c0034",
      }}
    >
      {/* Avatar do Plano */}
      <div className="flex flex-col gap-2 items-center mb-2 z-20">
        <div className={`mt-1 mb-2 ${isAnimating ? "animate-pulse" : ""}`}>
          {getAvatar(selectedPlan.avatarType)}
        </div>
        <div className="font-extrabold text-2xl text-vf-orange text-center tracking-tight">{selectedPlan.name}</div>
        <div className="text-xl font-extrabold mt-0.5 text-vf-white tracking-tight">{selectedPlan.price}</div>
      </div>

      <div className="bg-gradient-to-r from-vf-orange/15 to-transparent rounded-lg border border-vf-orange/15 py-2 px-4 mb-2 mt-3">
        <h3 className="font-bold text-vf-orange mb-1 text-base text-center">O que você receberá:</h3>
      </div>

      <ul className="space-y-2 mt-1 mb-4 px-2">
        {selectedPlan.description.map((item, i) => (
          <li
            key={i}
            className="flex items-center text-vf-white text-[1.13rem] font-semibold animate-fade-in delay-100"
            style={{ animationDelay: `${i * 80}ms`}}
          >
            <ShieldCheck size={20} className="mr-3 text-vf-orange flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Botão grande e centralizado para trocar plano */}
      <div className="flex flex-col items-center w-full mt-auto mb-0">
        <PlanSelectPopover
          plans={plans.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            highlight: p.highlight,
            mockupImg: "",
          }))}
          selectedPlanId={selectedPlanId}
          onChange={onChangePlan}
        />
      </div>
    </aside>
  );
};

export default CheckoutSummary;
