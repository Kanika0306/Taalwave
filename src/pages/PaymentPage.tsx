
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard, Lock, Info, CheckCircle } from "lucide-react";
import PaymentMethodSelector from "@/components/payment/PaymentMethodSelector";
import PaymentSummary from "@/components/payment/PaymentSummary";
import SecurePaymentNote from "@/components/payment/SecurePaymentNote";

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardName, setCardName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format with spaces every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry(formatExpiry(e.target.value));
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Limit to 3-4 digits
    const cvc = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCardCVC(cvc);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!cardNumber.trim() || !cardExpiry.trim() || !cardCVC.trim() || !cardName.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all card details",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulated payment processing for now
      // In a real application, this would make a secure call to your backend
      // which would then use Stripe's API to create a payment intent
      console.log("Processing payment...");
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment successful!",
        description: "Your payment has been processed successfully.",
      });
      
      navigate("/payment-success");
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: "There was a problem processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <CreditCard className="mr-2" /> Secure Payment
              </CardTitle>
              <CardDescription>
                Complete your payment information below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentMethodSelector />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="space-y-2">
                  <label htmlFor="cardName" className="text-sm font-medium block">
                    Cardholder Name
                  </label>
                  <Input
                    id="cardName"
                    placeholder="John Smith"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="border-music-elevated focus:border-music-highlight"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="text-sm font-medium block">
                    Card Number
                  </label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="border-music-elevated focus:border-music-highlight pl-10"
                      required
                    />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="cardExpiry" className="text-sm font-medium block">
                      Expiry Date
                    </label>
                    <Input
                      id="cardExpiry"
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      className="border-music-elevated focus:border-music-highlight"
                      required
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cardCVC" className="text-sm font-medium block">
                      CVC / CVV
                    </label>
                    <div className="relative">
                      <Input
                        id="cardCVC"
                        placeholder="123"
                        value={cardCVC}
                        onChange={handleCVCChange}
                        className="border-music-elevated focus:border-music-highlight"
                        required
                        maxLength={4}
                      />
                      <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full mt-6 bg-music-highlight hover:bg-music-highlight/80 text-black"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Pay $49.99 Securely
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <SecurePaymentNote />
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
}
