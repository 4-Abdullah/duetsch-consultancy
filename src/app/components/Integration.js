import React from "react";
import Image from "next/image";

// Component Block
import Button from "./Button";

export default function Integration() {
  const IntegrationPics = [
    {
      image: "/IntegrationPic_1.png",
      width: 61,
      height: 61,
      x: "left-[35%]",
      y: "top-[50%]",
    },
    {
      image: "/IntegrationPic_2.png",
      width: 71,
      height: 71,
      x: "left-[45%]",
      y: "top-[75%]",
    },
    {
      image: "/IntegrationPic_3.png",
      width: 68,
      height: 68,
      x: "left-[10%]",
      y: "top-[32%]",
    },
    {
      image: "/IntegrationPic_4.png",
      width: 75,
      height: 75,
      x: "left-[10%]",
      y: "top-[68%]",
    },
    {
      image: "/IntegrationPic_5.png",
      width: 81,
      height: 81,
      x: "left-[70%]",
      y: "top-[65%]",
    },
    {
      image: "/IntegrationPic_6.png",
      width: 122,
      height: 122,
      x: "left-[58%]",
      y: "top-[35%]",
    },
  ];

  return (
    <div
      className=" pt-40
    h-auto
    relative
    w-full bg-[#0C0512]"
    >
      <section className="w-full  opacity-100">
        <div
          className="flex flex-1  h-min-content 
                flex-row  gap-[48px]  max-w-[1200px]  relative w-full"
        >
          <div className="flex flex-row justify-center gap-10 ">
            <div className="flex flex-col justify-center w-[650px]  pt-15 pl-20">
              <div className="w-full gap-10">
                <h3 className="text-left font-bold text-5xl  text-white">
                  Exclusive Live Sessions with Experts
                </h3>
              </div>
              <div className="flex flex-col justify-start shrink-0 opacity-100 ">
                <br />
                <h2 className="text-left ">
                  The most <strong>life-changing knowledge</strong> isn’t found
                  in books or courses, it comes from
                  <strong>private conversations</strong> behind closed doors.
                  Get <strong>direct access </strong>
                  to industry leaders who have built{" "}
                  <strong>real success</strong> and learn from their
                  experiences.
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
                    <h2 className="text-left text-white font-bold">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>

              <br />
              <br />
              <Button type="secondary" url="./events" title="Learn More" />
            </div>
            <div className="w-xl items-center justify-center">
              <div className="relative opacity-100 w-full h-auto flex flex-col items-center justify-center">
                {/* Background Gradient */}
                <div className="relative pt-50 w-full">
                  <Image
                    src="/IntegrationPicBg.png"
                    width={568}
                    height={545}
                    alt="Background Gradient"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* App Images Overlay */}
                <div className="absolute inset-0 w-full h-full">
                  {IntegrationPics.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute ${src.x} ${src.y} rounded-full border border-white/10 bg-black/40 shadow-lg w-28 h-28 flex items-center justify-center`}
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
        </div>
      </section>
    </div>
  );
}
