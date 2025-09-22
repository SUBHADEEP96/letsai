import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

const badges = [
  { label: "LangGraph", href: "https://python.langchain.com/docs/langgraph" },
  { label: "CrewAI", href: "https://docs.crewai.com/" },
  { label: "Vercel AI SDK", href: "https://sdk.vercel.ai/docs" },
  { label: "OpenAI Agents SDK", href: "https://platform.openai.com/docs/guides/agents" },
  { label: "Model Context Protocol", href: "https://modelcontextprotocol.io/" },
  { label: "Google A2A", href: "https://ai.google.dev/gemini-api/docs/model-architecture#a2a" },
  { label: "vLLM", href: "https://docs.vllm.ai/en/latest/" },
  { label: "AWS Bedrock", href: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html" },
];

export function TechStack() {
  return (
    <Section id="tech">
      <Container className="space-y-8">
        <FadeIn>
          <SectionHeading eyebrow="Tech & standards" label="Interoperable by default" />
        </FadeIn>
        <FadeIn delay={0.1} className="max-w-3xl text-base text-muted">
          <p>
            OpenAI, Qwen, Llama, Claude, Gemini, and enterprise Bedrock models—connected through LangChain, LangGraph, and
            CrewAI orchestrators with streaming-ready React experiences.
          </p>
          <p className="mt-4">
            We adhere to Model Context Protocol (MCP) and Google&apos;s A2A interoperability spec, ensuring your agents, tools, and
            knowledge bases speak a shared language across cloud, on-prem, and hybrid stacks.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <Badge key={badge.label} href={badge.href}>
                {badge.label}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
