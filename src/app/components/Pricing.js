import React from 'react'
import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <div className='flex flex-col items-center gap-24'>
    <div className="flex flex-col items-center gap-4">
  <h3 className="text-[52px] text-white font-medium tracking-tight text-center leading-[68px]">
    Price Starts As Low As <br /> PKR 3999* Per Month
  </h3>
  <h2 className="text-[17px] text-center">
    *PKR 3999 per month pricing is applicable for early bird signups on yearly plans.
  </h2>
</div>
<div className="flex flex-col items-center space-y-4 p-4">
  <div className="border border-[#1F172E] bg-[#0D0A17] rounded-full p-2 flex items-center justify-between w-64">
    <button className="cursor-pointer  h-10 border border-r-2  border-t-[#C47BF7] border-b-violet-500 border-x-[#C47BF7]  rounded-full px-6 py-2 text-white">
      Monthly
    </button>
    <button className="bg-transparent h-10 text-gray-400 rounded-full px-6 py-2">
      Yearly
    </button>
  </div>
  <div>
    <PricingCard/>
  </div>
</div>
</div>

  )
}
