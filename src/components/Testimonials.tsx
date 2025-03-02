"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dan",
    role: "CEO",
    company: "COMPANY",
    content:
      "I'm confident my data is secure with COMPANY. I can't say that about other providers.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop&q=80",
    color: "bg-emerald-300",
  },
  {
    id: 2,
    name: "Stephanie",
    role: "CEO",
    company: "COMPANY",
    content:
      "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=80",
    color: "bg-[#FD9745]",
  },
  {
    id: 3,
    name: "Marie",
    role: "CEO",
    company: "COMPANY",
    content:
      "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop&q=80",
    color: "bg-[#FFDC58]",
  },
  {
    id: 4,
    name: "Andre",
    role: "CEO",
    company: "COMPANY",
    content: "Would give 11 stars if I could!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=80",
    color: "bg-[#ff6b6b]",
  },
  {
    id: 5,
    name: "Jeremy",
    role: "CEO",
    company: "COMPANY",
    content:
      "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&auto=format&fit=crop&q=80",
    color: "bg-[#A3E636]",
  },
  {
    id: 6,
    name: "Pam",
    role: "CEO",
    company: "COMPANY",
    content:
      "Took so long to find, but now that we're here, we're never leaving.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&q=80",
    color: "bg-[#a388ee]",
  },
];

