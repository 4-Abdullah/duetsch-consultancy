// Component block
import ComparePlan from "../components/ComparePlan";
import CtaSection from "../components/CtaSection";
import FAQS from "../components/FAQS";
import Header from "../components/Header";
import PricingSection from "../components/PricingSection";
// Data block
import { titleWords, FAQS_heading, FAQS_Data } from "./data";
function Pricing() {
    
  return (
    <div className="mt-15 text-[#8C87AA] bg-[#0C0512] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 font-[family-name:var(--font-poppins)]">
      <Header title={titleWords}/>
      <PricingSection/>
      <ComparePlan/>
      <FAQS heading={FAQS_heading.heading} subheading={FAQS_heading.subheading} FAQS_Data={FAQS_Data}/>
      <CtaSection/>
    </div>
  );
}

export default Pricing;
