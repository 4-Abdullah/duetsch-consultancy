import Link from "next/link";
import Image from "next/image";

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

  return (
    <nav className="fixed top-0 w-full bg-[#0C0512] z-50 shadow-md animate-[slideDown_0.5s_ease-in-out] lg:px-10 xl:px-40 pl-2 pr-2 pt-2.5 pb-0">
      <div className="flex flex-col sm:flex-col lg:flex-row lg:pr-0 justify-between items-center
      w-full xl:px-0 2xl:px-10
      ">
        <Link href="/">
          <Image
            className="object-contain rounded-md w-auto max-w-[150px] h-auto max-h-[100px]"
            src="/Logo.png"
            width={150}
            height={100}
            alt="Logo"
          />
        </Link>
<div className="flex flex-col md:flex-row  xl:pr-0
  justify-between items-center  sm:flex-col 
">
 <div
          style={{ color: "#8C87AA", fontFamily: "var(--font-poppins)" }}
          className="flex space-x-6 bg-[rgba(12,5,18,0.9)] rounded-full backdrop-blur-md gap-2 flex-col  sm:flex-col sm:pb-3 md:flex-row  md:pr-10  lg:pl-14 xl:pr-20 pt-4 pb-0"
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
        )          
        })}
        </div>

        {/* Call to Action Button */}
        <div className="xl:pl-20 md:pl-5 lg:pl-20">
        <Button
          type="primary"
          url="/pricing"
          title="Explore Membership"
        />
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
