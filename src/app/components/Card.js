"use client";

// Package Block
import { useState, useRef } from "react";
import { useEffect } from "react";

const Card = ({
  cardWidth,
  image,
  title,
  description,
  animateOnScroll = true,
}) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!animateOnScroll) return;
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, [animateOnScroll]);

  const animationClasses = animateOnScroll
    ? inView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12"
    : "opacity-100 translate-y-0";

  return (
    <div
      ref={cardRef}
      className={`${cardWidth} relative w-dvw min-h-[50vh] max-h-[70vh] max-w-xl border border-t-0 border-b-violet-500 border-x-[#C47BF7] 
    sm:max-w-sm md:max-w-dvw rounded-2xl bg-contain bg-no-repeat items-center shadow-lg transition-all duration-500 transform ${animationClasses}`}
    >
      <div
        className="relative w-full min-h-[490px] max-w-xl 
        sm:max-w-sm md:max-w-dvw sm:h-64 md:h-80 lg:h-96 rounded-2xl 
        bg-contain bg-no-repeat items-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className={`absolute bottom-0 mx-auto md:w-full rounded-b-2xl p-8 bg-[#0D0713] `}
      >
        <h2 className="text-2xl  text-white">{title}</h2>
        <p className="mt-2 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
