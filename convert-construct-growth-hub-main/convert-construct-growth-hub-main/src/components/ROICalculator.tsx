
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ROICalculator = () => {
  const handleDemoRequest = () => {
    // Demo request tracking can be implemented here
    console.log("Demo requested");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much time and money you'll save with KonstructIQ
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Current Situation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Invoices per month</label>
                    <Input type="number" placeholder="50" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Hours spent on invoicing per month</label>
                    <Input type="number" placeholder="20" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Average days to get paid</label>
                    <Input type="number" placeholder="45" className="w-full" />
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">With KonstructIQ</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Time saved per month:</span>
                    <span className="font-semibold text-green-600">15 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Money saved (time @ $50/hr):</span>
                    <span className="font-semibold text-green-600">$750/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Faster payment (cash flow):</span>
                    <span className="font-semibold text-green-600">38 days sooner</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total monthly savings:</span>
                      <span className="font-bold text-green-600">$750+</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>KonstructIQ cost:</span>
                      <span>$97/month</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-green-800 border-t pt-2 mt-2">
                      <span>Net monthly benefit:</span>
                      <span>$653+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-blue-700 hover:bg-blue-800 text-lg px-8"
                onClick={handleDemoRequest}
              >
                See My Custom ROI Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
