
const AboutSection = () => {
  return (
    <section className="py-20 bg-[#EDF6FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/c8a46c9b-07d2-4beb-b282-ef14bc14f4d3.png" 
              alt="KonstructIQ software interface on laptop" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#34518B]">
              What is KonstructIQ?
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                KonstructIQ is the all-in-one financial management platform designed specifically for residential contractors who manage multiple simultaneous projects.
              </p>
              <p>
                Our platform combines job costing, invoicing, and project budget tracking in one intuitive dashboard, giving you the financial clarity needed to maximize your National Funding XPRS investment.
              </p>
              <p>
                Whether you're managing kitchen remodels, whole-home renovations, or new construction, KonstructIQ helps you stay profitable and cash-flow positive on every job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
