"use client";
// Package block
import Image from "next/image";
import React from "react";
// Component block
import Button from "./Button";
// Data block
import { Step_cardData } from "../data";

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
      className={`flex flex-col h-11/12 items-center xl:p-4 rounded-lg shadow-md transition-transform duration-500 ease-in-out
       ${activeIndex === stepcount ? "opacity-100" : "opacity-0"} `}
    >
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full h-11/12 sm:w-full sm:h-full xl:h-full">
        <div className="relative w-full sm:w-full md:w-full h-[35vh] sm:h-[40vh] md:h-[60vh] lg:h-[60vh] xl:h-full">
          <Image
            src={image}
            alt="Secondary Image"
            width={400}
            height={400}
            className={`h-[35vh] sm:h-[40vh] md:h-full w-full sm:w-full md:w-full lg:w-[400px] xl:w-[480px] rounded-2xl  md:object-contain transition-opacity duration-1000 `}
          />
        </div>
        <div className="h-[5px] sm:w-[100px] xl:w-[100px] opacity-0"></div>

        <div className="flex flex-col items-center transform-none">
          {/* Text Section */}
          <div className="flex flex-col w-full justify-start">
            <h3 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white  font-semibold text-left">
              {title}
            </h3>
            <br />
            <h5 className="w-full text-xs sm:text-sm lg:text-[16px] text-wrap text-left">{description}</h5>
          </div>

          {/* Button Section */}
          <div className="mt-4 ">
            <Button type="secondary" url="/pricing" title="Join Now" />
          </div>
        </div>
      </div>
      <div className="h-10 sm:h-10 md:h-5 lg:h-5 xl:h-5" />

      {/* Progress Stepper */}
      <div className=" flex  justify-start w-full ">
        {Step_cardData.map((data, index) => (
          <div
            key={index}
            className={`relative flex flex-col  w-full cursor-pointer sm:h-[38vh] xl:h-[30vh]
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
                className={`text-[10px] sm:text-lg font-bold ${
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
