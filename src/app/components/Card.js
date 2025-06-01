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
  imagetype
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
  className={`
    relative mx-auto flex flex-col gap-0 w-[100%] max-w-xl  
    border border-t-0 border-b-violet-500 border-x-[#C47BF7] 
    sm:max-w-sm md:max-w-[100%] rounded-2xl 
    shadow-lg transition-all duration-500 transform 
    ${animationClasses}
  `}
>
  {/* Wrapper for the image container using an aspect ratio */}
  <div className="relative w-full overflow-hidden rounded-t-2xl">
    {/* The aspect-[16/9] sets the height according to the width so the container tightly fits the image aspect */}
    <div
      className="aspect-[16/9] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  </div>
  
  {/* Bottom Content – follows immediately under the image container */}
  <div className="w-full rounded-b-2xl p-8 bg-[#0D0713]">
    <h2 className="text-2xl text-white">{title}</h2>
    <p className="pt-2">{description}</p>
  </div>
</div>



  );
};

export default Card;
