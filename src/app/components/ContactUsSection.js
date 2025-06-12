// Component block
import ContactUsform from "./ContactUsform";

export default function ContactUsSection() {
  return (
    <div className="w-[90vw] sm:w-[90vw] xl:w-full pt-10 xl:pr-20 xl:pl-20">
      <div className="h-20" />
      <div className="w-full flex flex-col sm:flex-col lg:flex-row ">
        <div className="md:w-full lg:w-1/2 xl:w-xl flex flex-col  lg:justify-start lg:items-start lg:text-left sm:text-center sm:justify-center sm:items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl  xl:leading-[64px] sm:tracking-[-0.04em] text-white">
              Send Us a Note and Share Your Thoughts!
            </h3>
            <p className="mt-4 text-sm sm:text-sm text-wrap lg:text-sm xl:text-[16px]">
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to connect, reach out and let’s make it happen.
            </p>
          </div>
        </div>
        <div className="h-10 sm:h-10 lg:w-20" />

        <ContactUsform />
      </div>
      <div className="h-20" />
    </div>
  );
}
