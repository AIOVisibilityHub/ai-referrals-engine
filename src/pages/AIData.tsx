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
      "A human-readable and AI-readable markdown document describing the system, its purpose, and how it supports AI referrals.",
    href: "/full-context.md",
    label: "View full-context.md",
    icon: FileText,
  },
  {
    title: "AI Sitemap",
    description:
      "A dedicated sitemap for AI-facing resources, structured files, and connected authority assets.",
    href: "/ai-sitemap.xml",
    label: "View ai-sitemap.xml",
    icon: Globe,
  },
  {
    title: "Organization Data",
    description:
      "Machine-readable organization data used to reinforce the identity and consistency of AI Referrals Hub™.",
    href: "/main-organization.json",
    label: "View main-organization.json",
    icon: Database,
  },
  {
    title: "Service Schema",
    description:
      "Structured service data describing AI Referrals Hub™ as a system built to help law firms become more recommendable in AI.",
    href: "/service.schema.json",
    label: "View service.schema.json",
    icon: Database,
  },
  {
    title: "Locations Schema",
    description:
      "Structured location and service-area context used to support relevance across the United States.",
    href: "/locations.schema.json",
    label: "View locations.schema.json",
    icon: Database,
  },
  {
    title: "Humans File",
    description:
      "A simple attribution and project file that adds another public reference layer for the system.",
    href: "/humans.txt",
    label: "View humans.txt",
    icon: FileText,
  },
  {
    title: "Security Disclosure",
    description:
      "Security contact information published in the standard well-known location.",
    href: "/.well-known/security.txt",
    label: "View security.txt",
    icon: Shield,
  },
];

const principles = [
  "Clear, consistent, machine-readable system information",
  "Public AI-readable resources linked together intentionally",
  "Structured service and organization data AI systems can interpret",
  "Cross-referenced assets that reinforce trust and entity clarity",
  "A connected authority layer designed for AI discovery and recommendation",
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Data & Transparency | AI Referrals Hub™",
  url: "https://clients.aireferralshub.com/ai-data",
  description:
    "AI-readable resources, structured files, and transparency documents published by AI Referrals Hub™.",
  isPartOf: {
    "@type": "WebSite",
    name: "AI Referrals Hub™",
    url: "https://clients.aireferralshub.com/",
  },
};

export default function AIData() {
  return (
    <main className="min-h-screen bg-background py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">AI DATA & TRANSPARENCY</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Resources Behind
              <span className="block gradient-text">AI Referrals Hub™</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This page connects the structured files, AI-readable resources, and supporting
              documents published by AI Referrals Hub™ to help both humans and AI systems
              understand what the system does and how it supports AI-powered referrals for law firms.
            </p>
          </div>

          {/* Intro cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="card-ai p-8">
              <h2 className="text-2xl font-bold mb-4">Why This Page Exists</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI systems do not recommend law firms randomly. They rely on signals they can find,
                understand, and trust. This page organizes the core public resources that reinforce
                the system behind AI Referrals Hub™ and its AI-readable authority stack.
              </p>
            </div>

            <div className="card-ai p-8">
              <h2 className="text-2xl font-bold mb-4">What This Supports</h2>
              <ul className="space-y-3">
                {principles.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core explanation */}
          <div className="card-ai p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-primary" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">What AI Referrals Hub™ Actually Does</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI Referrals Hub™ helps law firms become easier for AI systems to find,
                  understand, trust, and recommend. It does this by organizing and generating
                  AI-readable resources such as structured data, contextual files, and publishing
                  outputs that reinforce authority around case types, cities, services, and trust
                  signals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result is a stronger foundation for AI-powered referral visibility across
                  answer engines like ChatGPT, Perplexity, and Google AI.
                </p>
              </div>
            </div>
          </div>

          {/* Resource grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Core AI Resources</h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <div
                    key={resource.title}
                    className="card-ai p-6 flex flex-col justify-between hover:bg-card/60 transition-colors"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {resource.description}
                      </p>
                    </div>

                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      {resource.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GitHub section */}
          <div className="card-ai p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Github className="w-7 h-7 text-primary" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">GitHub Distribution Layer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The public GitHub repository acts as an external validation and distribution layer.
                  It mirrors and reinforces the structured information published on this site,
                  creating a connected authority network across trusted platforms.
                </p>

                <a
                  href="https://aiovisibilityhub.github.io/ai-referrals-hub-ai-schemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  View GitHub Repository
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI systems are more likely to trust and recommend entities whose information is
              structured, connected, publicly accessible, and consistently reinforced across
              multiple sources. This page helps tie those signals together.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
          {/* RELATED PROPERTIES (ADDED) */}
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
