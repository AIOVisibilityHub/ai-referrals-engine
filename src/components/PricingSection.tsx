import { Button } from "@/components/ui/button";
import { Check, Briefcase, Scale, Stethoscope, Zap } from "lucide-react";

const pricingTiers = [
  {
    id: "business",
    name: "Business",
    icon: Briefcase,
    description: "For business owners & entrepreneurs",
    originalPrice: 1994,
    salePrice: 997,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Business Knowledge Pack",
      "Business Overview Knowledge File",
      "Services Knowledge File",
      "FAQ Knowledge File",
      "Customer Persona Knowledge File",
      "Industry Topics Knowledge File",
      "All 100+ Core Automations",
      "Lifetime Updates",
    ],
  },
  {
    id: "legal",
    name: "Legal",
    icon: Scale,
    description: "For lawyers & law firms",
    originalPrice: 2994,
    salePrice: 1497,
    popular: true,
    color: "from-primary to-gold-light",
    features: [
      "Legal Knowledge Pack",
      "Legal Services Knowledge File",
      "Legal QnA Knowledge File",
      "Case Type Knowledge File",
      "Legal Glossary Knowledge File",
      "Compliance & Ethics Notes File",
      "All 100+ Core Automations",
      "Lifetime Updates",
    ],
  },
  {
    id: "medical",
    name: "Medical",
    icon: Stethoscope,
    description: "For doctors & healthcare professionals",
    originalPrice: 3994,
    salePrice: 1997,
    color: "from-emerald-500 to-teal-500",
    features: [
      "Medical Knowledge Pack",
      "Medical Services Knowledge File",
      "Medical Condition QnA File",
      "Medical Glossary Knowledge File",
      "Treatment & Protocol Knowledge File",
      "Patient Persona Knowledge File",
      "All 100+ Core Automations",
      "Lifetime Updates",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">
                <span className="text-foreground">50% Off</span>{" "}
                <span className="text-primary">for a Limited Time Only</span>
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient-gold">Industry Package</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One-time investment. Fully automated. Increase your AI visibility across all major answer engines.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-gradient-card rounded-2xl border ${
                  tier.popular ? "border-primary glow-gold" : "border-border/50"
                } overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-gold py-2 text-center">
                    <span className="text-sm font-bold text-primary-foreground">MOST POPULAR</span>
                  </div>
                )}

                <div className={`p-8 ${tier.popular ? "pt-14" : ""}`}>
                  {/* Icon and name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                      <tier.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl text-muted-foreground line-through">${tier.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold text-gradient-gold">
                        ${tier.salePrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">one-time</span>
                    </div>
                    <p className="text-sm text-primary mt-2">Save ${(tier.originalPrice - tier.salePrice).toLocaleString()} — Holiday Special</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={tier.popular ? "gold" : "goldOutline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom urgency */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Prefer done-for-you service? Call{" "}
              <a href="tel:2135375613" className="text-primary hover:underline font-semibold">
                (213) 537-5613
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
