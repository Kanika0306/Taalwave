
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard, Lock, Info, CheckCircle, Banknote } from "lucide-react";
import PaymentMethodSelector from "@/components/payment/PaymentMethodSelector";
import PaymentSummary from "@/components/payment/PaymentSummary";
import SecurePaymentNote from "@/components/payment/SecurePaymentNote";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardName, setCardName] = useState("");
  const [upiId, setUpiId] = useState("9893782126@ibl");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card");
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

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "credit-card") {
      // Basic validation for credit card
      if (!cardNumber.trim() || !cardExpiry.trim() || !cardCVC.trim() || !cardName.trim()) {
        toast({
          title: "Missing information",
          description: "Please fill in all card details",
          variant: "destructive",
        });
        return;
      }
    } else if (paymentMethod === "upi") {
      // UPI validation already has a default value
      if (!upiId.trim()) {
        toast({
          title: "Missing information",
          description: "Please provide a valid UPI ID",
          variant: "destructive",
        });
        return;
      }
    }
    
    setIsProcessing(true);
    
    try {
      // Simulated payment processing
      console.log(`Processing ${paymentMethod} payment...`);
      if (paymentMethod === "upi") {
        console.log(`Using UPI ID: ${upiId}`);
      }
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
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Payment Method</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "credit-card", label: "Credit Card", icon: CreditCard },
                    { id: "paypal", label: "PayPal", icon: DollarSign },
                    { id: "mobile-payment", label: "Mobile Payment", icon: Smartphone },
                    { id: "upi", label: "UPI", icon: Banknote }
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <Button
                        key={method.id}
                        type="button"
                        variant={paymentMethod === method.id ? "default" : "outline"}
                        className={`flex items-center gap-2 ${
                          paymentMethod === method.id 
                            ? "bg-music-highlight hover:bg-music-highlight/80 text-black" 
                            : "border-music-elevated hover:border-music-highlight hover:text-music-highlight"
                        }`}
                        onClick={() => handlePaymentMethodChange(method.id)}
                      >
                        <Icon className="h-4 w-4" />
                        {method.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                {paymentMethod === "credit-card" && (
                  <>
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
                  </>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-4">
                    <div className="p-4 bg-music-base/50 rounded-lg">
                      <div className="flex items-center mb-4">
                        <Banknote className="h-5 w-5 mr-2 text-music-highlight" />
                        <h3 className="font-medium">UPI Payment</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="upiId" className="text-sm font-medium block">
                          UPI ID
                        </label>
                        <Input
                          id="upiId"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="border-music-elevated focus:border-music-highlight"
                          readOnly
                        />
                        <p className="text-sm text-muted-foreground">
                          Scan the UPI ID with your payment app to complete the payment.
                        </p>
                      </div>
                      
                      <div className="mt-4 p-3 border border-music-highlight/30 bg-music-highlight/10 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-music-highlight mr-2 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Instructions:</p>
                            <ol className="text-sm list-decimal pl-5 mt-1 space-y-1">
                              <li>Open your UPI payment app (Google Pay, PhonePe, etc.)</li>
                              <li>Choose "Pay to UPI ID" option</li>
                              <li>Enter the UPI ID shown above</li>
                              <li>Enter amount: ₹49.99</li>
                              <li>Complete the payment in your app</li>
                              <li>Click "I've Completed Payment" below</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="p-4 bg-music-base/50 rounded-lg">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-5 w-5 mr-2 text-music-highlight" />
                      <h3 className="font-medium">PayPal Payment</h3>
                    </div>
                    <p className="text-sm">
                      You'll be redirected to PayPal to complete your payment securely.
                    </p>
                  </div>
                )}

                {paymentMethod === "mobile-payment" && (
                  <div className="p-4 bg-music-base/50 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Smartphone className="h-5 w-5 mr-2 text-music-highlight" />
                      <h3 className="font-medium">Mobile Payment</h3>
                    </div>
                    <p className="text-sm">
                      You'll be redirected to your mobile payment provider to complete your payment.
                    </p>
                  </div>
                )}
                
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
                      {paymentMethod === "upi" 
                        ? "I've Completed Payment" 
                        : `Pay $49.99 Securely`}
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
