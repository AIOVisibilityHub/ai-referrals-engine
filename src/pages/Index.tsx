import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import FeaturesDetailSection from "@/components/FeaturesDetailSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Visibility Hub | Get AI-Powered Referrals 24/7 for 2026</title>
        <meta 
          name="description" 
          content="Position your business, law firm, or medical practice to be recommended by ChatGPT, Perplexity & Google AI. 100+ built-in automations. Launch special 50% off through Dec 31st." 
        />
        <meta name="keywords" content="AI visibility, AI referrals, ChatGPT marketing, n8n automation, business automation, law firm marketing, healthcare marketing" />
        <link rel="canonical" href="https://clients.aireferralshub.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <FeaturesDetailSection />
          <PricingSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
