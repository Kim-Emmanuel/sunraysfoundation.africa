"use client";

import { FC } from "react";
import { motion } from "framer-motion";

// Animation variants for staggered reveals
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

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

const videoVariants = {
	hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
	visible: {
		opacity: 1,
		scale: 1,
		rotateY: 0,
		transition: {
			duration: 0.9,
			ease: [0.25, 0.1, 0.25, 1.0],
		},
	},
};

// Load video data from environment variables
const getVideoData = () => [
	{
		id: process.env.NEXT_PUBLIC_VIDEO_1_ID || "",
		title:
			process.env.NEXT_PUBLIC_VIDEO_1_TITLE || "Healthcare Innovation Story",
		description:
			process.env.NEXT_PUBLIC_VIDEO_1_DESC ||
			"Discover how our innovative approaches are transforming healthcare delivery across communities.",
		gradient: "",
		accentColor: "",
	},
	{
		id: process.env.NEXT_PUBLIC_VIDEO_2_ID || "",
		title: process.env.NEXT_PUBLIC_VIDEO_2_TITLE || "Community Impact Journey",
		description:
			process.env.NEXT_PUBLIC_VIDEO_2_DESC ||
			"Witness the powerful stories of communities we've helped build healthier futures together.",
		gradient: "",
		accentColor: "",
	},
	{
		id: process.env.NEXT_PUBLIC_VIDEO_3_ID || "",
		title: process.env.NEXT_PUBLIC_VIDEO_3_TITLE || "Collaborative Excellence",
		description:
			process.env.NEXT_PUBLIC_VIDEO_3_DESC ||
			"Explore our partnerships and collaborative efforts that create lasting positive change.",
		gradient: "",
		accentColor: "",
	},
];

const JourneysOfImpact: FC = () => {
	const videos = getVideoData();

	return (
		<section className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden">
			{/* Background with modern gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

			<div className="relative container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16 sm:mb-20 md:mb-24"
				>
					{/* Modern Section Header with Typography Revolution */}
					<motion.div variants={itemVariants} className="relative">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
							Journeys of Impact
						</h2>

						{/* Subtitle with glassmorphism effect */}
						<div className="inline-block px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-gray-200 shadow-lg">
							<span className="text-sm sm:text-base font-medium text-gray-700 tracking-wide uppercase">
								Transformative Stories
							</span>
						</div>
					</motion.div>

					{/* Enhanced Section Description */}
					<motion.div
						variants={itemVariants}
						className="max-w-4xl mx-auto mt-12"
					>
						<p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
							Explore the transformative stories that define our mission.
							Through these powerful journeys, witness how{" "}
							<span className="text-primary font-semibold">
								compassionate healthcare innovation
							</span>{" "}
							creates lasting change in communities across Africa.
						</p>
					</motion.div>
				</motion.div>

				{/* Modern Video Grid with Glassmorphism */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
				>
					{videos.map((video, index) => (
						<motion.div
							key={video.id}
							variants={videoVariants}
							className="group relative"
						>
							{/* Glassmorphism Card Container */}
							<div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/70 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:rotate-1">
								{/* Gradient overlay for depth */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
								/>

								{/* Video Container with modern styling */}
								<div className="relative aspect-video overflow-hidden rounded-t-3xl">
									<iframe
										src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1`}
										title={video.title}
										className="absolute inset-0 w-full h-full border-0 transition-all duration-700 group-hover:scale-110"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
										loading="lazy"
									/>
								</div>

								{/* Enhanced Video Info with glassmorphism */}
								<div className="relative p-8 sm:p-10 backdrop-blur-sm">
									{/* Decorative accent line */}
									<div
										className={`w-12 h-1 bg-gradient-to-r from-${video.accentColor}-500 to-${video.accentColor}-300 rounded-full mb-6 group-hover:w-20 transition-all duration-500`}
									/>

									<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
										{video.title}
									</h3>

									<p className="text-gray-600 leading-relaxed text-base sm:text-lg font-medium">
										{video.description}
									</p>

									{/* CTA Link */}
									<div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
										<button className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
											Watch Story
											<svg
												className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</button>
									</div>
								</div>

								{/* Decorative glassmorphism border */}
								<div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />

								{/* Floating number indicator */}
								<div className="absolute top-6 right-6 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-sm font-bold text-gray-700 border border-white/20">
									{index + 1}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Enhanced Call to Action */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center mt-20 sm:mt-24 md:mt-28"
				>
					<div className="max-w-4xl mx-auto">
						<motion.div
							className="relative inline-block p-12 sm:p-16"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="relative z-10">
								<p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-10 sm:mb-12 font-medium leading-relaxed">
									Ready to be part of these transformative journeys?
									<br className="hidden sm:block" />
									<span className="text-primary font-semibold">
										Join us in creating lasting impact
									</span>{" "}
									across communities.
								</p>

								<motion.button
									className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6
                        text-sm sm:text-base md:text-lg lg:text-xl font-semibold
                        bg-primary hover:bg-primary/90 text-white
                        rounded-xl hover:rounded-2xl
                        shadow-xl hover:shadow-2xl
                        transition-all duration-300 ease-out
                        focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2
                        border border-primary/20 hover:border-primary/40"
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									Start Your Impact Journey
								</motion.button>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default JourneysOfImpact;
