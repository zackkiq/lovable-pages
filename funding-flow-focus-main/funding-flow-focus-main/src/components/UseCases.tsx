
import { Card } from "@/components/ui/card";
import { Wrench, TrendingUp, Users, Zap } from "lucide-react";

const UseCases = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#34518B] mb-4">
            Put Your Working Capital Loan to Work—Fast
          </h2>
          <p className="text-xl text-gray-600">
            Here's how contractors are using their National Funding XPRS capital with KonstructIQ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#F7941D]">
            <div className="space-y-4">
              <Wrench className="h-10 w-10 text-[#00809C]" />
              <h3 className="text-lg font-semibold text-[#34518B]">Equipment Purchasing</h3>
              <p className="text-gray-600">
                Use funding to acquire new tools and equipment while tracking ROI and depreciation in real-time
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#00809C]">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#F7941D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <h3 className="text-lg font-semibold text-[#34518B]">Buying Materials</h3>
              <p className="text-gray-600">
                Purchase materials in bulk for better pricing while maintaining precise cost tracking per project
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#F7941D]">
            <div className="space-y-4">
              <Users className="h-10 w-10 text-[#00809C]" />
              <h3 className="text-lg font-semibold text-[#34518B]">Managing Payroll</h3>
              <p className="text-gray-600">
                Ensure consistent payroll for your team while tracking labor costs across multiple projects
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#00809C]">
            <div className="space-y-4">
              <TrendingUp className="h-10 w-10 text-[#F7941D]" />
              <h3 className="text-lg font-semibold text-[#34518B]">Business Expansion</h3>
              <p className="text-gray-600">
                Scale operations strategically with data-driven insights into profitability and growth opportunities
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#F7941D]">
            <div className="space-y-4">
              <Zap className="h-10 w-10 text-[#00809C]" />
              <h3 className="text-lg font-semibold text-[#34518B]">Emergency Expenses</h3>
              <p className="text-gray-600">
                Handle unexpected costs without derailing projects, with clear tracking of unplanned expenses
              </p>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#00809C]">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-[#F7941D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">📢</span>
              </div>
              <h3 className="text-lg font-semibold text-[#34518B]">Marketing and Advertising</h3>
              <p className="text-gray-600">
                Invest in growth while measuring marketing ROI and lead conversion rates directly in your dashboard
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
