import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import NeoHero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Waves } from "@/components/waves-background";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 w-full min-h-screen bg-background/80 rounded-lg overflow-hidden ">
        <div className="absolute inset-0">
          <Waves
            lineColor={"rgba(255, 255, 255, 0.3"}
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
      {/* Demo content to show scrolling effect */}
      <NeoHero />
      <Features />
      <Testimonials />
      <CTASection />
    </main>
  );
}
