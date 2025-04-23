
import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  price: string;
  mockupImg: string;
  highlight?: boolean;
};

interface PlanSelectPopoverProps {
  plans: Plan[];
  selectedPlanId: string;
  onChange: (planId: string) => void;
}

const PlanSelectPopover: React.FC<PlanSelectPopoverProps> = ({
  plans,
  selectedPlanId,
  onChange,
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="relative overflow-hidden group flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-vf-orange to-orange-700 text-white font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          tabIndex={0}
        >
          <span>Trocar plano</span>
          <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={12}
          className="z-50 rounded-2xl p-4 min-w-[280px] bg-black/90 border border-vf-orange/30 shadow-2xl animate-fade-in backdrop-blur-md"
        >
          <div className="mb-3 font-bold text-vf-orange text-lg">Escolha um plano:</div>
          <ul className="space-y-2">
            {plans.map((plan) => (
              <li key={plan.id}>
                <button
                  className={`flex items-center w-full gap-3 p-3 rounded-xl border transition-all
                    ${
                      plan.id === selectedPlanId
                        ? "border-vf-orange bg-gradient-to-r from-[#270d02] via-[#ff5c0033] to-[#1a1a1a] shadow-[0_0_18px_1px_#ff5c0070] scale-[1.04]"
                        : "border-transparent bg-white/5 hover:border-vf-orange/60 hover:bg-vf-orange/10"
                    }
                  `}
                  onClick={() => {
                    onChange(plan.id);
                  }}
                  tabIndex={0}
                >
                  <img
                    src={plan.mockupImg}
                    alt={plan.name}
                    className={`h-12 w-12 rounded-md object-cover border-2 ${
                      plan.id === selectedPlanId
                        ? "border-vf-orange animate-pulse-subtle"
                        : "border-vf-orange/30"
                    } bg-black`}
                  />
                  <div className="flex flex-col items-start text-left">
                    <span
                      className={`text-base font-bold ${
                        plan.id === selectedPlanId
                          ? "text-vf-orange"
                          : "text-vf-white"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">
                      {plan.price}
                    </span>
                  </div>
                  {plan.id === selectedPlanId && (
                    <span className="ml-auto text-xs text-green-400 bg-green-900/40 rounded px-2 py-0.5 animate-fade-in font-semibold">Selecionado</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <Popover.Close
            className="block mt-4 mx-auto text-sm px-4 py-1.5 rounded bg-vf-orange text-black font-bold shadow hover:bg-vf-orange/90 transition"
            aria-label="Fechar"
          >
            Fechar
          </Popover.Close>
          
          <Popover.Arrow className="fill-vf-orange" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PlanSelectPopover;
