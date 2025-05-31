"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
// import { Image } from 'next/image';
import UserCard from './UserCard'


export default function UserSay() {
  

  const UserDataList_1 = [
    {name:"Osama Furqan Khan",title:"PM - Mercedes Benz AG",image:"/Osama Furqan Khan.png",comment:`Watching Kamyabi Network’s phenomenal growth has been inspiring—it’s a powerhouse of ideas,
     driven by an incredibly talented team under Muzamil’s leadership.`},
    
    {name:"Omair",title:"Visual Experience Web 3.0",image:"/Omair.png",comment:`Kamyabi Network breaks things down in a way that makes learning easy and practical, making it one of the best communities to be part of.`},
    
    {name:"Muhammad Nabeel",title:"Founder Exitbase",image:"/Muhammad Nabeel.png",comment:`Kamyabi Network has introduced me to some of the smartest and most helpful people in my industry. It constantly pushes you forward.`},
    
    {name:"Umair Bin Tahir",title:"Serial Entreprenuer",image:"/Umair Bin Tahir.png",comment:`Our youth have the power to transform Pakistan, but many feel lost without guidance, Kamyabi Network is that bridge, helping them build successful careers and a stronger future.`},
     ]

  const UserDataList_2 = [
    {name:"Muhammad Usman",title:"Tech Lead Meta",image:"/Muhammad Usman.png",comment:`Kamyabi Network isn’t just a platform, it’s a dynamic community where professionals share ideas, gain insights, and grow together.`},
    
    {name:"Ahmad Nawaz",title:"Founder Khapay",image:"/Ahmad Nawaz.png",comment:`Kamyabi Network gave me the right direction, connecting me with people who challenge my thinking and help me make better decisions.`},
    
    {name:"Arsham Khalid",title:"Ex-PwC, L'Oréal",image:"/Arsham Khalid.png",comment:`Kamyabi Network makes tech accessible for Pakistani youth by featuring experts who break down complex topics into real world insights perfect for anyone looking to grow in tech, data, or AI.`},
    
    {name:"Asad Iqbal",title:"Co-Founder Noodle Seed",image:"/Asad Iqbal.png",comment:`Kamyabi Network is an amazing space to connect with like minded tech and AI professionals, huge credit to Muzamil and his team for fostering this valuable community.`},
     ]

  const UserDataList_3 = [
    {name:"Mohib Mirza",title:"Founder AI Team Force",image:"/Mohib Mirza.png",comment:`Meeting brilliant minds through Kamyabi Network has been a game changer, there’s a real sense of collaboration that pushes you to do better.`},
    
    {name:"Asim Nadeem",title:"AI Engineer TalentAdore",image:"/Asim Nadeem.png",comment:`Kamyabi Network helps you move from ideas to execution, everyone here is focused on learning, growing, and building something meaningful.`},
    
    {name:"Ahmad Khan Niazi",title:"Product Manager PosterMyWall",image:"/Ahmad Khan Niazi.png",comment:`It’s rare to find a space where discussions actually challenge you, Kamyabi Network brings together people who make you think bigger.`},
    
    {name:"Zeeshan Ahmad",title:"Co-Founder QNC Trucklines",image:"/Zeeshan Ahmad.png",comment:`Before Kamyabi Network, I had ideas but lacked clarity, this community helped me connect with the right people and turn my thoughts into action.`},
     ]

  return (
    <section id="testimonial" className=" py-16 w-full">
  <div className="max-w-5xl mx-auto text-center">
    <h3 className="text-4xl font-medium text-white">What our users are saying</h3>
    <p className="text-sm mt-4">
      Hear from our premium members about how the platform has helped their digital journey.
    </p>
  </div>

      <section
        className="flex flex-row sm:flex-col lg:flex-row   max-w-full max-h-full w-full gap-4 justify-center
    m-0
    p-[10px]
    list-none
    opacity-100 overflow-hidden
    relative
    "
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)", // Required for Safari support
        }}
      > 
        <ul className="flex sm:h-72 lg:h-dvh justify-items-start  sm:animate-[card-RrowLoop_60s_linear_infinite] lg:animate-[card-colLoop-downward_10s_linear_infinite] sm:flex-row lg:flex-col  gap-4 "> 
    {[...UserDataList_1,...UserDataList_1].map((data,index)=>(
       <li key={index} className='className="flex flex-row w-full"'>
              <div className="card w-full h-full ">
    <UserCard name={data.name} title={data.title} image={data.image} comment={data.comment} />
    </div>
    </li>
))}
</ul>
{/* <br/> */}
        <ul className="flex sm:h-72 lg:h-dvh sm:animate-[card-LrowLoop_60s_linear_infinite] justify-items-center lg:animate-[card-colLoop-upward_10s_linear_infinite] sm:flex-row lg:flex-col  gap-4 "> 
    {[...UserDataList_2,...UserDataList_2].map((data,index)=>(
       <li key={index} className="flex flex-row w-full">
              <div className="card w-full h-full ">
    <UserCard name={data.name} title={data.title} image={data.image} comment={data.comment} />
    </div>
    </li>
))}
</ul>
{/* <br/> */}
        <ul className="flex sm:h-72 lg:h-dvh sm:animate-[card-RrowLoop_60s_linear_infinite] justify-items-end lg:animate-[card-colLoop-downward_10s_linear_infinite] sm:flex-row lg:flex-col  gap-4 "> 
    {[...UserDataList_3,...UserDataList_3].map((data,index)=>(
       <li key={index} className="flex flex-row w-full">
              <div className="card w-full h-full ">
    <UserCard name={data.name} title={data.title} image={data.image} comment={data.comment} />
    </div>
    </li>
))}
</ul>
  
  </section>
 {/* </div> */}
</section>

  )
}
