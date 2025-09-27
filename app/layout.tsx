import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "@/styles/globals.css";

/** Site-wide SEO (Next.js App Router) */
export const metadata: Metadata = {
  metadataBase: new URL("https://letsprinkleai.com"),
  applicationName: "Let’s Sprinkle AI",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Let’s Sprinkle AI — Generative & Agentic AI Company",
    template: "%s | Let’s Sprinkle AI",
  },
  description:
    "We build next-gen AI: multi-agent systems, AI assistants, RAG chatbots, and full-stack Generative-AI applications. Based in Kolkata; serving India and global markets.",
  alternates: { canonical: "/" }, // resolves against metadataBase
  keywords: [
    "Generative AI development",
    "Agentic AI systems",
    "AI assistants & copilots",
    "RAG chatbot development",
    "Full-stack AI applications",
    "Kolkata AI company",
    "India AI solutions",
    "Enterprise AI",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Let’s Sprinkle AI",
    description:
      "Next-gen AI: multi-agent systems, AI assistants, RAG chatbots, and full-stack GenAI apps. Built in Kolkata. Delivered globally.",
    url: "https://letsprinkleai.com",
    siteName: "Let’s Sprinkle AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/cover.png",
        width: 1200,
        height: 630,
        alt: "Let’s Sprinkle AI — Generative & Agentic AI Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Let’s Sprinkle AI",
    description:
      "Multi-agent AI systems, AI assistants & RAG chatbots for SMEs and enterprises worldwide.",
    images: ["/og/cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Let’s Sprinkle AI",
  url: "https://letsprinkleai.com",
  logo: "https://letsprinkleai.com/assets/logo.png",
  sameAs: ["https://www.linkedin.com/company/let-sprinkle-ai/"],
  description:
    "An AI development company building generative & agentic intelligence systems, assistants, RAG chatbots, and full-stack AI apps.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bidhannagar (Salt Lake)",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700091",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@letsprinkleai.com",
      telephone: "+91-79803-14116",
      areaServed: ["IN", "US", "GB", "AE", "SG", "EU"],
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
  ],
  areaServed: ["IN", "US", "GB", "AE", "SG", "EU"],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Agentic (multi-agent) AI systems",
      description:
        "Design and deployment of agent workflows for research, planning, reasoning, tool use, and validation.",
      areaServed: ["IN", "US", "GB", "AE", "SG", "EU"],
      provider: { "@type": "Organization", name: "Let’s Sprinkle AI" },
    },
    {
      "@type": "Service",
      name: "AI assistants & copilots",
      description:
        "Task-specific assistants for sales, support, marketing, and operations with strong guardrails.",
      areaServed: ["IN", "US", "GB", "AE", "SG", "EU"],
      provider: { "@type": "Organization", name: "Let’s Sprinkle AI" },
    },
    {
      "@type": "Service",
      name: "RAG chatbot development",
      description:
        "Retrieval-augmented chat with evaluation, observability, and safety layers.",
      areaServed: ["IN", "US", "GB", "AE", "SG", "EU"],
      provider: { "@type": "Organization", name: "Let’s Sprinkle AI" },
    },
    {
      "@type": "Service",
      name: "Full-stack Generative-AI apps",
      description:
        "Design, build, and operate end-to-end GenAI applications with analytics and MLOps.",
      areaServed: ["IN", "US", "GB", "AE", "SG", "EU"],
      provider: { "@type": "Organization", name: "Let’s Sprinkle AI" },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD in <head> per Google guidance */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className="relative min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
        {children}
      </body>
    </html>
  );
}
