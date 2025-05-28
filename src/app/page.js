import AboutFounder from "./components/AboutFounder";
import Card from "./components/Card";
import Facilities from "./components/Facilities";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
       
      <Header />
      {/* <br/> */}
      <AboutFounder/>
      <FeaturesSection/>
      <Facilities/>
      
    </div>
  );
}
