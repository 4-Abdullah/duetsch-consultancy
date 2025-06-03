import React from "react";
import { Falsebox, Truebox } from "./AvailabilityCheckbox";
import { Tabledata } from "../pricing/data";
export default function ComparePlan() {
  return (
    <div className="w-6xl h-full">
      <div className="flex flex-col items-center text-center">
        {/* Title */}
        <h3 className="text-white text-5xl font-medium leading-[54px] tracking-tight">
          Detailed Feature Breakdown
        </h3>

        {/* Subtitle */}
        <h2 className=" text-[16px] leading-[18px] mt-2">
          Review the full feature set for each plan to find the one that best
          suits your needs.
        </h2>
      </div>
      <div className="h-20 " />

      <table className="table-auto text-center w-full">
        <thead>
          <tr className="text-2xl h-25 text-white">
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2">Artificial Intelligence</td>
            <td className="border-t border-l border-r border-[#251E2A] px-4 py-2">
              Full Access
            </td>
            <td className="px-4 py-2">Personal Branding</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="text-left text-white px-4 py-2">
              Essential features
            </td>
            <td className="border-b border-[#251E2A] px-4 py-2"></td>
            <td className="border-l border-b border-r border-[#251E2A] px-4 py-2"></td>
            <td className="border-b border-[#251E2A] px-4 py-2"></td>
          </tr>
          {Tabledata.map((data, index) => (
            <tr key={index} className="text-center">
              <td className="w-78 text-sm border-b border-t  border-[#251E2A] text-left px-4 py-2 ">
                {data.feature}
              </td>
              <td className="w-78 border-t border-b border-[#251E2A]  px-4 py-2">
                <div className="flex flex-col items-center justify-center">
                  {data.AI ? <Truebox /> : <Falsebox />}
                </div>
              </td>
              <td className="w-78 border border-[#251E2A] px-4 py-2">
                <div className="flex flex-col items-center justify-center">
                  {data.FA ? <Truebox /> : <Falsebox />}
                </div>
              </td>
              <td className="w-78 border-b border-t border-[#251E2A] px-4 py-2">
                <div className="flex flex-col items-center justify-center">
                  {data.PB ? <Truebox /> : <Falsebox />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="h-30" />
    </div>
  );
}
