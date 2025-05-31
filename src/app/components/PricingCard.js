import React from "react";
import Underline from "./Underline";
import { secondarybtnOnClickevent } from "./OnClickEvents";
import Button from "./Button";

export default function PricingCard({ title, subtitle, price }) {
  const PricingcardData_1 = [
    "15+ Hours Content",
    "Personalized Support",
    "AI Community Access",
    "Hackathons",
    "Live AI Events",
  ];
  const PricingcardData_2 = [
    "30+ Hours Content",
    "Personalized Support",
    "FULL Community Access",
    "ALL Community Events",
    "Mentorship Calls",
    "Live Events",
    "Exclusive Job Board",
    "Build Space for Founders",
  ];

  const PricingcardData_3 = [
    "15+ Hours Content",
    "Personalized Support",
    "PB Community Access",
    "Hackathons",
    "Live PB Events",
  ];

  const selectedCard =
    title === "Artificial Intelligence"
      ? PricingcardData_1
      : title === "Full Access"
      ? PricingcardData_2
      : title === "Personal Branding"
      ? PricingcardData_3
      : [];

  return (
    <div
      className=" w-full flex flex-col  gap-8 border-[#24163D]  bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
             rounded-4xl shadow-lg border p-10  max-w-xl mx-auto
              border-t-0 border-b-violet-500 border-x-[#C47BF7]  sm:max-w-xl md:max-w-[100%]"
    >
      {/* Background Container */}
      <div>
        <div className="bg-gradient-radial from-[#241C36] to-[#0D0A17] rounded-2xl">
          <h2 className="text-2xl text-white font-medium text-center">
            {title}
          </h2>
        </div>

        <p className=" text-center mt-2 sm:text:sm lg:text-[16px]">
          {subtitle}
        </p>

        {/* Divider */}
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-[#1F1E41] via-[#7564B0] to-[#1F1E41] opacity-100" />

      {/* Feature List */}
      <div className="space-y-3 pt-5 flex flex-col gap-3 ">
        {selectedCard.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3 ">
            <div className="bg-[#4F60FA] rounded-md w-6 h-6 flex items-center justify-center">
              {/* Check Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-8 fill-white"
              >
                <path d="M18 6.7l-8.48 8.48-3.54-3.54a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18c.39-.39.39-1.03-.01-1.42-.37-.38-1-.38-1.39.01z"></path>
              </svg>
            </div>
            <p className="text-lg">{feature}</p>
          </div>
        ))}
        <div className="flex h-0.5" />

        <div className="flex flex-col items-center  rounded-2xl p-0 gap-5 max-w-sm mx-auto bg-gradient-to-b">
          {/* Price Section */}
          <div className="flex   items-start text-left">
            <div className="text-white text-3xl font-medium leading-[52px]">
              PKR {price}
            </div>
            <div className="text-sm relative  top-6 pr-10">/ per month</div>
          </div>

          <div className="flex h-0.5" />

          {/* Button Section */}
          <div className="justify-center">
            <Button
              onClick={secondarybtnOnClickevent}
              title="Request Early Access"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
