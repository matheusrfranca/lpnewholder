import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CreatorSection from "@/components/CreatorSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import DialogSection from "@/components/DialogSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CreatorSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <DialogSection />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
