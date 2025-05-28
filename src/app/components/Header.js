"use client";
import { useEffect,useRef } from "react";

// Component Block
import Button from "./Button";
import { secondarybtnOnClickevent } from "./OnClickEvents";
import Tag from "./Tag";
// Note: Update full component & update it with server component
function Header({ title, actionBtm, subtitle }) {
  useEffect(() => {
    const words = document.querySelectorAll("h1 span");
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.remove("opacity-0", "blur-md");
      }, index * 100);
    });
  }, []);

  //   const containerRef = useRef(null);
  // const [numRows, setNumRows] = useState(10); // Default to 10 rows

  // useEffect(() => {
  //   // Optionally, compute numRows based on container height:
  //   if (containerRef.current) {
  //     const height = containerRef.current.clientHeight;
  //     // For example, assume each row is 20px high:
  //     const rows = Math.ceil(height / 20);
  //     setNumRows(rows);
  //   }
  // }, []);

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

{/* <div
  className="absolute top-0 left-0 w-full h-9/12 -z-10"
  style={{
    backgroundImage: `
      repeating-linear-gradient(to right, transparent 0px, transparent 24%, purple 24%, purple 25%, transparent 25%),
      repeating-linear-gradient(to bottom, transparent 0px, transparent 24%, purple 24%, purple 25%, transparent 25%)`,
    backgroundSize: "25% 100%, 100% 25%"
  }}
></div> */}


  {/* Main Content */}
  <div className="relative flex flex-col items-center justify-center px-4 py-8">
    {/* Header Section */}
    <div className="relative z-10">
      <Tag />
      <br />
      <div className="flex flex-col w-4xl justify-start text-center">
        <h1 className="text-[72px] font-semibold leading-[94px] tracking-[-0.04em] text-white">
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            Your
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            Gateway
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            to
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            the
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            15
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            Trillion
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            $*
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            AI
          </span>{" "}
          <span className="inline-block opacity-0 blur-md transition-all duration-700">
            Economy
          </span>
        </h1>
      </div>

      <div className="mt-4 ">
        <h2 className="text-sm sm:text-base md:text-lg text-center text-[#9893B8]">
          *AI's share of Global Economy will be 15.7 Trillion US Dollars by
          2030. (PwC)
        </h2>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          type="secondary"
          onClick={secondarybtnOnClickevent}
          title="Request Early Access"
          font="var(--font-poppins)"
        />
      </div>
    </div>
  </div>

  {/* Additional Content */}
  {/* <div className="relative w-full max-w-4xl mx-auto mt-12 text-white">
    <h2 className="text-3xl font-bold text-center">Why AI Matters</h2>
    <p className="mt-4 text-lg text-center text-gray-300">
      Artificial intelligence is transforming industries, improving efficiency,
      and shaping the future of work. From automation to personalized
      recommendations, AI is a game-changer.
    </p>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="p-6 bg-[#1A1420] rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Automation & Efficiency</h3>
        <p className="mt-2 text-gray-300">
          AI streamlines processes, reduces costs, and optimizes workflow for businesses worldwide.
        </p>
      </div>

      <div className="p-6 bg-[#1A1420] rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">Personalized Experiences</h3>
        <p className="mt-2 text-gray-300">
          AI enables customized recommendations, smarter interactions, and user-centric design.
        </p>
      </div>
    </div>
  </div> */}
</div>


  );
}

export default Header;
