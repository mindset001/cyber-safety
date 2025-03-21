'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../../public/assets/Asset 1@72x-8.png'
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  w-full bg-transparent   text-[#fff]  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center mt-6">
         <Image src={Logo} alt="Logo" width={50} height={50} className='w-[60px] h-[60px]'/>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'What We Do', 'About Us',  'Contact US'].map((item) => (
            <Link key={item} href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="relative group">
              <span className={`uppercase text-sm font-medium tracking-wide hover:text-gray-300 ${pathname === `/${item.toLowerCase()}` ? 'text-blue-400' : ''}`}>{item}</span>
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300 ${pathname === `/${item.toLowerCase()}` ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
