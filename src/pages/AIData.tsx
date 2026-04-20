import { FileText, Database, Globe, Shield, Github, ExternalLink, Zap } from "lucide-react";

const resources = [
  {
    title: "AI Index File",
    description:
      "A root-level file that helps AI systems discover the most important AI-readable resources for AI Referrals Hub™.",
    href: "/llms.txt",
    label: "View llms.txt",
    icon: FileText,
  },
  {
    title: "Expanded AI Context",
    description:
      "A longer AI-readable context file explaining what AI Referrals Hub™ is, how it works, and what it helps law firms do.",
    href: "/llms-full.txt",
    label: "View llms-full.txt",
    icon: FileText,
  },
  {
    title: "Full Context Document",
    description:
      "A human-readable and AI-readable markdown document describing the system.",
    href: "/full-context.md",
    label: "View full-context.md",
    icon: FileText,
  },
  {
    title: "AI Sitemap",
    description:
      "A dedicated sitemap for AI-facing resources and structured files.",
    href: "/ai-sitemap.xml",
    label: "View ai-sitemap.xml",
    icon: Globe,
  },
  {
    title: "Organization Data",
    description:
      "Machine-readable organization data reinforcing system identity.",
    href: "/main-organization.json",
    label: "View main-organization.json",
    icon: Database,
  },
];

const principles = [
  "Clear, consistent, machine-readable system information",
  "Public AI-readable resources linked together intentionally",
  "Structured data AI systems can interpret",
  "Cross-referenced assets reinforcing trust",
  "Authority layer designed for AI discovery",
];

export default function AIData() {
  return (
    <main className="min-h-screen bg-background py-24">
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Data & Transparency
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-readable resources and structured files powering AI Referrals Hub™.
            </p>
          </div>

          {/* Principles */}
          <div className="card-ai p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">What This Supports</h2>
            <ul className="space-y-3">
              {principles.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Core AI Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <div key={resource.title} className="card-ai p-6">
                    <Icon className="w-6 h-6 mb-3 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {resource.label}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GitHub */}
          <div className="card-ai p-8 mb-16">
            <div className="flex items-start gap-4">
              <Github className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-2xl font-bold mb-3">GitHub Distribution</h2>
                <p className="text-muted-foreground mb-4">
                  External validation layer via public repositories.
                </p>
                <a
                  href="https://aiovisibilityhub.github.io/ai-referrals-hub-ai-schemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View GitHub Pages
                </a>
              </div>
            </div>
          </div>

          {/* RELATED PROPERTIES */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Related Properties</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://lawyersaiseo.com" target="_blank" rel="noopener noreferrer">
                  AI Referrals Hub
                </a>
              </li>
              <li>
                <a href="https://aireferralshub.com" target="_blank" rel="noopener noreferrer">
                  AI Visibility Network
                </a>
              </li>
              <li>
                <a href="https://aiovisibility.com" target="_blank" rel="noopener noreferrer">
                  AI Visibility Network
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
