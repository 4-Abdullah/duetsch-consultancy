import React from "react";

// Component Block
import Card from "./Card";
import TopCompaniesLogos from "./TopCompaniesLogos";
import { btnContent } from "../data";
import Button from "./Button";

export default function Facilities() {

  return (
    <div className="w-full bg-[#0C0512]">
    <div id="cardsContainer" className="w-full pt-32">
  <section
    id="facilities"
    className="w-full"
  >
    <div className="flex flex-col md:flex-col gap-y-10 lg:flex-row justify-center items-center lg:gap-40">
      {/* Left Section: Text Content */}
      <div id="leftContent" className={`w-full  flex flex-col lg:sticky lg:top-0 gap-y-10 lg:h-[250vh] `}>
        <div className="flex flex-col lg:justify-start lg:items-start lg:text-left sm:text-center sm:justify-center sm:items-center  lg:sticky lg:top-36">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl md:text-4xl lg:2xl text-white font-medium leading-tight">
            What's Inside?
          </h3>
          <p className="mt-4 text-sm sm:text-sm text-wrap lg:text-lg">
            We're gathering all the tools required to make you a global
            success in the rapidly growing AI Industry.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <Button type="secondary" url={btnContent.url} title="Request Early Access"/>
        </div>
      </div>
</div>
      
        
          {/* This inner container has a fixed height to control the scroll duration */}
          <div  className="lg:relative w-full   sm:space-y-16 lg:h-[250vh]">
            {/* Card 1 */}
            <div className="lg:sticky lg:top-36 lg:z-10">
              <Card
                imagetype="cover"
                cardWidth="w-full h-[700px] max-w-[800px]"
                image="/Become-a-generativeAIWizard.png"
                title="Become a Generative AI Wizard"
                description="From complete programming noobs to experienced developers. Our program is designed for all levels."
              />
            </div>
            {/* Card 2 */}
            <div className="lg:sticky lg:top-40 lg:z-20">
              <Card
                cardWidth="w-full max-w-[700px]"
                image="/PersonalBranding&SoftSkills.png"
                title="Personal Branding &amp; Soft Skills"
                description="From CV to LinkedIn to Leadership — build a global‑ready personal brand with the skills top companies demand."
              />
            </div>
            {/* Card 3 */}
            <div className="lg:sticky lg:top-44 lg:z-30">
              <Card
                cardWidth="w-full max-w-[700px]"
                image="/ConnectwithBrightest.png"
                title="Connect with the Brightest"
                description="Join a global community of top professionals, founders, and tech leaders. Get insider insights through weekly live sessions that keep you ahead of where the industry is headed."
              />
            </div>
      </div>
    </div>
  </section>
</div>
<div className="h-60 lg:h-10"/>
<div
  className="flex flex-col justify-start flex-shrink-0 outline-none"
>
  <h2 className="text-[37px] font-medium tracking-[-2.1px] text-center text-white font-poppins">
    Professionals from Top Companies
  </h2>

</div>
  <TopCompaniesLogos/>
</div>

  );
}