// Package Block
import Image from "next/image";

// Custom Components & Functions Block
import Underline from "./Underline";

// Note: Improve this component & remove un-used comment
function Card({ image, title, description }) {
  // bg-[#0d0a17]  shadow-[inset_0px_-2px_6px_rgba(228,150,255,0.3),inset_0px_4px_6px_rgba(13,10,23,0.3)]
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden  border-gradient-to-r from-violet-800 via-violet-400 to-violet-800">
      {/* Image container: relative container with fixed height */}
      <div className="relative h-48">
        <Image
          src={image} // place your image in the public folder
          alt="Card Background"
          fill // makes the Image absolutely fill its parent container
          className="object-cover" // ensures the image covers container while preserving aspect ratio
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/70 to-transparent" />
      {/* </div> */}
      {/* Card content container */}
      <div className="p-4 ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
    //     <div className="w-full max-w-md  rounded bg-gradient-to-b from-purple-700 via-purple-500 to-purple-300 shadow-lg">
    //   <div
    //   style={{ backgroundImage: `url(${image})` }}
    //   className="w-[700px] h-auto bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
    // >
    //   {/* Card content goes here */}
    // </div>

    // {/*
    //     <div className="bg-[#0d0a17] w-72 rounded-[20px] relative transition-all duration-300 group hover:text-white"> */}

    //   {/* <div style={{backgroundImage:`url(${image})`, width:"300px", height:"200px"}} className="w-full h-auto justify-center rounded-lg object-cover"/> */}

    //     {/* </div> */}
    //     <div className="text-white mt-4">
    //       <p className="text-lg font-semibold">{title}</p>
    //       <h2 className="text-xl font-bold">
    //         {description}
    //       </h2>

    //   </div>
    // </div>
  );
}

export default Card;
