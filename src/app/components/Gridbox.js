"use client";
// Package block
import { useEffect, useState } from "react";

export default function Gridbox({
  overlay_layer,
  animationbox_group_1,
  animationbox_group_2,
  animationbox_group_3,
  gridPosition,
  gridsize,
  overlaysize,
  overlayPosition,
}) {
  const [activeGroup, setActiveGroup] = useState(1);
  const animationDuration = 2000; // Duration for each group's animation (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through groups: 1 -> 2 -> 3
      setActiveGroup((prev) => (prev === 3 ? 1 : prev + 1));
    }, animationDuration);
    return () => clearInterval(interval);
  }, [animationDuration]);

  return (
    <>
      <div className={`absolute ${gridPosition} ${gridsize} backdrop-blur-3xl grid-layer`}
      style={{
  maskImage: `
    linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%),
    linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)
  `,
  WebkitMaskImage: `
    linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%),
    linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)
  `,
  maskComposite: 'intersect',
  WebkitMaskComposite: 'destination-in', // Ensures intersection works in WebKit
}}>

        {/* Group 1 overlays */}
        {activeGroup === 1 && (
          <>
            {animationbox_group_1.map((box, index) => (
              <div
                key={index}
                className={`box-animation w-[46px] h-[45px] sm:w-[46px] sm:h-[45px] md:w-[75px] md:h-[70px]  ${box.position}  animate-active`}
              ></div>
            ))}
          </>
        )}

        {/* Group 2 overlays */}
        {activeGroup === 2 && (
          <>
            {animationbox_group_2.map((box, index) => (
              <div
                key={index}
                className={`box-animation w-[46px] h-[45px] sm:w-[46px] sm:h-[45px] md:w-[75px] md:h-[70px] ${box.position} animate-active`}
              ></div>
            ))}
          </>
        )}

        {/* Group 3 overlays */}
        {activeGroup === 3 && (
          <>
            {animationbox_group_3.map((box, index) => (
              <div
                key={index}
                className={`box-animation w-[46px] h-[45px] sm:w-[46px] sm:h-[45px] md:w-[75px] md:h-[70px] ${box.position} animate-active`}
              ></div>
            ))}
          </>
        )}
      </div>
      {/* Overlay layer */}
      <div
        className={`absolute ${overlayPosition} ${overlaysize} ${overlay_layer}`}
      ></div>
    </>
  );
}
