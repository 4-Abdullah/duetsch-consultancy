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
        relative flex flex-col  w-[100%] 
        border border-t-0 border-b-violet-500 border-x-[#C47BF7] 
        sm:w-fit md:max-w-[100%] rounded-2xl 
        shadow-lg transition-all duration-500 transform 
        ${animationClasses}
      `}
    > 
  <div className="relative w-full overflow-hidden rounded-t-2xl"
    style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}>
    <div
      className="aspect-[16/9] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  </div>
    <div className="w-full select-none rounded-b-2xl p-3 sm:p-5 bg-[#0D0713]">
      <h2 className="text-[16px] sm:text-2xl text-white">{title}</h2>
      <p className="pt-2 text-sm sm:text-base">{description}</p>
    </div>
</div>

  );
};

export default Card;
