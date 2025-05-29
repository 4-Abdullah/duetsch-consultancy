import Header from "../components/Header";

function ContactUs() {
  const titleWords  = ["Join", "the", "Movement.", "Connect", "with", "the", "Team", "Behind", "It."];

  return (
    <div className="mt-15 text-[#8C87AA] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-poppins)]">
      <Header title={titleWords}/>
    </div>
  );
}

export default ContactUs;
