"use client";
import React, { useState } from "react";

export default function FAQS_card({ index, question, answer }) {
  const [toggleicon, setToggleicon] = useState(null);
  function toggleFAQ(index) {
    console.log(toggleicon);
    setToggleicon((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div
      onClick={() => toggleFAQ(index)}
      className=" text-wrap cursor-pointer mx-auto  border-[#24163D]  
    bg-[radial-gradient(23.18%_162.55%_at_2.44%_15.49%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
    hover:bg-[radial-gradient(55.18%_455.55%_at_8.44%_6.49%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
    rounded-2xl shadow-lg border"
    >
      <div className="w-full  sm:w-full text-sm md:text-[16px] px-4 sm:gap-0 text-white p-4 rounded-lg">
        <div className="flex justify-between">
            <span className="flex-auto sm:w-full text-wrap break-words">{question}</span>
            <span
              className={`text-right transition-transform duration-300 ${
                toggleicon === index ? "rotate-180" : ""
              } ml-auto`}
            >
              {toggleicon === index ? "➖" : "➕"}
            </span>
        </div>
        <div
          className={`flex-col justify-start text-[#8C87AA] space-y-5 rounded-lg ${
            toggleicon === index ? "block" : "hidden"
          }`}
        >
          <br />
          {answer}
        </div>
      </div>
    </div>
  );
}
