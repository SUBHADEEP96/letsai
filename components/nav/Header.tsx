"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, FlaskConical, ArrowUpRight } from "lucide-react";
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
  // { label: "Pricing", href: "#pricing" },
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
        <Link
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]"
          aria-label="Let's Sprinkle AI home"
        >
          <Image
            src="/assets/logo.png"
            alt="Let's Sprinkle AI logo"
            width={120}
            height={60}
            className="h-10 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
            priority
          />
          <span className="sr-only">Let’s Sprinkle AI</span>
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
          <Link
            href="https://www.letsprinkle.com"
            target="_blank"
            className={buttonVariants("secondary")}
          >
            <span className="flex items-center gap-2">
              <FlaskConical />
              <p>Let's AI Lab</p>
              <ArrowUpRight />
            </span>
          </Link>
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
      <MobileMenu
        items={items}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
