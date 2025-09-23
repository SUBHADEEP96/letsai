import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Analytics } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://letsprinkleai.com"),
  title: {
    default: "Let’s Sprinkle AI — Customer experience copilots & automation",
    template: "%s | Let’s Sprinkle AI",
  },
  description:
    "Let’s Sprinkle AI designs customer experience copilots, analytics, and automation agents from our studio in Salt Lake City, Kolkata.",
  openGraph: {
    title: "Let’s Sprinkle AI",
    description:
      "Sprinkling intelligence across sales, support, and marketing with bespoke copilots, trusted guardrails, and on-call experts in India.",
    url: "https://letsprinkleai.com",
    siteName: "Let’s Sprinkle AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let’s Sprinkle AI",
    description:
      "AI strategy, design, and deployment for customer experience teams based in Kolkata, India.",
  },
  keywords: [
    "Let’s Sprinkle AI",
    "Customer experience AI",
    "AI copilots",
    "Automation agents",
    "Kolkata AI studio",
    "Indian AI company",
    "LinkedIn Let’s Sprinkle AI",
    "AI strategy",
    "RAG copilots",
    "AI automation",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Let’s Sprinkle AI",
  url: "https://letsprinkleai.com",
  sameAs: ["https://www.linkedin.com/company/let-sprinkle-ai/"],
  description:
    "Let’s Sprinkle AI is a Kolkata-based studio crafting customer experience copilots, conversational analytics, and automation agents.",
  logo: "https://letsprinkleai.com/assets/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@letsprinkleai.com",
      telephone: "+91-79803-14116",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salt Lake City",
    addressRegion: "West Bengal",
    postalCode: "700091",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
