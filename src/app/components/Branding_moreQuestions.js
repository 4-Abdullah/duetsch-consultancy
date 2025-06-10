import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Branding_moreQuestions() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-20" />

      <div class="flex flex-col sm:w-full lg:w-[800px] border rounded-2xl bg-gradient-to-b from-[#0C0512] to-[#241C36] gap-10 items-center p-4 sm:p-10">
        <div class="flex justify-center w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            width={720}
            height={801}
            src="/branding_more_questions.png"
            alt=""
            className="block w-full h-full object-cover"
          />
        </div>

        <div className="text-left text-white space-y-5">
          <div class="text-xl font-semibold">
            Have any questions regarding the masterclass?
          </div>

          <p>
            If you have any questions about the mentorship, community, live
            Q&amp;A, collaboration, or anything else, we’re here to help.
          </p>
          <p>
            Feel free to reach out to us at
            <Link class="font-bold" href="mailto:hello@kamyabinetwork.com">
              {" "}
              hello@kamyabinetwork.com{" "}
            </Link>
            with any inquiries.
          </p>
          <p>
            Our Team is ready to assist you with detailed information, guidance,
            or any support you need to make the most out of your learning
            experience.
          </p>
        </div>
      </div>

      <p className="w-[80vw] sm:w-full lg:w-[870px] text-center pt-15  text-[16px] leading-[24px] tracking-normal text-[#9893b8] font-['Plus_Jakarta_Sans']">
        The information provided in this masterclass is for educational and
        informational purposes only. Results may vary depending on individual
        efforts, market conditions, and other factors. We do not guarantee
        specific outcomes, and any success stories or examples used are
        illustrative of past results and should not be considered typical.
        Participation in the masterclass does not create any guarantees or
        warranties regarding future results. By attending this, you agree that
        you are responsible for your own success and actions.
      </p>
    </div>
  );
}
