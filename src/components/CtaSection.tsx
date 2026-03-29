import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, DollarSign, Clock } from "lucide-react";

const CtaSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/30">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">
                <span className="text-foreground">AI Referrals</span>{" "}
                <span className="text-primary">24/7</span>
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Be the Answer AI{" "}
            <span className="text-gradient-gold">Recommends in 2026</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            While your competitors wonder where their leads went, you'll have a 24/7 AI referral machine working for you around the clock.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-display text-2xl font-bold">2026</p>
                <p className="text-sm text-muted-foreground">AI-Ready Launch</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-display text-2xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">Automated Referrals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-display text-2xl font-bold">50%</p>
                <p className="text-sm text-muted-foreground">Holiday Discount</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <Button variant="gold" size="xl" onClick={scrollToPricing} className="group">
              Start Getting AI Referrals Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              One-time purchase • Fully Automated
            </p>
          </div>

          {/* Phone CTA */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-2">
              Want us to set everything up for you?
            </p>
            <a
              href="tel:2135375613"
              className="inline-flex items-center gap-2 text-xl font-display font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Call (213) 537-5613 for Done-For-You Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
