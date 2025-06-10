"use client";
import React, { useState } from "react";

export default function FAQS_card({ index, question, answer,style }) {
  const [toggleicon, setToggleicon] = useState(null);
  function toggleFAQ(index) {
    console.log(toggleicon);
    setToggleicon((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div
      onClick={() => toggleFAQ(index)}
      className={`${style.bg} text-wrap cursor-pointer mx-auto  border-[#24163D]  
    rounded-2xl shadow-lg border`}
    >
      <div className={`w-full  sm:w-full text-sm md:${style.textsize} px-4 sm:gap-0 text-white ${style.padding} rounded-lg`}>
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
          className={`flex-col justify-start ${style.textcolor} space-y-5 rounded-lg ${
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
