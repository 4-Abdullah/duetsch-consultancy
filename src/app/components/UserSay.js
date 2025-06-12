"use client";
// Component Block
import UserCard from "./UserCard";
// Data block
import { UserDataList_1, UserDataList_2, UserDataList_3 } from "../data";
export default function UserSay() {
  return (
    <section id="testimonial" className="pt-30 py-16 w-[85vw] bg-[#0C0512]">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-medium text-white">
          What our users are saying
        </h3>
        <p className="text-xs sm:text-sm mt-4">
          Hear from our premium members about how the platform has helped their
          digital journey.
        </p>
      </div>

      <section
        className="flex flex-col sm:flex-col lg:flex-row   max-w-full max-h-full w-full gap-4 justify-center
    m-0
    p-[10px]
    list-none
    opacity-100 overflow-hidden
    relative
    "
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}
      >
        <ul
          className="flex h-72 sm:h-72 lg:h-dvh justify-items-start animate-[card-RrowLoop_10s_linear_infinite]  sm:animate-[card-RrowLoop_10s_linear_infinite]
         lg:animate-[card-colLoop-downward_10s_linear_infinite] sm:flex-row lg:flex-col gap-x-23 sm:gap-4 "
        >
          {[...UserDataList_1, ...UserDataList_1].map((data, index) => (
            <li key={index} className='className="flex flex-row w-full'>
              <div className="card w-full h-full ">
                <UserCard
                  name={data.name}
                  title={data.title}
                  image={data.image}
                  comment={data.comment}
                />
              </div>
            </li>
          ))}
        </ul>
        <ul
          className="flex h-72 sm:h-72 lg:h-dvh animate-[card-LrowLoop_10s_linear_infinite] sm:animate-[card-LrowLoop_10s_linear_infinite] justify-items-center
         lg:animate-[card-colLoop-upward_10s_linear_infinite] sm:flex-row lg:flex-col gap-x-23 sm:gap-4 "
        >
          {[...UserDataList_2, ...UserDataList_2].map((data, index) => (
            <li key={index} className="flex flex-row w-full">
              <div className="card w-full h-full ">
                <UserCard
                  name={data.name}
                  title={data.title}
                  image={data.image}
                  comment={data.comment}
                />
              </div>
            </li>
          ))}
        </ul>
        <ul
          className="flex h-72 sm:h-72 lg:h-dvh animate-[card-RrowLoop_10s_linear_infinite] sm:animate-[card-RrowLoop_10s_linear_infinite] justify-items-end
         lg:animate-[card-colLoop-downward_10s_linear_infinite] sm:flex-row lg:flex-col  gap-x-23 sm:gap-4 "
        >
          {[...UserDataList_3, ...UserDataList_3].map((data, index) => (
            <li key={index} className="flex flex-row w-full">
              <div className="card w-full h-full ">
                <UserCard
                  name={data.name}
                  title={data.title}
                  image={data.image}
                  comment={data.comment}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
