import { Check, Cpu, Database, FileJson, Globe, Bot, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Structured Data Generators",
    description: "14 schema generators for organization, services, reviews, team profiles, and more—making your business machine-readable.",
  },
  {
    icon: FileJson,
    title: "LLM Ingestion Files",
    description: "12 formats including JSON, YAML, and custom QnA datasets designed specifically for AI training and knowledge bases.",
  },
  {
    icon: Bot,
    title: "Content Intelligence",
    description: "AI-powered content generators for FAQs, service pages, objection handling, and featured snippet optimization.",
  },
  {
    icon: Globe,
    title: "AI Website Builders",
    description: "10 automated page builders for homepage, services, team, locations, and more—optimized for AI visibility.",
  },
  {
    icon: Cpu,
    title: "Knowledge Packs",
    description: "Industry-specific knowledge files for Business, Legal, and Medical professionals that AI engines love.",
  },
  {
    icon: BarChart3,
    title: "Authority Diagnostics",
    description: "AI visibility scoring, content gap analysis, and authority audits to track your AI presence growth.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">THE SOLUTION</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Your 24/7 <span className="text-gradient-gold">AI Sales Machine</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI Referrals Hub is fully automated with 100+ built-in automations that position your business to be recommended by every major AI platform—without learning any code.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Total count */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 text-center">
            <p className="text-primary font-medium mb-2">COMPLETE AUTOMATION SUITE</p>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">100+</span> Built-In Automations
            </h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-muted-foreground">
              {[
                "14 Structured Data Generators",
                "12 LLM Ingestion Files",
                "9 Content Intelligence Tools",
                "6 Authority Content Tools",
                "22 Automation Engine Features",
                "10 AI Website Builders",
                "15 Knowledge Packs",
                "12 Authority Boost Tools",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
