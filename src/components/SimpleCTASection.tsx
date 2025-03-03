"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const SimpleCTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section ref={ctaRef} className="pb-24  rounded-xl ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-primary">
            Supercharge Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Elevate your skills with our AI-powered quizzes tailored
            specifically to your learning needs and goals.
          </p>
          <div className="flex justify-center">
            <Link href="/quiz">
              <Button size="lg" className="px-8 py-6 text-lg font-medium">
                Start Your Quiz Now
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTASection;
