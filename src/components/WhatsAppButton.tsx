import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppButton = () => {
  // Mobile number from footer
  const phoneNumber = "+91 9953240031";
  
  // Pre-typed English message
  const message = "Hello! I'm interested in your premium Bihar Makhana products. Could you please provide more information about pricing and availability?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      id="whatsapp-button-main"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        <Button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-14 h-14 md:w-16 md:h-16 p-0 shadow-2xl transition-all duration-300 hover:scale-110 relative"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} className="md:w-7 md:h-7" />
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppButton;