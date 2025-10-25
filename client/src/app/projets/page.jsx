'use client'
import Projectcarousel from '@/components/projectcarousel'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
export default function page() {
  return (
      <div className="relative flex h-full min-h-screen w-full flex-col items-start justify-start ">
          <BackgroundRippleEffect />
      <div className='w-full absolute z-10 h-full py-3 px-6  overflow-hidden'>
        <div className="   ">
                <h1 className='text-3xl  bg-gradient-to-r from-violet-500 via-blue-400 to-green-500 bg-clip-text text-transparent font-bold mb-2'>Projets :</h1>


 <div className="md:mt-6">
<Projectcarousel/>

 </div>
 </div>
   

 
         
        
        
   
          
        </div>
        
 
      
      </div>
  )
}
