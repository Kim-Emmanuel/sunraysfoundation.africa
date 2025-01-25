'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';

const MissionAndVision: FC = () => {
  return (
    <div className="relative bg-white border-t-[1px] border-b-[1px] border-gray-200 text-black py-12">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* <div className="flex flex-row justify-center items-center h-full">
          <Image
            src="/images/partner-logos/large-arrow-light.png"
            alt="large-arrow-light"
            width={220}
            height={220}
            priority
            className="object-cover"
          />
          <Image
            src="/images/partner-logos/large-arrow-light.png"
            alt="large-arrow-light"
            width={220}
            height={220}
            priority
            className="object-cover"
          />
        </div> */}
      </motion.div>
      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-46-normal !font-medium mb-8">Our Vision & Mission</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            className="bg-white bg-opacity-75 border border-[#e5882466] text-black rounded-lg p-6 m-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="customParagraph">
              A dependable and sustainable society able to take charge of their social and economic well-being.
            </p>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-75 border border-[#94c841cc] text-black rounded-lg p-6 m-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="customParagraph">
              To promote inclusive social-economic empowerment and right-based participation of the most vulnerable and marginalized children, youth, women, and people with disabilities for sustainable development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
