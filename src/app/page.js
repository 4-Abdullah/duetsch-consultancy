
import AboutFounder from "./components/AboutFounder";
import Card from "./components/Card";
import Facilities from "./components/Facilities";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import Integration from "./components/Integration";
import { secondarybtnOnClickevent } from "./components/OnClickEvents";

 const Home =async()=> {
  const titleWords = ["Your", "Gateway", "to", "the", "15", "Trillion", "$*", "AI", "Economy"];
  const description = "*AI's share of Global Economy will be 15.7 Trillion US Dollars by 2030. (PwC)"
  const btnContent = {
  title: "Request Early Access",
  btnAction: secondarybtnOnClickevent
};

  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
       
      <Header title={titleWords} subtitle={description} actionBtn={btnContent}/>
      <AboutFounder/>
      <FeaturesSection/>
      <Facilities/>
      <Integration/>
    </div>
  );
}
export default Home