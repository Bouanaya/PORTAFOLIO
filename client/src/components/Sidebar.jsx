'use client'
import React from 'react'
import { Mail, Phone, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function ProfileAside() {
  return (
    <aside className="bg-primary text-white w-80   p-6 flex flex-col items-center shadow-2xl">
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
      <h2 className="mt-4 text-2xl font-bold">BOUANAYA SOUFIANE</h2>
      <span className="mt-2 px-3 py-1 text-sm rounded-md bg-gray-800">
        Front-End Developer web
      </span>

      <hr className="w-full border-gray-700 my-6" />

      {/* Contact Info */}
      <div className="space-y-4 w-full">
        {/* Email */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <Mail className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">EMAIL</p>
            <p className="text-sm truncate">BouanayaSoufiane@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <Phone className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">PHONE</p>
            <p className="text-sm">0673731912</p>
          </div>
        </div>

        {/* Birthday */}
        <div className="flex items-center space-x-3 bg-gray-900 p-3 rounded-xl">
          <Calendar className="text-white w-5 h-5" />
          <div>
            <p className="text-xs text-gray-400">ANNIVERSAIRE</p>
            <p className="text-sm">Nov 20, 1998</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
