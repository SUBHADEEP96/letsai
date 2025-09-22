import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Build", href: "#build" },
  { label: "Tech", href: "#tech" },
  { label: "Demos", href: "#demos" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/letsai-studio" },
  { label: "GitHub", href: "https://github.com/letsai-studio" },
  { label: "X", href: "https://x.com/letsai_studio" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(5,6,9,0.9)] py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">LetsAI Studio</p>
          <p className="max-w-md text-xs text-muted">
            Full-stack agentic AI studio crafting LangGraph, CrewAI, MCP, and LLMOps foundations for production-grade products.
          </p>
          <p className="text-xs text-muted">© {new Date().getFullYear()} LetsAI Studio. All rights reserved.</p>
        </div>
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:justify-end">
          <nav className="flex flex-wrap gap-4 text-xs text-muted">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[color:var(--accent)]">
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex gap-4 text-xs text-muted">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
