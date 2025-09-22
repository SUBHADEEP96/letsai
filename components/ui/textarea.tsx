import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-[color:rgba(255,255,255,0.1)] bg-[color:rgba(10,12,15,0.9)] px-4 py-3 text-sm placeholder:text-muted focus:border-[color:var(--accent)]",
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
