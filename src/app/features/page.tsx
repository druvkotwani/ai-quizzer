import SimpleCTASection from "@/components/SimpleCTASection";
import StickyCards from "@/components/StickyCards";
import { Waves } from "@/components/waves-background";
import {
  BarChart3,
  Cloud,
  Code,
  Cpu,
  Crosshair,
  GitMerge,
  Repeat,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import React from "react";

// Top 6 features to display in the grid with improved icons
const topFeatures = [
  {
    icon: <Crosshair className="h-8 w-8" />,
    title: "Skill Gap Analysis",
    description:
      "Identify specific areas where you need to focus more attention based on your performance.",
    color: "bg-emerald-300",
    shadowColor: "#46651a",
    iconBgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI-Powered Generation",
    description:
      "Each quiz is uniquely created by advanced AI based on your preferences and skill level.",
    color: "bg-[#FD9745]",
    shadowColor: "#6d2f2f",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Performance Analytics",
    description:
      "Track your progress over time with detailed analytics on your strengths and areas for improvement.",
    color: "bg-[#FFDC58]",
    shadowColor: "#7a6425",
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: <Timer className="h-8 w-8" />,
    title: "Time-Based Challenges",
    description:
      "Practice under timed conditions to improve your speed and accuracy for technical interviews.",
    color: "bg-[#ff6b6b]",
    shadowColor: "#a33636",
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: <GitMerge className="h-8 w-8" />,
    title: "Difficulty Progression",
    description:
      "Start with basics and gradually advance to more complex concepts as you improve.",
    color: "bg-[#A3E636]",
    shadowColor: "#2a7c48",
    iconBgColor: "bg-lime-100",
    iconColor: "text-lime-600",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Synchronization",
    description:
      "Your progress is saved and synced across all your devices for seamless learning experience.",
    color: "bg-[#a388ee]",
    shadowColor: "#5d4a8a",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const cardsData = [
  {
    id: "1",
    title: "Cloud Synchronization",
    description:
      "Your progress is saved and synced across all your devices for a seamless learning experience.",
    backgroundColor: "#111111", // Darker version of black (#000)
    textColor: "#ffffff",
    icon: <Cloud className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "SYNC NOW",
    shadow: "#000000", // Black for strong contrast
  },
  {
    id: "2",
    title: "Continuous Learning",
    description:
      "Access an ever-expanding library of questions that evolves with the latest programming trends.",
    backgroundColor: "#C96C2B", // Darker version of #FD9745
    textColor: "#ffffff",
    icon: <Repeat className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "LEARN MORE",
    shadow: "#6d2f2f", // Muted brownish red for depth
  },
  {
    id: "3",
    title: "Language-Specific Questions",
    description:
      "Get quizzes tailored to specific programming languages and frameworks of your choice.",
    backgroundColor: "#D4AF37", // Darker version of #FFDC58 (Gold-like)
    textColor: "#000000",
    icon: <Code className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "EXPLORE",
    shadow: "#7a6425", // Deeper gold/brown for contrast
  },
  {
    id: "4",
    title: "Rapid Feedback",
    description:
      "Get instant feedback on your answers with detailed explanations to improve your understanding.",
    backgroundColor: "#D44A4A", // Darker version of #ff6b6b
    textColor: "#ffffff",
    icon: <Zap className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "GET STARTED",
    shadow: "#a33636", // Darkened red for a subtle effect
  },
  {
    id: "5",
    title: "Community Challenges",
    description:
      "Compete with other learners in regular coding challenges to test your skills.",
    backgroundColor: "#6A9A24", // Darker version of #A3E636
    textColor: "#ffffff",
    icon: <Users className="mx-auto mb-6" size={40} />,
    hasButton: true,
    buttonText: "JOIN NOW",
    shadow: "#46651a", // Dark green for natural contrast
  },
];

const Page = () => {
  return (
    <>
      <div className="w-full">
        <StickyCards cards={cardsData} />
      </div>

      <div className="w-full relative">
        <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
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
        <div className="container mx-auto px-4 py-24 xl:pt-32 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-8">
            Our Top Features
          </h1>
          <p className="text-base md:text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Discover what makes our AI-powered quiz platform the best choice for
            your learning journey
          </p>

          {/* Feature Cards Grid with increased spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 px-2 md:px-4 max-w-7xl mx-auto mb-20">
            {topFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative transition-all duration-300 ease-in-out"
              >
                {/* Third shadow layer (deepest) - only visible on hover */}
                <div
                  className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    backgroundColor: feature.shadowColor,
                  }}
                />

                {/* Second shadow layer (middle) - only visible on hover */}
                <div
                  className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 transform translate-x-0 -translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2"
                  style={{
                    backgroundColor: feature.shadowColor,
                  }}
                />

                {/* Main card with increased height */}
                <div
                  className={`relative flex flex-col h-full min-h-[320px] p-7 md:p-9 border-2 border-black ${feature.color} transition-all duration-300 ease-in-out transform translate-x-0 -translate-y-0 group-hover:translate-x-4 group-hover:-translate-y-4`}
                >
                  {/* Enhanced icon display with larger size */}
                  <div
                    className={`mb-6 ${feature.iconBgColor} rounded-full p-4 w-20 h-20 flex items-center justify-center border-2 border-black shadow-md transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <div className={`${feature.iconColor} w-12 h-12`}>
                      {React.cloneElement(feature.icon as React.ReactElement, {
                        ...feature.icon.props,
                        className: `h-12 w-12 ${feature.iconColor}`,
                        strokeWidth: 2.5,
                      })}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-base text-black flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SimpleCTASection />
      </div>
    </>
  );
};

export default Page;
