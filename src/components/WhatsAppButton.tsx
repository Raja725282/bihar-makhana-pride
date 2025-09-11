import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  // Mobile number from footer
  const phoneNumber = "+91 9953240031";
  
  // Pre-typed English message
  const message = "Hello! I'm interested in your premium Bihar Makhana products. Could you please provide more information about pricing and availability?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  // Simulate typing animation when popup opens
  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-12 h-12 md:w-16 md:h-16 p-0 shadow-2xl transition-all duration-300 hover:scale-105 relative"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle size={20} className="md:w-7 md:h-7" />
            {/* Online indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
          </Button>
        </div>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-4 md:w-80 z-50 flex items-end md:items-start justify-center md:justify-end p-4 md:p-0">
          <div className="bg-white rounded-t-3xl md:rounded-2xl shadow-2xl border border-gray-100 w-full max-w-sm md:w-80 animate-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-300 overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/be26238e-2161-40dd-afd9-e69df2853b49.png" 
                      alt="Bihar Makhana" 
                      className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/10 p-1"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-300 border border-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Bihar Makhana</h3>
                    <div className="flex items-center gap-1 text-xs text-green-100">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 min-h-[200px] max-h-[300px] overflow-y-auto">
              
              {/* Welcome Message */}
              <div className="mb-4">
                <div className="bg-white rounded-2xl rounded-bl-md p-3 shadow-sm border max-w-[85%]">
                  <p className="text-sm text-gray-700 mb-2">
                    👋 Hi there! Welcome to Bihar Makhana
                  </p>
                  <p className="text-xs text-gray-500">
                    We're here to help with your premium makhana needs
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-1 ml-2">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">Just now</span>
                </div>
              </div>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="mb-4">
                  <div className="bg-white rounded-2xl rounded-bl-md p-3 shadow-sm border max-w-[60%]">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">typing...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Pre-typed Message */}
              {!isTyping && (
                <div className="mb-4">
                  <div className="bg-green-500 text-white rounded-2xl rounded-br-md p-3 shadow-sm ml-auto max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      {message}
                    </p>
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-1 mr-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-gray-400">Ready to send</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Footer */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="space-y-3">
                {/* Contact Info */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  <Phone className="w-3 h-3" />
                  <span>{phoneNumber}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Send on WhatsApp
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="outline"
                    className="px-4 rounded-full border-gray-300 hover:bg-gray-50"
                  >
                    <X size={16} />
                  </Button>
                </div>
                
                {/* Footer Text */}
                <p className="text-xs text-gray-400 text-center">
                  Powered by WhatsApp Business
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;