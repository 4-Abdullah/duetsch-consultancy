// Component Block
import Button from "./Button";
import Header_title_mapping from "./Header_title_mapping";

function Header({ title, actionBtn, subtitle, secondarytitle }) {
  return (
    <div className="w-full space-y-30">
  {/* Background grid boxes*/}
<div className="absolute top-0 left-0 w-full h-9/12 z-0 header-grid"/>


  <div className="relative flex flex-col items-center justify-center px-4 py-8">
    <div className="relative z-20"> 
      <br />
      <div className="flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  justify-center text-center">
        <Header_title_mapping title={title}/> 
      </div>
{subtitle?
      <div className="mt-4 ">
        <h2 className=" sm:text-base md:text-lg  text-center text-[#9893B8]">
          {subtitle}
        </h2>
      </div>
      :<br/>
}

          {secondarytitle ? (
            <div className="mt-4 flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  ">
              <h2 className=" sm:text-base md:text-xl lg:text-3xl text-center justify-center  text-white">
                {secondarytitle}
              </h2>
            </div>
          ) : (
            <br />
          )}

          {actionBtn ? (
            <div className="mt-8 flex justify-center">
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
      </div>
      <div className="h-20"/>
    </div>
  );
}

export default Header;
