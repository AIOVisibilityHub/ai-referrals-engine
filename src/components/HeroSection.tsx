import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              <span className="text-foreground">Get Recommended</span>{" "}
              <span className="text-primary font-bold">24/7</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Get{" "}
            <span className="text-gradient-gold">AI-Powered Referrals</span>
            <br />
            24/7 through M2C Marketing
          </h1>

          {/* Subheadline (FIXED + CLEAN) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            83% of prospects now ask AI tools like ChatGPT, Perplexity, and Google AI questions like{" "}
            <i>“I was injured in a car accident… who do I call?”</i>

            <br /><br />

            <span className="text-foreground font-medium">
              AI Referrals Hub™ positions your firm as the answer using{" "}
              <span className="text-gradient-gold">
                case-type + location authority mapping
              </span>{" "}
              through M2C (Machine-to-Consumer) marketing.
            </span>

            <br /><br />

            <span>
              Run it yourself—or we handle everything for you.
            </span>
          </p>

          {/* Video */}
          <div className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  `<wistia-player media-id="kb0zmstx9r" aspect="1.6"></wistia-player>`,
              }}
            />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                100+
              </div>
              <div className="text-sm text-muted-foreground">
                Built-in Automations
              </div>
            </div>

            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                AI Visibility
              </div>
            </div>

            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                Zero
              </div>
              <div className="text-sm text-muted-foreground">
                Technical Skills Needed
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              onClick={scrollToPricing}
              className="group"
            >
              <Zap className="w-5 h-5" />
              Launch My AI Referral System
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground">
              One-time purchase • Fully automated
            </p>
          </div>

          {/* Trust */}
          <p className="mt-12 text-sm text-muted-foreground">
            For <span className="text-foreground">Solo Practitioners</span> •{" "}
            <span className="text-foreground">Law Firms</span> •{" "}
            <span className="text-foreground">Legal Professionals</span>
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
