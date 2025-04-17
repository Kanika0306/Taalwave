
import { Shield, Lock } from "lucide-react";

export default function SecurePaymentNote() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" />
        <span>Your payment information is encrypted and secure</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Shield className="h-4 w-4" />
        <span>This transaction is protected by bank-level security</span>
      </div>
    </div>
  );
}
