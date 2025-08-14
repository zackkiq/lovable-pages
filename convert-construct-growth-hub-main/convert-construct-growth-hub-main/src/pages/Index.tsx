import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle2, Clock, DollarSign, FileText, Users, Zap, Star, ArrowRight, Calendar, Shield, Smartphone, TrendingUp, Calculator, Building, Mail, ChevronDown } from "lucide-react";

const Index = () => {
  const handleDemoRequest = () => {
    // Demo request tracking can be implemented here
    console.log("Demo requested");
  };

  const handleTourRequest = () => {
    // Tour request tracking can be implemented here
    console.log("Tour requested");
    window.open('https://konstructiq.navattic.com/9u1j0y23', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">KonstructIQ</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button onClick={handleDemoRequest} className="bg-blue-700 hover:bg-blue-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200 text-xl pointer-events-none">
            AI-powered construction software
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Simplify invoicing, reduce admin,
            <span className="text-blue-700 block">get accurate estimates</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Transform your business with faster and more accurate budgeting, billing, invoicing, estimating and overall cash flow management.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">Schedule a Demo</h3>
            <div className="border border-gray-400 p-6 rounded bg-white">
              <div className="hs-form-frame" data-region="na1" data-form-id="5aad3dc6-fff6-4ade-b5ae-ca04ae0a04c1" data-portal-id="44954242"></div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Monthly Subscription
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Sending and receiving digital payments always free
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Cancel Anytime
            </div>
          </div>
        </div>
      </section>

      {/* Profitable Projects Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Profitable Projects at All Times
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keep your construction business profitable with real-time insights and automated tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-blue-200 transition-colors">
              <DollarSign className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Digital Payments and Smart Billing</h3>
              <p className="text-gray-600 mb-4">Automatic bill creation whenever you upload or receive an invoice, connected directly to your budget line-items. Direct bank integration for free ACH with no fees.</p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-200 transition-colors">
              <Calculator className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Accurate Cost Estimation</h3>
              <p className="text-gray-600 mb-4">Re-usable templates to speed up the process, margin or markup for better accuracy, digital signatures for faster turnaround.</p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-200 transition-colors">
              <Mail className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Simpler Workflows</h3>
              <p className="text-gray-600 mb-4">Central hub for change orders means nothing gets lost in translation, linking them directly to your budget means instant insight into profitability.</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-green-50 p-4 rounded-lg text-left min-h-56 flex flex-col">
                <h3 className="text-lg font-semibold mb-3 text-green-800">Work smarter, not harder</h3>
                <ul className="space-y-2 text-sm text-gray-700 flex-1">
                  <li>• Build and share estimates with ease</li>
                  <li>• Track changes and approvals</li>
                  <li>• Create bills automatically from receipts</li>
                  <li>• Auto sync with your accounting software</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-left min-h-56 flex flex-col">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">Deliver your projects on budget and time</h3>
                <ul className="space-y-2 text-sm text-gray-700 flex-1">
                  <li>• Calculate profit using markup or margin</li>
                  <li>• Send and receive payments faster</li>
                  <li>• Track budget changes at the item level</li>
                  <li>• View cash flow and balance in real-time</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-left min-h-56 flex flex-col">
                <h3 className="text-lg font-semibold mb-3 text-purple-800">Keep your customers and partners happy</h3>
                <ul className="space-y-2 text-sm text-gray-700 flex-1">
                  <li>• Collaborate with subs on projects</li>
                  <li>• Pay subcontractors with flexible options</li>
                  <li>• Give clients greater visibility into projects</li>
                  <li>• Streamline client payments and approvals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-black">What our customers say</h2>
            <p className="text-gray-600 mb-4">Real reviews from verified Google customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">MCM Electric</h3>
                <p className="text-sm text-gray-600">Construction Company</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "KonstructIQ is a great resource for our business and has helped streamline our estimating, change orders, daily log and invoicing process and has also helped us get paid quicker from our clients!! The support team have been incredibly helpful whenever I have questions on a particular feature!"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Dustin Leach</h3>
                <p className="text-sm text-gray-600">Construction Professional</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "My companies experience with Konstruct IQ has been nothing short of amazing. The new AI technology will be a game changer to my team of estimators. We have worked closely with Joy and Justin and they have taken our feedback and worked in our suggestions. Glad we are using this in our day to day operations!"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-xl">Matt Komo</h3>
                <p className="text-sm text-gray-600">Builder & Business Owner</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "KonstructIQ brings all of my financial management needs to one place for my projects. I can enter data one time and manage it throughout the site while paying subcontractors and vendors more efficiently. It simplifies everything on the financial side of my business. My experience with them has been fantastic. The team focuses on real solutions for the construction industry and is not trying to sell me their product. They are creating a product that makes being a builder and business owner easier. They listen and then deliver."
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about getting started
              </p>
            </div>

            <div className="space-y-4">
              <Collapsible>
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">What is KonstructIQ?</h3>
                      <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">KonstructIQ is software designed to power the financial management of your construction projects, from estimate to final bill paid. We built it for general contractors, but we also help subs get paid faster and clients have the best experience possible.</p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
              
              <Collapsible>
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">How does it help my business?</h3>
                      <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">What started as a way to improve the client and general contractor experience by digitizing payments has expanded into making estimates, budgeting, change orders, and daily logs all easier.</p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
              
              <Collapsible>
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">How much does it cost?</h3>
                      <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">$199/month for the general contractor, while subs and clients can use KonstructIQ for free. It's also completely free to send and receive digital payments.</p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
              
              <Collapsible>
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Can I try it before having to pay?</h3>
                      <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">We don't have a trial yet, but you can tour the product here. We do also offer a 30-day money-back guarantee. If you get started with us and don't like what we have to offer, we'll issue you a full refund.</p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Want to See for Yourself?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your cash flow and get back to building. Book your personalized demo and see exactly how it works for your business.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <Card className="p-6 bg-white text-gray-900">
              <h3 className="text-lg font-semibold mb-4">Schedule a Demo</h3>
              <div className="hs-form-frame" data-region="na1" data-form-id="5aad3dc6-fff6-4ade-b5ae-ca04ae0a04c1" data-portal-id="44954242"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">KonstructIQ</div>
              <p className="text-gray-400 mb-4">
                AI-powered invoicing software built specifically for construction contractors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Mobile App</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Training</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KonstructIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
