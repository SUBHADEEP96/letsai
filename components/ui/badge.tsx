import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  icon?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Badge({ className, icon, children, ...props }: BadgeProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[color:rgba(110,231,255,0.35)] bg-[color:rgba(12,16,20,0.75)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)] transition hover:border-[color:rgba(110,231,255,0.6)] hover:text-white",
        className,
      )}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}
