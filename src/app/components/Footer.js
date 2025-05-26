import Image from "next/image"

function Footer() {
  return (
     <footer style={{ color:"#8C87AA" ,fontFamily: 'var(--font-poppins)' }} className="relative w-full  shadow-md pl-40 pr-40 pt-0 pb-2.5"> 

      <div className="relative  items-center flex w-full rounded-2xl text-left overflow-hidden" >
        <div>
           <Image
             className="object-contain rounded-md min-w-[100px] max-w-[150px] max-h-[100px] min-h-[50px]"
             src='/Logo.png'
             width={"150"}
             height={"100"}
             alt="image"
           />
          <div className="mt-4">
            <p className="text-sm text-wrap w-86 ">Kamyabi Network is a launchpad for Pakistan’s future — teaching AI, building portfolios, and connecting talent to global opportunities.</p>
          </div>
        </div>

        

      {/* SOCIAL & BOTTOM TEXT SECTION */}
      
        {/* Social Icons */}
        <div className="ml-auto flex space-x-4">
          <a
            href="mailto:hello@kamyabinetwork.com?subject=Requesting%20Invite%20to%20Kamyabi%20Network&body=Hi%20Kamyabi%20Team,%0A%0AI’m%20interested%20in%20joining%20the%20community.%20Please%20let%20me%20know%20how%20to%20get%20access.%0A%0AThanks,%0A[Your%20Name]"
            target="_blank"
            rel="noopener"
            className="relative w-14 h-14 flex-shrink-0 rounded-lg border border-gray-800 overflow-hidden"
          >
            <Image
              src="/instagram_icon.svg"
              alt="Instagram"
              width={59}
              height={59}
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/kamyabi-network/"
            target="_blank"
            rel="noopener"
            className="relative w-14 h-14 flex-shrink-0 rounded-lg border border-gray-800 overflow-hidden"
          >
            <Image
              src="/linkedIn_icon.svg"
              alt="Linkedin"
              width={59}
              height={59}
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
      <br/>
      <br/>
      

        {/* Bottom Text */}
      <div className="flex justify-between items-center w-full border-t border-gray-600 pt-5 pr-2 pl-2">
  <p className="text-sm ">
    All copyrights are reserved one8nine FCZO
  </p>
  <p className="text-sm ">
    Made in Pakistan with 💜
  </p>
</div>


      
    </footer>
  )
}

export default Footer