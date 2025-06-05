import React from 'react'
import ContactUsform from './ContactUsform'

export default function ContactUsSection() {
  return (
    <div className='w-full pr-20 pl-20'>
      <div className='h-20'/>
        <div className='w-full flex flex-row '>
            <div className="w-xl flex flex-col  lg:justify-start lg:items-start lg:text-left sm:text-center sm:justify-center sm:items-center">
        <div className="text-center lg:text-left">
          <h3 className="text-6xl sm:text-4xl md:text-4xl lg:text-5xl leading-[50px] sm:leading-[64px] sm:tracking-[-0.04em] text-white">
            Send Us a Note and Share Your Thoughts!
          </h3>
          <p className="mt-4 text-sm sm:text-sm text-wrap lg:text-[16px]">
            We’d love to hear from you! Whether you have questions, feedback, or just want to connect, reach out and let’s make it happen.
          </p>
        </div>


      </div>
          <div className='w-20'/>
      
            <ContactUsform/>
      
        </div>
    </div>
  )
}
