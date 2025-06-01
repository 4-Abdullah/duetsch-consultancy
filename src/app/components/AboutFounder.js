import React from "react";
import Image from "next/image";

export default function AboutFounder() {
  return (
   
   
    <div className="relative flex flex-col w-full items-center justify-center px-4 py-8">
 
  <div className="relative rounded-t-4xl w-full h-[45px]">
    
    <div className="absolute inset-0 bg-violet-500  bg-center z-20 rounded-t-4xl" />
    <div className="absolute inset-0 bg-violet-500 bg-center z-20 rounded-t-4xl" />

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
