// Component block
import Button from "./Button";
// Data block
import { btnContent } from "../data";

export default function Brandingfeature() {
  return (
    <section
      id="feature"
      className="bg-black bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
             rounded-3xl shadow-lg border border-[#7379EF] text-white py-16 px-5"
    >
      <div className=" sm:w-[80vw] md:w-2xl lg:w-3xl ">
        {/* <!-- Card Head Block --> */}
        <div>
          <h2 className="text-4xl md:text-5xl  text-center">
            <strong>Digitise</strong> Yourself Now.
          </h2>
          <h2 className="text-4xl md:text-5xl text-center mt-2">
            Don't Get <strong>Left Behind</strong>.
          </h2>
          <div className="border-b border-gray-400 my-6"></div>
        </div>

        {/* <!-- Feature List Block --> */}
        <div className="mt-8 w-full text-[16px]">
          <h3 className="text-2xl font-semibold">
            In today’s fast-evolving world…
          </h3>
          <div className="mt-4  text-wrap space-y-4">
            <p>
              The real problem isn’t just talent. It’s{" "}
              <strong>visibility</strong>.
            </p>
            <p>
              Over <strong>63% of the world’s population</strong> is now online,
              and more than
              <strong>4.5 billion people</strong> are active on social media.
            </p>
            <p>
              Yet most individuals in Pakistan still don’t have a{" "}
              <strong>strong digital presence</strong>.
            </p>
            <p>
              <strong>90% of hiring managers</strong> now screen candidates
              online before making decisions, and businesses with strong
              personal brands <strong>generate 2X more leads</strong> and{" "}
              <strong>trust</strong>.
            </p>
            <p>
              But we’re still stuck in <strong>outdated systems</strong>.
            </p>
            <p>
              The <strong>bitter truth?</strong> Even when the right ecosystem
              is available, we hesitate to trust it or take that first step.
            </p>
            <p>
              But that’s exactly what needs to <strong>change</strong>.
            </p>
            <p>
              The <strong>Personal Branding Masterclass</strong> by Kamyabi
              Network is your starting point.
            </p>
          </div>
        </div>
        <br />
        <Button
          type="secondary"
          url={btnContent.url}
          title="IT'S TIME TO TAKE ACTION"
        />
      </div>
    </section>
  );
}
