import Image from 'next/image'
import React from 'react'
import TopCompaniesLogos from './TopCompaniesLogos'
import { Logos_1,Logos_2, LogosViewType } from '../branding/data'
export default function Partners_Collaborators_Logos() {



  return (
    <div className='pt-4 flex flex-col items-center'>
            <div className="w-xl text-4xl justify-center text-center md:text-[60px] lg:text-[40px] sm:text-[60px] leading-[50px] sm:leading-[64px] sm:tracking-[-0.04em] text-white">
            Partnered & collaborated with 150+ global brands & partners
            </div>
        <TopCompaniesLogos Logos={Logos_1} LogosViewType={LogosViewType}/>
        <TopCompaniesLogos Logos={Logos_2} LogosViewType={LogosViewType}/>
    </div>
  )
}
