"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HiUserGroup } from "react-icons/hi";

const JoinUs: FC = () => {
	const router = useRouter();

	const handleJoinUsClick = () => {
		router.push("/contact");
	};

	// Create motion components properly to avoid deprecation warnings
	const MotionButton = motion.create(Button);

	return (
		<section className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden bg-gradient-to-b from-white to-[#e5ead3]">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
				<motion.div
					className="relative aspect-video w-full overflow-hidden shadow-lg"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src="/banner.png"
						alt="Video Thumbnail"
						fill
						className="object-cover"
						priority
					/>
				</motion.div>

				<motion.div
					className="flex flex-col justify-center items-start space-y-6"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.h2
						className="text-46-normal text-start !font-medium"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Let&apos;s join hands and work together
					</motion.h2>

					<p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-700 leading-relaxed font-medium max-w-[55ch]">
						When we come together, great things happen. Let us collaborate and
						change lives.{" "}
						<span className="text-primary font-semibold">
							Join us in our mission
						</span>{" "}
						to make the world a better place.
					</p>

					<MotionButton
						onClick={handleJoinUsClick}
						className="px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6
													text-sm sm:text-base md:text-lg lg:text-xl
													bg-primary/90 hover:bg-primary 
													transition-all duration-300 ease-out
													shadow-xl hover:shadow-2xl
													min-h-[48px] sm:min-h-[52px] md:min-h-[56px]
													font-semibold rounded-xl hover:rounded-2xl
													focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2
													active:scale-95 backdrop-blur-sm
													border border-white/10 hover:border-primary/30"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						aria-label="Learn more about our mission and values"
					>
						<HiUserGroup className="w-5 h-5" />
						Join Us
					</MotionButton>
				</motion.div>
			</div>
		</section>
	);
};

export default JoinUs;
