import Header from "../components/Header";

function Branding() {
  const titleWords = [
    "Welcome",
    "to",
    "the",
    "Personal",
    "Branding",
    "Community",
  ];
  const secondHeading =
    "With years in the digital media landscape and over 300 brand and media features, I’ve compiled the digital media blueprint to accelerate your digital media journey 🚀";
  const btnContent = {
    title: "Request Early Access to Masterclass",
  };

  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <Header
        title={titleWords}
        secondarytitle={secondHeading}
        actionBtn={btnContent}
      />
    </div>
  );
}

export default Branding;
