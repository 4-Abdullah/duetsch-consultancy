// Component block 
import Button from "./Button";
// Data block
import { btnContent } from "../data";
export default function CtaSection() {
  return (
    <section className="flex flex-col w-11/12 sm:w-[420px] md:w-lg lg:w-2xl h-full rounded-full items-center justify-center">
      <div className="relative w-[250px]  sm:w-[420px]  md:w-lg lg:w-2xl h-[280px] sm:h-[450px] md:h-[500px]  lg:h-[650px]">
        <div className="absolute w-full grow z-0 h-full  right-0 top-1/5 sm:top-5/12 md:top-5/12 lg:top-1/2 -translate-y-1/2 -translate-x-5 sm:-translate-x-25 bg-[#0d0a17] rounded-full shadow-[inset_0_-106px_44px_#230540,inset_0_-36px_24px_#f692ff]"></div>
        <div className="absolute w-full grow z-10 h-full left-0 top-1/5 sm:top-5/12   md:top-5/12 lg:top-1/2 -translate-y-1/2 translate-x-5  sm:translate-x-25 bg-[#0d0a17] rounded-full shadow-[inset_0_-106px_44px_#230540,inset_0_-36px_24px_#f692ff]"></div>
        <div className="absolute w-[240px] grow sm:w-[440px] md:w-[500px] lg:w-[610px] z-20 h-[250px] sm:h-[450px] md:h-[500px] lg:h-[600px] left-1/2 top-[65px] sm:top-[200px] md:top-[250px] lg:top-[380px] -translate-x-1/2 -translate-y-1/2 bg-[#06040d] rounded-full shadow-[inset_0_-106px_84px_#a41cff99,inset_0_-36px_44px_#fac7ff,inset_0_-36px_30px_#ff002f]"></div>

        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="flex flex-col w-[200px] sm:w-[400px] justify-center items-center text-center">
            <h3 className="text-white text-[26px] sm:text-[52px] font-medium leading-[30px] sm:leading-[68px] sm:tracking-[-0.04em]">
              Be a part of the new AI Age
            </h3>
            <h2 className="text-[8px] sm:text-[16px] mt-4 ">
              Join the Kamyabi Network today and be a part of a meaningful
              revolution in Pakistan's Tech Industry. See you inside!
            </h2>
            <div className="mt-25 sm:mt-14 ">
              <Button title={btnContent.title} url={btnContent.url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
