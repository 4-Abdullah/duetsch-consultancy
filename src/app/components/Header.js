// Component Block
import Button from "./Button";
import Header_title_mapping from "./Header_title_mapping";

function Header({ title, actionBtn, subtitle, secondarytitle }) {
  return (
    <div className="w-full ">
      {/* Background grid boxes*/}
      <div
        className="absolute top-0 left-0 w-full h-9/12 -z-10
      bg-[linear-gradient(to_bottom,#1A1420_1px,transparent_1px),
      linear-gradient(to_right,#1A1420_1px,transparent_1px)] bg-[80px_70px]"
      />

      <div className="relative flex flex-col items-center justify-center px-4 py-8">
        <div className="relative z-10">
          <br />
          <div className="flex flex-col w-full sm:w-xl md:w-2xl lg:w-4xl  justify-center text-center">
            <Header_title_mapping title={title} />
          </div>
          {subtitle ? (
            <div className="mt-4 ">
              <h2 className=" sm:text-base md:text-lg  text-center text-[#9893B8]">
                {subtitle}
              </h2>
            </div>
          ) : (
            <br />
          )}

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
    </div>
  );
}

export default Header;
