"use client"
import { useRouter } from "next/navigation";

function Button({ type, url, title }) {
  const router = useRouter();

 function primarybtnOnClickevent () {
  
 return router.push(url)
}
 function secondarybtnOnClickevent () {

 return router.push(url)
}
  return (
    <div
      className={`${
        type === "primary"
          ? "flex items-center justify-center w-[213px] h-[48px]"
          : "flex items-center justify-center w-auto h-[48px]"
      }`}
    >
      <button
        onClick={(type === "primary")?()=>primarybtnOnClickevent():()=>secondarybtnOnClickevent()}
        className={`${
          type === "primary"
            ? `bg-[#0d0a17] rounded-[52px] cursor-pointer shadow-[inset_0px_-2px_6px_#e496ff,inset_0px_4px_6px_#0d0a17] w-full max-w-full h-full flex items-center justify-center
              text-white font-semibold hover:border hover:border-[#0d0a17] hover:shadow-[inset_0px_0px_3px_#e496ff]`
            : `inline-block border-none px-8 py-3 cursor-pointer text-white font-semibold rounded-full
             shadow-inner shadow-pink-300 transition-all duration-300 relative 
             overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#EE88F6] before:to-purple-600 
             before:transition-transform before:duration-500 before:scale-x-100 hover:before:scale-x-0 hover: bg-gradient-to-l from-[#EE88F6] to-purple-600
             `
        }`}
      >
       <span className="relative z-10">{title}</span>
      </button>
    </div>
  );
}

export default Button;
