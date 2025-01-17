"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
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
                  <DropdownMenuItem asChild>
                    <Link href="/economic-empowerment">Economic Empowerment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/protection-and-advocacy">Protection & Advocacy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/peacebuilding-and-reconciliation">Peacebuilding & Reconciliation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/agriculture-and-food-sovereignty">Agriculture & Food sovereignty</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/basic-health-and-well-being">Basic Health & Well-being</Link>
                  </DropdownMenuItem>
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
                  <DropdownMenuItem asChild>
                    <Link href="/kenya">Kenya</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/uganda">Uganda</Link>
                  </DropdownMenuItem>
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
  );
};

export default Navbar;


{/* <div className="container bg-green-500" style={{ lineHeight: '1.3' }}>
  <div className="container mx-auto">
    <div className="flex text-white items-center" style={{ fontSize: '13px' }}>
      <div className="hidden md:block w-full md:w-3/4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            SOUTH SUDAN OFFICE<br />
            +211 929 975 708
          </div>
          <div className="w-full md:w-1/4">
            KENYA OFFICE<br />
            +254 702 676 918
          </div>
          <div className="w-full md:w-1/4">
            UGANDA OFFICE<br />
            +256 766 959 352
          </div>
          <div className="w-full md:w-1/4">
            LESOTHO OFFICE<br />
            +266 5680 8083
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 flex justify-end items-center">
        <div className="flex space-x-3">
          <Link href="https://www.facebook.com/profile.php?id=61553897036925" className="text-white">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f fa-lg"></i>
          </Link>
          <Link href="https://www.instagram.com/sunra_ysfoundation19/" className="text-white">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram fa-lg"></i>
          </Link>
          <Link href="#" className="text-white">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin-in fa-lg"></i>
          </Link>
          <Link href="https://www.youtube.com/@SunRaysFoundation" className="text-white">
            <span className="sr-only">YouTube</span>
            <i className="fab fa-youtube fa-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div> */}