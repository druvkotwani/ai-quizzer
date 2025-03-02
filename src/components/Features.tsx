"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Brain,
  LineChart,
  Clock,
  Layers,
  RefreshCw,
  Zap,
  Target,
  Server,
  Users,
  BookOpen,
  Globe,
  BicepsFlexed,
  HandCoins,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const features = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Skill Gap Analysis",
    description:
      "Identify specific areas where you need to focus more attention based on your performance.",
  },

  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI-Powered Generation",
    description:
      "Each quiz is uniquely created by advanced AI based on your preferences and skill level.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Performance Analytics",
    description:
      "Track your progress over time with detailed analytics on your strengths and areas for improvement.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Time-Based Challenges",
    description:
      "Practice under timed conditions to improve your speed and accuracy for technical interviews.",
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Difficulty Progression",
    description:
      "Start with basics and gradually advance to more complex concepts as you improve.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Cloud Synchronization",
    description:
      "Your progress is saved and synced across all your devices for seamless learning experience.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: "Continuous Learning",
    description:
      "Access an ever-expanding library of questions that evolves with the latest programming trends.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Language-Specific Questions",
    description:
      "Get quizzes tailored to specific programming languages and frameworks of your choice.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Rapid Feedback",
    description:
      "Get instant feedback on your answers with detailed explanations to improve your understanding.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Challenges",
    description:
      "Compete with other learners in regular coding challenges to test your skills.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Resource Integration",
    description:
      "Access relevant documentation and learning resources directly within quiz explanations.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Multiple Languages",
    description:
      "Support for all major programming languages and popular frameworks.",
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  // Add rotation animation
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(rotateInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  // Colors for the feature cards
  const cardColors = [
    "bg-emerald-300",
    "bg-[#FD9745]",
    "bg-[#FFDC58]",
    "bg-[#ff6b6b]",
    "bg-[#A3E636]",
    "bg-[#a388ee]",
  ];

  return (
    <section className="py-24 " ref={featuresRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="group relative inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <BicepsFlexed className="h-4 w-4 text-primary animate-pulse" />
              <span>Powerful Features</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 mt-6">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-muted-foreground font-secondary">
            Our platform combines intelligent quiz generation with detailed
            analytics to provide a complete learning experience
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
          {features.slice(0, 6).map((feature, index) => (
            <div
              key={index}
              className={`group w-full border-2 border-black ${
                cardColors[index]
              } ${index % 2 !== 0 ? "sm:-translate-y-6" : ""}`}
            >
              <div
                className={`-m-0.5 border-2 border-black ${cardColors[index]} ${
                  index % 2 !== 0 ? "sm:-translate-y-6" : ""
                } transition-transform duration-300 ease-in-out`}
                style={{
                  transform: "translateX(0) translateY(0) translateZ(0)",
                }}
              >
                <div
                  className={`relative -m-0.5 flex h-64 flex-col justify-between overflow-hidden border-2 border-black ${
                    cardColors[index]
                  } p-8 ${
                    index % 2 !== 0 ? "sm:-translate-y-6" : ""
                  } transition-transform duration-300 ease-in-out`}
                  style={{
                    transform: "translateX(0) translateY(0) translateZ(0)",
                  }}
                >
                  <p className="flex items-center text-2xl font-medium uppercase text-black">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    {feature.title}
                  </p>

                  <div>
                    <p className="text-black font-medium">
                      {feature.description}
                    </p>
                  </div>

                  <svg
                    width="200"
                    height="200"
                    className="pointer-events-none absolute z-10 rounded-full"
                    style={{
                      top: 0,
                      right: 0,
                      transform: `translateX(50%) translateY(-50%) scale(0.75) rotate(${rotation}deg)`,
                    }}
                  >
                    <path
                      id={`circlePath-${index}`}
                      d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                      fill="none"
                    ></path>
                    <text>
                      <textPath
                        href={`#circlePath-${index}`}
                        fill="black"
                        className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                      >
                        LEARN MORE • LEARN MORE • LEARN MORE • LEARN MORE •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Add CSS for hover effect */}
              <style jsx>{`
                .group:hover > div {
                  transform: translateX(-8px) translateY(-8px) translateZ(0px) !important;
                }
                .group:hover > div > div {
                  transform: translateX(-8px) translateY(-8px) translateZ(0px) !important;
                }
              `}</style>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/features" className="inline-block relative z-10">
            <Button variant="default" className="pointer-events-auto">
              View All Features
              <HandCoins className="ml-[2px]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
