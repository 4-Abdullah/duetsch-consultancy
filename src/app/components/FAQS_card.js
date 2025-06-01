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
      <div className="w-full   text-white p-4 rounded-lg">
        {question}{" "}
        <span
          className={`float-right transition-transform duration-300 ${
            toggleicon === index ? "rotate-180" : ""
          }`}
        >
          {toggleicon === index ? "➖" : "➕"}
        </span>
        <div
          className={`flex-col justify-start text-white space-y-5 rounded-lg ${
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
