import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const studies = [
  {
    client: "Global SaaS platform",
    summary: "Launched LangGraph-powered support copilot with 42% reduction in handle time.",
    detail: "Hybrid search across 1.2M documents, evaluation harness with 600 curated scenarios, and MCP connectors for CRM + ticketing.",
  },
  {
    client: "Fortune 100 bank",
    summary: "Agentic KYC assistant accelerating compliance workflows by 3x.",
    detail: "CrewAI-managed multi-step workflows, Bedrock Claude models with secure redaction, and audit-grade activity trails.",
  },
  {
    client: "Retail marketplace",
    summary: "Conversational commerce agent boosting conversion by 18%.",
    detail: "Recommendations fine-tuned on Qwen, auto-merchandising flows, and vLLM inference with A/B eval loops.",
  },
];

export function CaseStudies() {
  return (
    <Section id="work">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Case studies" label="Work shipped with enterprise leaders" />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {studies.map((study, index) => (
            <FadeIn key={study.client} delay={index * 0.05}>
              <Card className="h-full space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">{study.client}</p>
                <h3 className="text-lg font-semibold text-white">{study.summary}</h3>
                <p className="text-sm text-muted">{study.detail}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
