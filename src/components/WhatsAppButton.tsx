import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Your mobile number (replace with your actual number)
  const phoneNumber = "+91 9953240031"; // Replace with your mobile number
  
  // Pre-typed English message
  const message = "Hello! I'm interested in your premium Bihar Makhana products. Could you please provide more information about pricing and availability?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={24} />
        </Button>
      </div>

      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 animate-in slide-in-from-bottom-2 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Bihar Makhana</h3>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </Button>
            </div>
            
            {/* Message Preview */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                {message}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                Send Message
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="px-4"
              >
                Cancel
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Click "Send Message" to chat with us on WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;