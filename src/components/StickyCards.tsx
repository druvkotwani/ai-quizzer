// components/StickyCards.tsx
"use client"

import { useRef, useState, useEffect } from 'react';
import { Code, RefreshCw, Server, Users, Zap } from 'lucide-react';
import {  NeobrutButton } from './ui/button';

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

const StickyCards: React.FC<StickyCardsProps> = ({
  cards,

}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Handle scroll event to update active card
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    // Calculate which card should be active based on scroll position
    const newActiveIndex = Math.floor(scrollPosition / viewportHeight);
    
    if (newActiveIndex !== activeCardIndex && newActiveIndex < cards.length) {
      setActiveCardIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          className="h-screen w-full sticky top-0 flex flex-col items-center justify-center"
          style={{
            backgroundColor: card.backgroundColor,
            color: card.textColor,
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            {card.icon}
            
            <h2 className="text-5xl font-bold mb-6">{card.title}</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">{card.description}</p>
            
            {card.hasButton && (
              <div className="mx-auto h-20 w-full max-w-72 ">
              <NeobrutButton
                shadowColor={card.shadow}
               slideText={card.buttonText}>
                {card.buttonText}
              </NeobrutButton>
            </div>
            )}
          </div>
        </section>
      ))}
      
      {/* Navigation dots */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-2 z-50">
        {cards.map((card, index) => (
          <button
            key={`nav-${card.id}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeCardIndex ? 'bg-white w-8' : 'bg-gray-400'
            }`}
            onClick={() => {
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              });
            }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyCards;