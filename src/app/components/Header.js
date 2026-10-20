// Component Block
import Button from "./Button";
import Gridbox from "./Gridbox";
import Header_title_mapping from "./Header_title_mapping";
// Data block
import { animationbox_Hgroup_1, animationbox_Hgroup_2, animationbox_Hgroup_3 } from "../data";

function Header({ title, actionBtn, subtitle, secondarytitle }) {
  
  
  return (
    <div className="w-full space-y-30">
  {/* Background grid boxes */}

      <Gridbox animationbox_group_1={animationbox_Hgroup_1} animationbox_group_2={animationbox_Hgroup_2}
       animationbox_group_3={animationbox_Hgroup_3} overlay_layer="overlay-Hlayer"
       gridPosition="top-0 left-0" gridsize="w-full h-6/12 sm:h-6/12 md:h-9/12" overlaysize="w-full h-6/12 sm:h-6/12 md:h-9/12 overlay-Hlayer"
        overlayPosition="top-0 left-0"/>
    
    <div className="-mt-20 md:h-2"/>
  <div className="relative  z-20 flex flex-col items-center justify-center px-0 sm:px-4">
 
      <div className="flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  justify-center text-center">
        <Header_title_mapping title={title}/> 
      </div>
{subtitle?
      <div className="pt-4">
        <h2 className="text-sm sm:text-sm md:text-lg  text-center text-[#9893B8]">
          {subtitle}
        </h2>
      </div>
      :<></>
}

          {secondarytitle ? (
            <div className="pt-4 flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  ">
              <h2 className=" sm:text-base md:text-xl lg:text-3xl text-center justify-center  text-white">
                {secondarytitle}
              </h2>
            </div>
          ) : (
            <></>
          )}

          {actionBtn ? (
            <div className="pt-6 flex justify-center">
              <Button
                type="secondary"
                url={actionBtn.url}
                title={actionBtn.title}
              />
            </div>
          ) : (
            <br />
          )}
      </div>
      <div className="h-1"/>
    </div>
  );
}

export default Header;
