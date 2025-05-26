import { useState } from "react";

  // remove javascript files and use core tailwind classes

function Button({ type, onClick, title, font }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: "213px", height: "48px" }}
    >
      <button
        style={{ fontFamily: `${font}` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        className={`${
          type === "primary"
            ? "bg-[#0d0a17] rounded-[52px] shadow-[inset_0px_-2px_6px_#e496ff,inset_0px_4px_6px_#0d0a17] w-full max-w-full h-full flex items-center justify-center text-white font-semibold"
            : hovered
            ? "px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white font-semibold shadow-md "
            : "px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 text-white font-semibold shadow-md"
        }`}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
