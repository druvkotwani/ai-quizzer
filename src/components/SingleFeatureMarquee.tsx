"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

interface SingleFeatureMarqueeProps {
  features: Feature[];
  speed?: number;
  className?: string;
}

const SingleFeatureMarquee: React.FC<SingleFeatureMarqueeProps> = ({
  features,
  speed = 30,
  className,
}) => {
  // Only use the first 7 features
  const topFeatures = features.slice(0, 7);
  
  // State to track viewport width
  const [isMobile, setIsMobile] = useState(false);
  
  // Responsive card width and gap
  const cardWidth = isMobile ? 240 : 320; // Smaller on mobile
  const gapWidth = isMobile ? 16 : 32; // Smaller gap on mobile
  
  // Calculate the width based on the number of cards
  const totalWidth = topFeatures.length * (cardWidth + gapWidth);
  
  // Create a seamless loop by duplicating the features
  const duplicatedFeatures = [...topFeatures, ...topFeatures, ...topFeatures];
  
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // Adjust the duration based on the speed parameter
    // Lower speed value = slower animation
    const duration = totalWidth / (speed * 5);
    
    controls.start({
      x: -totalWidth,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
    
    // Pause animation on hover (only on desktop)
    const container = containerRef.current;
    if (container && !isMobile) {
      const handleMouseEnter = () => {
        controls.stop();
      };
      
      const handleMouseLeave = () => {
        controls.start({
          x: -totalWidth,
          transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      };
      
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [controls, totalWidth, speed, isMobile]);

  // Colors for the feature cards - matching your existing theme
  const cardColors = [
    "bg-emerald-300",
    "bg-[#FD9745]",
    "bg-[#FFDC58]",
    "bg-[#ff6b6b]",
    "bg-[#A3E636]",
    "bg-[#a388ee]",
    "bg-[#4ade80]",
  ];

  const shadowColors = [
    "#46651a", // Dark green
    "#6d2f2f", // Dark red/brown
    "#7a6425", // Dark gold/brown
    "#a33636", // Dark red
    "#5d4a8a", // Dark purple
    "#2a7c48", // Dark green
    "#2a5c48", // Dark teal
  ];

  // Icon background colors that complement the card colors
  const iconBgColors = [
    "bg-emerald-100",
    "bg-orange-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-lime-100",
    "bg-purple-100",
    "bg-green-100",
  ];

  // Icon colors that match the card colors but are slightly darker for contrast
  const iconColors = [
    "text-emerald-600",
    "text-orange-600",
    "text-yellow-600",
    "text-red-600",
    "text-lime-600",
    "text-purple-600",
    "text-green-600",
  ];

  return (
    <div 
      ref={containerRef}
      className={cn("overflow-hidden py-4 md:py-8 relative", className)}
    >
      {/* Gradient fade on left side */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent"></div>
      
      {/* Gradient fade on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent"></div>
      
      <motion.div
        className={`flex ${isMobile ? 'gap-4' : 'gap-8'} px-2 md:px-4`}
        animate={controls}
        initial={{ x: 0 }}
        style={{ width: `${duplicatedFeatures.length * (cardWidth + gapWidth)}px` }}
      >
        {duplicatedFeatures.map((feature, index) => {
          const colorIndex = index % cardColors.length;
          
          return (
            <motion.div
              key={`${feature.title}-${index}`}
              className={`flex-shrink-0 ${isMobile ? 'w-60' : 'w-80'} group relative`}
              whileHover={{ 
                scale: isMobile ? 1 : 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className="absolute inset-0 border-2 border-black"
                style={{ backgroundColor: shadowColors[colorIndex % shadowColors.length] }}
              />
              
              <div 
                className="relative flex flex-col h-full p-4 md:p-6 border-2 border-black bg-white transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 md:group-hover:translate-x-2 md:group-hover:-translate-y-2"
                style={{ backgroundColor: cardColors[colorIndex % cardColors.length] }}
              >
                {/* Enhanced icon display */}
                <div 
                  className={`mb-3 md:mb-4 ${iconBgColors[colorIndex]} rounded-full p-2 md:p-3 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-2 border-black shadow-md transform transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-110`}
                >
                  <div className={`${iconColors[colorIndex]} w-8 h-8 md:w-10 md:h-10`}>
                    {React.cloneElement(feature.icon as React.ReactElement<IconProps>, { 
                      className: `h-8 w-8 md:h-10 md:w-10 ${iconColors[colorIndex]}`,
                      strokeWidth: 2.5 
                    })}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-black">{feature.title}</h3>
                <p className="text-xs md:text-sm text-black">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SingleFeatureMarquee;
