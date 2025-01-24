// import Image from "next/image";
import { FC } from 'react';
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Image from 'next/image';
import Partners from '@/components/Partners';
import MissionAndVision from '@/components/MissionAndVision';
// import Features from "@/components/Features";

const Home: FC = () => {
  return (
    <>
      <Hero />
      {/* About Section Container */}
      <section className="">
        <Welcome />
      </section>
      
      {/* <Features /> */}

      {/* Mission and Vision Section */}
      <MissionAndVision />
      
      <section className="section_container mb-12">
        <div className='flex justify-center flex-col items-center'>
          <p className="sub-heading !text-gray-600">
            Coming soon: A deep dive into this Section.
          </p>
          <Image
            src="/under-construction.svg"
            alt="under-construction"
            width={220}
            height={220}
            // layout="fill"
            // objectFit="cover"
            priority
            className="object-cover mt-4"
          />
        </div>
      </section>

      <Partners />
    </>
  );
}

export default Home;
