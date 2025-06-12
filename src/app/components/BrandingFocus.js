// Package Block
import Image from "next/image";
// Component block
import { btnContent } from "../data";
import Button from "./Button";
// Data block
import { Branding_focus_Data1, Branding_focus_Data2 } from "../branding/data";
export default function BrandingFocus() {

  return (
    <div className="pt-8 ">
      <div class="text-center pb-10">
        <div class="flex justify-center">
          <svg
            class="w-15 h-20 text-[#76468D]"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
            viewBox="0 0 43 76"
          >
            <path
              d="M 23.998 4.627 C 23.847 5.383 23.125 5.841 22.688 6.435 C 21.525 8.013 20.539 9.831 19.546 11.521 C 16.6 16.527 13.384 21.361 10.392 26.347 C 7.56 31.067 5.884 35.941 3.567 40.834 C 3.367 41.254 2.467 42.806 3.454 42.258 C 5.204 41.285 9.013 42.054 10.957 42.054 C 11.624 42.054 19.877 41.554 19.93 42.461 C 20.196 46.993 18.4 52.161 17.896 56.7 C 17.529 60 16.816 63.296 16.178 66.553 C 15.793 68.523 15.923 70.703 15.138 72.565 C 14.64 73.75 15.371 72.435 15.478 71.955 C 15.96 69.785 17.076 67.476 17.918 65.423 C 21.141 57.568 26.116 50.725 30.078 43.297 C 33.086 37.657 36.678 32.167 39.66 26.799 C 39.904 26.359 40.936 25.086 40.18 25.691 C 39.42 26.299 37.307 26.542 36.383 26.595 C 31.504 26.874 26.513 29.178 21.76 30.234 C 20.942 30.416 17.464 32.464 18.393 30.256 C 19.756 27.019 19.838 23.254 20.743 19.86 C 21.712 16.229 21.955 12.328 23.093 8.786 C 23.41 7.805 24.212 3.3 24.813 3"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <h3 class="text-5xl font-bold text-white mt-4">What we Focus on</h3>
      </div>
      <div className="w-full sm:w-[85vw] md:w-full flex flex-col sm:flex-col md:flex-row gap-y-5 sm:gap-y-5 md:gap-x-5">
        {Branding_focus_Data1.map((data, index) => (
          <div
            key={index}
            class="w-full sm:w-full md:w-md mx-auto p-3 sm:p-8 bg-[#241C36] border  rounded-xl shadow-lg overflow-hidden"
          >
            {/* <!-- Image Section --> */}
            <div class="flex justify-center items-center pt-5 pb-15">
              <Image
                class="h-60 sm:h-90 w-full sm:w-11/12 md:w-[400px]  rounded-2xl  object-cover"
                width={300}
                height={300}
                src={data.image}
                alt="Community Interaction"
              />
            </div>

            {/* <!-- Content Section --> */}
            <div>
              <h3 className="text-lg sm:text-2xl md:text-2xl font-semibold text-white">
                {data.title}
              </h3>
              <p className="text-xs sm:text-[16px] text-gray-300 w-full sm:w-full  text-wrap mt-4">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="w-full sm:w-[85vw] md:w-full  flex flex-col sm:flex-col  gap-y-10">
        {Branding_focus_Data2.map((data, index) => (
          <div
            key={index}
            class="w-full flex flex-col sm:flex-col md:flex-row sm:w-full md:w-full gap-x-10 mx-auto p-3 sm:p-8 bg-[#241C36] border  rounded-xl shadow-lg overflow-hidden"
          >
            {/* <!-- Content Section --> */}
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                {data.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-[16px] text-gray-300 w-full sm:w-full text-wrap mt-4">
                {data.description}
              </p>
            </div>
            <br />
            {/* <!-- Image Section --> */}
            <div>
              <Image
                class="w-full sm:w-full md:w-[1500px] h-60 sm:h-90 md:h-full  rounded-2xl object-cover"
                width={300}
                height={300}
                src={data.image}
                alt="Community Interaction"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-10" />
      <Button type="secondary" title={btnContent.title} url={btnContent.url} />
    </div>
  );
}
