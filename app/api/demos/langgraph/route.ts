const encoder = new TextEncoder();

export const runtime = "edge";

function createMockStream(prompt: string) {
  return new ReadableStream<Uint8Array>({
    start(controller) {
      const messages = [
        `▶ Starting graph: orchestrating agents for "${prompt}".\n`,
        "▶ Node: plan -> determine tools.\n",
        "▶ Node: search_docs -> retrieving supporting knowledge.\n",
        "▶ Node: synthesize -> blending insights with guardrails.\n",
        "✔ Completed: deliver annotated answer with citations.\n",
      ];

      messages.forEach((line, index) => {
        setTimeout(() => controller.enqueue(encoder.encode(line)), index * 160);
      });
      setTimeout(() => controller.close(), messages.length * 160 + 80);
    },
  });
}

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (typeof prompt !== "string" || prompt.length === 0) {
    return new Response("Prompt required", { status: 400 });
  }

  const serverUrl = process.env.LANGGRAPH_SERVER_URL;

  if (!serverUrl) {
    return new Response(createMockStream(prompt));
  }

  try {
    const target = new URL("/api/graph/invoke", serverUrl);
    const response = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: prompt }),
    });

    if (!response.ok || !response.body) {
      throw new Error(`LangGraph proxy failed with status ${response.status}`);
    }

    return new Response(response.body, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("LangGraph proxy error", error);
    return new Response(createMockStream(prompt));
  }
}
