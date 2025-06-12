// Data block
import { Stats_Data } from "../about/data";

export default function AboutStats_Section() {
  
  return (
    <div>
      <div className="h-10" />
      <div className="w-[90vw] sm:w-full md:w-[740px] lg:w-4xl xl:w-6xl h-full flex flex-col sm:flex-col md:flex-row gap-10 justify-center items-center">
        {Stats_Data.map((data, index) => (
          <div
            key={index}
            className="w-full  sm:w-xl md:w-sm p-6 border border-b-violet-500 border-x-[#C47BF7] rounded-3xl border-t-[#24163D]  bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
                      shadow-lg "
          >
            <div className="flex grow items-center mt-4 space-x-4">
              <div>
                <p className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl  font-bold text-white">
                  {data.number}+
                </p>
                <p className="mt-4 text-[16px] sm:text-lg lg:text-xl">
                  {data.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-50" />
    </div>
  );
}
