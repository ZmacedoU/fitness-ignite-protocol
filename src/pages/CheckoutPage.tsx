
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Check, X, CreditCard } from "lucide-react";

const KIRVANO_API_URL = "https://api.kirvano.com/v1/payment"; // Exemplo, troque pelo correto

const plans = [
  { name: "Black", price: "R$ 499,00/mês", id: "black" },
  { name: "Gold", price: "R$ 299,00/mês", id: "gold" },
];

const CheckoutPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].id);
  const [customer, setCustomer] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "processing">("idle");

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer) {
      toast({ title: "Preencha seu nome para continuar", description: "" });
      return;
    }
    setLoading(true);
    setStatus("processing");
    toast({ title: "Processando pagamento..." });

    try {
      // API de exemplo
      const response = await fetch(KIRVANO_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          plan: selectedPlan,
        }),
      });
      if (!response.ok) throw new Error("Erro ao processar pagamento");
      // await response.json() // Você pode usar o body aqui se quiser

      setStatus("success");
      toast({
        title: "Pagamento aprovado!",
        description: `Bem vinda, ${customer}!`,
      });
    } catch (err: any) {
      setStatus("error");
      toast({ title: "Falha no pagamento", description: err.message });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-2 py-16">
      <Card className="w-full max-w-md border-vf-orange bg-black text-vf-white shadow-xl animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-vf-orange uppercase font-bold text-3xl">
            Checkout do Plano
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={handleCheckout}>
            <div>
              <label className="block  mb-1 text-lg" htmlFor="customer">
                Nome completo
              </label>
              <Input
                id="customer"
                value={customer}
                onChange={e => setCustomer(e.target.value)}
                className="bg-black border-vf-orange text-vf-white placeholder:text-gray-500"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
              <label className="block  mb-1 text-lg" htmlFor="plan">
                Plano
              </label>
              <select
                id="plan"
                value={selectedPlan}
                onChange={e => setSelectedPlan(e.target.value)}
                className="w-full bg-black border-vf-orange text-vf-orange font-bold px-3 py-2 rounded"
              >
                {plans.map(plan => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name} — {plan.price}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              {loading ? "Processando..." : "Confirmar e Pagar"}
            </Button>
          </form>
          {status !== "idle" && (
            <div className="mt-8 flex flex-col items-center gap-2 animate-fade-in">
              {status === "processing" && (
                <div className="text-vf-orange text-lg font-bold">Processando pagamento...</div>
              )}
              {status === "success" && (
                <div className="flex flex-col items-center">
                  <Check size={36} className="text-green-500 mb-2" />
                  <span className="text-lg font-bold text-green-400">Pagamento aprovado!</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex flex-col items-center">
                  <X size={32} className="text-red-500 mb-2" />
                  <span className="text-lg font-bold text-red-400">Não foi possível processar o pagamento</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center text-sm text-muted-foreground pt-2">
            Seus dados estão seguros. Reforçamos a segurança usando <b>Kirvano</b>.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckoutPage;
