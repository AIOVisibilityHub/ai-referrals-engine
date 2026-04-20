import { useState } from "react";
import { Check, Shield, ChevronDown } from "lucide-react";

const sections = [
  {
    title: "BONUS 1 - Instant AI Content Publisher™",
    subtitle:
      "A separate standalone app that turns massive schema output into ready-to-publish pages in minutes.",
    items: [
      "Download large ZIP files of schema JSON",
      "Convert FAQs and Q&As into HTML pages instantly",
      "Accordion formatting ready to paste",
      "No developer needed",
    ],
  },
  {
    title: "BONUS 2 - AI Freshness Engine™",
    subtitle:
      "Keeps your firm current, visible, and continuously re-evaluated by AI systems.",
    items: [
      "Automatic content refresh every 30 days",
      "Triggers re-indexing across AI engines",
      "Maintains AI confidence in your firm",
    ],
  },
  {
    title: "BONUS 3 - AI Indexing + Submission System™",
    subtitle:
      "Gets your content discovered faster across search and AI platforms.",
    items: [
      "Automated submissions to search engines",
      "Faster indexing of new content",
      "No manual work required",
    ],
  },
];

export default function FeaturesDetailSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={section.title}
              className="border border-border rounded-xl bg-card overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {section.subtitle}
                  </p>
                </div>

                {/* ARROW */}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              {isOpen && (
                <div className="px-6 pb-6">
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 mt-1 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}

        {/* FOOTER */}
        <div className="mt-10 p-6 border rounded-xl flex items-center gap-4">
          <Shield className="w-6 h-6 text-primary" />
          <div>
            <p className="font-semibold">Zero Technical Skills Required</p>
            <p className="text-sm text-muted-foreground">
              Everything runs automatically once set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
