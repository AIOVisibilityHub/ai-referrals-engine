import { Button } from "@/components/ui/button";
import { Check, Zap, Trophy } from "lucide-react";

const pricingTiers = [
  {
    id: "diy",
    name: "DIY — AI Referrals Hub™ System",
    icon: Zap,
    tagline: "Best if you want to run the system yourself.",
    description:
      "Perfect if you want full control over your AI visibility profile.",
    originalPrice: 1495,
    salePrice: 795,
    priceSuffix: "one-time",
    footnote: "Lifetime updates as AI platforms evolve",
    ctaLabel: "Launch the AI Referrals Hub™ System",
    ctaUrl: "https://buy.stripe.com/bJe9ATeyP7On9yQ8fLcwg0r",
    badge: "Founding member pricing — will increase",
    features: [
      "Complete access to AI Referrals Hub system",
      "Hundreds-to-thousands of schemas generated from your URL",
      "Multi-platform publishing to GitHub, GitHub Pages, GitLab, Hugging Face, Kaggle, Codeberg",
      "Perplexity-powered FAQ research per case type + city",
      "Unanswered Q&A discovery for Google AI Overviews, Snippets and for training LLMs/answer engines",
      "Citation-ready help articles per case type + city mapping that qualify for Google AI Overviews, Snippets & AI Answer Engines",
      "Custom topic help article generator",
      "Testimonial discovery across Avvo, Google, Yelp and Facebook",
      "Crawls each page of your website to customize AI citation-ready content for LLMs: generates JSON-LD, breadcrumbs, and meta tags for that page",
      "14-tool Authority Builder Suite — AI-powered tools to build authority, trust signals, and AI visibility",
      "New HTML FAQ/Q&A/help articles page generator from schema zip files",
      "Content refresh every 30 days so AI stays confident referring you",
      "Auto submission to Google, Bing and AI Search upon updates",
      "Ongoing updates as AI platforms evolve",
    ],
  },
  {
    id: "dfy",
    name: "Done For You — Full Annual Plan",
    icon: Trophy,
    tagline: "Best if you want the referrals without managing the system.",
    description:
      "Perfect if you want results without touching the platform — our team runs everything for your firm.",
    originalPrice: 5995,
    salePrice: 2995,
    priceSuffix: "/year",
    popular: true,
    footnote: "Like getting 6 months free — saves you $3,000",
    ctaLabel: "HAVE US DO EVERYTHING FOR YOU",
    ctaUrl: "https://buy.stripe.com/5kQ14n0HZ8Sr7qI9jPcwg02",
    badge: "Most popular among busy firms",
    features: [
      "We generate all schemas, FAQs, Q&A sets, help articles and authority content to qualify for Google's AI Overviews & Snippets, and AI Search / Answer Engine responses",
      "Each month we build on the last and expand on your visibility profile",
      "We publish and maintain your presence across additional repositories & platforms",
      "We install (or deliver) files for your website root directory, i.e. sitemaps, LLM files, robot files, Markdown + YAML entity files, knowledge graphs and LLM source blocks that are citation-ready text for RAG systems",
      "We install on each page of your website (or provide code for) AI citation-ready content for LLMs, i.e. schema JSON-LD, breadcrumbs, and meta tags so AI knows everything about that page",
      "We provide an analysis of missed opportunities, visibility gaps, and pain points mapped to solutions — so you know exactly where to focus for maximum AI referrals",
      "Monthly updates — Generate additional FAQs/QNAs/help articles, and add new cities, case types, attorneys added if needed",
      "Ongoing content refresh every 30 days so AI stays confident referring you",
      "Full Authority Builder Suite run and maintained for you",
      "Submission to Google, Bing and AI Search",
      "Priority support and dedicated account management",
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
                <span className="text-foreground">Two Ways</span>{" "}
                <span className="text-primary">to Get AI Referrals</span>
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Do It Yourself or{" "}
              <span className="text-gradient-gold">Have Us Do It For You</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose to run AI Referrals Hub™ yourself, or let our team manage everything for you.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-gradient-card rounded-2xl border ${
                  tier.popular ? "border-primary glow-gold" : "border-border/50"
                } overflow-hidden flex flex-col`}
              >
                <div className="p-8 flex flex-col flex-1">
                  {/* Icon and name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-gold-light flex items-center justify-center flex-shrink-0">
                      <tier.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  </div>

                  <p className="font-semibold text-foreground mb-2">{tier.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xl text-muted-foreground line-through">
                        ${tier.originalPrice.toLocaleString()}
                        {tier.priceSuffix === "/year" ? "/year" : ""}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold text-gradient-gold">
                        ${tier.salePrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground font-semibold">{tier.priceSuffix}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{tier.footnote}</p>
                  </div>

                  {/* CTA */}
                  <a href={tier.ctaUrl} target="_blank" rel="noopener noreferrer" className="mt-6">
                    <Button variant="gold" size="lg" className="w-full">
                      {tier.ctaLabel}
                    </Button>
                  </a>
                  <p className="text-xs text-center text-muted-foreground mt-3">{tier.badge}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom urgency */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Questions? Call{" "}
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
