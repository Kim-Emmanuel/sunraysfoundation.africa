'use client'

import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation'

const images = [
  {
    src: "/banner.png",
    alt: "Collaborating for a Healthy Asia",
    title: "Compassionate with Hope"
  },
  {
    src: "/banner2.jpg",
    alt: "Innovating for a Better Tomorrow",
    title: "Together, we shine brighter"
  },
  {
    src: "/banner3.jpg",
    alt: "Innovating for a Better Tomorrow",
    title: "Together, we shine brighter"
  },
];

const sliderDuration = 5000; // 5 seconds

const Hero: FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, sliderDuration);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAboutUsClick = () => {
    router.push("/about-us");
  };

  return (
    <motion.div
      className="relative w-full mt-[108px] lg:mt-[120px] h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <AnimatePresence>
          {images.map((image, index) =>
            index === currentImage && (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 1 }}
              >
                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1200}
                  className='w-full h-full object-cover'
                  priority
                />

                {/* Title and Button */}
                <motion.div
                  className="absolute top-1/3 left-5 text-start w-full px-5"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-shadow-custom">
                    {image.title}
                  </h1>
                  <Button
                    className="mt-5 py-5 px-6 transition-transform transform hover:scale-105"
                    onClick={handleAboutUsClick}
                  >
                    About Us
                  </Button>
                </motion.div>
              </motion.div>
            )
          )}
        </AnimatePresence>
        <motion.div
          className="absolute right-10 flex flex-col items-center gap-4 z-20 mt-5"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Button
            className="transition-transform transform hover:scale-105"
            onClick={prevSlide}
            size="icon"
          >
            <ChevronLeft />
          </Button>
          <Button
            className="transition-transform transform hover:scale-105"
            onClick={nextSlide}
            size="icon"
          >
            <ChevronRight />
          </Button>
          <div className="flex flex-col items-center gap-2 mt-5">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-500'}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: currentImage === index ? 1.2 : 1 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
