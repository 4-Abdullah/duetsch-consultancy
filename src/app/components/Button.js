function Button({ type, onClick, title, font }) {
  return (
    <div
      className={`${
        type === "primary"
          ? "flex items-center justify-center w-[213px] h-[48px]"
          : "flex items-center justify-center w-[313px] h-[48px]"
      }`}
    >
      <button
        onClick={onClick}
        className={`${
          type === "primary"
            ? "bg-[#0d0a17] rounded-[52px] cursor-pointer shadow-[inset_0px_-2px_6px_#e496ff,inset_0px_4px_6px_#0d0a17] w-full max-w-full h-full flex items-center justify-center text-white font-semibold"
            : `inline-block px-8 py-3 cursor-pointer text-white font-semibold rounded-full
            bg-[radial-gradient(67%_140%_at_4.6%_40.8%,_rgb(250,147,250)_0%,_rgb(152,58,214)_100%)]
            shadow-[inset_0px_-3px_3px_0px_rgb(228,150,255)]
             `
        }`}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
