
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import TrustSection from "@/components/TrustSection";
import UseCases from "@/components/UseCases";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection />
      <ValueProposition />
      <TrustSection />
      <UseCases />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
