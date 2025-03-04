import React from "react";
import { Metadata } from "next";
import { Waves } from "@/components/waves-background";
import SignInForm from "./SignInForm";

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

      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-black">
              Sign in to AI Quizzer
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Access your account to create and manage quizzes
            </p>
          </div>

          <SignInForm />
        </div>
      </div>
    </main>
  );
}
