
import React from "react";
import { ShieldCheck, LockKeyhole } from "lucide-react";

const SecurityBar: React.FC = () => (
  <div className="flex items-center justify-center gap-8 py-2 bg-black border-t border-vf-orange mt-6">
    <div className="flex items-center gap-2">
      <ShieldCheck size={22} className="text-vf-orange" />
      <span className="text-gray-300 text-sm">Pagamento seguro</span>
    </div>
    <div className="flex items-center gap-2">
      <LockKeyhole size={20} className="text-vf-orange" />
      <span className="text-gray-300 text-sm">SSL certificado</span>
    </div>
  </div>
);

export default SecurityBar;
