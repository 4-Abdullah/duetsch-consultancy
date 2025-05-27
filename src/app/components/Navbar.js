"use client";
import Link from "next/link";
import Image from "next/image";

// Component Block
import Button from "./Button.js";
import Underline from "./Underline.js";
import { primarybtnOnClickevent } from "./OnClickEvents.js";
function Navbar() {
  const routes = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/branding", text: "Branding" },
    { path: "/events", text: "Events" },
    { path: "/pricing", text: "Pricing" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0C0512] z-50 shadow-md animate-[slideDown_0.5s_ease-in-out] pl-40 pr-40 pt-2.5 pb-0">
      <div className=" flex justify-between items-center">
        <Link href="/">
          <Image
            className="object-contain rounded-md min-w-[100px] max-w-[150px] max-h-[100px] min-h-[50px]"
            src="/Logo.png"
            width={"150"}
            height={"100"}
            alt="image"
          />
        </Link>
        <div
          style={{ color: "#8C87AA", fontFamily: "var(--font-poppins)" }}
          className="flex space-x-6 bg-[rgba(12,5,18,0.9)] rounded-full backdrop-blur-md gap-2 pl-12 pr-12 pt-4 pb-0 "
        >
          {routes.map((route, index) => {
            return (
              <Link key={index} href={route.path}>
                <div
                  style={{ height: "35px" }}
                  className="relative transition-all duration-300 group hover:text-white"
                >
                  <h2 className=" transition-colors duration-300">
                    {route.text}
                  </h2>
                  <Underline />
                </div>
              </Link>
            );
          })}
        </div>

        <Button
          type="primary"
          onClick={primarybtnOnClickevent}
          title="Explore Membership"
          font="var(--font-poppins)"
        />
      </div>
    </nav>
  );
}

export default Navbar;
