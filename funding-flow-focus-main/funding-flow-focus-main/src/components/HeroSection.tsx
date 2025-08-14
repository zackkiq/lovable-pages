
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import HubSpotForm from "./HubSpotForm";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#34518B] to-[#00809C] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Turn Your Funding Into Growth: Manage Your Construction Cash Flow with 
              <span className="text-[#F7941D]"> Confidence</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              You've unlocked flexible funding with National Funding XPRS—now take control of project finances with KonstructIQ's all-in-one financial management platform for contractors.
            </p>
            <div className="space-y-6">
              <HubSpotForm />
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful residential family home" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-[#00809C]" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Estimate Speed</div>
                    <div className="text-xs text-gray-500">+80% Faster</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-[#00809C]" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Payment Speed</div>
                    <div className="text-xs text-gray-500">+50% Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
