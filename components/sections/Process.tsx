import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Discover",
    description:
      "Workshops with product, data, and compliance teams to map goals, systems, and evaluation targets.",
  },
  {
    title: "Prototype",
    description:
      "Rapid LangGraph + React sandboxes to validate prompts, retrieval chains, and agent capabilities.",
  },
  {
    title: "Pilot",
    description:
      "Secure environments, analytics instrumentation, and runbooks for human-in-the-loop pilots.",
  },
  {
    title: "Scale",
    description:
      "LLMOps automation, infra-as-code, and monitoring to move from pilot to production with confidence.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Process" label="A playbook tuned for enterprise delivery" />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <Card className="h-full space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">Step {index + 1}</p>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="mt-12 rounded-3xl border border-[color:rgba(110,231,255,0.2)] bg-[color:rgba(10,12,16,0.8)] p-6 text-sm text-muted">
          <p>
            Compliance &amp; Privacy: SOC 2 aligned, zero data retention by default, optional regional deployments (EU/US/APAC),
            and no training on customer data unless explicitly requested.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
