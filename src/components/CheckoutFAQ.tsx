
import React from "react";
import { ShieldCheck, CreditCard } from "lucide-react";

const faqs = [
  {
    q: "Como recebo meu plano?",
    a: "Após confirmação do pagamento, você receberá o acesso imediatamente via e-mail e WhatsApp.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim! Aceitamos parcelamento no cartão de crédito em até 12x.",
  },
  {
    q: "E se eu não gostar do conteúdo?",
    a: "Você pode solicitar cancelamento sem burocracia em até 7 dias após a compra.",
  },
  {
    q: "Em quanto tempo recebo acesso?",
    a: "Geralmente em alguns minutos após a aprovação do pagamento. Fique atento ao seu WhatsApp e e-mail!",
  },
];

const CheckoutFAQ: React.FC = () => (
  <section className="max-w-2xl mx-auto mt-10 mb-10 bg-black border-vf-orange border-2 rounded-xl p-6 shadow-lg">
    <h2 className="text-vf-orange font-bold text-2xl mb-3 flex items-center gap-2">
      <ShieldCheck size={22} className="text-vf-orange" />
      Perguntas Frequentes
    </h2>
    <ul className="space-y-4">
      {faqs.map(({q, a}, idx) => (
        <li key={idx}>
          <div className="font-semibold text-vf-white mb-1">{q}</div>
          <div className="text-gray-300 text-[0.97rem]">{a}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default CheckoutFAQ;
