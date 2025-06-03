"use client";
import Image from "next/image";
import React from "react";
// Component block
import { Step_cardData } from "../data";
import Button from "./Button";

export default function Easytoset_Card({
  title,
  description,
  image,
  activeIndex,
  onLoaderClick,
  stepcount,
}) {
  return (
    <div
      className={`flex flex-col w-full items-center p-4 rounded-lg shadow-md transition-transform duration-500 ease-in-out
       ${activeIndex === stepcount ? "opacity-100" : "opacity-0"} `}
    >
      <div className="flex flex-row min-h-76">
        <div className="relative w-full ">
          <Image
            src={image}
            alt="Secondary Image"
            width={400}
            height={400}
            className={`absolute top-0 left-0 rounded-2xl object-cover transition-opacity duration-1000 `}
          />
        </div>
        <div className="bg-white w-2xl opacity-0"></div>

        <div className="flex flex-col items-center transform-none">
          {/* Text Section */}
          <div className="flex flex-col w-xl justify-start">
            <h3 className="text-5xl text-white  font-semibold text-left">
              {title}
            </h3>
            <br />
            <h5 className="text-lg text-wrap text-left">{description}</h5>
          </div>

          {/* Button Section */}
          <div className="mt-4">
            <Button type="secondary" url="/pricing" title="Join Now" />
          </div>
        </div>
      </div>
      <div className="h-50" />

      {/* Progress Stepper */}
      <div className=" flex  justify-start w-full ">
        {Step_cardData.map((data, index) => (
          <div
            key={index}
            className={`relative flex flex-col  w-full cursor-pointer min-h-[40px]
    ${
      index === activeIndex
        ? "text-blue-600 dark:text-blue-500"
        : "text-gray-500 dark:text-gray-400"
    }
      
    before:content-[''] before:block before:h-1 before:pointer-events-none
    after:content-[''] after:block after:w-full after:border-b after:border-4 after:pointer-events-none
    ${
      index === activeIndex || index < activeIndex
        ? "after:border-blue-600 dark:after:border-blue-500"
        : "after:border-gray-100 dark:after:border-gray-700"
    }
  `}
            onClick={() => {
              onLoaderClick(index);
            }}
          >
            <div className="absolute justify-start pt-5 text-sm font-bold">
              <span className="block text-lg text-[#8C87AA]">
                {String(index + 1 + ".").padStart(3, "0")}
              </span>
              <div
                className={`text-lg font-bold ${
                  index === activeIndex ? "text-gray-100" : "text-gray-500"
                }`}
              >
                {data.stepperName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
