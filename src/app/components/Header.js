"use client";

// Component Block
import Button from "./Button";
import { secondarybtnOnClickevent } from "./OnClickEvents";
import Tag from "./Tag";
// Note: Update full component & update it with server component
function Header({ title, actionBtm, subtitle }) {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-8 bg-black">
      <Tag />
      <div className="mt-6 text-center">
        <h1 className="font-semibold tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
          Your Gateway to the 15 Trillion $* AI Economy
        </h1>
      </div>

      <div className="mt-4">
        <h2 className="text-sm sm:text-base md:text-lg text-center text-[#9893B8]">
          *AI's share of Global Economy will be 15.7 Trillion US Dollars by
          2030. (PwC)
        </h2>
      </div>

      <div className="mt-8">
        <Button
          type="secondary"
          onClick={secondarybtnOnClickevent}
          title="Request Early Access"
          font="var(--font-poppins)"
        />
      </div>
    </div>
  );
}

export default Header;
