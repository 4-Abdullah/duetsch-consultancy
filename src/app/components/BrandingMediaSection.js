import Image from "next/image";
import React from "react";

export default function BrandingMediaSection() {
  return (
    <section className="pt-10 w-full">
      <div className="relative w-full h-[550px]">
        <Image
          src="/Branding_pic_1.png"
          width={1200}
          height={800}
          alt="image"
          className="w-[90vw] h-[80vh] rounded object-contain"
        />
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-3/5 sm:top-3/5 xl:top-1/2 left-1/3 sm:left-1/3 xl:left-1/2
               transform translate-x-3 sm:translate-x-4 xl:-translate-x-56 -translate-y-20 sm:-translate-y-30 md:-translate-y-45
                lg:-translate-y-65 w-[20vw] sm:w-[20vw] lg:w-[25vw] xl:w-[28vw] h-[12vh] sm:h-[20vh] md:h-[30vh] lg:h-[48vh] xl:h-[66vh]
                 rounded-xl sm:rounded-3xl object-cover"
        >
          <source src="/about_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
