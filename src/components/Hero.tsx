"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Code,
  BrainCircuit,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ProductHuntBanner from "./ProducthuntBanner";

const NeoHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const techCards = [
    { icon: <Code className="w-6 h-6" />, label: "Learn Coding" },
    { icon: <BrainCircuit className="w-6 h-6" />, label: "AI-Powered" },
    { icon: <Sparkles className="w-6 h-6" />, label: "Interactive" },
  ];

  return (
    <section
      ref={heroRef}
      className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0) 50%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* <span className="inline-block text-sm font-medium bg-[#ff8e3c]/20 text-[#ff8e3c] px-3 py-1 rounded-full mb-6 animate-scaleIn border-2 border-black">
            Elevate Your Coding Skills
          </span> */}
          <ProductHuntBanner />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance mb-6 animate-slideUp"
            style={{ animationDelay: "0.1s" }}
          >
            Master Programming Languages Through Intelligent Quizzes
          </h1>
          <p
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slideUp font-secondary"
            style={{ animationDelay: "0.2s" }}
          >
            Challenge yourself with AI-powered quizzes tailored to your
            programming language, framework, and skill level to accelerate your
            learning journey.
          </p>

          {/* Interactive tech cards */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-slideUp"
            style={{ animationDelay: "0.25s" }}
          >
            {techCards.map((card, index) => (
              <Button
                key={index}
                variant="default"
                className={`flex items-center gap-2 transition-all duration-300 ${
                  hoverCard === index
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <div
                  className={`transition-all duration-300 ${
                    hoverCard === index ? "text-white" : "text-black"
                  }`}
                >
                  {card.icon}
                </div>
                <span
                  className={`font-secondary font-medium ${
                    hoverCard === index ? "text-white" : "text-black"
                  }`}
                >
                  {card.label}
                </span>
              </Button>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/signin">
              <Button size="lg" className="w-full sm:w-auto group bg-[#ff8e3c]">
                Sign In to Start
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto group bg-[#ff6b6b]">
                Sign Up Free
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeoHero;
