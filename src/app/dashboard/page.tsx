"use client";

import { useSession } from "next-auth/react";
import { Waves } from "@/components/waves-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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

      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-black">
              Welcome to your Dashboard
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Hello, {session?.user?.name || "User"}!
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-4">Your Account</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {session?.user?.image && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-black text-lg">
                  <span className="text-gray-500">Name:</span>{" "}
                  {session?.user?.name}
                </p>
                <p className="text-black text-lg">
                  <span className="text-gray-500">Email:</span>{" "}
                  {session?.user?.email}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="w-full sm:w-auto flex justify-center items-center py-3 px-6 text-base font-medium rounded-lg text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              <Link href="/">Create a New Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