const TestimonialCard = ({
  testimonial,
  isActive,
  position,
  visibleCount,
  isMobile,
  slideDirection,
  transitionActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  position: number;
  visibleCount: number;
  isMobile: boolean;
  slideDirection: "left" | "right" | null;
  transitionActive: boolean;
}) => {
  // Calculate horizontal position (centered distribution)
  const centerPosition = Math.floor(visibleCount / 2);
  const distanceFromCenter = position - centerPosition;

  // Spread cards with larger offset for smaller screens
  const spreadFactor = isMobile ? 100 : 20; // Increased spacing for mobile
  const horizontalPosition = 50 + distanceFromCenter * spreadFactor;

  // Add random slight variations for a stacked look - only for non-active cards and non-mobile
  const randomOffsetX = isActive || isMobile ? 0 : Math.random() * 5 - 2.5;
  const randomOffsetY = isActive || isMobile ? 0 : Math.random() * 15 - 7.5;
  const randomRotation = isActive || isMobile ? 0 : Math.random() * 3 - 1.5;

  // Determine background color and text color based on active state and screen size
  const bgColorClass = isActive && !isMobile ? "bg-white" : testimonial.color;

  // Fix contrast issues - always black text for mobile, otherwise conditional
  const textColorClass = isMobile
    ? "text-black"
    : isActive && !isMobile
    ? "text-black"
    : "text-white";

  // Adjust vertical position for active card (move it up), but only on non-mobile
  const verticalOffset = isActive && !isMobile ? -20 : 0;

  // Calculate transform and animation properties
  const transformStyle = `translate(-50%, -50%) rotate(${randomRotation}deg) translateY(${randomOffsetY}px)`;
  let additionalStyles = {};

  if (isMobile && transitionActive) {
    // Starting position for animation
    const startX = slideDirection === "left" ? 100 : -100;
    // Ending position
    const endX = 0;

    additionalStyles = {
      transition: "transform 500ms ease-out",
      transform: `translate(calc(-50% + ${endX}px), -50%)`,
    };

    if (slideDirection) {
      additionalStyles = {
        ...additionalStyles,
        transform: `translate(calc(-50% + ${startX}px), -50%)`,
      };

      // Force a reflow to ensure the initial position is set before transition
      setTimeout(() => {
        const elements = document.querySelectorAll(".testimonial-card");
        elements.forEach((el) => {
          (
            el as HTMLElement
          ).style.transform = `translate(calc(-50% + ${endX}px), -50%)`;
        });
      }, 10);
    }
  }

  return (
    <div
      className={`absolute testimonial-card transition-all duration-500 ease-in-out ${
        isActive ? "opacity-100 scale-110 z-30" : "opacity-80 scale-95 z-10"
      }`}
      style={{
        left: `${horizontalPosition + randomOffsetX}%`,
        top: `calc(50% + ${verticalOffset}px)`,
        transform: isMobile ? undefined : transformStyle,
        ...additionalStyles,
      }}
    >
      <div
        className={`absolute cursor-pointer border-black p-8 transition-colors duration-500 z-10 ${bgColorClass} ${textColorClass}`}
        style={{
          borderWidth: "2px",
          clipPath:
            "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
          width: "365px",
          height: "365px",
          boxShadow: "black 0px 8px 0px 4px",
          transform: `translateX(calc(-50% + 0px)) translateY(calc(-50% - 65px)) rotate(0deg) translateZ(0px)`,
        }}
      >
        {/* Diagonal line in top right corner */}
        <span
          className="absolute block origin-top-right rotate-45 bg-black object-cover"
          style={{
            right: "-2px",
            top: "48px",
            width: "70.7107px",
            height: "2px",
          }}
        ></span>

        <img
          src={testimonial.avatar}
          alt={`Testimonial image for ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
          className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
          style={{
            boxShadow: `${
              isActive && !isMobile ? "black" : "white"
            } 3px 3px 0px`,
          }}
        />

        <h3 className="text-base sm:text-xl">
          &quot;{testimonial.content}&quot;
        </h3>

        <p
          className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
            isMobile
              ? "text-black font-semibold"
              : isActive && !isMobile
              ? "text-gray-600"
              : "text-indigo-200"
          }`}
        >
          - {testimonial.name}, {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [transitionActive, setTransitionActive] = useState(false);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Update visible count based on screen width
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (window.innerWidth >= 1280) {
        setVisibleCount(5); // Show 5 cards on large screens
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3); // Show 3 cards on medium screens
      } else {
        setVisibleCount(1); // Show only active card on small screens
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clear transition timer on component unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (transitionActive) return; // Prevent multiple clicks during transition

    // Start transition
    setTransitionActive(true);
    setSlideDirection("right");

    // Update active index after a small delay to allow the animation to start
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }, 50);

    // Reset slide direction after animation completes
    transitionTimerRef.current = setTimeout(() => {
      setSlideDirection(null);
      setTransitionActive(false);
    }, 500);
  };

  const handleNext = () => {
    if (transitionActive) return; // Prevent multiple clicks during transition

    // Start transition
    setTransitionActive(true);
    setSlideDirection("left");

    // Update active index after a small delay to allow the animation to start
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 50);

    // Reset slide direction after animation completes
    transitionTimerRef.current = setTimeout(() => {
      setSlideDirection(null);
      setTransitionActive(false);
    }, 500);
  };

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    const result = [];

    // Calculate how many cards to show on each side of active card
    const cardsOnEachSide = Math.floor(visibleCount / 2);

    // Add cards to display (centered around active index)
    for (let i = -cardsOnEachSide; i <= cardsOnEachSide; i++) {
      // Handle wrapping around the array
      const index =
        (activeIndex + i + testimonials.length) % testimonials.length;
      result.push(index);
    }

    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="group relative inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary animate-pulse" />
              <span>Customer Reviews</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 mt-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground font-secondary">
            Don&apos;t just take our word for it - hear from some of our
            satisfied customers!
          </p>
        </div>

        <div className="relative h-[550px] w-full">
          <div className="absolute inset-0 w-full h-full ">
            {visibleTestimonials.map((index, position) => (
              <TestimonialCard
                key={testimonials[index].id}
                testimonial={testimonials[index]}
                isActive={index === activeIndex}
                position={position}
                visibleCount={visibleTestimonials.length}
                isMobile={isMobile}
                slideDirection={slideDirection}
                transitionActive={transitionActive}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-12 pb-12 md:pb-4">
            <button
              onClick={handlePrev}
              className="group relative flex items-center justify-center w-10 h-10 transition-all duration-300"
              aria-label="Previous testimonial"
              disabled={transitionActive}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              <ChevronLeft className="h-8 w-8 text-white group-hover:text-black transition-colors relative z-10" />
            </button>
            <button
              onClick={handleNext}
              className="group relative flex items-center justify-center w-10 h-10 transition-all duration-300"
              aria-label="Next testimonial"
              disabled={transitionActive}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              <ChevronRight className="h-8 w-8 text-white group-hover:text-black transition-colors relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
