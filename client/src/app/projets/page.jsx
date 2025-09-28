'use client'
import Projectcarousel from '@/components/projectcarousel'
export default function page() {
  return (
      <div className='w-full  bagColordark  h-full py-3 px-6 bg-black overflow-hidden'>
        <div className="   ">
        <h1 className='text-6xl bg-gradient-to-r from-violet-500 via-blue-400 to-green-500 bg-clip-text text-transparent font-bold'>PROJETS</h1>
        <div className="w-3xs h-2  bg-gradient-to-l from-violet-800 via-black to-black"></div>
 <div className="flex justify-center items-center mt-6">
    <Projectcarousel/>
   
 </div>
 
         
        
        
   
          
        </div>
        
 
      
      </div>
  )
}
