'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import NavLink from 'next/link'; // or your custom NavLink
import { usePathname } from 'next/navigation';
import modeIcon from '/public/mode.svg'
import Themes from "@/components/Theme";
export default function Navbar() {
  const MenuName = ['Accueil', 'A propos', 'Projets', 'Contact'];
  const pathname = usePathname();

  return ( 
    <header className="w-full dark:bg-background bg-background border-l  shadow-md px-8 py-2 hidden md:flex justify-between items-center ">
      <div className="flex gap-6">
      {MenuName.map((name, i) => {
        // convert name to URL path
        let href = name.toLowerCase() === 'accueil' ? '/' : `/${name.toLowerCase().replace(/\s/g, '')}`;

        // check if this link is active
        const isActive = pathname === href;
          // special case for Accueil
  if (name.toLowerCase() === 'accueil') {
    href = '/';
  }

        return (
          <Button key={i} className={isActive ? 'dark:bg-violet-500 bg-black  text-white' : ''} disabled ={isActive} >
            <NavLink href={href} className="px-3 py-2 rounded-md ">
              {name}
            </NavLink>
          </Button>
        );
      })}
      
      </div>
      <div className="flex items-center">
     
            {/* <Image src={modeIcon} width={20} height={20} alt="Mode toggle" /> */}
            <Themes/>
 
   
      </div>
    </header>
  );
}
