import { BrainCircuit, Bot, ChartSpline, Cloud, Cpu, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  {
    title: "Generative AI apps",
    description: "Composable front-ends with streaming UX, useStream hooks, and design systems ready for hand-off.",
    icon: BrainCircuit,
  },
  {
    title: "Agentic assistants",
    description: "LangGraph, CrewAI, and OpenAI Agents orchestrations with secure tool sandboxes.",
    icon: Bot,
  },
  {
    title: "RAG copilots",
    description: "Retrieval tuned for grounding, adaptive chunking, and citation-ready experiences.",
    icon: Cloud,
  },
  {
    title: "Evaluations & LLMOps",
    description: "Guardrails, eval dashboards, and regression suites to keep answers on-brand and compliant.",
    icon: ChartSpline,
  },
  {
    title: "Private fine-tuning",
    description: "Domain-tuned models on Bedrock, OpenAI, or custom stacks with data privacy baked in.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable inference",
    description: "vLLM deployments, autoscaling, and cost optimization tuned for enterprise traffic.",
    icon: Cpu,
  },
];

export function WhatWeBuild() {
  return (
    <Section id="build" className="bg-[color:rgba(10,12,16,0.7)]">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="What we build" label="Production-grade AI products" />
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <Card className="h-full space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:rgba(110,231,255,0.15)] text-[color:var(--accent)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
