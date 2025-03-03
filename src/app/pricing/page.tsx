import React from "react";
import PricingPageClient from "./PricingPageClient";
import type { Metadata } from "next";
import { Waves } from "@/components/waves-background";

export const metadata: Metadata = {
  title: "Pricing - AI Quizzer",
  description: "Choose the right plan for your quiz creation needs",
};

export default function PricingPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <Waves
            lineColor={"rgba(255, 255, 255, 0.3)"}
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
      </div>
      <PricingPageClient />
    </main>
  );
}
