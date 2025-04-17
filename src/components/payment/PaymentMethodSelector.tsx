
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Smartphone, Banknote } from "lucide-react";

export default function PaymentMethodSelector() {
  const [selectedMethod, setSelectedMethod] = useState<string>("credit-card");

  const paymentMethods = [
    { id: "credit-card", label: "Credit Card", icon: CreditCard },
    { id: "paypal", label: "PayPal", icon: DollarSign },
    { id: "mobile-payment", label: "Mobile Payment", icon: Smartphone },
    { id: "upi", label: "UPI", icon: Banknote }
  ];

  return (
    <div className="mb-6">
      <div className="text-sm font-medium mb-2">Payment Method</div>
      <div className="flex flex-wrap gap-2">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Button
              key={method.id}
              type="button"
              variant={selectedMethod === method.id ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                selectedMethod === method.id 
                  ? "bg-music-highlight hover:bg-music-highlight/80 text-black" 
                  : "border-music-elevated hover:border-music-highlight hover:text-music-highlight"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <Icon className="h-4 w-4" />
              {method.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
