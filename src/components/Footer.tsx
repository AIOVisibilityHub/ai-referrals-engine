import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold">AI Referrals Hub™</p>
                <p className="text-xs text-muted-foreground">
                  Built by AI Visibility Solutions to structure, publish, and reinforce your authority so AI platforms confidently recommend you.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mt-10">
            <p>
              This site provides structured data and AI-readable resources to improve visibility across AI systems.
            </p>
            <ul className="mt-2 space-y-1">
              <li><a href="/llms.txt">AI Index File</a></li>
              <li><a href="/full-context.md">Full AI Context</a></li>
              <li><a href="/ai-sitemap.xml">AI Sitemap</a></li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Referrals Hub™ by AI Visibility Solutions — Experts in AI Referrals. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
