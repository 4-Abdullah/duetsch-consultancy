"use client";
import { useRouter } from "next/navigation";

export default function ContactUsform() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="text-left">
      <form
        onSubmit={handleSubmit}
        className={`w-full lg:w-xl flex flex-col p-5 md:p-10 gap-y-10 border
            border-b-violet-500 border-x-[#C47BF7] rounded-3xl border-t-[#24163D]
            bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
            hover:bg-[radial-gradient(53.6%_75%_at50%_50%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
            shadow-lg `}
      >
        <div className="block">
          <label className="text-white font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="i.e. Saad Khan"
            class="mt-2 block w-full p-3 rounded-lg  text-white border border-[#463C54] placeholder-[#8C87AA]
      focus:outline-1 focus:outline-offset-0 focus:outline-purple-600"
          />
        </div>

        <div class="block">
          <label class="text-white font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="i.e. saad@youremail.com"
            class="mt-2 block w-full p-3 rounded-lg  text-white border border-[#463C54] placeholder-[#8C87AA] 
       focus:outline-1 focus:outline-offset-0 focus:outline-purple-600"
          />
        </div>

        <div class="block">
          <label class="text-white font-medium">Query</label>
          <textarea
            name="query"
            placeholder="Share your query"
            class="mt-2 h-40 block w-full p-3 rounded-lg  text-white border border-[#463C54] placeholder-[#8C87AA]
      focus:outline-1 focus:outline-offset-0 focus:outline-purple-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`inline-block border-none px-8 py-3 cursor-pointer text-white font-semibold rounded-full
             shadow-inner shadow-pink-300 transition-all duration-300 relative 
             overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#EE88F6] before:to-purple-600 
             before:transition-transform before:duration-500 before:scale-x-100 hover:before:scale-x-0 hover: bg-gradient-to-l from-[#EE88F6] to-purple-600
             `}
        >
          <span className="relative z-10">Submit</span>
        </button>
      </form>
    </div>
  );
}
