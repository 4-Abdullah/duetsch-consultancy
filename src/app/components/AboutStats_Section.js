import React from 'react'

export default function AboutStats_Section() {
  const Stats_Data = [
    {
      title:"Events Hosted",
      number:"20",
    },
    {
      title:"Premium Members",
      number:"200",
    },
    {
      title:"Hours of Sessions",
      number:"500",
    },

  ]
  return (
    <div>
      <div className='h-10'/>
    <div className='w-7xl h-full flex flex-row sm:flex-col md:flex-row gap-10 justify-center'>
      {Stats_Data.map((data,index)=>(
        <div key={index}
              className=" w-sm p-6 border border-b-violet-500 border-x-[#C47BF7] rounded-3xl border-t-[#24163D]  bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
                      shadow-lg "
            >
              <div className="flex items-center mt-4 space-x-4">
                
                <div>
                  <p className="sm:text-5xl lg:text-6xl xl:text-7xl  font-bold text-white">{data.number}+</p>
                  <p className="mt-4 text-[16px] sm:text-lg lg:text-xl">{data.title}</p>
                </div>
              </div>
            </div>
          ))}
    </div>
      <div className='h-50'/>
    </div>
  )
}
