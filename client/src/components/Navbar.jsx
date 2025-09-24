'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import NavLink from 'next/link'; // or your custom NavLink
import { usePathname } from 'next/navigation';
import modeIcon from '/public/mode.svg'

export default function Navbar() {
  const MenuName = ['Accueil', 'A propos', 'Projets', 'Contact'];
  const pathname = usePathname();

  return ( 
    <header className="w-full bg-primary border-l  shadow-md px-8 py-2 flex justify-between items-center ">
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
          <Button key={i} className={isActive ? 'bg-white text-black' : ''} disabled ={isActive} >
            <NavLink href={href} className="px-3 py-2 rounded-md ">
              {name}
            </NavLink>
          </Button>
        );
      })}
      
      </div>
      <div className="flex items-center">
        <Button className='gradient'>
            <Image src={modeIcon} width={20} height={20} alt="Mode toggle" />
        </Button>
   
      </div>
    </header>
  );
}
