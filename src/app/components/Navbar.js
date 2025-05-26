"use client"
import Link from 'next/link'
import Button from './Button.js'
import { useRouter } from 'next/navigation.js';
import Image from 'next/image'
// import Logo from "../Logo.png"
import Underline from './Underline.js';
function Navbar() {
    const router = useRouter();


  function primarybtnOnClickevent(){
    router.push('/pricing');   // Navigate to another page
  }

  return (
    
      <nav className="fixed top-0 w-full  shadow-md animate-[slideDown_0.5s_ease-in-out] pl-40 pr-40 pt-2.5 pb-0">

  <div className=" flex justify-between items-center">
        <a href="/" >
<Image
  className="object-contain rounded-md min-w-[100px] max-w-[150px] max-h-[100px] min-h-[50px]"
  src='/Logo.png'
  width={"150"}
  height={"100"}
  alt="image"
/>
</a>
      
      <div style={{color:"#8C87AA",  fontFamily: 'var(--font-poppins)' }} className="flex space-x-6 bg-[rgba(12,5,18,0.9)] rounded-full backdrop-blur-md gap-2 pl-12 pr-12 pt-4 pb-0 ">
   <Link href="/">
    <div style={{height:"35px"}} className="relative transition-all duration-300 group hover:text-white">
      <h2 className=" transition-colors duration-300">
        Home
      </h2>
      <Underline/>
    </div>
  </Link>
      <Link href="/about">
        <div style={{height:"35px"}} className="relative transition-all duration-300 group hover:text-white">
          <h2>About</h2>
          <Underline/>
        </div>
      </Link>
      <Link href="/branding">
        <div style={{height:"35px"}} className="relative transition-all duration-300 group hover:text-white">
          <h2>Branding</h2>
          <Underline/>
          </div>
      </Link>
      <Link href="/events">
        <div style={{height:"35px"}} className="relative transition-all duration-300 group hover:text-white">
          <h2>Events</h2>
          <Underline/>
        </div>
      </Link>
      <Link href="/pricing">
        <div style={{height:"35px"}} className="relative transition-all duration-300 group hover:text-white">
        <h2>Pricing</h2>
        <Underline/>
      </div>
      </Link>
      <Link href="/contact">
        <div style={{height:"35px"}} className="relative transition-all duration-300 group hover:text-white">
          <h2>Contact</h2>
          <Underline/>
        </div>
      </Link>
      </div>

      
      <Button type="primary" onClick={primarybtnOnClickevent} title="Explore Membership" font='var(--font-poppins)'/> </div>

    </nav>
  )
}

export default Navbar