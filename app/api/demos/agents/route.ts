import { NextResponse } from "next/server";
import { runAgentDemo } from "@/lib/ai/openai-agents";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = (body?.prompt as string) ?? "";

  if (!prompt) {
    return NextResponse.json({ error: "Prompt required" }, { status: 400 });
  }

  const result = await runAgentDemo(prompt);

  return NextResponse.json(result);
}
