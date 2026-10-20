"use client";
// Component Block
import UserCard from "./UserCard";
// Data block
import { UserDataList_1, UserDataList_2, UserDataList_3 } from "../data";
export default function UserSay() {
  return (
    <section id="testimonial" className="pt-30 py-16 w-[90vw] bg-[#0C0512]">
      <div className="w-full lg:w-[650px] mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
          What our users are saying
        </h3>
        <p className="text-sm text-wrap lg:text-base mt-6">
          Hear from our premium members about how the platform has helped their
          digital journey.
        </p>
      </div>
      <div className="h-20" />
      <section
        className="flex flex-col lg:flex-row h-fit md:h-[1000px] overflow-hidden  w-full -gap-y-20  lg:gap-x-8 justify-center"
        style={{
          maskImage: `
    linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%),
    linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)
  `,
          WebkitMaskImage: `
    linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%),
    linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)
  `,
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in", // Ensures intersection works in WebKit
        }}
      >
        
        <div
          className=" flex lg:flex-col gap-[var(--gap)] 
          w-fit h-[100%]"
          style={{
            "--gap": "20px",
          }}
        >
          <ul
            className="w-fit flex shrink-0  h-72 lg:h-fit animate-[card-RrowLoop_20s_linear_infinite]
         lg:animate-[card-colLoop-downward_20s_linear_infinite] lg:flex-col gap-4"
          >
            {UserDataList_1.map((data, index) => (
              <li key={index}>
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
            className="flex shrink-0 h-72 w-fit lg:h-fit animate-[card-RrowLoop_20s_linear_infinite]
         lg:animate-[card-colLoop-downward_20s_linear_infinite] lg:flex-col gap-4"
          >
            {UserDataList_1.map((data, index) => (
              <li key={index}>
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
        </div>
        
        <div
          className=" flex lg:flex-col gap-[var(--gap)] 
          w-fit h-[100%]"
          style={{
            "--gap": "20px",
          }}
        >
          <ul
            className="flex w-fit shrink-0 h-72 lg:h-fit animate-[card-LrowLoop_20s_linear_infinite]
         lg:animate-[card-colLoop-upward_20s_linear_infinite] lg:flex-col gap-4"
          >
            {UserDataList_2.map((data, index) => (
              <li key={index}>
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
            className="flex w-fit h-72 lg:h-fit animate-[card-LrowLoop_20s_linear_infinite]
         lg:animate-[card-colLoop-upward_20s_linear_infinite] lg:flex-col gap-4"
          >
            {UserDataList_2.map((data, index) => (
              <li key={index}>
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
        </div>

        <div
          className=" flex lg:flex-col gap-[var(--gap)] 
          w-fit h-[100%]"
          style={{
            "--gap": "20px",
          }}
        >
          <ul
            className="flex w-fit h-72 lg:h-fit animate-[card-RrowLoop_20s_linear_infinite]
         lg:animate-[card-colLoop-downward_20s_linear_infinite] lg:flex-col gap-4"
          >
            {UserDataList_3.map((data, index) => (
              <li key={index}>
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
            className="flex w-fit h-72 lg:h-fit animate-[card-RrowLoop_20s_linear_infinite]
         lg:animate-[card-colLoop-downward_20s_linear_infinite] lg:flex-col gap-4"
          >
            {UserDataList_3.map((data, index) => (
              <li key={index}>
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
        </div>
      </section>
    </section>
  );
}
