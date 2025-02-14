'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import React, { useEffect } from 'react';

const AboutUsSection: React.FC = () => {
  const content = {
    title: "About Us",
    subtitle: "Sun Rays Foundation: Founded by a group of South Sudanese youth, Sun Rays Foundation is a humanitarian non-profit organization.",
    images: [
      {
        src: "/banner.png",
        alt: "Person at water source"
      },
      {
        src: "/banner2.jpg",
        alt: "Person carrying water"
      },
      {
        src: "/banner3.jpg",
        alt: "Person washing hands"
      }
    ]
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="white_container bg-gradient-to-b from-white to-[#e5ead3] text-center flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='sm:px-8 md:px-16 lg:px-24'>
        <h2 className="text-[#93C740] font-medium text-sm uppercase">{content.title}</h2>
        <h1 className="text-46-normal text-center mt-4">{content.subtitle}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 mt-12 md:gap-6 lg:gap-8">
        {content.images.map((image, index) => (
          <div key={index} className={`w-full ${index > 0 ? 'hidden sm:inline md:inline' : ''} p-2`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={390}
              height={390}
              className="rounded-t-lg w-full h-full object-cover sm:rounded-none sm:border-none sm:rounded-lg md:rounded-lg"
              priority
            />
          </div>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={controls}
        className="flex flex-col items-center mt-2 md:mt-16 mb-10 sm:px-8 md:px-16 lg:px-24"
      >
        <h1 className='text-46-normal text-center mb-4'>Compassionate with Hope.</h1>
        <p className="customParagraph text-center mt-4">We are driven by love and purpose to help vulnerable communities through sustainable, community based solutions that strengthens resilience and empower the most marginalized in East Africa.</p>
        <p className="customParagraph text-center mt-4">We believe that everyone deserves access to clean water, healthcare, and education. We are committed to making a difference in the lives of the people.</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUsSection;
