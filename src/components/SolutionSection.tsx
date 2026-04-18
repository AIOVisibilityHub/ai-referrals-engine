import { Check, Cpu, Globe, Trophy } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Get Found by AI",
    description:
      "Position your firm where AI systems look for trusted answers before they recommend who to call.",
  },
  {
    icon: Cpu,
    title: "Built for Real Searches",
    description:
      "Target real case types, real cities, and real questions people ask AI before choosing a lawyer.",
  },
  {
    icon: Trophy,
    title: "Turn Visibility Into Referrals",
    description:
      "Show up as the answer AI recommends so you generate more calls, consultations, and cases.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">THE SOLUTION</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Your 24/7 <span className="text-gradient-gold">AI Referral System</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI Referrals Hub™ helps you become the firm AI recommends — driving more calls, book more consultations, and land more cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 text-center">
            <p className="text-primary font-medium mb-2">FULLY AUTOMATED</p>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">24/7</span> Referral Positioning
            </h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-muted-foreground">
              {[
                "Real case types",
                "Real cities",
                "Real client questions",
                "More calls and consultations",
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
