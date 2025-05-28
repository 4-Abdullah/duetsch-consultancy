import React from "react";
import Link from "next/link";
import Card from "./Card";
import TopCompaniesLogos from "./TopCompaniesLogos";

export default function Facilities() {
  return (
    <div>
    <div className="w-full pt-32">
  <section
    id="facilities"
    className="w-full max-w-[1280px] mx-auto px-8 py-12 bg-gray-900"
  >
    <div className="flex flex-col md:flex-row gap-40">
      {/* Left Section: Text Content */}
      <div className="w-full md:w-6/12 flex flex-col">
        <div className="text-left">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight">
            What's Inside?
          </h3>
          <p className="mt-4 text-lg text-gray-300">
            We're gathering all the tools required to make you a global
            success in the rapidly growing AI Industry.
          </p>
        </div>

        <div className="mt-6">
          <Link
            href="mailto:hello@kamyabinetwork.com?subject=Requesting%20Invite%20to%20Kamyabi%20Network&amp;body=Hi%20Kamyabi%20Team,%0A%0AI’m%20interested%20in%20joining%20the%20community.%20Please%20let%20me%20know%20how%20to%20get%20access.%0A%0AThanks,%0A[Your%20Name]"
            target="_blank"
            rel="noopener"
            className="inline-block px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-400 to-purple-600 shadow-inner shadow-pink-300 transition-all duration-300 hover:from-purple-600 hover:to-pink-400"
          >
            Request Early Access
          </Link>
        </div>
      </div>

      {/* Right Section: Cards with Sticky & Scroll */}
      <div className="w-full md:w-7/12">
        {/* Wrap cards in a sticky container so they stay pinned */}
        <div className="sticky top-0">
          {/* This inner container has a fixed height to control the scroll duration */}
          <div className="relative h-[300vh]">
            {/* Card 1 */}
            <div className="sticky top-0 z-10">
              <Card
                imagetype="cover"
                cardWidth="w-full h-[700px] max-w-[800px]"
                image="/Become-a-generativeAIWizard.png"
                title="Become a Generative AI Wizard"
                description="From complete programming noobs to experienced developers. Our program is designed for all levels."
              />
            </div>
            {/* Card 2 */}
            <div className="sticky top-0 z-20">
              <Card
                cardWidth="w-full max-w-[700px]"
                image="/PersonalBranding&SoftSkills.png"
                title="Personal Branding &amp; Soft Skills"
                description="From CV to LinkedIn to Leadership — build a global‑ready personal brand with the skills top companies demand."
              />
            </div>
            {/* Card 3 */}
            <div className="sticky top-0 z-30">
              <Card
                cardWidth="w-full max-w-[700px]"
                image="/ConnectwithBrightest.png"
                title="Connect with the Brightest"
                description="Join a global community of top professionals, founders, and tech leaders. Get insider insights through weekly live sessions that keep you ahead of where the industry is headed."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
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
