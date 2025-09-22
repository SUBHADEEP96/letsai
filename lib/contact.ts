import { trackEvent } from "@/lib/analytics";

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  origin?: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

export async function handleContactSubmission(payload: ContactPayload): Promise<ContactResult> {
  await trackEvent("contact_lead", { ...payload });

  return {
    success: true,
    message: "Thanks! A specialist will be in touch within one business day.",
  };
}
