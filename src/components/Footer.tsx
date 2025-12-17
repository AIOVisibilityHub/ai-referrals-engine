import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold">AI Visibility Hub</p>
                <p className="text-xs text-muted-foreground">Powered by n8n Technology</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-1">Done-For-You Service</p>
              <a href="tel:2135375613" className="font-semibold text-primary hover:underline">
                (213) 537-5613
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Visibility Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
