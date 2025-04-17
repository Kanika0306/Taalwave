
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] p-4">
      <Card className="w-full max-w-md p-8 glass-card text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-music-highlight/20 p-3">
            <CheckCircle className="h-12 w-12 text-music-highlight" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-music-base/50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Transaction ID:</span>
              <span className="font-mono font-medium">TXN8253974105</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Amount:</span>
              <span className="font-medium">$49.99</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            A confirmation has been sent to your email address.
          </p>
          <Button asChild className="w-full bg-music-highlight hover:bg-music-highlight/80 text-black">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
