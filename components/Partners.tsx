'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'icd', src: '/images/partner-logos/icd-logo.png' },
  { name: 'cmmd', src: '/images/partner-logos/cmmb-logo.png' },
  { name: 'amref', src: '/images/partner-logos/amref-logo.png' },
  { name: 'misereor', src: '/images/partner-logos/misereor-logo.png' },
];

const Partners: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: '-100%',
      transition: { repeat: Infinity, ease: 'linear', duration: 30 }
    });
  }, [controls]);

  return (
    <section className="py-12 bg-gray-50 mb-12">
      <div className="mx-auto text-center">
        <h2 className="heading-partner">
          Our Partners
        </h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={controls}
            style={{ width: '200%' }}
          >
            {partners.concat(partners).map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-4 my-2 w-1/4">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={150}
                  height={50}
                  className="object-contain h-12"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;




