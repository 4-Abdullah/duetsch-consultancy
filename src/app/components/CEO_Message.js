import React from 'react'

export default function CEO_Message() {
  return (
    <div className='w-full sm:w-full flex flex-col text-center items-center'>
    <div className='w-[300px] sm:w-xl md:w-2xl '>
        <div className='text-3xl sm:text-3xl md:text-5xl text-white sm:leading-[38px] md:leading-[64px] tracking-[-0.04em] sm:tracking-[-0.04em]'>
            Founder's Message to Our Like-Minded Community
        </div>
        <div className='h-5'/>
        <div className='text-[14px] sm:text-[14px] md:text-[16px]'>
            A personal message from our CEO, sharing insights and inspiration for all those who share our passion
             for building Pakistan's Tech Industry.
        </div>
    </div>
        <div className='h-10'/>
        <video autoPlay muted playsInline loop className='w-[280px] sm:w-[310px] md:w-[620px] h-86 sm:h-96 md:h-screen object-cover border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-4xl'>
            <source src="/about_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='h-25'/>
    </div>
  )
}
