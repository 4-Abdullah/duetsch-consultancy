// Package block
import Image from "next/image";
// Custom Icons Block
import Instagram from "./socialIcons/InstagramIcon";
import LinkedInIcon from "./socialIcons/LinkedInIcon";
// Component block
import Gridbox from "./Gridbox";
// Data block
import {
  animationbox_Fgroup_1,
  animationbox_Fgroup_2,
  animationbox_Fgroup_3,
} from "../data";

function Footer() {
  return (
    <footer className="mt-auto w-full text-[#8C87AA] bg-[#0C0512] font-[family-name:var(--font-poppins)] shadow-md lg:px-10 xl:px-40 pl-2 pr-2 pt-0 pb-2.5">
      <Gridbox
        animationbox_group_1={animationbox_Fgroup_1}
        animationbox_group_2={animationbox_Fgroup_2}
        animationbox_group_3={animationbox_Fgroup_3}
        gridPosition=" left-0"
        gridsize="w-full h-6/12 sm:h-6/12 md:h-6/12"
        overlaysize="w-full h-6/12 sm:h-6/12 md:h-6/12 overlay-Flayer"
        overlay_layer="overlay_Flayer"
        overlayPosition="left-0"
      />
      <div className="relative z-20 flex flex-col sm:flex-row  w-full rounded-2xl sm:text-left overflow-hidden">
        <div className="pb-8">
          <Image
            className="object-contain rounded-md min-w-[100px] max-w-[150px] max-h-[100px] min-h-[50px]"
            src="/Logo.png"
            width={"150"}
            height={"100"}
            alt="image"
          />
          <div className="mt-4">
            <p className="w-[280px] text-sm sm:w-86 ">
              Kamyabi Network is a launchpad for Pakistan’s future — teaching
              AI, building portfolios, and connecting talent to global
              opportunities.
            </p>
          </div>
        </div>
        <div
          className=" flex justify-start sm:ml-auto sm:mr-0 sm:pt-16 space-x-4 mr-auto">
          <Instagram />
          <LinkedInIcon />
        </div>
      </div>
      <br />
      <br />

      <div className="relative z-20 flex flex-col md:flex-row  justify-between  w-full border-t border-gray-600 pt-5 pr-2 pl-2">
        <p className="text-sm pb-7 sm:pb-0">
          All copyrights are reserved one8nine FCZO
        </p>
        <p className="text-sm ">Made in Pakistan with 💜</p>
      </div>
    </footer>
  );
}

export default Footer;
