import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
}

export function Section({ id, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      data-section
      className={cn("relative scroll-mt-24 py-16 sm:py-24", className)}
      {...props}
    />
  );
}
