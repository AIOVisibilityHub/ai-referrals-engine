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
        <title>AI Referrals Hub™ | Get AI-Powered Referrals 24/7</title>
        <meta
          name="description"
          content="Position your law firm to be recommended by ChatGPT, Perplexity, and Google AI. AI Referrals Hub™ helps firms generate AI-powered referrals through case-type and location authority mapping."
        />
        <meta
          name="keywords"
          content="AI referrals, AI visibility for lawyers, ChatGPT marketing, law firm AI marketing, AI search optimization, generative engine optimization"
        />
        <link rel="canonical" href="https://clients.aireferralshub.com/" />
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
