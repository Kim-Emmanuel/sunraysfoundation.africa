"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header>
      {/* Header  content */}
      <div className="bg-primary py-2 px-2" style={{ lineHeight: '1.3' }}>
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="hidden md:block w-full md:w-3/4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/4">
                  <p className='text-gray-900 text-xs md:text-xs lg:text-sm'>
                    SOUTH SDN OFFICE<br />
                    +211 929 975 708
                  </p>
                </div>
                <div className="w-full md:w-1/4">
                  <p className='text-gray-900 text-xs md:text-xs lg:text-sm'>
                    KENYA OFFICE<br />
                    +254 702 676 918
                  </p>
                </div>
                <div className="w-full md:w-1/4">
                  <p className='text-gray-900 text-xs md:text-xs lg:text-sm'>
                    UGANDA OFFICE<br />
                    +256 766 959 352
                  </p>
                </div>
                <div className="w-full md:w-1/4">
                  <p className='text-gray-900 text-xs md:text-xs lg:text-sm'>
                    LESOTHO OFFICE<br />
                    +266 5680 8083
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-end items-center">
              <div className="flex space-x-3">
                <Link href="https://www.facebook.com/profile.php?id=61553897036925" className="text-white">
                  <div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
                    <Image src="/facebook.svg" alt="Facebook Logo" width={20} height={20} />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/sunra_ysfoundation19/" className="text-white">
                  <div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
                    <Image src="/instagram.svg" alt="Instagram Logo" width={20} height={20} />
                  </div>
                </Link>
                <Link href="#" className="text-white">
                  <div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
                    <Image src="/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} />
                  </div>
                </Link>
                <Link href="https://www.youtube.com/@SunRaysFoundation" className="text-white">
                  <div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
                    <Image src="/youtube.svg" alt="YouTube Logo" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="nav-bar">
        <div className="container mx-auto flex justify-between items-start">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Sunrays Foundation Logo"
                  width={100}
                  height={100}
                  className="object-cover"
                  priority // Ensures the logo loads quickly
                // quality={100} // Ensure high-quality rendering
                />
              </Link>
            </div>

            <button className="md:hidden text-white focus:outline-none"
              onClick={() => handleDropdown('mobileMenu')}
            >
              <div
                className={`menu-icon ${openDropdown === 'mobileMenu' ? "open" : ""}`}
              >
                <motion.div
                  className='bar'
                  animate={openDropdown === 'mobileMenu' ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <motion.div
                  className='bar'
                  animate={openDropdown === 'mobileMenu' ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </div>
            </button>
          </div>

          <div className={`w-full md:flex md:items-center md:w-auto ${openDropdown === 'mobileMenu' ? 'mobile-screen' : 'hidden'}`}
          // className={`w-full md:flex md:items-center md:w-auto mobile-screen`}
          // initial="hidden"
          // animate={openDropdown === 'mobileMenu' ? 'visible' : 'hidden'}
          // variants={{
          //   visible: { opacity: 1, height: "auto" },
          //   hidden: { opacity: 0, height: 0 }
          // }}
          // transition={{ duration: 0.3 }}
          >
            <ul className="md:flex md:space-x-4 mt-4 md:mt-0">
              <li className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Link href="/who-we-are" className="custom-link">
                      Who we are
                    </Link >
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/about-us">About Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/our-history">Our History</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Link href="/our-programs" className="custom-link">
                      Our Programs
                    </Link >
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/education-and-scholarships">Education & Scholarships</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/economic-empowerment">Economic Empowerment</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/protection-and-advocacy">Protection & Advocacy</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/peacebuilding-and-reconciliation">Peacebuilding & Reconciliation</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/agriculture-and-food-sovereignty">Agriculture & Food sovereignty</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/basic-health-and-well-being">Basic Health & Well-being</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/cultural-awareness-and-education">Cultural Awareness & Education</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Link href="/impact" className="custom-link">
                      Impacts
                    </Link >
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/success-stories">Success Stories</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/gallery">Gallery</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Link href="/Where-we-are" className="custom-link">
                      Where we are
                    </Link >
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/south-sudan">South Sudan</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/kenya">Kenya</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/uganda">Uganda</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/lesotho">Lesotho</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li><Link className="custom-link" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


