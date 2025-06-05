import Image from 'next/image'
import React from 'react'

export default function AboutCards() {
  return (
    <div>
        <div className='h-15'/>
        <div className='flex'>
            <Image
                      className="w-lg border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-4xl h-[500px] "
                      src="/About_Card_1.png"
                      width={300}
                      height={300}
                      alt="Card_1"
                    />
                    <div className='w-20'/>
            <div className='flex flex-col w-xl'>
                <div className='text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]'>Real AI Skills taught by Industry Professionals</div>
               <div className='h-3'/>
                <div className='text-lg'>Our 6–8 month long AI bootcamp covers all the fundamentals you need to break into the AI industry
                     — taught by real engineers and professionals from top global tech companies like Meta, Google, and more.
                      Learn by doing, build a portfolio, and get job-ready.</div>
            </div>
            
        </div>
        <div className='h-50'/>
        <div className='flex'>
            <div className='flex flex-col w-xl'>
                <div className='text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]'>Communicate Better. Lead With Confidence.</div>
               <div className='h-3'/>
                <div className='text-lg'>We offer a personal branding and professional development bootcamp helping you master soft skills, work ethic,
                     communication, and career strategy to succeed in global industries.</div>
                <div className='text-lg'>Whether you're a student, freelancer, or young professional — we’ll help you build a standout presence,
                     sharpen your mindset, and grow your career with purpose.</div>
                </div>
            <div className='w-20'/>
            <Image
                      className="w-lg border border-t-0 border-b-violet-500 border-x-[#C47BF7] rounded-4xl h-[500px] "
                      src="/About_Card_2.png"
                      width={300}
                      height={300}
                      alt="Card_2"
                    />
            
        </div>
        <div className='h-20'/>
        </div>
  )
}
