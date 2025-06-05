import React from 'react'
import { btnContent } from "../data";
import Card from "./Card";
import Button from "./Button";
export default function FacilitiesVeiwCards({heading, subheading, FacilitiesCardData}) {

  return (
    <div id="cardsContainer" className="w-full pt-32">
  <section
    id="facilities"
    className="w-full"
  >
    <div className="flex flex-col md:flex-col gap-y-10 lg:flex-row justify-center items-center lg:gap-40">
      {/* Left Section: Text Content */}
      <div id="leftContent" className={`w-full  flex flex-col lg:sticky lg:top-0 gap-y-10 lg:h-[250vh] `}>
        <div className="flex flex-col lg:justify-start lg:items-start lg:text-left sm:text-center sm:justify-center sm:items-center  lg:sticky lg:top-36">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl md:text-4xl lg:2xl text-white font-medium leading-tight">
            {heading}
          </h3>
          <p className="mt-4 text-sm sm:text-sm text-wrap lg:text-lg">
            {subheading}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <Button type="secondary" url={btnContent.url} title="Request Early Access"/>
        </div>
      </div>
</div>
      
        
          {/* This inner container has a fixed height to control the scroll duration */}
          <div  className="lg:relative w-full space-y-4  sm:space-y-10 lg:h-[250vh]">
            {FacilitiesCardData.map((data,index)=>(
            <div key={index} className={`lg:sticky ${data.top} ${data.z}`}>
              <Card
                imagetype={data.imagetype}
                cardWidth={`w-full ${data.cardheight} max-w-[800px]`}
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </div>))}
          
      </div>
    </div>
    <div className='h-40'/>
  </section>
</div>
  )
}
