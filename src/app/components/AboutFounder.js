import React from "react";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-8 w-10/12">
      <Image
        className="object-contain rounded  min-[(100vw - 80px, 1200px)] max-w-[1502px] max-h-[2987px] "
        width="1280"
        height="1080"
        sizes="min(100vw - 80px, 1200px)"
        src="/FounderPic.png"
        alt=""
      />
    </div>
  );
}
