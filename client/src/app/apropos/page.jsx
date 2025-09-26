import React from 'react'
import Card from '@/components/Card'

export default function page() {
  return (
    <div className='w-full  bagColordark  h-full py-3 px-6 '>
      <div className="space-y-6  ">
        <h1 className='text-6xl text-white'>A propos</h1>
        <p className='text-lg dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 bg-white  '>Développeur Front-End spécialisé en React.js et Vue.js, je conçois des applications web modernes,performantes et intuitives. Mon approche allie expérience utilisateur fluide et design esthétique pour créer des solutions innovantes et efficaces</p>
      </div>
      
        <Card/>
    
    </div>
  )
}
