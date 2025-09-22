import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  label?: string;
  eyebrow?: string;
};

export function SectionHeading({
  className,
  label,
  eyebrow,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--accent)]">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]",
          className,
        )}
        {...props}
      >
        {label ?? children}
      </h2>
    </div>
  );
}
