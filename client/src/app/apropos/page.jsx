import React from 'react'
import Card from '@/components/Card'

export default function page() {
  return (
    <div className='w-full  bagColordark  h-full py-3 px-6 '>
      <div className=" pt-2  ">
        <h1 className='text-6xl  bg-gradient-to-r from-violet-500 via-blue-400 to-green-500 bg-clip-text text-transparent font-bold'>APROPOS</h1>
        <div className="w-3xs h-2 pt-2 bg-gradient-to-l from-violet-800 via-black to-black"></div>

        <p className='text-lg py-6 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 bg-white  '>Développeur Front-End spécialisé en React.js et Vue.js, je conçois des applications web modernes,performantes et intuitives. Mon approche allie expérience utilisateur fluide et design esthétique pour créer des solutions innovantes et efficaces</p>
      </div>
      
        <Card/>
    
    </div>
  )
}
