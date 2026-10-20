"use client";
// Package block
import { useEffect } from "react";

export default function Header_title_mapping({title}) {
     useEffect(() => {
    const words = document.querySelectorAll("h1 span");
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.remove("opacity-0", "blur-md");
      }, index * 100);
    });
  }, []);
  return (
    <h1 className="text-4xl justify-center text-center md:text-[60px] lg:text-[72px] sm:text-[40px] font-semibold leading-[50px] sm:leading-[50px] md:leading-[94px] sm:tracking-[-0.04em] text-white">
          {title.map((word, index) => (
            <span key={index}>
            <span  className="inline-block opacity-0 blur-md transition-all duration-700">
              {word}
            </span>{" "}</span>
          ))}
        </h1>
  )
}
