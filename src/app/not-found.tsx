import Link from "next/link";
import { Button } from "@/components/ui/button";
import {House } from "lucide-react";
import { Waves } from "@/components/waves-background";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative ">
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
      <h1 className="text-4xl font-bold mb-2">404 Not Found</h1>
      <p className="text-lg mb-6">Could not find requested resource.</p>
      <Link href="/" className="inline-block relative">
        <Button variant="default">Return home
            <House className="ml-[2px]" />
        </Button>
      </Link>
    </div>
  );
}