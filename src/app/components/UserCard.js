// Package block
import Image from "next/image";

export default function UserCard({ name, title, image, comment }) {
  return (
    <div
      className="snap-start w-72 p-4 sm:p-6 border-[#24163D]  bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
             rounded-4xl shadow-lg border"
    >
      <p>{comment}</p>
      <div className="flex items-center mt-4 space-x-4">
        <Image
          className="w-12 h-12 rounded-full object-cover"
          src={image}
          width={30}
          height={30}
          alt="Profile"
        />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className=" text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
}
