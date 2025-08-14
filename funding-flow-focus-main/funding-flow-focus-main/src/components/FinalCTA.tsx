
import { Button } from "@/components/ui/button";
import HubSpotForm from "./HubSpotForm";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#34518B] to-[#00809C] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Take Control of Your Construction Finances?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join the contractors who've transformed their businesses by combining National Funding XPRS capital with KonstructIQ's financial management platform.
        </p>
        
        <div className="space-y-8">
          <div className="max-w-2xl mx-auto">
            <HubSpotForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
