// Component block
import Branding_moreQuestions from "../components/Branding_moreQuestions";
import BrandingCourseInfo from "../components/BrandingCourseInfo";
import Brandingfeature from "../components/Brandingfeature";
import BrandingMediaSection from "../components/BrandingMediaSection";
import Header from "../components/Header";
import Partners_Collaborators_Logos from "../components/Partners_Collaborators_Logos";
// Data block
import {titleWords, secondHeading, btnContent} from "./data"

function Branding() {

  return (
    <div className="mt-15 text-[#8C87AA] bg-[#0C0512] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-poppins)]">
      <Header
        title={titleWords}
        secondarytitle={secondHeading}
        actionBtn={btnContent}
      />
      <BrandingMediaSection/>
      <Partners_Collaborators_Logos/>
       <Brandingfeature/>
      <BrandingCourseInfo/>
     <Branding_moreQuestions/>
    </div>
  );
}

export default Branding;
