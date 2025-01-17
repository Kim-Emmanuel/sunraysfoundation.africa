// import Image from "next/image";
import { FC } from 'react';
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Image from 'next/image';
// import Features from "@/components/Features";

const Home: FC = () => {
  return (
    <>
      <Hero />
      {/* About Section Container */}
      <section className="white_container">
        {/* <h1 className="heading">
          Who we are
        </h1>

        <p className="sub-heading !max-w-3xl">
          Founded by a group of South Sudanese youth, Sun Rays Foundation is a humanitarian non-profit organization.
        </p> */}

        <Welcome />
      </section>

      <section className="section_container">
        <div className='flex justify-center flex-col mt-4 items-center'>
          <p className="text-30-semibold">
            Coming soon...
          </p>
          <Image
            src="/under-construction.svg"
            alt="under-construction"
            width={320}
            height={320}
            // layout="fill"
            // objectFit="cover"
            priority
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
