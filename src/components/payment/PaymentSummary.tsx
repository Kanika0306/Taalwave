
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

export default function PaymentSummary() {
  const [showHelp, setShowHelp] = useState(false);
  
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Premium Subscription</span>
            <span>$49.99</span>
          </div>
          <div className="flex justify-between items-center text-muted-foreground text-sm">
            <span>1 Year</span>
            <span></span>
          </div>
          <div className="border-t border-border my-2"></div>
          <div className="flex justify-between items-center font-medium">
            <span>Total</span>
            <span>$49.99</span>
          </div>
        </div>
        
        <div className="rounded-lg bg-music-highlight/10 p-4 border border-music-highlight/30">
          <div className="flex items-start">
            <div>
              <h4 className="font-medium">What's included:</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>✓ Unlimited music streaming</li>
                <li>✓ Ad-free listening experience</li>
                <li>✓ High-quality audio (320kbps)</li>
                <li>✓ Offline downloads</li>
                <li>✓ Access on all devices</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <Button 
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-music-purple/70 hover:bg-music-purple/20 text-foreground"
            variant="outline"
            onClick={() => setShowHelp(!showHelp)}
          >
            <HelpCircle className="h-4 w-4" />
            Need Help?
          </Button>
          
          {showHelp && (
            <div className="mt-4 text-sm bg-music-base/70 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Frequently Asked Questions:</h4>
              <div className="space-y-2">
                <p>• Is my payment information secure?</p>
                <p>• Can I cancel my subscription?</p>
                <p>• How do I get a refund?</p>
                <p className="mt-2 text-music-highlight">Contact customer support at support@taalwave.com</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
