import { Header } from "@/components/nav/Header";
import { Hero } from "@/components/sections/Hero";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { TechStack } from "@/components/sections/TechStack";
import { Solutions } from "@/components/sections/Solutions";
import { Demos } from "@/components/sections/Demos";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--bg)] text-[color:var(--fg)]">
      <Header />
      <main className="flex-1 space-y-0">
        <Hero />
        <WhatWeBuild />
        <TechStack />
        <Solutions />
        <Demos />
        <Process />
        <CaseStudies />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
