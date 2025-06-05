import Image from 'next/image'
import React from 'react'

export default function BrandingMediaSection() {
  return (
    <section className='pt-10 w-full'>
        <div>
            <Image
                src="/Branding_pic_1.png"
                width={1200}
                height={800}
                alt='image'
                className="w-full h-[550px] relative rounded object-contain"
            />
            <video autoPlay muted playsInline loop className='absolute top-1/2 left-1/2 transform -translate-x-52 translate-y-83 w-[400px] h-[470px] rounded-3xl object-cover'>
            <source   src="/about_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>   
          
    
        </div>
    </section>
  )
}
