export function Truebox() {
  return (
    <div className="bg-[#4f60fa] w-7 h-7 md:w-8 md:h-8  rounded-lg opacity-100 flex items-center justify-center p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        viewBox="0 0 24 24"
        className="w-5 h-5 inline-block select-none shrink-0 fill-white stroke-white stroke-[1.5]"
      >
        <path d="M18 6.7l-8.48 8.48-3.54-3.54a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18c.39-.39.39-1.03-.01-1.42-.37-.38-1-.38-1.39.01z"></path>
      </svg>
    </div>
  );
}

export function Falsebox() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] w-7 h-7 md:w-8 md:h-8 rounded-lg opacity-100 flex items-center justify-center p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        viewBox="0 0 24 24"
        className="select-none w-5 h-5 inline-block fill-[rgb(6,4,13)] shrink-0"
      >
        <path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
      </svg>
    </div>
  );
}
