'use client'
 import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
 import ContactForm from "@/app/contact/ContactForm"
export default function page() {
  return (
      <div className="relative flex h-full min-h-screen w-full flex-col items-start justify-start ">
      <BackgroundRippleEffect />
      <div className='w-full absolute z-10 h-full py-3 px-6  overflow-hidden'>
      
        <div className="">
                <h1 className='text-3xl  bg-gradient-to-r from-violet-500 via-blue-400 to-green-500 bg-clip-text text-transparent font-bold mb-2'>Contact :</h1>

 <div className="mt-6">
< ContactForm/>

 </div>
 </div>
   

 
         
        
        
   
          
        </div>
        
 
      
      </div>
  )
}
