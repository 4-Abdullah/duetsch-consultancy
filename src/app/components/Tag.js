import React from "react";
import Link from "next/link";

export default function Tag() {
  return (
    <Link href="/" className=" opacity-100 flex justify-center transform-none ">
      <div className="flex flex-row border p-1 h-8 border-gray-600 bg-[#271F35] rounded-4xl">
        <div className="flex flex-col  justify-start flex-shrink-0 outline-none">
          <p className="text-[12px] p-1 h-6 bg-[#4F60FA]   rounded-4xl font-medium leading-[19px] text-white">
            New
          </p>
        </div>
        <div className="flex flex-col justify-start p-1 flex-shrink-0 outline-none">
          <p className="text-[14px] leading-[18px] text-white">
            Membership paused until beta launch
          </p>
        </div>
      </div>
    </Link>
  );
}
