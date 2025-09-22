import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";

const logos = [
  { src: "/assets/brand/openai.svg", alt: "OpenAI" },
  { src: "/assets/brand/anthropic.svg", alt: "Anthropic" },
  { src: "/assets/brand/aws.svg", alt: "AWS" },
  { src: "/assets/brand/google.svg", alt: "Google" },
  { src: "/assets/brand/microsoft.svg", alt: "Microsoft" },
];

export function Hero() {
  return (
    <Section id="home" className="overflow-hidden pb-20 pt-28 sm:pt-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn className="space-y-8">
          <Image
            src="/assets/brand/lets-sprinkle-ai-logo.svg"
            alt="Let's Sprinkle AI logo"
            width={200}
            height={120}
            className="h-16 w-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.25)] sm:h-20"
            priority
          />
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">Customer experience AI studio</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
            Sprinkle intelligence across every interaction.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Let’s Sprinkle AI crafts copilots, multi-agent automation, and analytics layers that delight your customers while
            respecting enterprise guardrails. From ideation to launch, we pair Kolkata-based builders with global best
            practices.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#contact" className={buttonVariants("primary")}>
              Schedule a strategy call
            </Link>
            <Link href="#demos" className={buttonVariants("ghost", "gap-1")}>See live AI demo</Link>
          </div>
          <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
            <li>LangGraph orchestration with live streaming UIs.</li>
            <li>OpenAI Agents SDK & Responses API for resilient tool-use.</li>
            <li>Standards-first MCP & Google A2A interoperability.</li>
            <li>High-throughput inference with vLLM and Bedrock.</li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.2} className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-[color:rgba(110,231,255,0.2)] bg-[color:rgba(13,15,20,0.9)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--accent)_0%,transparent_60%)] opacity-20" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                How we deliver
              </p>
              <div className="space-y-5 text-sm text-muted">
                <p className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                  LangChain / LangGraph flows with React <code>useStream</code> for token-perfect UX.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                  CrewAI, MCP, and Google A2A to harmonize agents across teams and data planes.
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                  Evaluations, guardrails, and cost dashboards ready for your LLMOps pipeline.
                </p>
              </div>
              <Link
                href="#process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition hover:text-white"
              >
                Explore our build process <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
      <Container className="mt-16">
        <div className="overflow-hidden rounded-3xl border border-[color:rgba(110,231,255,0.15)] bg-[color:rgba(8,10,14,0.8)] p-4">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted">Trusted by teams shipping AI</p>
          <div className="flex snap-x items-center gap-8 overflow-x-auto pb-2 [scrollbar-width:none]">
            {logos.map((logo) => (
              <div key={logo.alt} className="min-w-[140px] snap-start opacity-80 transition hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
