import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    title: "RAG Search & Chatbots",
    description: "Document retrieval with semantic routing, answer scoring, and auditable citations.",
    outcomes: ["Multi-source ingestion", "Freshness-aware re-ranking", "Cited responses"],
  },
  {
    title: "Multi-agent workflows",
    description: "CrewAI and LangGraph driven task orchestration with shared state and human-in-the-loop gates.",
    outcomes: ["Role-based skills", "Dynamic tool assignment", "Observability dashboards"],
  },
  {
    title: "Contact-center AI",
    description: "Summaries, QA assistants, and ticket triage tuned for compliance-heavy contact centers.",
    outcomes: ["Live call notes", "CSAT uplift", "CRM automations"],
  },
  {
    title: "E-commerce AI",
    description: "Personalized recommendations, AI-generated merchandising, and operations automation.",
    outcomes: ["Conversion lift", "Automated enrichment", "OMS integrations"],
  },
  {
    title: "FinServ agents",
    description: "Digital KYC copilots, form automation, and portfolio insights with audit-first guardrails.",
    outcomes: ["Reg-ready workflows", "PII vault integration", "Explainable responses"],
  },
];

export function Solutions() {
  return (
    <Section id="solutions" className="bg-[color:rgba(8,9,12,0.75)]">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Solutions" label="Use-cases we deliver" />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <FadeIn key={solution.title} delay={index * 0.05}>
              <Card className="h-full space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  <p className="mt-2 text-sm text-muted">{solution.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {solution.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
