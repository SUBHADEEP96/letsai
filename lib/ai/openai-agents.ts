import type { ContactPayload } from "@/lib/contact";

export interface AgentDemoStep {
  title: string;
  detail: string;
}

export interface AgentDemoResult {
  steps: AgentDemoStep[];
  final: string;
}

async function runOpenAIResponse(): Promise<string | null> {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  // In production install the official OpenAI SDK and wire the Agents/Responses API:
  // const OpenAI = await import("openai");
  // await client.responses.create({ model: "gpt-4.1-mini", input: prompt, tools: [...] });
  return null;
}

export async function runAgentDemo(prompt: string): Promise<AgentDemoResult> {
  const steps: AgentDemoStep[] = [
    {
      title: "plan",
      detail:
        "Reasoning through the request, identifying required tools (release notes retriever, regression database, analytics).",
    },
    {
      title: "tool:release_notes.search",
      detail: "Querying release notes vector index for the latest entries scoped to the product surface in question.",
    },
    {
      title: "tool:qa.find_regressions",
      detail: "Looking up open bugs tagged with the touched capabilities to prioritise QA focus.",
    },
  ];

  const openAiResult = await runOpenAIResponse();

  const final =
    openAiResult ??
    `Focus QA on the updated billing flows mentioned in "${prompt}", regression test the invoice generator, and validate CrewAI + MCP tool integrations. We also recommend scripted evaluations covering payment retries and webhook fallbacks.`;

  return { steps, final };
}

export function normalizeContactPayload(payload: ContactPayload) {
  return {
    ...payload,
    receivedAt: new Date().toISOString(),
  };
}
