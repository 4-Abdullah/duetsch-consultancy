// Component block
import RecentEventsCard from './RecentEventsCard'
// Data block
import { RecentEventsData } from '../events/data'
export default function SomeRecentEvents() {
    
  return (
    <div className='w-[90vw] flex flex-col text-center items-center'>
        <div className='h-40'/>
    <div className='w-full sm:w-[650px] '>
        <div className='text-3xl sm:text-4xl md:text-5xl  text-white sm:leading-[64px] sm:tracking-[-0.04em]'>
            Some Recent Events
        </div>
        <div className='h-5'/>
        <div className='text-sm sm:text-sm md:text-[16px]'>
            We host interactive live events with local and global thought leaders in the AI and Technology domain giving
             you direct access to successful entrepreneurs, business leaders, technology experts and more.
        </div>
    </div>
        <div className='h-15 sm:h-25'/>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {RecentEventsData.map((data,index)=>(
            <div key={index} >
                <RecentEventsCard pic={data.pic} name={data.name} bio={data.bio}/>
            </div>
        ))}
        </div>
    </div>
  )
}
