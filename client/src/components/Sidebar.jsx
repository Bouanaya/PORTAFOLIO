'use client'
import React from 'react'
import { Mail, Phone, Calendar,MapPinHouse } from 'lucide-react'
import Image from 'next/image'
 
export default function ProfileAside() {
  return (
    <aside className="dark:bg-background bg-background dark:text-white text-black w-80   p-6 flex flex-col items-center shadow-2xl">
      {/* Avatar */}
      <div className="w-50 h-50 rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
        <Image
          src="/port2.jpg"
          alt="avatar"
          className="w-full h-full object-cover "
          width={200}
          height={200}
        />
      </div>

      {/* Name */}
<h2 className="mt-4 text-2xl font-bold bg-clip-text text-transparent 
  bg-gradient-to-tr from-black via-black to-black 
  dark:from-black dark:via-white dark:to-black">
  BOUANAYA SOUFIANE
</h2>

      <span className="mt-2 px-3 py-1 text-sm rounded-md bg-gray-800 text-white  ">
        Front-End Developer web
      </span>

      <hr className="w-full border-gray-700 my-6" />

      {/* Contact Info */}
      <div className="space-y-2 w-full">
        {/* Email */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <Mail className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">EMAIL</p>
            <p className="text-sm truncate text-white ">BouanayaSoufiane@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <Phone className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">PHONE</p>
            <p className="text-sm truncate text-white ">0673731912</p>
          </div>
        </div>

        {/* Birthday */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <Calendar className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">ANNIVERSAIRE</p>
            <p className="text-sm truncate text-white ">Nov 20, 1998</p>
          </div>
        </div>

             {/* Location */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <MapPinHouse className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">Location</p>
            <p className="text-sm truncate text-white ">Skhirat , Maroc</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
