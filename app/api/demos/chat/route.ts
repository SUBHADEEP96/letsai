import { createChatStream, type ChatMessage } from "@/lib/ai/vercel-ai";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = await request.json();
  const messages = (body?.messages ?? []) as ChatMessage[];

  return new Response(createChatStream(messages), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
