import React from "react";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <>
   
    <div className="relative w-full flex flex-col items-center justify-center px-4 py-8">
  {/* Container for the abc element with its own local violet background */}
  <div className="relative rounded-t-4xl w-[1280px] h-[45px] ">
    {/* Violet background that appears only behind the abc element */}
    <div className="absolute inset-0 bg-violet-500 -z-10 rounded-t-4xl" />
    {/* Content that sits above the violet background */}
    <div className="relative z-10 bg-transparent"/>
      
  </div>

  {/* Other content like the image, which will not have the violet background behind it */}
  <Image
        className="object-contain rounded  min-[(100vw - 80px, 1200px)] max-w-[1502px] max-h-[2987px] "
        width="1280"
        height="1080"
        sizes="min(100vw - 80px, 1200px)"
        src="/FounderPic.png"
        alt=""
      />
</div>
</>
  );
}
