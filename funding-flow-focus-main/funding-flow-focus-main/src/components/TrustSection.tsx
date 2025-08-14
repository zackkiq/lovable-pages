
import { Star } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      text: "KonstructIQ is a great resource for our business and has helped streamline our estimating, change orders, daily log and invoicing process and has also helped us get paid quicker from our clients!! The support team have been incredibly helpful whenever I have questions on a particular feature!",
      author: "MCM Electric",
      rating: 5
    },
    {
      text: "My companies experience with Konstruct IQ has been nothing short of amazing. The new AI technology will be a game changer to my team of estimators. We have worked closely with Joy and Justin and they have taken our feedback and worked in our suggestions. Glad we are using this in our day to day operations!",
      author: "Dustin Leach",
      rating: 5
    },
    {
      text: "KonstructIQ brings all of my financial management needs to one place for my projects. I can enter data one time and manage it throughout the site while paying subcontractors and vendors more efficiently. It simplifies everything on the financial side of my business. My experience with them has been fantastic.",
      author: "Matt Komo",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center space-x-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} className="h-5 w-5 fill-[#F7941D] text-[#F7941D]" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#34518B] mb-4">
            What Contractors Are Saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-l-[#F7941D]">
              {renderStars(testimonial.rating)}
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-[#34518B]">- {testimonial.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
