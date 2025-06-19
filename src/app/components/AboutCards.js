import Image from "next/image";
import React from "react";

export default function AboutCards() {
  return (
    <div>
      <div className="flex flex-col sm:flex-col md:flex-row">
        <Image
          className="w-full md:w-1/2 lg:w-lg border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-4xl h-full md:h-1/2 lg:h-[500px] "
          src="/About_Card_1.png"
          width={300}
          height={300}
          alt="Card_1"
        />
        <div className="h-5 md:w-20" />
        <div className="flex flex-col md:w-xl">
          <div className="text-3xl md:text-4xl lg:text-5xl text-white md:leading-[50px] lg:leading-[64px] sm:tracking-[-0.04em]">
            Real AI Skills taught by Industry Professionals
          </div>
          <div className="h-3" />
          <div className="text-[14px] lg:text-lg">
            Our 6–8 month long AI bootcamp covers all the fundamentals you need
            to break into the AI industry — taught by real engineers and
            professionals from top global tech companies like Meta, Google, and
            more. Learn by doing, build a portfolio, and get job-ready.
          </div>
        </div>
      </div>
      <div className="h-20 sm:h-30 md:h-40" />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-lg lg:w-xl">
          <div className="text-3xl md:text-4xl lg:text-5xl  text-white md:leading-[50px] lg:leading-[64px] sm:tracking-[-0.04em]">
            Communicate Better. Lead With Confidence.
          </div>
          <div className="h-3" />
          <div className="text-[14px] lg:text-lg">
            We offer a personal branding and professional development bootcamp
            helping you master soft skills, work ethic, communication, and
            career strategy to succeed in global industries.
          </div>
          <div className="text-[14px] lg:text-lg">
            Whether you're a student, freelancer, or young professional — we’ll
            help you build a standout presence, sharpen your mindset, and grow
            your career with purpose.
          </div>
        </div>
        <div className="h-5 md:w-20" />
        <Image
          className="w-full md:w-1/2 lg:w-lg border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-4xl h-full md:h-1/2 lg:h-[500px] "
          src="/About_Card_2.png"
          width={300}
          height={300}
          alt="Card_2"
        />
      </div>
      <div className="h-20" />
    </div>
  );
}
