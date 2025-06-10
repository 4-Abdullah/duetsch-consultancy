// Component block
import CtaSection from "../components/CtaSection";
import FacilitiesVeiwCards from "../components/FacilitiesVeiwCards";
import Header from "../components/Header";
import SomeRecentEvents from "../components/SomeRecentEvents";
import TopCompaniesLogos from "../components/TopCompaniesLogos";
import { Logos, LogosViewType } from "../data";
import { titleWords, FacilitiesCardData, FacilitiesHeadingData } from "./data";
function Events() {


  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <Header title={titleWords}/>
      <br/>
      <TopCompaniesLogos Logos={Logos} LogosViewType={LogosViewType}/>
      <SomeRecentEvents/>
      <FacilitiesVeiwCards
        heading={FacilitiesHeadingData.heading}
        subheading={FacilitiesHeadingData.subheading}
        FacilitiesCardData={FacilitiesCardData}
      />
      <CtaSection/>
    </div>
  );
}

export default Events;
