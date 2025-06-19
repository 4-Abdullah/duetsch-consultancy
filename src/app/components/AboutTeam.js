// Package Block
import Image from "next/image";
// Data block
import { AboutTeam_Data } from "../about/data";

export default function AboutTeam() {
  

  return (
    <div className=" py-28 flex flex-col text-center items-center">
      <div className="flex flex-col text-center items-center w-full sm:w-[625px]">
        <div className="text-3xl sm:text-3xl md:text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]">
          the Team Behind Kamyabi.
        </div>
        <div className="text-[14px] md:text-[16px] w-full sm:w-[430px] p-5 ">
          Built by Industry Experts, Backed by Experience Tech Leaders. Mentors.
          Builders. Doers.
        </div>
      </div>
      <div className="h-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full sm:w-11/12 xl:w-6xl h-full text-left gap-5">
        {AboutTeam_Data.map((data, index) => (
          <div key={index} className="flex flex-col">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Image"
              className="object-cover w-full md:w-2xl border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-3xl"
            />
            <div className="py-5">
              <div className="text-white text-xl md:text-2xl">
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
