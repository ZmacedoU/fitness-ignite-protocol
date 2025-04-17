
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  // Format the phone number for WhatsApp link (remove any non-digit characters)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  return (
    <a 
      href={`https://wa.me/${formattedNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#111111] text-white w-16 h-16 rounded-full flex items-center justify-center opacity-80 z-50 hover:opacity-100 transition-opacity duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsAppButton;
