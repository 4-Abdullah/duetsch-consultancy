import React from "react";
import Image from "next/image";

export default function TopCompaniesLogos({Logos,LogosViewType}) {
  

  return (
    <div
      className={`
    ${LogosViewType.logoTotalheight}
    relative
    w-full bg-[#0C0512]`}
    >
      <section
        className="flex flex-row max-w-full max-h-full w-full h-[100%] place-items-center
    
    gap-[var(--gap)]
    opacity-100 overflow-hidden
    relative
    items-center justify-center"
        style={{
          "--gap": "20px",
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}
      >
        <ul   className={`flex gap-[var(--gap)] overflow-hidden list-none shrink-0  ${LogosViewType.type} ${LogosViewType.opacity} animate-[logoLoop_10s_linear_infinite] min-w-[100%]`}>
          {Logos.map((logo, index) => (
            <li key={index}>
              <div className={`${LogosViewType.logoWidth} h-[48px]`}>
                <Image
                  className={`block w-full ${LogosViewType.logoHeight}  object-center object-cover`}
                  src={logo.image}
                  alt="Logo"
                  width={1280}
                  height={1080}
                />
              </div>
            </li>
          ))}
        </ul>
        <ul className={`aria-hidden:true flex list-none shrink-0  ${LogosViewType.type} ${LogosViewType.opacity} animate-[logoLoop_10s_linear_infinite]  min-w-[100%]`}>
          {Logos.map((logo, index) => (
            <li key={index}>
              <div className={`${LogosViewType.logoWidth} h-[48px]`}>
                <Image
                  className={`block w-full ${LogosViewType.logoHeight}  object-center object-cover`}
                  src={logo.image}
                  alt="Logo"
                  width={1280}
                  height={1080}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
