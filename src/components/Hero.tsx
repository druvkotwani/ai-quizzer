"use client";

import React from "react";
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
import { motion } from "framer-motion";

const NeoHero = () => {
  const [hoverCard, setHoverCard] = React.useState<number | null>(null);

  const techCards = [
    { icon: <Code className="w-6 h-6" />, label: "Learn Coding" },
    { icon: <BrainCircuit className="w-6 h-6" />, label: "AI-Powered" },
    { icon: <Sparkles className="w-6 h-6" />, label: "Interactive" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <ProductHuntBanner />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Master Programming Languages Through Intelligent Quizzes
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Challenge yourself with AI-powered quizzes tailored to your
            programming language, framework, and skill level to accelerate your
            learning journey.
          </motion.p>

          {/* Interactive tech cards */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {techCards.map((card, index) => (
              <Button
                key={index}
                variant="default"
                className={`flex items-center gap-2 transition-all duration-200 scale-100 hover:scale-105 active:scale-95 ${
                  hoverCard === index
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <div
                  className={`${
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
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/sign-in">
              <Button
                size="lg"
                className="w-full sm:w-auto group scale-100 transition-all duration-200 hover:scale-105 active:scale-95 !bg-[#ff8e3c] hover:bg-[#ff9f50]"
              >
                Sign In to Start
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="lg"
                className="w-full sm:w-auto group scale-100 transition-all duration-200 hover:scale-105 active:scale-95 !bg-[#ff6b6b] hover:bg-[#ff7c7c]"
              >
                Sign Up Free
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NeoHero;
