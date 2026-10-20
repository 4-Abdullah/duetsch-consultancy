// Package Block
import Image from "next/image";
import React from "react";

export default function BrandingMediaSection() {
  return (
    <section className="pt-1 sm:pt-5 w-[95vw] sm:w-full">
      <div className="relative w-full">
        <Image
          src="/Branding_pic_1.png"
          width={1200}
          height={800}
          alt="image"
          className="w-full h-full rounded object-contain"
        />
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-[60%] sm:top-3/5 xl:top-1/2 left-[31%] sm:left-[31%] md:left-[32%] lg:left-[33%] xl:left-1/2
               transform translate-x-3 sm:translate-x-4 lg:translate-x-4 xl:-translate-x-55 -translate-y-30 sm:-translate-y-44 md:-translate-y-50
                lg:-translate-y-70 xl:-translate-y-82 w-[28vw] h-[23vh] sm:h-[38vh] md:h-[45vh] lg:h-[60vh] xl:h-[80vh]
                 rounded-xl sm:rounded-3xl object-cover"
        >
          <source src="/about_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
