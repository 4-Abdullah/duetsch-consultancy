import Image from 'next/image'
import React from 'react'

export default function RecentEventsCard({pic, name, bio}) {
  return (
    
        <div className='pt-8 px-8 pb-5 w-[380px] h-full border border-t-0 border-b-violet-500 border-x-[#C47BF7] 
          bg-[radial-gradient(53.6%_29.4%_at_13.5%_10.2%,_rgb(36,28,54)_0%,_rgb(6,4,13)_100%)]
            shadow-lg rounded-3xl flex flex-col items-center justify-center'>
            <Image
                src={pic}
                width={300}
                height={300}
                alt='Image'
                className='object-cover  w-20 h-20 border border-[#422651]  rounded-full'
            />
            <div className='py-5 w-[280px]'>
                            <div className='text-white text-2xl'>{name}</div>
                            <div className='h-2'/>
                            <div className='text-[16px]'>{bio}</div>
                    </div>
        </div>
  )
}
