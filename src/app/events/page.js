import Header from "../components/Header";
import TopCompaniesLogos from "../components/TopCompaniesLogos";

function Events() {
  const titleWords = ["10+", "Hours", "of", "Live", "Events", "Weekly!"]


  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <Header title={titleWords}/>
      <br/>
      <TopCompaniesLogos/>
    </div>
  );
}

export default Events;
