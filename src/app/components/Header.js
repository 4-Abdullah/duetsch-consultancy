"use client";
import { useEffect,useRef } from "react";

// Component Block
import Button from "./Button";
import { secondarybtnOnClickevent } from "./OnClickEvents";
import Tag from "./Tag";
// Note: Update full component & update it with server component
function Header({ title, actionBtn, subtitle, secondarytitle }) {


  useEffect(() => {
    const words = document.querySelectorAll("h1 span");
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.remove("opacity-0", "blur-md");
      }, index * 100);
    });
  }, []);


  return (
    <div className="w-full ">
  {/* Background */}
<div
  className="absolute top-0 left-0 w-full h-9/12 -z-10"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, #1A1420 1px, transparent 1px),
      linear-gradient(to right, #1A1420 1px, transparent 1px)
    `,
    backgroundSize: "80px 70px",
  
  }}
></div>


  {/* Main Content */}
  <div className="relative flex flex-col items-center justify-center px-4 py-8">
    {/* Header Section */}
    <div className="relative z-10"> 
      {/* <Tag /> */}
      <br />
      <div className="flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  justify-center text-center">
        <h1 className="text-4xl justify-center text-center md:text-[60px] lg:text-[72px] sm:text-[60px] font-semibold leading-[50px] sm:leading-[94px] sm:tracking-[-0.04em] text-white">
          {title.map((word, index) => (
            <span key={index}>
            <span  className="inline-block opacity-0 blur-md transition-all duration-700">
              {word}
            </span>{" "}</span>
          ))}
        </h1>
       
      </div>
{subtitle?
      <div className="mt-4 ">
        <h2 className=" sm:text-base md:text-lg  text-center text-[#9893B8]">
          {subtitle}
        </h2>
      </div>
      :<br/>
}

{secondarytitle?
<div className="mt-4 flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  ">
        <h2 className=" sm:text-base md:text-xl lg:text-3xl text-center justify-center  text-white">
          {secondarytitle}
        </h2>
      </div>
      :<br/>
}

{actionBtn?
      <div className="mt-8 flex justify-center">
        <Button
          type="secondary"
          onClick={secondarybtnOnClickevent}
          title={actionBtn.title}
          font="var(--font-poppins)"
        />
      </div>
      : <br/>
}
    </div>
  </div>
</div>


  );
}

export default Header;
