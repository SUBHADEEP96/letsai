import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Analytics } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://letsai.dev"),
  title: {
    default: "LetsAI Studio — Agentic AI, built for production",
    template: "%s | LetsAI Studio",
  },
  description:
    "Full-stack agentic AI product studio delivering LangGraph orchestration, OpenAI Agents, RAG copilots, and scalable inference.",
  openGraph: {
    title: "LetsAI Studio",
    description:
      "We design, ship, and scale AI assistants, multi-agent workflows, and RAG copilots—securely integrated with your stack.",
    url: "https://letsai.dev",
    siteName: "LetsAI Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LetsAI Studio",
    description:
      "Agentic AI development with LangGraph, CrewAI, MCP, and high-throughput inference.",
  },
  keywords: [
    "Agentic AI",
    "LangGraph",
    "CrewAI",
    "MCP",
    "A2A",
    "OpenAI Agents",
    "RAG",
    "LLMOps",
    "vLLM",
    "AWS Bedrock",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LetsAI Studio",
  url: "https://letsai.dev",
  sameAs: [
    "https://www.linkedin.com/company/letsai-studio",
    "https://github.com/letsai-studio",
  ],
  description:
    "Agentic AI product studio delivering LangChain, LangGraph, CrewAI, MCP, and OpenAI Agents integrations.",
  logo: "https://letsai.dev/og-image.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@letsai.dev",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
