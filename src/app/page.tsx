import { Hero } from "@/components/Hero";
import { WhatIs } from "@/components/WhatIs";
import { BentoGrid } from "@/components/BentoGrid";
import { Important } from "@/components/Important";
import { About } from "@/components/About";
import { Cronograma } from "@/components/Cronograma";
import { AfterPay } from "@/components/AfterPay";
import { Offer } from "@/components/Offer";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      <Hero />
      <ScrollReveal><Cronograma /></ScrollReveal>
      <ScrollReveal><WhatIs /></ScrollReveal>
      <ScrollReveal><BentoGrid /></ScrollReveal>
      <ScrollReveal><Important /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><AfterPay /></ScrollReveal>
      <ScrollReveal><Offer /></ScrollReveal>
      <Footer />
    </main>
  );
}
