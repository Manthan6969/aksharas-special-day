import { HeroSection } from "@/components/HeroSection";
import { LoveLetterSection } from "@/components/LoveLetterSection";
import { SpecialMomentsSection } from "@/components/SpecialMomentsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LoveLetterSection />
      <SpecialMomentsSection />
      <Footer />
    </div>
  );
};

export default Index;
