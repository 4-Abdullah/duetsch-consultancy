// Component Block
import AboutFounder from "./components/AboutFounder";
import CtaSection from "./components/CtaSection";
import Easytoset from "./components/Easytoset";
import Facilities from "./components/Facilities";
import FAQS from "./components/FAQS";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import Integration from "./components/Integration";
import PricingSection from "./components/PricingSection";
import UserSay from "./components/UserSay";
import { titleWords,description,btnContent,FAQS_Data,FAQS_heading } from "./data";
 const Home =async()=> {
 
  return (
    <div className="mt-15 text-[#8C87AA] bg-[#0C0512] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
       
      <Header title={titleWords} subtitle={description} actionBtn={btnContent}/>
      <AboutFounder/>
      <FeaturesSection/>
      <Facilities/>
      <Integration/>
      <Easytoset/>
      <UserSay/>
      <PricingSection/>
      <FAQS heading={FAQS_heading.heading} subheading={FAQS_heading.subheading} FAQS_Data={FAQS_Data}/>
      <CtaSection/>
    </div>
  );
}
export default Home