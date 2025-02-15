'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL || '';

const Welcome: FC = () => {
  const router = useRouter();

  const handleAboutUsClick = () => {
    router.push("/about-us");
  };

  return (
    <section className="white_container">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Sun Rays Foundation
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="sub-heading !max-w-3xl !text-start mb-4">
            Welcome to Sun Rays Foundation!
          </h2>
          <p className="customParagraph text-gray-700">
            Founded by a group of South Sudanese youth, Sun Rays Foundation is a humanitarian non-profit organization.
            We are driven by love and purpose to help vulnerable communities through sustainable, community-based
            solutions that strengthen resilience and empower the most marginalized in East Africa.
            Join us to build a brighter tomorrow for all.
          </p>
          <Button 
            onClick={handleAboutUsClick} 
            className="mt-5 py-5 px-6 flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Read More
          </Button>
        </motion.div>

        <motion.div
          className="relative aspect-video w-full rounded-md overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/banner3.jpg"
            alt="Video Thumbnail"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-6xl cursor-pointer hover:scale-110 transition-transform"></i>
          </div>
          <iframe
            title="Executive Director Ambassador Simon Mikanipare Shares Our Journey"
            className="absolute inset-0 w-full h-full"
            src={YOUTUBE_URL}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
