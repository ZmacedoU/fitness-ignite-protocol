
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CreditCard, PiggyBank, Check, X, ShieldCheck } from "lucide-react";

// Simulação de integração Kirvano
const KIRVANO_API_URL = "https://api.kirvano.com/v1/payment";
// Campos obrigatórios

interface CheckoutFormProps {
  selectedPlanId: string;
  customerName: string;
  setCustomerName: (value: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  selectedPlanId,
  customerName,
  setCustomerName,
}) => {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle"|"success"|"error"|"processing">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !cpf || !phone) {
      toast({ title: "Preencha todos os campos obrigatórios", description: "" });
      return;
    }
    setLoading(true);
    setStatus("processing");
    toast({ title: "Processando pagamento..." });
    try {
      // Chamada mock da API
      const response = await fetch(KIRVANO_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlanId,
          customer: customerName,
          email,
          cpf,
          phone,
        }),
      });
      if (!response.ok) throw new Error("Erro ao processar pagamento");
      setStatus("success");
      toast({title: "Pagamento aprovado!", description: `Bem vinda, ${customerName}!`});
    } catch (err: any) {
      setStatus("error");
      toast({title: "Falha no pagamento", description: err.message});
    }
    setLoading(false);
  };

  return (
    <form
      className="space-y-5 bg-black border-2 border-vf-orange rounded-xl p-6 shadow-lg w-full max-w-xl"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <label htmlFor="name" className="block mb-1 text-base text-vf-white">
          Nome completo <span className="text-vf-orange">*</span>
        </label>
        <Input
          id="name"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          className="bg-black border-vf-orange text-vf-white"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 text-base text-vf-white">
          E-mail <span className="text-vf-orange">*</span>
        </label>
        <Input
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="bg-black border-vf-orange text-vf-white"
          type="email"
          placeholder="Digite seu melhor e-mail"
          required
        />
      </div>
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="flex-1">
          <label htmlFor="cpf" className="block mb-1 text-base text-vf-white">
            CPF ou CNPJ <span className="text-vf-orange">*</span>
          </label>
          <Input
            id="cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            className="bg-black border-vf-orange text-vf-white"
            placeholder="Digite seu CPF ou CNPJ"
            required
            maxLength={18}
            minLength={11}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="block mb-1 text-base text-vf-white">
            Celular (WhatsApp) <span className="text-vf-orange">*</span>
          </label>
          <Input
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="bg-black border-vf-orange text-vf-white"
            placeholder="(DDD) 9XXXX-XXXX"
            required
          />
        </div>
      </div>
      {/* Modo mock: Se tivéssemos iframe/redirect Kirvano, apareceriam aqui */}
      <div className="flex flex-col gap-3 bg-black border border-gray-800 rounded p-4">
        <div className="flex items-center gap-2">
          <CreditCard className="text-vf-orange" size={20} />
          <span className="text-vf-orange font-semibold">Cartão de crédito</span>
          <span className="ml-2 text-xs bg-vf-orange/10 px-2 py-0.5 rounded text-vf-orange">mais rápido</span>
        </div>
        <div className="flex items-center gap-2">
          <PiggyBank className="text-vf-orange" size={20} />
          <span className="text-vf-orange font-semibold">Pix</span>
          <span className="ml-2 text-xs bg-vf-orange/10 px-2 py-0.5 rounded text-vf-orange">prático</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-vf-orange" size={20} />
          <span className="text-vf-orange font-semibold">Boleto</span>
          <span className="ml-2 text-xs bg-vf-orange/10 px-2 py-0.5 rounded text-vf-orange">opcional</span>
        </div>
        <div className="mt-1 text-xs text-gray-400">
          *Pagamento real via Kirvano após avançar
        </div>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="btn-primary w-full sticky bottom-0 left-0 z-30"
        style={{
          position: "sticky",
        }}
      >
        {loading ? (
          <>
            <CreditCard size={20} /> Processando...
          </>
        ) : (
          <>
            <CreditCard size={20} /> Finalizar Compra
          </>
        )}
      </Button>
      {status !== "idle" && (
        <div className="mt-4 flex flex-col items-center">
          {status === "processing" && (
            <div className="text-vf-orange text-lg font-bold">Processando pagamento...</div>
          )}
          {status === "success" && (
            <div className="flex flex-col items-center">
              <Check size={30} className="text-green-500 mb-1" />
              <span className="text-base font-bold text-green-400">Pagamento aprovado!</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex flex-col items-center">
              <X size={26} className="text-red-500 mb-1" />
              <span className="text-base font-bold text-red-400">Não foi possível processar o pagamento</span>
            </div>
          )}
        </div>
      )}
      <div className="pt-5 flex items-center gap-2 text-xs text-gray-400 justify-center border-t border-gray-700 mt-4">
        <ShieldCheck size={14} className="text-vf-orange" />
        Compra protegida com certificado SSL e criptografia.
      </div>
    </form>
  );
};

export default CheckoutForm;
