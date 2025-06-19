// Component Block
import { Falsebox, Truebox } from "./AvailabilityCheckbox";
// Data block
import { Tabledata } from "../pricing/data";
export default function ComparePlan() {
  return (
    <div className="w-[90vw] pt-20 xl:w-6xl h-full">
      <div className=" flex flex-col items-center text-center">
        {/* Title */}
        <h3 className="text-white  text-3xl sm:text-4xl md:text-5xl font-medium leading-[35px] sm:leading-[54px] tracking-tight">
          Detailed Feature Breakdown
        </h3>

        {/* Subtitle */}
        <h2 className="text-sm text-wrap w-full sm:text-[16px] leading-[20px] mt-2">
          Review the full feature set for each plan to find the one that best
          suits your needs.
        </h2>
      </div>
      <div className="h-10 sm:h-20 " />

      <table className="table-auto text-center w-full ">
        <thead>
          <tr className="w-full text-[16px] sm:text-[16px] md:text-2xl h-50 sm:h-50 md:h-25 text-white">
            <td className="w-full sm:h-30"></td>
            <td className="w-full p-0 sm:p-2">
              <div className="w-[15vw] sm:w-25 md:w-[18vw] md:h-full rotate-90 sm:rotate-90 md:rotate-0 ">Artificial Intelligence</div></td>
            <td className="border-t border-l border-r border-[#251E2A] p-0 sm:p-2">
             <div className="w-[15vw] sm:w-25 md:w-[18vw] md:h-full rotate-90 sm:rotate-90 md:rotate-0 ">
              Full Access</div>
            </td>
            <td className="p-0 sm:p-2">
             <div className="w-[15vw] sm:w-25 md:w-[18vw] md:h-full rotate-90 sm:rotate-90 md:rotate-0 ">
            Personal Branding</div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="text-left text-white p-2">
              Essential features
            </td>
            <td className="border-b border-[#251E2A] px-4 py-2"></td>
            <td className="border-l border-b border-r border-[#251E2A] px-4 py-2"></td>
            <td className="border-b border-[#251E2A] px-4 py-2"></td>
          </tr>
          {Tabledata.map((data, index) => (
            <tr key={index} className="text-center">
              <td className="w-[400px] sm:w-[400px] md:w-1/4 text-[16px] sm:text-[16px] border-b border-t  border-[#251E2A] text-left p-2 ">
                {data.feature}
              </td>
              <td className="w-[500px] sm:w-1/10 md:w-1/4 border-t border-b border-[#251E2A] p-2">
                <div className="flex flex-col sm:w-full sm:h-full md:h-full md:w-full items-center justify-center">
                  {data.AI ? <Truebox /> : <Falsebox />}
                </div>
              </td>
              <td className="w-1/4 sm:w-1/10 md:w-1/4 border border-[#251E2A] p-2">
                <div className="flex flex-col items-center justify-center">
                  {data.FA ? <Truebox /> : <Falsebox />}
                </div>
              </td>
              <td className="w-1/4 sm:w-1/10 md:w-1/4 border-b border-t border-[#251E2A] p-2">
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
