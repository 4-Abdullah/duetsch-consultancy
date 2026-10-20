// Package block
import Image from "next/image";
// Component Block
import Button from "./Button";
// Data block
import { IntegrationPics } from "../data";
export default function Integration() {
  return (
    <section>
      <div className="relative flex flex-col pt-40 bg-[#0C0512] w-[95vw] h-full sm:flex-col md:flex-row  justify-center  ">
        <div className="flex flex-col justify-center sm:w-full md:w-[650px] p-2  md:pt-15 md:pl-20">
          <div className="w-full gap-10">
            <h3 className="text-left font-bold text-3xl sm:text-4xl lg:text-5xl  text-white">
              Exclusive Live Sessions with Experts
            </h3>
          </div>
          <div className="flex flex-col justify-start shrink-0 opacity-100 ">
            <br />
            <h2 className="text-left sm:w-xl md:w-full text-wrap text-sm sm:text-sm lg:text-[16px]">
              The most <strong>life-changing knowledge</strong> isn’t found in
              books or courses, it comes from
              <strong>private conversations</strong> behind closed doors. Get{" "}
              <strong>direct access </strong>
              to industry leaders who have built <strong>
                real success
              </strong>{" "}
              and learn from their experiences.
            </h2>
            <br />
          </div>
          <div className="opacity-100 space-y-4">
            {[
              { title: "Finance" },
              { title: "Tech" },
              { title: "Startups" },
              { title: "Career" },
              { title: "More to come..." },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                {/* Icon Block */}
                <div className="bg-[#4F60FA] rounded w-5 h-5 p-0.5 flex items-center justify-center">
                  <Image
                    src="/checkbox.svg"
                    width={200}
                    height={100}
                    alt=""
                    className="w-full h-full object-contain rounded-cover"
                  />
                </div>
                {/* Text Block */}
                <h2 className="text-left text-white font-bold">{item.title}</h2>
              </div>
            ))}
          </div>

          <br />
          <br />
          <div className="flex justify-start">
            <Button type="secondary" url="./events" title="Learn More" />
          </div>
        </div>
        <div className="sm:w-0 md:w-5 xl:w-20" />
        <div className="w-full sm:w-xl items-center justify-center">
          <div className="relative w-full h-auto flex flex-col items-center justify-center">
            {/* Background Gradient */}

            <Image
              src="/IntegrationPicBg.png"
              width={568}
              height={545}
              alt="Background Gradient"
              className="relative  w-full sm:pt-30 md:pt-50 sm:w-full h-full object-contain"
            />

            {/* App Images Overlay */}
            <div className="absolute inset-0 w-full h-full">
              {IntegrationPics.map((src, index) => (
                <div
                  key={index}
                  className={`absolute ${src.x} ${src.y} rounded-full border border-white/10 -translate-x-[3px] -translate-y-[80px]
                       sm:-translate-x-[10px] sm:-translate-y-[10px]  md:translate-y-[20px] bg-black/40 shadow-lg w-17 h-17
                       sm:w-24 sm:h-24 md:w-18 lg:w-24 xl:w-28 md:h-18 lg:h-24 xl:h-28 flex items-center justify-center`}
                >
                  <Image
                    src={src.image}
                    width={src.width}
                    height={src.height}
                    alt="App Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </section>
  );
}
