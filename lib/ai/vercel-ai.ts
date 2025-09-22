export type ChatRole = "user" | "assistant" | "system";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

const encoder = new TextEncoder();

function createChunks(prompt: string) {
  return [
    "Thanks for exploring the Let’s Sprinkle AI sandbox. ",
    "In production we weave in the Vercel AI SDK’s `streamText` helper alongside OpenAI, Bedrock, or custom models. ",
    "Because no provider key is configured we are streaming from a mock orchestrator instead. ",
    `You asked: "${prompt}" — we’d orchestrate retrieval, evaluation, and guardrails before returning the final answer.`,
  ];
}

export function createChatStream(messages: ChatMessage[]) {
  const lastUser = [...messages].reverse().find((message) => message.role === "user");
  const prompt = lastUser?.content ?? "How do you build agentic systems?";

  return new ReadableStream<Uint8Array>({
    start(controller) {
      const chunks = createChunks(prompt);
      chunks.forEach((chunk, index) => {
        setTimeout(() => controller.enqueue(encoder.encode(chunk)), index * 140);
      });
      setTimeout(() => controller.close(), chunks.length * 140 + 80);
    },
  });
}
