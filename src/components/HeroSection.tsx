import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              <span className="text-foreground">Get Recommended</span>{" "}
              <span className="text-primary font-bold">24/7</span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get{" "}
            <span className="text-gradient-gold">AI-Powered Referrals</span>
            <br />
            24/7 through MTC (Machine-to-Consumer) Marketing
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            83% of prospects now ask AI tools like ChatGPT, Perplexity AI, and Google AI Overviews questions like <i>“I was injured in a car accident… who do I call?”</i>{" "}
            <span className="text-foreground font-medium">
              <br></br>👉 AI Referrals Hub™ positions your firm as the answer through "case-type + location" authority mapping  — <span className="text-gradient-gold">M2C (Machine-to-Consumer)</span> Marketing. DIY or DFY — Watch the demo below.
            </span>
          </p>

          {/* Wistia video */}
          <div className="max-w-3xl mx-auto mb-10 animate-fade-in rounded-2xl overflow-hidden border border-primary/20 shadow-2xl" style={{ animationDelay: "0.25s" }}>
            <div dangerouslySetInnerHTML={{ __html: `<wistia-player media-id="kb0zmstx9r" aspect="1.6"></wistia-player>` }} />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Built-in Automations</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">AI Visibility</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">Zero</div>
              <div className="text-sm text-muted-foreground">Technical Skills Needed</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" onClick={scrollToPricing} className="group">
              <Zap className="w-5 h-5" />
              Launch My AI Referral System
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              One-time purchase • Fully automated
            </p>
          </div>

          {/* Trust indicator */}
          <p className="mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            For <span className="text-foreground">Solo Practitioners</span> •{" "}
            <span className="text-foreground">Law Firms</span> •{" "}
            <span className="text-foreground">Legal Professionals</span>
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
