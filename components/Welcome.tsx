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
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="sub-heading !max-w-3xl !text-start mb-4">
              Welcome to Sun Rays Foundation!
            </h2>
            <p className="customParagraph mb-4">
              Founded by a group of South Sudanese youth, Sun Rays Foundation is a humanitarian non-profit organization.
              We are driven by love and purpose to help vulnerable communities through sustainable, community-based
              solutions that strengthen resilience and empower the most marginalized in East Africa.
              Join us to build a brighter tomorrow for all.
            </p>
            <Button onClick={handleAboutUsClick} className="mt-5 text-black py-5 px-6 transition-transform transform hover:scale-105">
              Read More
            </Button>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/banner3.jpg"
              alt="Video Thumbnail"
              width={420}
              height={320}
              className="object-cover w-full h-80"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-white text-6xl cursor-pointer"></i>
            </div>
            <iframe
              title="Executive Director Ambassador Simon Mikanipare Shares Our Journey"
              className="absolute inset-0 w-full h-full rounded-lg"
              src={YOUTUBE_URL}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;


// 'use client'

// import { FC } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure

// const Welcome: FC = () => {
//   return (
//     <section className="white_container">
//       <motion.h1
//         className="heading"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Welcome to Sun Rays Foundation
//       </motion.h1>
//       <div className="flex flex-wrap -mx-5">
//         <div className="w-full md:w-1/2 px-5 mb-10 md:mb-0">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="sub-heading !max-w-3xl !text-start mb-4">Welcome to Sun Rays Foundation!</h2>
//             <p className="text-16-medium break-words mb-4">
//               Founded by a group of South Sudanese youth, Sun Rays Foundation is a humanitarian non-profit organization.
//               We are driven by love and purpose to help vulnerable communities through sustainable, community-based
//               solutions that strengthen resilience and empower the most marginalized in East Africa.
//               Join us to build a brighter tomorrow for all.
//             </p>
//             <Button className="mt-5 text-black py-5 px-6 transition-transform transform hover:scale-105">
//               Read More
//             </Button>
//           </motion.div>
//         </div>
//         <div className="w-full md:w-1/2 px-5">
//           <motion.div
//             className="embed-responsive embed-responsive-16by9 youtube-embed relative"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               style={{
//                 width: 'auto',
//                 height: 320, // or height: 100
//                 objectFit: "cover",
//               }}
//               src="/banner3.jpg"
//               alt="Video Thumbnail"
//               width={420}
//               height={420}
//               // layout="fill"
//               // objectFit="cover"
//               priority
//               className="rounded-lg"
//             />
//             <div className="play-button absolute inset-0 flex items-center justify-center">
//               <i className="fas fa-play-circle text-white text-4xl"></i>
//             </div>
//             <iframe
//               title="EXECUTIVE DIRECTOR AMBASSADOR SIMON MIKANIPARE SHARES OUR JOURNEY"
//               aria-label="EXECUTIVE DIRECTOR AMBASSADOR SIMON MIKANIPARE SHARES OUR JOURNEY"
//               className="embed-responsive-item absolute inset-0 w-full h-full rounded-lg"
//               src="https://www.youtube.com/embed/xqIznxZMOp4"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Welcome;


