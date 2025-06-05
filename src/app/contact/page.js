// Component Block
import ContactInfo from "../components/ContactInfo";
import ContactUsSection from "../components/ContactUsSection";
import FAQS from "../components/FAQS";
import Header from "../components/Header";
import { FAQS_Data } from "../data";
import { titleWords,FAQS_heading } from "./data";
function ContactUs() {
  

  return (
    <div className="mt-15 text-[#8C87AA] bg-[#0C0512] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <Header title={titleWords}/>
      <ContactInfo />
      <ContactUsSection/>
      <FAQS heading={FAQS_heading.heading} subheading={FAQS_heading.subheading} FAQS_Data={FAQS_Data}/>
    </div>
  );
}

export default ContactUs;
