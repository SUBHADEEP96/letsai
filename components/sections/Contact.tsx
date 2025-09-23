"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  submitContactAction,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export function Contact() {
  const [state, formAction, pending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactAction, initialState);

  return (
    <Section id="contact" className="bg-[color:rgba(10,12,16,0.85)]">
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <FadeIn className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            label="Let’s start sprinkling intelligence"
          />
          <p className="text-base text-muted">
            Tell us about the customer journeys you want to elevate and the
            workflows you need to automate. We’ll respond within one business
            day with next steps from a Let’s Sprinkle AI specialist.
          </p>
          {/* <ul className="space-y-3 text-sm text-muted">
            <li>✦ Email: <Link href="mailto:contact@letsprinkleai.com">contact@letsprinkleai.com</Link></li>
            <li>✦ Phone / WhatsApp: <Link href="tel:+917980314116">+91 79803 14116</Link></li>
            <li>✦ LinkedIn: <Link href="https://www.linkedin.com/company/let-sprinkle-ai/" target="_blank" rel="noreferrer">Let’s Sprinkle AI</Link></li>
            <li>✦ Studio: Sector V, Salt Lake City, Kolkata, India</li>
          </ul> */}
        </FadeIn>
        <FadeIn delay={0.1}>
          <form action={formAction} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Your name" required />
              <Input
                name="email"
                type="email"
                placeholder="Work email"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="company" placeholder="Company" />
              <Input name="budget" placeholder="Budget (optional)" />
            </div>
            <Textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              required
            />
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
            />
            <Button type="submit" loading={pending} className="w-full">
              {pending ? "Sending" : "Send message"}
            </Button>
            {state.status !== "idle" ? (
              <p
                className={`text-sm ${
                  state.status === "success"
                    ? "text-[color:var(--accent)]"
                    : "text-red-300"
                }`}
              >
                {state.message}
              </p>
            ) : null}
          </form>
        </FadeIn>
      </Container>
    </Section>
  );
}
