'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, FC } from 'react';

const Footer: FC = () => {
  const controlsQuickLinks = useAnimation();
  const [refQuickLinks, inViewQuickLinks] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewQuickLinks) {
      controlsQuickLinks.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: 'easeInOut',
          staggerChildren: 0.1,
        },
      });
    }
  }, [controlsQuickLinks, inViewQuickLinks]);

  const controlsHomeLinks = useAnimation();
  const [refHomeLinks, inViewHomeLinks] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewHomeLinks) {
      controlsHomeLinks.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: 'easeInOut',
          staggerChildren: 0.1,
        },
      });
    }
  }, [controlsHomeLinks, inViewHomeLinks]);

  return (
    <footer className="border-t-[1px] border-gray-200">
      <div className="white_container flex flex-col lg:flex-row justify-between gap-8 lg:gap-24">
        <div className="container w-full lg:w-1/3 flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Sun Rays Foundation logo"
              width={190}
              height={190}
              priority
              className='object-cover'
            />
          </Link>
          <p className="text-sm md:text-base">
            Juba - South Sudan <br />
            Thongping, Scenius Hub Next to Winners Chapel.
          </p>
          <div className="relative">
            <Link
              href="/admissions"
              className="custom-link footer-links"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className='text-16-medium'>Follow us:</h1>
            <div className='flex items-start justify-start gap-2'>
              <div className="hover:scale-110 hover:bg-[#93c74099] rounded-full p-1 transition-all duration-200">
                <Image src="/facebook.svg" alt="Facebook Logo" width={20} height={20} />
              </div>
              <div className="hover:scale-110 hover:bg-[#93c74099] rounded-full p-1 transition-all duration-200">
                <Image src="/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} />
              </div>
              <div className="hover:scale-110 hover:bg-[#93c74099] rounded-full p-1 transition-all duration-200">
                <Image src="/youtube.svg" alt="YouTube Logo" width={20} height={20} />
              </div>
              <div className="hover:scale-110 hover:bg-[#93c74099] rounded-full p-1 transition-all duration-200">
                <Image src="/x.svg" alt="TwitterX Logo" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full lg:w-2/3 flex flex-col md:flex-row md:justify-between gap-8" ref={refHomeLinks}>
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsHomeLinks}
            transition={{ duration: 0.8, ease: 'easeInOut', staggerChildren: 0.1 }}
          >
            <h1 className="font-semibold text-lg">Home Links</h1>
            <div className="mt-4 md:mt-8">
              <ul className='flex flex-col gap-2 xs:gap-4 font-normal text-sm md:text-base text-black'>
                <li className='relative'>
                  <Link href="/" className="custom-link footer-links">
                    Home
                  </Link>
                </li>
                <li className='relative'>
                  <Link href="/about" className="custom-link footer-links">
                    Who we are
                  </Link>
                </li>
                <li className='relative'>
                  <Link href="/programs" className="custom-link footer-links">
                    Our programs
                  </Link>
                </li>
                <li className='relative'>
                  <Link href="/impacts" className="custom-link footer-links">
                    Impacts
                  </Link>
                </li>
                <li className='relative'>
                  <Link href="/where-we-are" className="custom-link footer-links">
                    Where we are
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsHomeLinks}
            transition={{ duration: 0.8, ease: 'easeInOut', staggerChildren: 0.1 }}
          >
            <h1 className="font-semibold text-lg">Contact</h1>
            <div className='mt-4 md:mt-8'>
              <div className="flex flex-col gap-2 xs:gap-4 font-normal text-sm md:text-base text-black">
                <div className='relative'>
                  <Link href="mailto:info@sunraysfoundation.org" className="footer-links">
                    info@sunraysfoundation.org
                  </Link>
                </div>
                <span>Tel:</span>
                <div className='relative'>
                  <Link href="tel:+211921386169" className="footer-links">
                    +211 929 975 708
                  </Link>
                </div>
                <div className='relative'>
                  <Link href="tel:+254702676918" className="footer-links">
                    +254 702 676 918
                  </Link>
                </div>
                <div className='relative'>
                  <Link href="mailto:info@sunraysfoundation.org" className="footer-links">Email Us</Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsQuickLinks}
            transition={{ duration: 0.8, ease: 'easeInOut', staggerChildren: 0.1 }}
            ref={refQuickLinks}
          >
            <h1 className="font-semibold text-lg">Quick Links</h1>
            <div className="mt-4 md:mt-8 flex flex-col gap-2 xs:gap-4 font-normal text-sm md:text-base text-black">
              <div className='relative'>
                <Link href="/about-us" className="footer-links custom-link">
                  About Us
                </Link>
              </div>
              <div className='relative'>
                <Link href="/gallery" className="footer-links custom-link">
                  Gallery
                </Link>
              </div>
              <div className='relative'>
                <Link href="/stories" className="footer-links custom-link">
                  Success Stories
                </Link>
              </div>
              <div className='relative'>
                <Link href="/location" className="footer-links custom-link">
                  Location
                </Link>
              </div>
              <div className='relative'>
                <Link href="/managment" className="footer-links custom-link">
                  Management
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='green_container px-4 py-2'>
        <div className='text-black flex flex-col md:flex-row gap-2 md:gap-1 justify-center items-center text-xs md:text-sm lg:text-base'>
          <span className='flex items-center'>
            Copyright © {new Date().getFullYear()} All rights reserved | Sunrays Foundation
            <Image src="/heart-filled.svg" alt="Heart Logo" width={14} height={14} className='ml-1' />
          </span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-xs md:text-sm lg:text-base'>
          <span className='text-gray-600'>Language</span>
          <span className='text-gray-800 font-normal'>United States | English</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
