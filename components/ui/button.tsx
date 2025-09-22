import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[color:var(--accent)] text-black shadow-[0_0_30px_rgba(110,231,255,0.25)] hover:bg-[color:color-mix(in_srgb,var(--accent)_85%,white_15%)]",
  secondary:
    "border border-muted bg-surface text-[color:var(--fg)] hover:border-[color:rgba(255,255,255,0.2)]",
  ghost:
    "text-[color:var(--fg)] hover:bg-[color:rgba(255,255,255,0.06)]",
};

export function buttonVariants(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseStyles, variantStyles[variant], className);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          (disabled || loading) && "pointer-events-none opacity-70",
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="h-3 w-3 animate-spin rounded-full border-2 border-[color:rgba(0,0,0,0.4)] border-t-transparent" />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
