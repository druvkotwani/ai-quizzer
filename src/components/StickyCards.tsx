// components/StickyCards.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { NeobrutButton } from "./ui/button";
import Link from "next/link";

interface CardData {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  icon: React.ReactNode;
  hasButton?: boolean;
  buttonText?: string;
  shadow?: string;
}

interface StickyCardsProps {
  cards: CardData[];
  containerHeight?: string;
}

const StickyCards: React.FC<StickyCardsProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showDots, setShowDots] = useState(true);
  const [, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle scroll event to update active card and control dots visibility
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Calculate which card should be active based on scroll position
    const newActiveIndex = Math.floor(scrollPosition / viewportHeight);

    if (newActiveIndex !== activeCardIndex && newActiveIndex < cards.length) {
      setActiveCardIndex(newActiveIndex);
    }

    // Check if we've scrolled past the StickyCards section
    if (containerRef.current) {
      const containerBottom =
        containerRef.current.offsetTop + containerRef.current.offsetHeight;
      setShowDots(scrollPosition < containerBottom - viewportHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCardIndex]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${cards.length * 100}vh` }}
    >
      {cards.map((card) => (
        <section
          key={card.id}
          className="h-screen w-full sticky top-0 flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundColor: card.backgroundColor,
            color: card.textColor,
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 w-full">
            <div className="transform scale-75 md:scale-100 mb-2 md:mb-0">
              {card.icon}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
              {card.title}
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-12 max-w-2xl mx-auto px-2">
              {card.description}
            </p>

            {card.hasButton && (
              <div className="mx-auto h-16 md:h-20 w-full max-w-60 md:max-w-72">
                <Link href={"/sign-up"}>
                  <NeobrutButton
                    shadowColor={card.shadow}
                    slideText={card.buttonText}
                  >
                    {card.buttonText}
                  </NeobrutButton>
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Navigation dots - only shown when StickyCards are in view */}
      {showDots && (
        <div className="fixed bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-1 md:gap-2 z-50">
          {cards.map((card, index) => (
            <button
              key={`nav-${card.id}`}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
                index === activeCardIndex
                  ? "bg-white w-6 md:w-8"
                  : "bg-gray-400"
              }`}
              onClick={() => {
                window.scrollTo({
                  top: index * window.innerHeight,
                  behavior: "smooth",
                });
              }}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StickyCards;
