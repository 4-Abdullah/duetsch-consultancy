"use client"
// Package block
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Component Block
import Button from "./Button.js";
import Underline from "./Underline.js";

function Navbar() {
  const routes = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/branding", text: "Branding" },
    { path: "/events", text: "Events" },
    { path: "/pricing", text: "Pricing" },
    { path: "/contact", text: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0C0512] font-[family-name:var(--font-poppins)] z-50 shadow-md animate-[slideDown_0.5s_ease-in-out] lg:px-10 xl:px-40  pt-1.5 pb-0 ">
      <div className=" flex flex-row sm:flex-row top-0 lg:flex-row lg:pr-0 justify-between items-center min-h-[50px]
      w-full xl:px-0 2xl:px-10 pt-0
      ">
        <Link href="/" className="absolute top-0 left-0 sm:absolute sm:top-0 sm:left-0 lg:top-2 xl:left-20 lg:fixed p-2">
          <Image
            className="object-contain rounded-md w-auto max-w-[150px] h-auto max-h-[100px]"
            src="/Logo.png"
            width={150}
            height={100}
            alt="Logo"
          />
        </Link>
      
<div className={`${isOpen?"flex relative pt-10 w-full   sm:bottom-0 ":"relative left-2/12 lg:bottom-0 lg:flex hidden sm:hidden"} flex-col lg:flex-row
  justify-between items-center text-center sm:flex-col
`}>
 <div
          className={` flex text-[#8C87AA]
           sm:space-y-2 lg:space-y-0 lg:space-x-6  pt-5 rounded-full gap-2 flex-col  sm:flex-col
            
  justify-between items-center text-center 
             sm:pb-3 lg:flex-row  lg:pl-20 xl:pl-30 xl:pb-0`}
        >
          {routes.map((route, index) => {
            return (
              <Link key={index} href={route.path}>
                <div
                  className="relative transition-all h-[30px] duration-300 group hover:text-white"
                >
                  <h2 className=" transition-colors duration-300">
                    {route.text}
                  </h2>
                <Underline />
              </div>
            </Link>
        )          
        })}
        </div>

          {/* Call to Action Button */}
          <div className={` lg:right-0 xl:right-20 lg:fixed  p-2 `}>
          <Button
            type="primary"
            url="/pricing"
            title="Explore Membership"
          />
          </div>

        </div>

       {/* Show Button ONLY when menu is closed */}
        <div className="absolute top-0 right-0 sm:top-0 sm:right-0 lg:sticky lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" bg-transparent cursor-pointer text-white px-2 py-2 rounded-full"
          >
            {isOpen ? (
          <span className="text-white text-3xl">✖</span> // Close Icon
        ) : (
          <span className="text-white text-3xl">☰</span> // Hamburger Icon
        )}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
