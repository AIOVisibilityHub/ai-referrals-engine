import { Check, Shield } from "lucide-react";

const sections = [
  {
    title: "Core Schema Generation",
    subtitle: "Your firm's complete AI visibility foundation — built automatically from your URL and published where AI systems crawl, train and learn.",
    items: [
      "Hundreds to thousands of structured schema files specific to your practice areas, case types and locations",
      "Sitemap, robots.txt, LLM context files and AI plugin JSON — everything AI needs to crawl and understand your firm",
      "Knowledge graph with cross-linked entities so AI can navigate your firm's complete expertise",
      "Citation-ready LLM source blocks built specifically for the RAG systems that power ChatGPT, Perplexity and Google AI",
      "MD + YAML entity pages",
      "Long-form LLM narrative engineered for AI ingestion",
    ],
  },
  {
    title: "Perplexity-Powered FAQ Research",
    subtitle: "Real questions. Real cities. Real case types. Generated from what people are actually asking right now.",
    items: [
      "Hundreds of FAQ schemas researched by Perplexity — based on real questions people ask about your specific case types in your specific cities",
      "FAQPage markup specifically formatted for Google AI Overviews and featured snippets",
      "Expandable at any time — add new cities, new case types and generate additional FAQs as your firm grows",
    ],
  },
  {
    title: "Unanswered Q&A Discovery",
    subtitle: "The questions AI answer engines can't fully answer yet — and your firm can own.",
    items: [
      "Uses Perplexity to find specific unanswered questions qualifying for Google AI Overviews and featured snippets",
      "Generates QAPage schemas separate from FAQs for maximum search coverage",
      "Puts your firm's answers in the gaps competitors haven't found yet",
    ],
  },
  {
    title: "Citation-Ready Help Articles",
    subtitle: "Engineered to get cited — not ignored.",
    items: [
      "Help articles generated per case type using Perplexity research — ~400 words, specifically sized to qualify for Google AI Overviews, featured snippets and AI citations",
      "Custom topic generator — enter any practice area, niche case type or local issue and generate targeted help articles on demand",
      "Every article structured so AI systems can pull from it, cite it and recommend it when answering client questions",
    ],
  },
  {
    title: "Testimonial Discovery and Schema",
    subtitle: "Your reputation — structured so AI can trust and cite it.",
    items: [
      "Perplexity crawls Avvo, Google, Yelp, Facebook and more to surface existing reviews about your firm",
      "Upload your own testimonials directly into structured review schema",
      "All formatted as trusted social proof signals AI systems recognize when evaluating which firm to recommend",
    ],
  },
  {
    title: "Per-Page Crawl and Audit Engine",
    subtitle: "AI visibility down to every single page of your website.",
    items: [
      "Enter any page URL — instantly generates JSON-LD, AI citations, breadcrumbs and meta tags for that specific page",
      "Ensures every page of your website is AI-readable, not just your homepage",
      "Copy and paste output directly into your page header — no developer needed",
    ],
  },
  {
    title: "Analysis and Intelligence Suite",
    subtitle: "Know exactly where your AI visibility gaps are — and how to fill them.",
    items: [
      "Visibility Gap Analysis — identifies untapped keywords, missing pages and AI visibility gaps based on your practice area and search trends",
      "Missed Opportunities Analysis — finds what's missing across your FAQs, help articles and schema coverage",
      "Pain Points Mapper — maps client pain points to solutions with objection handling specific to your case types",
      "Content Gap Map — shows exactly what content AI systems are looking for that your firm hasn't provided yet",
    ],
  },
  {
    title: "14-Tool Authority Builder Suite",
    subtitle: "Everything AI needs to recognize your firm as the authority in your market.",
    items: [
      "AI Visibility Score — 0-100 score showing exactly where your firm stands across AI platforms",
      "Competitor Gap Detector — shows authority gaps between your firm and competitors AI is currently recommending",
      "Trust Signals Scorecard — evaluates and scores every trust signal AI systems use to evaluate your firm",
      "Topic Expansion — topic clusters, subtopics and semantic coverage opportunities",
      "Topic Depth Checker — evaluates topical coverage depth and gaps",
      "Industry Knowledge File — industry-specific knowledge formatted for AI training",
      "Legal Services Knowledge — legal services data structured for AI ingestion",
      "Case Type Knowledge — case type classifications and details AI systems use to match clients to firms",
      "Entity Expertise Builder — authority content about your expertise and credentials",
      'Value Proposition Builder — your USPs, benefits and "why choose us" content structured for AI',
      "Q&A Strength Builder — Q&A analysis and enhancement recommendations",
      "Authority Signal Generator — E-E-A-T signals and authority markers",
      "Reputation Metadata — business legitimacy and credential metadata",
      "Long-Form LLM — extended narrative for deep AI ingestion",
    ],
  },
  {
    title: "Your Firm Gets Published Across 6 AI-Crawlable Platforms Simultaneously",
    subtitle: "(Mirrors Your Website for 7 Places to be Discovered) — In addition to your website schema files",
    items: [
      "GitHub — Most trusted data repository on the internet — heavily crawled by every major AI system",
      "GitHub Pages — Creates a live publicly accessible AI-crawlable website published specifically for your firm",
      "GitLab — Mirrored repository for redundancy — more places AI crawls means more citations",
      "Hugging Face — Where large language models are actively trained — your firm's data lives where AI goes to learn",
      "Kaggle — Owned by Google since 2017 — a standard source AI models consult for datasets, widely recognized as a top public dataset hub",
      "Codeberg — For static site hosting via Codeberg Pages — indexed by Google, high trust signal, additional AI-crawlable web presence for your firm",
    ],
    footer: {
      muted: "Most law firms aren't visible on any of these platforms.",
      accent: "Your firm will be on all six — automatically.",
    },
  },
];

const FeaturesDetailSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">COMPLETE FEATURE LIST</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Everything You Get with{" "}
              <span className="text-gradient-gold">AI Referrals Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No coding required. Just complete your AI visibility profile and let the software work for you.
            </p>
          </div>

          {/* Feature sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-gradient-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-gradient-gold mb-2">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-5">{section.subtitle}</p>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                {section.footer && (
                  <div className="mt-6 pt-5 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{section.footer.muted}</p>
                    <p className="font-display text-base md:text-lg font-semibold text-primary">
                      {section.footer.accent}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No coding required banner */}
          <div className="mt-12 bg-gradient-card rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1">Zero Technical Skills Required</h3>
                <p className="text-muted-foreground">
                  All automations are pre-built and ready to deploy.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">Just complete your profile and</p>
              <p className="font-display text-lg font-semibold text-primary">Everything runs automatically</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailSection;
