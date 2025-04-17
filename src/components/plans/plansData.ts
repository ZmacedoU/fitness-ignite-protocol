
export interface PlanData {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  buttonText: string;
  link: string;
  features: string[];
}

export const plansData: PlanData[] = [
  {
    title: "Protocolo START",
    description: "Para quem quer sair do sedentarismo com um plano simples e prático",
    price: "297",
    buttonText: "Quero esse plano",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20plano%20START",
    features: [
      "PDF com exercícios básicos (iniciante)",
      "Introdução à reeducação alimentar",
      "Conteúdo entregue automaticamente após pagamento",
      "Plano pronto, sem personalização",
      "Sem acompanhamento individual"
    ]
  },
  {
    title: "Protocolo de Treinamento",
    description: "Treinamento exclusivo com análise corporal e acesso direto ao Vinicius",
    originalPrice: "891",
    price: "747",
    discount: 16,
    buttonText: "Começar agora",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20Protocolo%20de%20Treinamento",
    features: [
      "Avaliação do físico (pontos fortes e fracos)",
      "Protocolo de treino 100% personalizado",
      "Acesso direto ao treinador",
      "Ajustes conforme evolução",
      "Suporte contínuo via WhatsApp"
    ]
  },
  {
    title: "Protocolo Black",
    description: "Treinamento + dieta supervisionada por Vinicius e Mayra (nutri)",
    originalPrice: "1.797",
    price: "1.377",
    discount: 23,
    buttonText: "Garantir minha vaga",
    link: "https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20Protocolo%20Black",
    features: [
      "Tudo do plano de treinamento",
      "Protocolo dietético elaborado pela Mayra (nutri)",
      "Supervisão direta de treino + dieta",
      "Suporte completo",
      "Resultados integrados com foco em alta performance"
    ]
  }
];
