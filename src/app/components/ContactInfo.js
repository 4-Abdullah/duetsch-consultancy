import Image from 'next/image'
import React from 'react'
import { ContactInfo_Data } from '../contact/data'

export default function ContactInfo() {
    

  return (
    <section>
        <div className='flex flex-row items-center gap-5'>
            {ContactInfo_Data.map((data,index)=>(
                    <div
  key={index}
  className={`w-sm flex flex-col items-center text-center p-10 border
    border-b-violet-500 border-x-[#C47BF7] rounded-3xl border-t-[#24163D]
    bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,rgb(36,28,54)_0%,rgb(6,4,13)_100%)]
    hover:bg-[radial-gradient(53.6%_75%_at_50%_50%,rgb(36,28,54)_0%,rgb(6,4,13)_100%)]
    hover:border-t-violet-500 hover:border-b-[#24163D]
    shadow-lg`}>

                        <Image
                            src={data.image}
                            width={300}
                            height={300}
                            alt='image'
                            className='object-cover  w-20 h-20 border-2 border-[#C476EF]  rounded-full'
                        />
                         <div className="pt-6">
                
                <div>
                  <p className="sm:text-lg lg:text-xl xl:text-2xl text-white">{data.title}</p>
                  <p className=" text-[16px] sm:text-lg lg:text-[16px]">{data.description}</p>
                </div>
              </div>
                     </div>
            ))}
        </div> 
    </section>
  )
}
