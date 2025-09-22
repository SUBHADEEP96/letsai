import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(15,18,22,0.8)] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[color:rgba(110,231,255,0.35)] hover:shadow-[0_35px_80px_rgba(110,231,255,0.15)]",
        className,
      )}
      {...props}
    />
  );
}
