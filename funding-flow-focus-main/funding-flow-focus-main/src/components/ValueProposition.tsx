
import { CheckCircle, DollarSign, TrendingUp, Zap } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-[#F8FBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#34518B] mb-4">
            Working Capital Meets Financial Clarity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combine National Funding XPRS's flexible financing with KonstructIQ's powerful project management tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
              <Zap className="h-8 w-8 text-[#F7941D]" />
            </div>
            <h3 className="text-lg font-semibold text-[#34518B]">Faster Job Turnaround</h3>
            <p className="text-gray-600">Secure materials and labor quickly with immediate access to working capital</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
              <TrendingUp className="h-8 w-8 text-[#00809C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#34518B]">Better Financial Control</h3>
            <p className="text-gray-600">Real-time visibility into costs, payments, and project health</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
              <DollarSign className="h-8 w-8 text-[#F7941D]" />
            </div>
            <h3 className="text-lg font-semibold text-[#34518B]">Seamless Invoicing & Payments</h3>
            <p className="text-gray-600">Automate invoicing and subcontractor payments for faster cash flow</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="h-8 w-8 text-[#00809C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#34518B]">No More Cash Flow Bottlenecks</h3>
            <p className="text-gray-600">Fund your projects and manage budgets in one place</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
