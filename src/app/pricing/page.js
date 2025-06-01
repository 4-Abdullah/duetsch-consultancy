import FAQS from "../components/FAQS";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";

function Pricing() {
    const titleWords = ["Innovative", "Pricing", "for", "Modern", "Needs"];
    const FAQS_heading = {
  heading:"We’ve Got the Answers You’re Looking For",
  subheading:"Find answers to common queries about our product, features, and services. If you need more information, we’re here to help!"
}
 const FAQS_Data = [
        {
          question: "What pricing plans do you offer?",
          answer: `We currently offer 2 pricing plans. PKR 4,999 if you choose to sign up for the AI or Personal Branding community and PKR 9,999 if you want the all access pass that includes the AI Community, Personal Branding Community & Full Access to the Premium Kamyabi Community.`,
        },
        {
          question: "Do you offer a Bank Transfer option?",
          answer: `Unfortunately, we do not offer bank transfers. You can sign up directly using your debit / credit card. Make sure to ask your bank to enable online banking before you make the purchase.`,
        },
        {
          question:
            "The website lists PKR whereas I see Dollar Pricing at Check Out. Why is this happening?",
          answer: `Our experts, mentors and partners are located all over the world therefore we need the payout to be in dollars. However, the final bill including taxes from the Government of Pakistan as well as Bank Fee should be less the PKR amount listed.`,
        },
        {
          question: "Is this one time payment or monthly subscription?",
          answer: `We offer a monthly subscription plan designed to offer you convenience so you can cancel anytime. This, we've found, is better than charging a one time lum sum fees as many people may not be able to afford the high fees.`,
        },
        {
          question:
            "Can I upgrade or downgrade my plan at any time?",
          answer: `Absolutely! You can easily upgrade or downgrade your plan based on your evolving needs, without any hassle.`,
        },
        {
          question: "What payment methods do you accept?",
          answer: `We accept all major credit cards and offer secure online payment options. `,
        },
      ];
  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <Header title={titleWords}/>
      <PricingSection/>
      <FAQS heading={FAQS_heading.heading} subheading={FAQS_heading.subheading} FAQS_Data={FAQS_Data}/>
    </div>
  );
}

export default Pricing;
