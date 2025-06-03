import React from "react";
import Button from "./Button";
import { btnContent } from "../data";
export default function CtaSection() {
  return (
    <section className="flex flex-col w-full h-full rounded-full items-center justify-center  ">
      <div className="relative w-2xl h-[650px]">
        <div className="absolute w-full z-0 h-full  right-0 top-1/2 -translate-y-1/2 -translate-x-25 bg-[#0d0a17] rounded-full shadow-[inset_0_-106px_44px_#230540,inset_0_-36px_24px_#f692ff]"></div>
        <div className="absolute w-full z-10 h-full left-0 top-1/2 -translate-y-1/2 translate-x-25 bg-[#0d0a17] rounded-full shadow-[inset_0_-106px_44px_#230540,inset_0_-36px_24px_#f692ff]"></div>
        <div className="absolute w-[610px] z-20 h-[600px] left-1/2 top-[380px]  -translate-x-1/2 -translate-y-1/2 bg-[#06040d] rounded-full shadow-[inset_0_-106px_84px_#a41cff99,inset_0_-36px_44px_#fac7ff,inset_0_-36px_30px_#ff002f]"></div>

        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="flex flex-col w-[400px] justify-center items-center text-center">
            <h3 className="text-white text-[52px] font-medium leading-[68px] sm:tracking-[-0.04em]">
              Be a part of the new AI Age
            </h3>
            <h2 className="text-[16px] mt-4 max-w-sm">
              Join the Kamyabi Network today and be a part of a meaningful
              revolution in Pakistan's Tech Industry. See you inside!
            </h2>
            <div className="mt-14">
              <Button title={btnContent.title} url={btnContent.url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
