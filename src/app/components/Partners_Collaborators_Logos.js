// Component block
import TopCompaniesLogos from './TopCompaniesLogos'
// Data block
import { Logos_1,Logos_2, LogosViewType } from '../branding/data'
export default function Partners_Collaborators_Logos() {

  return (
    <div className='pt-4 w-[90vw] flex flex-col items-center'>
            <div className="w-full sm:w-xl justify-center text-center text-[25px] sm:text-[40px] leading-[40px] sm:leading-[64px] sm:tracking-[-0.04em] text-white">
            Partnered & collaborated with 150+ global brands & partners
            </div>
        <TopCompaniesLogos Logos={Logos_1} LogosViewType={LogosViewType}/>
        <TopCompaniesLogos Logos={Logos_2} LogosViewType={LogosViewType}/>
        <div className='h-30'/>
    </div>
  )
}
