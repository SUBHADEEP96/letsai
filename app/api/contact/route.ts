import { NextResponse } from "next/server";
import { handleContactSubmission } from "@/lib/contact";
import { normalizeContactPayload } from "@/lib/ai/openai-agents";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, company, budget, website } = data ?? {};

    if (website) {
      return NextResponse.json({ success: true, message: "Thanks!" });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const payload = normalizeContactPayload({ name, email, message, company, budget, origin: "api" });

    const result = await handleContactSubmission(payload);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      { success: false, message: "We hit a snag processing this request." },
      { status: 500 },
    );
  }
}
