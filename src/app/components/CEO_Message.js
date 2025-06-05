import React from 'react'

export default function CEO_Message() {
  return (
    <div className='w-full flex flex-col text-center items-center'>
    <div className='w-[650px] '>
        <div className='text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]'>
            Founder's Message to Our Like-Minded Community
        </div>
        <div className='h-5'/>
        <div className='text-[16px]'>
            A personal message from our CEO, sharing insights and inspiration for all those who share our passion
             for building Pakistan's Tech Industry.
        </div>
    </div>
        <div className='h-15'/>
        <video autoPlay muted playsInline loop className='w-[620px] h-screen object-cover border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-4xl'>
            <source src="/about_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='h-25'/>
    </div>
  )
}
