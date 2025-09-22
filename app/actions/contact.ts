"use server";

import { handleContactSubmission } from "@/lib/contact";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitContactAction(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const budget = formData.get("budget")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const website = formData.get("website")?.toString().trim();

  if (website) {
    return { status: "success", message: "Thanks!" };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Please share your name, email, and project notes." };
  }

  const payload = { name, email, company, budget, message, origin: "marketing-site" };

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://127.0.0.1:3000");

  try {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-from-action": "1" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit contact form");
    }

    const data = (await response.json()) as { success: boolean; message: string };
    return { status: data.success ? "success" : "error", message: data.message };
  } catch (error) {
    console.error(error);
    const result = await handleContactSubmission(payload);
    return { status: result.success ? "success" : "error", message: result.message };
  }
}
