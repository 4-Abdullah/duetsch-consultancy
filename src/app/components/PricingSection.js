"use client";
import { useState } from "react";
import React from "react";

// Component Block
import PricingCard from "./PricingCard";
import SubscriptionToggle from "./SubsrciptionToggle";

export default function PricingSection() {
  const pricingCard_1 = {
    title: "Artificial Intelligence",
    subtitle: "Become an AI Wizard in 6 Months",
    monthlyPrice: "4,999",
    yearlyPrice: "47,999",
  };
  const pricingCard_2 = {
    title: "Full Access",
    subtitle: "Premium access across ALL spaces",
    monthlyPrice: "9,999",
    yearlyPrice: "95,999",
  };
  const pricingCard_3 = {
    title: "Personal Branding",
    subtitle: "Get ready to pitch yourself to global business",
    monthlyPrice: "4,999",
    yearlyPrice: "47,999",
  };
  const [subscriptionType, setSubscriptionType] = useState("monthly");

  return (
    <div className="flex flex-col items-center gap-10 bg-[#0C0512]">
      <div className="flex flex-col items-center ">
        <h3 className="text-[30px] sm:text-[40px] md:text-[52px] text-white font-medium tracking-tight text-center leading-[68px]">
          Price Starts As Low As <br /> PKR 3999* Per Month
        </h3>
        <h2 className="text-[14px] sm:text-[10px] md:text-[14px] xl:text-[17px]  text-center">
          *PKR 3999 per month pricing is applicable for early bird signups on
          yearly plans.
        </h2>
      </div>
      <div className="flex flex-col items-center w-full sm:w-lg md:w-2xl  lg:w-full">
        <SubscriptionToggle
          subscriptionType={subscriptionType}
          setSubscriptionType={setSubscriptionType}
        />
        <div className="flex h-30" />
        <div className="grid grid-cols-3 xl:h-[1000px] justify-center mx-auto w-full sm:w-full  lg:w-full card-container card-container-small md:w-full  xl:flex-nowrap xl:w-full  gap-5 xl:gap-12 ">
          <div className=" xl:w-96">
            <PricingCard
              title={pricingCard_1.title}
              subtitle={pricingCard_1.subtitle}
              price={
                subscriptionType === "monthly"
                  ? pricingCard_1.monthlyPrice
                  : pricingCard_1.yearlyPrice
              }
            />
          </div>
          <div className=" xl:scale-110 xl:pb-[800px]">
            <PricingCard
              title={pricingCard_2.title}
              subtitle={pricingCard_2.subtitle}
              price={
                subscriptionType === "monthly"
                  ? pricingCard_2.monthlyPrice
                  : pricingCard_2.yearlyPrice
              }
            />
          </div>
          <div className=" xl:w-96">
            <PricingCard
              title={pricingCard_3.title}
              subtitle={pricingCard_3.subtitle}
              price={
                subscriptionType === "monthly"
                  ? pricingCard_3.monthlyPrice
                  : pricingCard_3.yearlyPrice
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
