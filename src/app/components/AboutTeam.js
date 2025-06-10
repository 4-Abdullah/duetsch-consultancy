import Image from "next/image";
import React from "react";

export default function AboutTeam() {
  const AboutTeam_Data = [
    {
      image: "/About_Muzamil Hasan.png",
      name: "Muzamil Hasan",
      title: "Founder",
    },
    {
      image: "/About_Yousaf Bilal.jpg",
      name: "Yousaf Bilal",
      title: "Co-founder & Product Lead",
    },
    {
      image: "/About_Talha Sheikh.png",
      name: "Talha Sheikh",
      title: "Co-founder & Growth Lead",
    },
    {
      image: "/About_Muhammad Usman.png",
      name: "Muhammad Usman",
      title: "AI Expert",
    },
    {
      image: "/About_Asim Nadeem.png",
      name: "Asim Nadeem",
      title: "AI Expert",
    },
    {
      image: "/About_Zeeshan Ahmad.png",
      name: "Zeeshan Ahmad",
      title: "Finance Expert",
    },
    {
      image: "/About_Arshman Khalid.png",
      name: "Arshman Khalid",
      title: "Technology Expert",
    },
    {
      image: "/About_Umair Bin Tahir.png",
      name: "Umair Bin Tahir",
      title: "HR Expert",
    },
    {
      image: "/About_Ahmad Khan Niazi.png",
      name: "Ahmad Khan Niazi",
      title: "Startup Expert",
    },
    {
      image: "/About_Omair.png",
      name: "Omair",
      title: "Web 3.0 Expert",
    },
    {
      image: "/About_Minaam Fasihi.png",
      name: "Minaam Fasihi",
      title: "Technology Expert",
    },
    {
      image: "/About_Ahsin Ilyas.png",
      name: "Ahsin Ilyas",
      title: "Marketing Expert",
    },
  ];

  return (
    <div className=" py-28 flex flex-col text-center items-center">
      <div className="flex flex-col text-center items-center w-full sm:w-[625px]">
        <div className="text-3xl sm:text-3xl md:text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]">
          the Team Behind Kamyabi.
        </div>
        <div className="text-[14px] sm:text-[14px] md:text-[16px] w-full sm:w-[430px] p-5 ">
          Built by Industry Experts, Backed by Experience Tech Leaders. Mentors.
          Builders. Doers.
        </div>
      </div>
      <div className="h-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full sm:w-11/12 xl:w-6xl h-full text-left gap-5">
        {AboutTeam_Data.map((data, index) => (
          <div key={index} className="flex flex-col">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Image"
              className="object-cover w-full sm:w-full md:w-2xl border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-3xl"
            />
            <div className="py-5">
              <div className="text-white sm:text-xl md:text-2xl">
                {data.name}
              </div>
              <div className="text-[14px] sm:text-[14px] md:text-[16px]">
                {data.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-10 " />
    </div>
  );
}
