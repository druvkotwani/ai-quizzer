import React from "react";
import { Metadata } from "next";
import { Waves } from "@/components/waves-background";
import SignInForm from "./SignInForm";
import SignInClient from "./SignInClient";

export const metadata: Metadata = {
  title: "Sign In - AI Quizzer",
  description: "Sign in to your AI Quizzer account",
};

export default function SignInPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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

      <SignInClient />
    </main>
  );
}
