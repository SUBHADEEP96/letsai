import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const tiers = [
  {
    name: "Launch",
    price: "Starting at $15k",
    description: "Ideal for discovery sprints and targeted prototypes delivered in 4–6 weeks.",
    features: ["Product + AI workshops", "1 core workflow", "Evaluation harness"],
  },
  {
    name: "Scale",
    price: "Starting at $45k",
    description: "Multi-agent pilots with integrations, analytics, and compliance reviews.",
    features: ["3+ workflows", "Observability dashboards", "LLMOps instrumentation"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated pods for Fortune 500 delivery with SLAs, training, and ops support.",
    features: ["Dedicated team", "Regional hosting", "Runbook & incident playbooks"],
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-[color:rgba(8,9,12,0.9)]">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Pricing" label="Engagement models that flex with your roadmap" />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.06}>
              <Card
                className={`h-full space-y-4 border ${
                  tier.highlighted
                    ? "border-[color:rgba(110,231,255,0.6)] shadow-[0_45px_120px_rgba(110,231,255,0.25)]"
                    : "border-[color:rgba(255,255,255,0.1)]"
                }`}
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">{tier.name}</p>
                  <p className="text-2xl font-semibold text-white">{tier.price}</p>
                  <p className="text-sm text-muted">{tier.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={buttonVariants(tier.highlighted ? "primary" : "secondary")}>Contact us</Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
