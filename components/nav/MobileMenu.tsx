"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ items, open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return undefined;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40 flex flex-col bg-[color:rgba(5,7,11,0.9)] px-6 pb-12 pt-6 backdrop-blur-lg"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
          Let’s Sprinkle AI
        </span>
        <Button
          ref={closeRef}
          variant="ghost"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="px-3 py-2"
        >
          Close
        </Button>
      </div>
      <nav className="mt-12 flex flex-1 flex-col gap-6 text-lg font-medium">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 transition-colors duration-200 hover:border-[color:rgba(110,231,255,0.35)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:rgba(5,7,11,0.9)] focus-visible:ring-[color:rgba(110,231,255,0.45)]"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="mt-6 text-sm text-muted">
        Human-centered AI copilots · Enterprise guardrails
      </p>
    </div>
  );
}
