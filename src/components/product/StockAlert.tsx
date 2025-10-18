import React from 'react';
import { AlertCircle, Clock } from 'lucide-react';

interface StockAlertProps {
  stockQuantity: number;
}

export const StockAlert: React.FC<StockAlertProps> = ({ stockQuantity }) => {
  if (stockQuantity <= 0) return null;

  const getAlertStyle = () => {
    if (stockQuantity <= 3) {
      return 'bg-red-100 text-red-800 border-red-200';
    }
    if (stockQuantity <= 5) {
      return 'bg-orange-100 text-orange-800 border-orange-200';
    }
    if (stockQuantity <= 10) {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
    return '';
  };

  const getMessage = () => {
    if (stockQuantity <= 3) {
      return `Hurry! Only ${stockQuantity} left in stock`;
    }
    if (stockQuantity <= 5) {
      return `Limited Stock! Only ${stockQuantity} remaining`;
    }
    if (stockQuantity <= 10) {
      return `Selling Fast! ${stockQuantity} items left`;
    }
    return '';
  };

  const message = getMessage();
  if (!message) return null;

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-md border ${getAlertStyle()} mt-2`}>
      {stockQuantity <= 3 ? (
        <AlertCircle className="w-4 h-4" />
      ) : (
        <Clock className="w-4 h-4" />
      )}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};