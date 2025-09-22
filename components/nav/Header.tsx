"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/nav/MobileMenu";

const items = [
  { label: "Home", href: "#home" },
  { label: "Build", href: "#build" },
  { label: "Tech", href: "#tech" },
  { label: "Demos", href: "#demos" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-all ${
        scrolled
          ? "border-b border-[color:rgba(110,231,255,0.1)] bg-[color:rgba(8,10,14,0.7)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
          LetsAI Studio
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-muted transition hover:text-[color:var(--fg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="#contact" className={buttonVariants("secondary")}>Book a call</Link>
        </div>
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </Container>
      <MobileMenu items={items} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
