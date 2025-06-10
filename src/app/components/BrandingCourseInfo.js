import React from "react";
import FAQS_card from "./FAQS_card";
import BrandingFocus from "./BrandingFocus";

export default function BrandingCourseInfo() {
  const Feature_FAQS_Data = [
    {
      question: "🏗️ Introduction & Foundational Content",
      answer: `You will understand why building a digital brand matters and how digital media works.
             You’ll explore different types of digital media, the evolution of the internet globally and in Pakistan,
              and get insights into genres across platforms like YouTube and Instagram.`,
    },
    {
      question: "🎯 Niche Selection",
      answer: `Focuses on helping you choose a niche by identifying your strengths and market potential. You’ll learn about
            building your brand, understanding your audience, and maintaining consistency. You'll also get introduced to Notion,
             learning how to set it up and organize your content efficiently.`,
    },
    {
      question: "🧑‍🤝‍🧑 Understanding the Content & Audience",
      answer: `You’ll dive into understanding your audience and analyzing content platforms. Learn how to build influence,
            create relatable or aspirational content, and establish a community. You’ll also explore audience research methods
            and start structuring your content strategy.`,
    },
    {
      question: "🗣️ Scripting and Visualization of a Piece of Content",
      answer: `Covers the basics of scripting, including writing hooks and formatting scripts. You'll also learn how to
             create shot lists and plan your content visually for maximum impact.`,
    },
    {
      question: "🎥 Filming Basics",
      answer: `Basics of filming, including framing, lighting, and sound quality. Understand how to compose shots, use a
             camera effectively, and apply photography and videography principles to your first video project.`,
    },
    {
      question: "🎞️ Video Editing",
      answer: `This week is all about editing your filmed content. You'll explore tools like Capcut, Premiere Pro, and
             Canva for video editing and thumbnail creation. Learn how to add transitions, effects, and background music to
              make your video visually appealing.`,
    },
    {
      question: "📈 Social Media Analytics, Scaling, Monetization & PR",
      answer: `How to measure your content's performance on Instagram, YouTube, and LinkedIn using analytics. Learn
             strategies for scaling your digital brand, explore monetization methods like affiliate marketing and sponsored
              content, and get an introduction to PR strategies for growth.`,
    },
    {
      question:
        "⚔️ Launching a Digital Course (Value Proposition and Planning)",
      answer: `Basics of creating and launching a digital course. Understand how to define the problem your course solves,
             build its value proposition, design a course structure, and choose the right platform to host it.`,
    },
    {
      question: "🌐 Creating and Managing Community",
      answer: `Focuses on community building. You’ll learn how to set up community spaces on platforms like Skool and Circle
             and get tips on scaling and managing your community effectively.`,
    },
    {
      question: "⚖️ Legal/Ethics & Future of Social Media",
      answer: `Covers the legal and ethical side of content creation, including copyrights, trademarks, and fair use. You’ll
             also explore content ownership and discuss the future of social media to prepare for what lies ahead.`,
    },
  ];

  const Feature_FAQS_Style = {
    bg: "bg-[#241C36]",
    textsize: "text-lg",
    textcolor: "text-white",
    padding: "pt-8 pl-7 pr-3 pb-8",
  };

  return (
    <section class=" text-[#8474B4] sm:p-8 rounded-2xl shadow-lg">
      <div className="h-20" />
      <div class="w-full md:w-[80vw] lg:w-4xl ">
        {/* <!-- Heading Section --> */}
        <div class="text-center">
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
          <h3 class="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-4">
            What's in the Personal Branding Course?
          </h3>
        </div>

        {/* <!-- Course Description --> */}
        <div class="mt-6 text-[16px] text-center">
          <p class="text-sm sm:text-[16px] text-gray-200">
            The Personal Branding Masterclass is an immersive, interactive
            experience designed to distill years and thousands of hours of
            digital media expertise into actionable insights.
          </p>
        </div>
        <br />

        <div
          class="flex flex-col sm:flex-col md:flex-row gap-5 border-[#7379EF] bg-black bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
             rounded-3xl shadow-lg border p-4 sm:p-6 w-full justify-between mx-auto space-y-2"
        >
          {/* <!-- Feature Item: Recorded Modules --> */}
          <div class="flex flex-col items-start space-x-4 w-1/3">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 33 33"
            >
              <path
                d="M 1.941 17.275 C 4.252 19.779 5.237 23.004 6.894 25.92 C 7.621 27.198 8.163 28.524 8.756 29.864 C 9.052 30.532 9.208 31.55 9.861 30.684 C 13.338 26.069 16.778 21.36 20.146 16.66 C 23.681 11.728 26.889 6.494 30.905 1.941"
                stroke-linecap="round"
              ></path>
            </svg>
            <div className="w-[80vw] sm:w-[450px] md:w-full">
              <h4 class="text-2xl text-wrap sm:text-3xl  text-white pt-5">
                Recorded Modules
              </h4>
              <p class="w-[65vw] sm:w-[75vw] md:w-full pt-3">
                Watch extensively researched and beginner-friendly modules
                covering almost every topic, with regular updates and new
                modules added rapidly.
              </p>
            </div>
          </div>

          {/* <!-- Feature Item: 24/7 Community Access --> */}
          <div class="flex flex-col items-start space-x-4 w-1/3">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 33 33"
            >
              <path
                d="M 1.941 17.275 C 4.252 19.779 5.237 23.004 6.894 25.92 C 7.621 27.198 8.163 28.524 8.756 29.864 C 9.052 30.532 9.208 31.55 9.861 30.684 C 13.338 26.069 16.778 21.36 20.146 16.66 C 23.681 11.728 26.889 6.494 30.905 1.941"
                stroke-linecap="round"
              ></path>
            </svg>
            <div className="w-[200px] sm:w-[480px] md:w-full">
              <h4 class="text-2xl font-semibold text-white pt-5">
                24/7 Community Access
              </h4>
              <p class="w-[65vw] sm:w-[75vw] md:w-full pt-3">
                Enjoy round-the-clock access to a supportive community
                throughout the course.
              </p>
            </div>
          </div>

          {/* <!-- Feature Item: Access to Top Creators --> */}
          <div class="flex flex-col  items-start space-x-4 w-1/3">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 33 33"
            >
              <path
                d="M 1.941 17.275 C 4.252 19.779 5.237 23.004 6.894 25.92 C 7.621 27.198 8.163 28.524 8.756 29.864 C 9.052 30.532 9.208 31.55 9.861 30.684 C 13.338 26.069 16.778 21.36 20.146 16.66 C 23.681 11.728 26.889 6.494 30.905 1.941"
                stroke-linecap="round"
              ></path>
            </svg>
            <div className="w-[200px] sm:w-[480px] md:w-full">
              <h4 class="text-2xl font-semibold text-white pt-5">
                Access to Top Creators
              </h4>
              <p class="w-[65vw] sm:w-[75vw] md:w-full pt-3">
                Weekly interactions with renowned Pakistani digital creators,
                offering a chance to learn directly from their unique
                perspectives and expertise.
              </p>
            </div>
          </div>
        </div>

        <section class="md:w-full lg:w-4xl mx-auto pt-6 pl-0">
          <div class="space-y-3">
            {Feature_FAQS_Data.map((data, index) => (
              <div key={index}>
                <FAQS_card
                  index={index}
                  style={Feature_FAQS_Style}
                  question={data.question}
                  answer={data.answer}
                />
              </div>
            ))}
          </div>
        </section>

        <BrandingFocus />
      </div>
    </section>
  );
}
