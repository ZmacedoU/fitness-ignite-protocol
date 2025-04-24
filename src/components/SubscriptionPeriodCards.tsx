
import React from "react";
import { CircleDollarSign, Calendar, Clock, CalendarDays } from "lucide-react";

interface SubscriptionPeriodCardsProps {
  selectedPeriod: "bimestral" | "semestral" | "anual";
  onSelectPeriod: (period: "bimestral" | "semestral" | "anual") => void;
}

const periods = [
  {
    id: "bimestral",
    name: "Bimestral",
    price: "R$ 639,80",
    subtitle: "R$ 305,90/mês",
    tag: "MELHOR CUSTO-BENEFÍCIO",
    duration: "60 dias"
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "R$ 1.596,00",
    subtitle: "R$ 266,00/mês",
    tag: "MAIS ESCOLHIDO",
    duration: "180 dias",
    highlight: true
  },
  {
    id: "anual",
    name: "Anual",
    price: "R$ 2.876,00",
    subtitle: "R$ 239,67/mês",
    tag: "ACESSO MAIS COMPLETO",
    duration: "365 dias"
  }
];

const SubscriptionPeriodCards: React.FC<SubscriptionPeriodCardsProps> = ({
  selectedPeriod,
  onSelectPeriod,
}) => {
  return (
    <div className="w-full space-y-3 mt-4">
      <h3 className="text-vf-orange font-bold text-lg text-center">Escolha o período:</h3>
      <div className="grid gap-3">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => onSelectPeriod(period.id as "bimestral" | "semestral" | "anual")}
            className={`relative w-full p-4 rounded-xl border-2 transition-all duration-300
              ${
                selectedPeriod === period.id
                  ? "border-vf-orange bg-gradient-to-r from-[#270d02] via-[#ff5c0033] to-[#1a1a1a] shadow-[0_0_18px_1px_#ff5c0070] scale-[1.02]"
                  : "border-vf-orange/30 hover:border-vf-orange/60 bg-black/40"
              }
            `}
          >
            {/* Tag de destaque */}
            {period.tag && (
              <div className="absolute -top-3 right-4 px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide
                ${period.highlight ? 'bg-vf-orange text-black' : 'bg-black text-vf-orange border border-vf-orange'}">
                {period.tag}
              </div>
            )}
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-vf-orange" />
                  <span className="font-bold text-lg text-white">{period.name}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                  <Clock size={14} />
                  <span>Acompanhamento por {period.duration}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-vf-orange font-bold text-xl">{period.price}</div>
                <div className="text-gray-400 text-sm">{period.subtitle}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPeriodCards;
