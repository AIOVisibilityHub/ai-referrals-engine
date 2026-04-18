import { Button } from "@/components/ui/button";
import { Check, Zap, Trophy } from "lucide-react";

const pricingTiers = [
  {
    id: "diy",
    name: "DIY — AI Referrals Hub™ System",
    icon: Zap,
    tagline: "Run it yourself for total control.",
    description:
      "Get more AI-driven calls and cases while managing your visibility profile on your terms.",
    originalPrice: 1495,
    salePrice: 795,
    priceSuffix: "one-time",
    footnote: "Lifetime updates as AI platforms evolve",
    ctaLabel: "Launch AI Referrals Hub™",
    ctaUrl: "https://buy.stripe.com/bJe9ATeyP7On9yQ8fLcwg0r",
    badge: "Founding Member Pricing — Limited to 25",
    features: [
      "Complete access to AI Referrals Hub system",
      "Hundreds-to-thousands of schemas generated from your URL",
      "Multi-platform publishing to GitHub, GitHub Pages, GitLab, Hugging Face, Kaggle, Codeberg",
      "Perplexity-powered FAQ research per case type + city",
      "Unanswered Q&A discovery for AI Overviews & Answer Engines",
      "Citation-ready help articles per case type + city mapping",
      "Custom topic help article generator",
      "Testimonial discovery across major platforms",
      "Per-page AI optimization (JSON-LD, breadcrumbs, meta tags)",
      "14-tool Authority Builder Suite",
      "HTML FAQ/Q&A page generator",
      "Content refresh every 30 days",
      "Auto submission to Google, Bing and AI Search",
      "Ongoing updates as AI platforms evolve",
    ],
  },
  {
    id: "dfy",
    name: "Done For You — Full Annual Plan",
    icon: Trophy,
    tagline: "Hands-off positioning, managed by our team.",
    description:
      "We build and optimize your firm's AI visibility profile for maximum exposure.",
    originalPrice: 5995,
    salePrice: 2995,
    priceSuffix: "/year",
    popular: true,
    footnote: "Like getting 6 months free — saves you $3,000",
    ctaLabel: "Let Us Handle It All",
    ctaUrl: "https://buy.stripe.com/5kQ14n0HZ8Sr7qI9jPcwg02",
    badge: "Founding Member Plan — Limited to 10 Firms",
    features: [
      "We generate all schemas, FAQs, Q&A sets, help articles and authority content",
      "Monthly expansion of your AI visibility profile",
      "Publishing across multiple AI-crawlable platforms",
      "Root file setup (sitemaps, LLM files, robots, knowledge graphs)",
      "Per-page AI optimization (JSON-LD, breadcrumbs, meta tags)",
      "Visibility gap and opportunity analysis",
      "Monthly content updates (FAQs, Q&A, articles, locations)",
      "Ongoing content refresh every 30 days",
      "Full Authority Builder Suite managed for you",
      "Submission to Google, Bing and AI Search",
      "Priority support and dedicated account management",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">
                <span className="text-foreground">Two Ways</span>{" "}
                <span className="text-primary">to Get AI Referrals</span>
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              DIY or <span className="text-gradient-gold">We Manage It</span>
            </h2>

            {/* Main line (muted) */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Run AI Referrals Hub™ yourself, or let our team handle everything.
              Either way, you get more AI-driven calls and cases.
            </p>

            {/* 🔥 Contrast line (WHITE + emphasis) */}
            <p className="text-base text-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Most firms spend{" "}
              <span className="font-semibold">$2,000–$5,000 per month</span> on agencies.
              <br />
              With AI Referrals Hub™, you get a{" "}
              <span className="font-semibold">full year of AI visibility</span> for less than the cost of one month.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-gradient-card rounded-2xl border ${
                  tier.popular ? "border-primary glow-gold" : "border-border/50"
                } overflow-hidden flex flex-col`}
              >
                <div className="p-8 flex flex-col flex-1">

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                      <tier.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  </div>

                  <p className="font-semibold mb-2">{tier.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-xl line-through text-muted-foreground">
                      ${tier.originalPrice.toLocaleString()}
                      {tier.priceSuffix === "/year" ? "/year" : ""}
                    </span>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-5xl font-bold text-gradient-gold">
                        ${tier.salePrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">{tier.priceSuffix}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-2">{tier.footnote}</p>
                  </div>

                  {/* CTA */}
                  <a href={tier.ctaUrl} target="_blank" rel="noopener noreferrer" className="mt-6">
                    <Button variant="gold" size="lg" className="w-full">
                      {tier.ctaLabel}
                    </Button>
                  </a>

                  <p className="text-xs text-center text-muted-foreground mt-3">
                    {tier.badge}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Have questions?{" "}
              <a href="tel:2135375613" className="text-primary hover:underline font-semibold">
                Call (213) 537-5613
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
