import React from 'react'
import Image from 'next/image'
export default function ProfessionalsfromTopCompanies() {

  
  return (
    <section
  className="flex bg-amber-200 w-full h-full max-w-full max-h-full items-center justify-center m-0 p-2.5 opacity-100 overflow-hidden mask-gradient"
>
    
    <Image
            //  className="block w-full h-full object-center object-cover"
            //   width={1080}
            //   height={1080}
            //   sizes="150px"
             width={59}
        height={59}
        className="w-full h-full object-contain"
              src="/Unilever.png"
              alt="Logo"
              
            //   style="border-radius: inherit;"
            />
 
</section>

  )
}
