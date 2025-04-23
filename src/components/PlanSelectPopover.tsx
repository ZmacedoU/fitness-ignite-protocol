
import React from "react";
import * as Popover from "@radix-ui/react-popover";

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
          className={`relative transition-all duration-150 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1a1a1a] to-[#ff5c0020] border border-vf-orange/40 text-vf-orange font-semibold hover:text-vf-white hover:bg-vf-orange/20 shadow-md neon-outline focus:outline-none focus:ring-2 focus:ring-vf-orange/50`}
          tabIndex={0}
        >
          Trocar plano
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={12}
          className="z-50 rounded-2xl p-4 min-w-[260px] bg-black/90 glass border border-vf-orange/30 shadow-2xl animate-fade-in"
          style={{ backdropFilter: 'blur(9px)' }}
        >
          <div className="mb-2 font-bold text-vf-orange text-lg">Escolha um plano:</div>
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
                    className={`h-11 w-11 rounded-md object-cover border-2 ${
                      plan.id === selectedPlanId
                        ? "border-vf-orange animate-pulse-subtle"
                        : "border-transparent"
                    } bg-black`}
                  />
                  <div className="flex flex-col items-start text-left">
                    <span
                      className={`text-base font-bold ${
                        plan.id === selectedPlanId
                          ? "text-vf-orange drop-shadow-[0_2px_8px_#ff5c0080]"
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
            className="block mt-4 mx-auto text-sm px-4 py-1 rounded bg-vf-orange text-black font-bold shadow hover:bg-vf-orange/90 transition"
            aria-label="Fechar"
          >
            Fechar
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PlanSelectPopover;
