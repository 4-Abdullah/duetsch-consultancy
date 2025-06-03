"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
// Component block
import { Step_cardData } from "../data";
import Easytoset_Card from "./EasytosetCard";

export default function Easytoset() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualMode, setManualMode] = useState(false);
  const cardRefs = useRef([]);
  const cardCount = Step_cardData.length;
  const handleClick = (index) => {
    setActiveIndex(index);
    setManualMode(true);
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView();
    }
    // Reset manualMode after 2 seconds.
    setTimeout(() => setManualMode(false), 2000);
  };

  const manualModeRef = useRef(manualMode);

  useEffect(() => {
    manualModeRef.current = manualMode;
  }, [manualMode]);

  useEffect(() => {
    const handleScroll = () => {
      // If we are in manual mode, just exit.
      if (manualModeRef.current) {
        console.log("Manual mode active - scroll handler returning.");
        return;
      }
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const progress = Math.min(
          Math.max((window.innerHeight - top) / height, 0),
          1
        );
        const index = Math.floor(progress * cardCount);
        setActiveIndex(index >= cardCount ? cardCount - 1 : index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount.
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardCount]);

  return (
    <div id="cardsContainer" className="w-full pt-32">
      <section id="facilities" className="w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-10 gap-40">
          <div ref={containerRef} className="  lg:h-[600vh]">
            {Step_cardData.map((data, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="lg:sticky lg:top-30 lg:z-10 relative"
              >
                <Easytoset_Card
                  title={data.title}
                  image={data.image}
                  description={data.description}
                  activeIndex={activeIndex}
                  onLoaderClick={handleClick}
                  stepcount={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
