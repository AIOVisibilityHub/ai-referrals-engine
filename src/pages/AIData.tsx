"use client";

import React, { useState } from "react";

type Principle = string;

type Resource = {
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const principles: Principle[] = [
  "Structured content helps AI systems understand your site.",
  "Clear page organization improves crawlability.",
  "Publicly accessible pages can reinforce trust signals.",
  "Matching visible content and schema keeps the page consistent.",
];

const resources: Resource[] = [
  {
    title: "Structured Data Files",
    description:
      "JSON-LD and schema resources that help systems interpret your content.",
  },
  {
    title: "Help Articles",
    description:
      "FAQ and support content designed for both users and AI systems.",
  },
  {
    title: "GitHub Distribution Layer",
    description:
      "A public repo that mirrors your structured content for broader visibility.",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is AI Referrals Hub™?",
    answer:
      "AI Referrals Hub™ helps make law firm information easier for AI systems and search engines to find, understand, and recommend.",
  },
  {
    question: "Why use structured content?",
    answer:
      "Structured content helps systems read your pages more clearly and can improve discoverability and consistency.",
  },
  {
    question: "Why publish on GitHub?",
    answer:
      "GitHub can act as a public distribution layer that mirrors the same content and makes it easier for crawlers to access.",
  },
];

export default function AIData() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="space-y-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            AI DATA & TRANSPARENCY
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            The Resources Behind AI Referrals Hub™
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            This page connects the structured files, AI-readable resources, and supporting
            documents published by AI Referrals Hub™ to help both humans and AI systems
            understand what the system does and how it supports AI-powered referrals for law firms.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold">Why This Page Exists</h2>
          <p className="mt-3 text-gray-700">
            AI systems do not recommend law firms randomly. They rely on signals they can find,
            understand, and trust. This page organizes the core public resources that reinforce
            the system behind AI Referrals Hub™ and its AI-readable authority stack.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What This Supports</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What AI Referrals Hub™ Actually Does</h2>
          <p className="mt-3 text-gray-700">
            AI Referrals Hub™ helps law firms become easier for AI systems to find, understand,
            trust, and recommend. It does this by organizing and generating AI-readable resources
            such as structured data, contextual files, and publishing outputs that reinforce
            authority around case types, cities, services, and trust signals.
          </p>
          <p className="mt-3 text-gray-700">
            The result is a stronger foundation for AI-powered referral visibility across answer
            engines like ChatGPT, Perplexity, and Google AI.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Core AI Resources</h2>
          <div className="mt-4 space-y-4">
            {resources.map((resource) => (
              <article key={resource.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <p className="mt-2 text-gray-700">{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-lg border border-gray-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="border-t border-gray-200 px-4 py-3 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">GitHub Distribution Layer</h2>
          <p className="mt-3 text-gray-700">
            The public GitHub repository acts as an external validation and distribution layer.
            It mirrors and reinforces the structured information published on this site, creating
            a connected authority network across trusted platforms.
          </p>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-md bg-black px-4 py-2 text-white"
          >
            View GitHub Repository
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Why This Matters</h2>
          <p className="mt-3 text-gray-700">
            AI systems are more likely to trust and recommend entities whose information is
            structured, connected, publicly accessible, and consistently reinforced across
            multiple sources. This page helps tie those signals together.
          </p>
        </section>
      </section>
    </main>
  );
}
