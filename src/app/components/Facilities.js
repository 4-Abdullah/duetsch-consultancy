// Component Block
import FacilitiesVeiwCards from "./FacilitiesVeiwCards";
import TopCompaniesLogos from "./TopCompaniesLogos";
// Data block
import { FacilitiesCardData, FacilitiesHeadingData } from "../data";
import { Logos, LogosViewType } from "../data";

export default function Facilities() {
  return (
    <div className="w-[90vw] bg-[#0C0512]">
      <FacilitiesVeiwCards
        heading={FacilitiesHeadingData.heading}
        subheading={FacilitiesHeadingData.subheading}
        FacilitiesCardData={FacilitiesCardData}
      />
      <div className="h-10 lg:h-10" />
      <div className="flex flex-col justify-start flex-shrink-0 outline-none">
        <h2 className="text-[37px] font-medium tracking-[-2.1px] text-center text-white font-poppins">
          Professionals from Top Companies
        </h2>
      </div>
      <TopCompaniesLogos Logos={Logos} LogosViewType={LogosViewType} />
    </div>
  );
}
