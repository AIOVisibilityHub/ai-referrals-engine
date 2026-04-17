import { 
  Code2, 
  FileText, 
  Brain, 
  Award, 
  Settings, 
  MessageSquare, 
  Bot, 
  Globe, 
  BookOpen, 
  BarChart, 
  Rocket,
  Shield
} from "lucide-react";

const featureCategories = [
  {
    icon: Code2,
    title: "Structured Data Generators",
    count: 14,
    items: ["Organization Schema", "Local Business Schema", "Service Schema", "Product Schema", "FAQ Schema", "Review Schema", "Team/Staff Schema", "Location Schema", "And 6 more..."],
  },
  {
    icon: FileText,
    title: "LLM Ingestion Files",
    count: 12,
    items: ["LLM Data Capsule", "JSON Bundle", "YAML Bundle", "JSONL Training File", "Custom QnA Dataset", "Knowledge Pack Builder"],
  },
  {
    icon: Brain,
    title: "Content Intelligence",
    count: 9,
    items: ["AI FAQ Generator", "AI Rewrite & Improve", "Content Expansion", "Pain Points Generator", "Featured Snippet Builder"],
  },
  {
    icon: Award,
    title: "Authority Content Tools",
    count: 6,
    items: ["Article Summarizer", "Help Articles Generator", "Topic Expansion Tool", "Entity Expertise Builder", "Content Gap Analyzer"],
  },
  {
    icon: Settings,
    title: "Automation Engine",
    count: 22,
    items: ["Project Workspace", "File Structure Creator", "Auto Refresh Logic", "Search Engine Notifier", "Sync Automation", "Full Rebuild Tools"],
  },
  {
    icon: Globe,
    title: "AI Website Builders",
    count: 10,
    items: ["Homepage Builder", "About Page Builder", "Services Page Builder", "FAQ Page Builder", "Team Page Builder", "Contact Builder"],
  },
  {
    icon: BookOpen,
    title: "Knowledge Packs",
    count: 15,
    items: ["Business Pack", "Legal Pack", "Medical Pack", "Industry-Specific Files", "QnA Knowledge Files", "Glossary Files"],
  },
  {
    icon: BarChart,
    title: "Authority Diagnostics",
    count: 9,
    items: ["AI Visibility Score", "FAQ Coverage Analyzer", "Topic Depth Checker", "Authority Heatmap", "Trust Signals Scorecard"],
  },
  {
    icon: Rocket,
    title: "Authority Boost Engine",
    count: 12,
    items: ["Authority Signal Generator", "Multi-Location Snapshot", "Reputation Metadata", "Cross-Platform Integrity", "Full Authority Rebuild"],
  },
];

const FeaturesDetailSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">COMPLETE FEATURE LIST</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Everything You Get with{" "}
              <span className="text-gradient-gold">AI Referrals Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              100+ pre-built automations across 11 categories. No coding required. Just complete your AI visibility profile and let the software work for you.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-gradient-card rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                    <p className="text-xs text-primary">{category.count} tools</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {category.items.slice(0, 5).map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  Powered by n8n technology. All automations are pre-built and ready to deploy.
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
