import React from 'react'
import Card from '@/components/Card'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'

export default function page() {
  return (
      <div className="relative flex  h-full min-h-screen w-full flex-col items-start justify-start ">
              <BackgroundRippleEffect />
    <div className='w-full absolute z-10 h-full py-3 px-6  overflow-hidden'>
      <div className=" pt-2  ">
        <h1 className='text-3xl  bg-gradient-to-r from-violet-500 via-blue-400 to-green-500 bg-clip-text text-transparent font-bold mb-2'>APROPOS :</h1>

        <p className='text-lg py-6 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 bg-white  '>Développeur Front-End spécialisé en React.js et Vue.js, je conçois des applications web modernes,performantes et intuitives. Mon approche allie expérience utilisateur fluide et design esthétique pour créer des solutions innovantes et efficaces</p>
      </div>
      
        <Card/>
    
    </div>
    </div>
  )
}
