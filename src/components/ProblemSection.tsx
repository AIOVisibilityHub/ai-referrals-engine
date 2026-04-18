import { AlertCircle, TrendingUp, Search, MessageSquare } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              The World Has <span className="text-gradient-gold">Changed</span>
            </h2>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-4">
  <span className="block">
    Your future clients aren’t just Googling anymore—they’re asking AI who to call.
    If you’re not in those answers, AI will recommend another lawyer.
  </span>

  <span className="block">
    AI doesn’t guess—it recommends firms it can find, understand, and trust.
    That means your information has to be structured, published, and reinforced across the platforms AI learns from.
  </span>
</p>
            </p>
          </div>

          {/* The shift visualization */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-primary/20 glow-gold-sm">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Search className="w-10 h-10 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-sm mb-2">Yesterday</p>
                <p className="font-display text-lg font-semibold">"Google it"</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-muted to-primary rounded-full" />
              </div>
              
              <div className="text-center">
                <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-primary text-sm mb-2">2026 & Beyond</p>
                <p className="font-display text-lg font-semibold">"Ask AI"</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-lg font-medium mb-2">
                <span className="text-primary">83%</span> of prospects now consult AI before making decisions
              </p>
              <p className="text-muted-foreground">
                When they ask "Who should I hire?" — will AI recommend <span className="text-foreground">you</span>?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
