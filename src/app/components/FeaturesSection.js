import React from "react";
import Card from "./Card";

export default function FeaturesSection() {
  return (
    <div className="w-[1280px] mx-auto relative flex flex-col items-center justify-center px-4 py-8 bg-black">
      <div className="flex flex-col justify-center text-center shrink-0 transform-none outline-none">
        <h3 className="text-white w-2xl text-center  text-[52px] leading-[54px] tracking-[-0.06em]">
          Built for Founders, Freelancers, and Professionals
        </h3>
        <br />
        <h2>
          On a Mission to Power $30B in Exports by 2030 — Through AI and
          Pakistani Talent.
        </h2>
      </div>

      <div className="w-full mx-auto pt-15">
        <div className="flex flex-row w-full gap-5 ">
          <Card
            image="/YoungProfessionals.png"
            title="Young Professionals"
            description="Level up your career with in-demand AI skills and global exposure — no fluff, just real growth."
          />
          <Card
            image="/Freelancers.png"
            title="Freelancers"
            description="Add AI to your toolkit, land premium clients, and future-proof your freelance game."
          />
          <Card
            image="/Founders.png"
            title="Founders"
            description="Validate ideas, build smarter products, and tap into Pakistan’s top AI talent through our community."
          />
        </div>
        <br />
        <div className="flex flex-row  gap-12 ">
          <Card
            image="/OverseasPakistani.png"
            title="Overseas Pakistani"
            description="Collaborate with high-potential Pakistani talent, give back with impact, and build the future — together."
          />
          <Card
            image="/Students.png"
            title="Students"
            description="Start your AI journey early, build real-world skills, and open doors to global opportunities."
          />
        </div>
      </div>
    </div>
  );
}
