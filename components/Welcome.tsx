"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL || "";

const itemVariants = {
	hidden: { opacity: 0, y: 80, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1.0],
		},
	},
};

const Welcome: FC = () => {
	const router = useRouter();

	const handleAboutUsClick = () => {
		router.push("/about-us");
	};

	// Create motion components properly to avoid deprecation warnings
	const MotionButton = motion.create(Button);

	return (
		<div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
				<div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
				<div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
			</div>
			<section className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden">
				{/* Modern Section Header with Typography Revolution */}
				<motion.div variants={itemVariants} className="relative">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
						Welcome to Sun Rays Foundation
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						{/* Subtitle with glassmorphism effect */}
						<div className="inline-block px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-gray-200 shadow-lg">
							<span className="text-sm sm:text-base font-medium text-gray-700 tracking-wide uppercase">
								Welcome to Sun Rays Foundation!
							</span>
						</div>
						<p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-700 font-medium leading-relaxed">
							Founded by a group of South Sudanese youth, Sun Rays Foundation is
							a humanitarian non-profit organization. We are driven by love and
							purpose to help vulnerable communities through sustainable,
							community-based solutions that strengthen resilience and empower
							the most marginalized in East Africa. Join us to build a brighter
							tomorrow for all.
						</p>

						<MotionButton
							onClick={handleAboutUsClick}
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
							Read More
						</MotionButton>
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
		</div>
	);
};

export default Welcome;
