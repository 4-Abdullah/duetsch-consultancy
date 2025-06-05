import React from 'react'
import RecentEventsCard from './RecentEventsCard'
import { RecentEventsData } from '../events/data'
export default function SomeRecentEvents() {
    
  return (
    <div className='w-full flex flex-col text-center items-center'>
        <div className='h-40'/>
    <div className='w-[650px] '>
        <div className='text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]'>
            Some Recent Events
        </div>
        <div className='h-5'/>
        <div className='text-[16px]'>
            We host interactive live events with local and global thought leaders in the AI and Technology domain giving
             you direct access to successful entrepreneurs, business leaders, technology experts and more.
        </div>
    </div>
        <div className='h-25'/>
        <div className='grid grid-cols-3 gap-8'>
        {RecentEventsData.map((data,index)=>(
            <div key={index} >
                <RecentEventsCard pic={data.pic} name={data.name} bio={data.bio}/>
            </div>
        ))}
        </div>
    </div>
  )
}
