// Package block
import Image from "next/image";
import React from "react";
// Data block
import { ContactInfo_Data } from "../contact/data";

export default function ContactInfo() {
  return (
    <section className="w-[90vw] sm:w-[90vw] xl:w-fit">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full h-full items-start gap-y-8 sm:gap-y-5 sm:gap-x-0  xl:gap-x-5">
        {ContactInfo_Data.map((data, index) => (
          <div
            key={index}
            className={`sm:w-full md:w-[42vw] lg:w-[28vw] flex flex-col items-center text-center px-6 py-10 border
    border-b-violet-500 border-x-[#C47BF7] rounded-3xl border-t-[#24163D]
    bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,rgb(36,28,54)_0%,rgb(6,4,13)_100%)]
    hover:bg-[radial-gradient(53.6%_75%_at_50%_50%,rgb(36,28,54)_0%,rgb(6,4,13)_100%)]
    hover:border-t-violet-500 hover:border-b-[#24163D]
    shadow-lg`}
          >
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="image"
              className="object-cover  w-20 h-20 border-2 border-[#C476EF]  rounded-full"
            />
            <div className="pt-6 w-fit">
              <div>
                <p className=" text-lg sm:text-xl xl:text-2xl text-white">
                  {data.title}
                </p>
                <p className="text-sm sm:text-sm lg:text-[16px]">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-20" />
    </section>
  );
}
