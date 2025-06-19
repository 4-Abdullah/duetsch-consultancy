// Package block
import Image from "next/image";

export default function TopCompaniesLogos({ Logos, LogosViewType }) {
  return (
    <div
      className={`
    ${LogosViewType.logoTotalheight}
    relative
    w-full bg-[#0C0512]`}
    >
      <section
        className="flex flex-row w-full h-[100%] place-items-center gap-[var(--gap)] overflow-hidden"
        style={{
          "--gap": "45px",
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}
      >
        <ul
          className={`flex  shrink-0 gap-[var(--gap)] ${LogosViewType.type} ${LogosViewType.opacity} animate-[logoLoop_10s_linear_infinite]`}
        >
          {Logos.map((logo, index) => (
            <li key={index}>
              <div className={`${LogosViewType.logoWidth} h-[48px]`}>
                <Image
                  className={`  ${LogosViewType.logoHeight}  object-cover`}
                  src={logo.image}
                  alt="Logo"
                  width={1280}
                  height={1080}
                />
              </div>
            </li>
          ))}
        </ul>
        <ul
          className={` flex  shrink-0 gap-[var(--gap)] ${LogosViewType.type} ${LogosViewType.opacity} animate-[logoLoop_10s_linear_infinite]  `}
        >
          {Logos.map((logo, index) => (
            <li key={index}>
              <div className={`${LogosViewType.logoWidth} h-[48px]`}>
                <Image
                  className={`  ${LogosViewType.logoHeight}   object-cover`}
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
