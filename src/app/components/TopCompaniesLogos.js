import React from "react";
import Image from "next/image";
export default function TopCompaniesLogos() {
  const TopCompanies = [
    {
      image: "/Unilever.png",
    },
    {
      image: "/pwc.png",
    },
    {
      image: "/ORACLE.png",
    },
    {
      image: "/Microsoft.png",
    },
    {
      image: "/Meta.png",
    },
    {
      image: "/Mercedes-Benz.png",
    },
    {
      image: "/HarvardUniversity.png",
    },
    {
      image: "/airbnb.png",
    },
  ];

  return (
    <div
      className="
    h-[100px]
    relative
    w-full"
    >
      <section
        className="flex flex-row max-w-full max-h-full w-full h-[100%] place-items-center
    m-0
    p-[10px]
    list-none
    opacity-100 overflow-hidden
    
    items-center justify-center "
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}
      >
        <ul
          className="flex flex-row

    w-full h-full
    max-w-full
    max-h-full
    place-items-center
    m-0
    p-0
    list-none
    gap-[32px]
    relative
    
    "
        >
          {TopCompanies.map((logo, index) => (
            <li key={index}>
              <div className="w-[150px] h-[48px]">
                <Image
                  className="block w-full h-full object-center object-cover"
                  src={logo.image}
                  alt="Logo"
                  width={400}
                  height={300}
                  //  sizes="150px"

                  //   style="border-radius: inherit;"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
