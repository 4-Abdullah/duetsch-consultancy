import React from "react";
import Image from "next/image";
import ParticlesAnimation from "./ParticlesAnimation";

export default function AboutFounder() {
  return (
   
   
<div className="relative flex flex-col w-[90vw] items-center justify-center px-0 sm:px-4"
    style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}
    >
  <div className="relative rounded-t-4xl w-full h-[100px] sm:h-[150px]">
    <ParticlesAnimation/>
    <div className="absolute inset-x-0 inset-y-[71px] sm:inset-y-25  bg-violet-500 opacity-10 h-[4vh] sm:h-[7vh]  bg-center  rounded-t-4xl" />

    {/* Content that sits above the violet background */}
    <div className="relative  z-10 bg-transparent"/>
      
  </div>
  
  <Image
        className="object-contain rounded sm:w-full max-h-[2987px]"
        width="1280"
        height="1080"
        sizes="min(100vw - 80px, 1200px)"
        src="/FounderPic.png"
        alt="FounderPic"
      />
</div>

  );
}
