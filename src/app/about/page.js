// Component block
import AboutCards from "../components/AboutCards";
import AboutStats_Section from "../components/AboutStats_Section";
import AboutTeam from "../components/AboutTeam";
import CEO_Message from "../components/CEO_Message";
import CtaSection from "../components/CtaSection";
import Header from "../components/Header";
import Onscroll from "./Onscroll";
// Data block
import { titleWords } from "./data"

function About() {
 
  return (
     <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-5 gap-16 font-[family-name:var(--font-poppins)]">
      <Onscroll>
                <Header title={titleWords}/>
      </Onscroll>
       <Onscroll>
                <AboutCards/>
      </Onscroll>
      <Onscroll>
                <CEO_Message/>
      </Onscroll>
      <AboutTeam/>
     <Onscroll>
                <AboutStats_Section/>
      </Onscroll> 
      <Onscroll>
               <CtaSection/>
      </Onscroll>
    </div>
  );
}

export default About;
