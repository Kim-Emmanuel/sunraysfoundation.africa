"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation'
// import Image from 'next/image';

const MissionAndVision: FC = () => {

  const router = useRouter();
  
  const handleImpactClick = () => {
    router.push("/impacts/success-stories");
  };

	return (
		<div className="relative bg-gradient-to-b from-white to-[#e5ead3] text-black py-12">
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
				<h2 className="text-46-normal !font-medium mb-8">
					Our Vision & Mission
				</h2>
				<div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto px-4">
					<motion.div
						className="flex-1 bg-white shadow-lg p-8 border-[1px] border-[#e58824]/70 hover:shadow-xl transition-shadow rounded-md md:rounded-none md:rounded-tr-[50px] md:rounded-bl-[50px]"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
					>
						<h3 className="text-3xl font-bold mb-6 text-[#e58824]">Vision</h3>
						<p className="customParagraph leading-relaxed text-gray-700">
							A dependable and sustainable society that takes charge of their
							social and economic well-being.
						</p>
					</motion.div>
					<motion.div
						className="flex-1 bg-white shadow-lg p-8 border-[1px] border-[#94c841]/70 hover:shadow-xl transition-shadow rounded-md md:rounded-none md:rounded-tl-[50px] md:rounded-br-[50px]"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
					>
						<h3 className="text-3xl font-bold mb-6 text-[#94c841]">Mission</h3>
						<p className="customParagraph leading-relaxed text-gray-700">
							To promote inclusive social-economic empowerment and right-based
							participation of the most vulnerable and marginalized children,
							youth, women, and people with disabilities for sustainable
							development.
						</p>
					</motion.div>
				</div>

				<div className="mt-12">
					<p className="customParagraph text-center">
						We are driven by love and purpose to help vulnerable communities
						through sustainable, community-based solutions that strengthen
						resilience and empower the most marginalized in East Africa.
					</p>
				</div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button 
            onClick={handleImpactClick}
            className="px-8 py-6 text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See Our Impact Stories
          </Button>
        </motion.div>
			</div>
		</div>
	);
};

export default MissionAndVision;
