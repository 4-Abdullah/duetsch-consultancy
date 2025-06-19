// Component block
import FAQS_card from "./FAQS_card";
// Data block
import { Feature_FAQS_Style } from "../data";

export default function FAQS({ heading, subheading, FAQS_Data }) {
  return (
    <div className="space-y-15 pt-20 py-10 sm:w-[95vw] lg:w-4xl  h-auto ">
      <div className="text-center space-y-10">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-medium text-white">
          {heading}
        </h3>
        <h2 className="text-sm sm:text-[17px] ">{subheading}</h2>
      </div>
      <div className="space-y-5 w-full sm:w-full  lg:w-4xl">
        {FAQS_Data.map((data, index) => (
          <div key={index}>
            <FAQS_card
              index={index}
              question={data.question}
              answer={data.answer}
              style={Feature_FAQS_Style}
            />
          </div>
        ))}
      </div>
      <div className="h-10"/>
    </div>
  );
}
