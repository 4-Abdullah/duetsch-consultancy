import React from 'react'

export default function PricingCard() {
  return (
    <div className="bg-gradient-to-b from-[#402B75] via-[#6C49C4] to-[#681EE0] rounded-2xl p-6 text-white max-w-sm mx-auto">
  {/* Background Container */}
  <div className="bg-gradient-radial from-[#241C36] to-[#0D0A17] rounded-2xl p-4">
    <h2 className="text-2xl font-medium text-center">Artificial Intelligence</h2>
  </div>

  {/* Membership Status */}
  <div className="border border-[#463C54] rounded-full text-center py-2 mt-4 text-purple-300">
    Membership Paused
  </div>

  {/* CTA */}
  <p className="text-gray-300 text-center mt-2 text-lg">
    Become an AI Wizard in 6 Months
  </p>

  {/* Divider */}
  <div className="bg-gradient-to-r from-gray-600 via-purple-500 to-indigo-900 h-1 w-full my-4"></div>

  {/* Feature List */}
  <div className="space-y-3">
    {[
      "15+ Hours Content",
      "Personalized Support",
      "AI Community Access",
      "Hackathons",
      "Live AI Events"
    ].map((feature, index) => (
      <div key={index} className="flex items-center space-x-3">
        <div className="bg-[#4F60FA] rounded-md w-6 h-6 flex items-center justify-center">
          {/* Check Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M18 6.7l-8.48 8.48-3.54-3.54a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18c.39-.39.39-1.03-.01-1.42-.37-.38-1-.38-1.39.01z"></path>
          </svg>
        </div>
        <p className="text-lg">{feature}</p>
      </div>
    ))}
    <div className="flex flex-col items-center space-y-4 bg-[#402B75] rounded-2xl p-6 max-w-sm mx-auto">
  {/* Price Section */}
  <div className="text-white text-4xl font-medium leading-[52px] text-center">
    PKR 4,999
  </div>
  <div className="text-gray-300 text-lg text-center">/ per month</div>

  {/* Button Section */}
  <a href="mailto:hello@kamyabinetwork.com?subject=Requesting%20Invite%20to%20Kamyabi%20Network&amp;body=Hi%20Kamyabi%20Team%2C%0A%0AI%E2%80%99m%20interested%20in%20joining%20the%20community.%20Please%20let%20me%20know%20how%20to%20get%20access.%0A%0AThanks%2C%0A[Your%20Name]"
    target="_blank"
    rel="noopener"
    className="bg-gradient-to-r from-[#E496FF] to-[#681EE0] text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md w-full text-center">
    Request Early Access
  </a>
</div>

  </div>
</div>

  )
}
