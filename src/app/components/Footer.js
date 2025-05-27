import Image from "next/image";

// Custom Icons Block
import Instagram from "./socialIcons/InstagramIcon";
import LinkedInIcon from "./socialIcons/LinkedInIcon";

function Footer() {
  return (
    <footer className="mt-auto w-full text-[#8C87AA] font-[family-name:var(--font-poppins)] shadow-md pl-40 pr-40 pt-0 pb-2.5">
      <div className="relative  items-center flex w-full rounded-2xl text-left overflow-hidden">
        <div>
          <Image
            className="object-contain rounded-md min-w-[100px] max-w-[150px] max-h-[100px] min-h-[50px]"
            src="/Logo.png"
            width={"150"}
            height={"100"}
            alt="image"
          />
          <div className="mt-4">
            <p className="text-sm text-wrap w-86 ">
              Kamyabi Network is a launchpad for Pakistan’s future — teaching
              AI, building portfolios, and connecting talent to global
              opportunities.
            </p>
          </div>
        </div>
        <div className="ml-auto flex space-x-4">
          <Instagram />
          <LinkedInIcon />
        </div>
      </div>
      <br />
      <br />

      <div className="flex justify-between items-center w-full border-t border-gray-600 pt-5 pr-2 pl-2">
        <p className="text-sm ">All copyrights are reserved one8nine FCZO</p>
        <p className="text-sm ">Made in Pakistan with 💜</p>
      </div>
    </footer>
  );
}

export default Footer;
