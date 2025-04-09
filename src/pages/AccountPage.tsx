
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const AccountPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  
  const handleSubscribe = () => {
    toast.success("Subscription process initiated. Redirecting to payment...");
    // In a real app, this would redirect to a payment gateway
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">My Account</h1>
        <p className="text-muted-foreground">Manage your account and subscription</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-music-elevated h-16 w-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">JD</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg">John Doe</h3>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Current Plan</label>
                  <p className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-music-purple/20 text-music-purple rounded text-xs">FREE TRIAL</span>
                    <span>14 days remaining</span>
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Listening Stats</label>
                  <p>32 songs played this week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Connected Devices</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Chrome on MacBook Pro</p>
                    <p className="text-xs text-muted-foreground">Last active: Today</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded">Current</span>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Taalwave App on iPhone 13</p>
                    <p className="text-xs text-muted-foreground">Last active: Yesterday</p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">Remove</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Premium Plans</h2>
        
        <RadioGroup 
          value={selectedPlan} 
          onValueChange={setSelectedPlan} 
          className="grid md:grid-cols-3 gap-6"
        >
          <div className={`rounded-lg p-1 ${selectedPlan === "monthly" ? "bg-music-elevated/50 border-2 border-music-highlight" : "border border-border"}`}>
            <Label 
              htmlFor="monthly" 
              className="flex flex-col h-full cursor-pointer rounded-md p-4"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Monthly</CardTitle>
                <CardDescription>Perfect for short-term</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-2xl font-bold mb-1">$9.99 <span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground text-sm mb-4">Billed monthly</p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>Ad-free music listening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>Download to listen offline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>High quality audio</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
              </CardFooter>
            </Label>
          </div>
          
          <div className={`rounded-lg p-1 ${selectedPlan === "annual" ? "bg-music-elevated/50 border-2 border-music-highlight" : "border border-border"}`}>
            <Label 
              htmlFor="annual" 
              className="flex flex-col h-full cursor-pointer rounded-md p-4"
            >
              <div className="absolute -top-3 right-3">
                <span className="bg-music-blue text-white text-xs px-3 py-1 rounded-full">BEST VALUE</span>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Annual</CardTitle>
                <CardDescription>Save with yearly billing</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-2xl font-bold mb-1">$99 <span className="text-sm font-normal text-muted-foreground">/year</span></div>
                <p className="text-muted-foreground text-sm mb-4">$8.25/month, billed annually</p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>Everything in Monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>2 months free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>Exclusive annual subscriber content</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <RadioGroupItem value="annual" id="annual" className="sr-only" />
              </CardFooter>
            </Label>
          </div>
          
          <div className={`rounded-lg p-1 ${selectedPlan === "family" ? "bg-music-elevated/50 border-2 border-music-highlight" : "border border-border"}`}>
            <Label 
              htmlFor="family" 
              className="flex flex-col h-full cursor-pointer rounded-md p-4"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Family</CardTitle>
                <CardDescription>For up to 6 accounts</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-2xl font-bold mb-1">$14.99 <span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground text-sm mb-4">Billed monthly</p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>6 Premium accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>Family mix playlist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>Parental controls</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <RadioGroupItem value="family" id="family" className="sr-only" />
              </CardFooter>
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">All Premium Plans Include:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-music-surface p-4 rounded-lg">
            <h4 className="font-medium mb-1">Ad-Free Listening</h4>
            <p className="text-sm text-muted-foreground">Enjoy uninterrupted music</p>
          </div>
          <div className="bg-music-surface p-4 rounded-lg">
            <h4 className="font-medium mb-1">High Quality Audio</h4>
            <p className="text-sm text-muted-foreground">Up to 320kbps streaming</p>
          </div>
          <div className="bg-music-surface p-4 rounded-lg">
            <h4 className="font-medium mb-1">Offline Listening</h4>
            <p className="text-sm text-muted-foreground">Download music to listen offline</p>
          </div>
          <div className="bg-music-surface p-4 rounded-lg">
            <h4 className="font-medium mb-1">Unlimited Skips</h4>
            <p className="text-sm text-muted-foreground">Skip as many tracks as you want</p>
          </div>
        </div>
      </div>
      
      <div className="bg-music-surface p-6 rounded-lg mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Free Trial</h3>
          <span className="bg-music-purple/20 text-music-purple px-3 py-1 rounded-full text-sm">14 DAYS REMAINING</span>
        </div>
        <p className="mb-6">You're currently in the free trial period. Your trial will end on April 23, 2025.</p>
        <Button onClick={handleSubscribe}>Subscribe Now</Button>
      </div>
    </div>
  );
};

export default AccountPage;
