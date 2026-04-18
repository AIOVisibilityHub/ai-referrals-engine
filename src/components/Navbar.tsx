import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between min-h-16 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>

            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-display font-bold text-lg truncate">
                AI Referrals Hub™
              </span>
              <span className="hidden lg:block text-xs text-muted-foreground truncate">
                Structure your firm for AI referrals.
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#demo"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </a>
            <Button variant="gold" size="sm" onClick={scrollToPricing}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Demo
              </a>
              <a
                href="tel:2135375613"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Call (213) 537-5613
              </a>
              <Button variant="gold" onClick={scrollToPricing}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
