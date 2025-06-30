"use client";

import { FC, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
	{
		src: "/banner.png",
		alt: "Collaborating for a Healthy Asia",
		title: "Compassionate with Hope",
		subtitle: "Building healthier communities through innovation",
	},
	{
		src: "/banner2.jpg",
		alt: "Innovating for a Better Tomorrow",
		title: "Together We Shine Brighter",
		subtitle: "Collaborative solutions for sustainable healthcare",
	},
	{
		src: "/banner3.jpg",
		alt: "Advancing Medical Excellence",
		title: "Pioneering Healthcare",
		subtitle: "Transforming lives through cutting-edge research",
	},
];

const SLIDE_DURATION = 5000; // 5 seconds

// Create motion components properly to avoid deprecation warnings
const MotionButton = motion.create(Button);
const MotionDiv = motion.div;

const Hero: FC = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const router = useRouter();

	// Handle mounting to prevent hydration issues
	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Enhanced auto-slide functionality with smooth transitions
	const nextSlide = useCallback(() => {
		setCurrentImage((prev) => (prev + 1) % images.length);
	}, []);

	const navigateSlide = useCallback((direction: "prev" | "next") => {
		setCurrentImage((prev) =>
			direction === "next"
				? (prev + 1) % images.length
				: (prev - 1 + images.length) % images.length
		);
	}, []);

	// Auto-slide timer with improved fade transitions
	useEffect(() => {
		if (!isMounted || isHovered) return;

		const timer = setInterval(nextSlide, SLIDE_DURATION);
		return () => clearInterval(timer);
	}, [isMounted, isHovered, nextSlide]);

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				navigateSlide("prev");
			} else if (event.key === "ArrowRight") {
				navigateSlide("next");
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [navigateSlide]);

	if (!isMounted) {
		return null; // Prevent hydration mismatch
	}

	return (
		<section
			className="relative w-full mt-20 sm:mt-24 md:mt-28 lg:mt-[120px] 
						min-h-screen overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			role="banner"
			aria-label="Hero carousel showcasing our mission"
		>
			{/* Enhanced Background Image Container with Smooth Crossfade */}
			<div className="absolute inset-0 -z-10">
				<AnimatePresence>
					<MotionDiv
						key={`background-${currentImage}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ 
							duration: 1.5,
							ease: [0.25, 0.1, 0.25, 1.0] // Smoother easing curve
						}}
						className="absolute inset-0"
					>
						{/* Enhanced gradient overlay for better text readability */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 z-10" />
						<div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 z-10" />
						<Image
							src={images[currentImage].src}
							alt={images[currentImage].alt}
							fill
							priority
							className="object-cover object-center"
							sizes="100vw"
							quality={90}
						/>
					</MotionDiv>
				</AnimatePresence>
			</div>

			{/* Main Content Container - Optimized for all screen sizes */}
			<div className="relative h-full min-h-screen flex items-center justify-center">
				<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
					<AnimatePresence>
						<MotionDiv
							key={`content-${currentImage}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ 
								duration: 1.2,
								ease: [0.25, 0.1, 0.25, 1.0],
								delay: 0.2 // Slight delay to sync with background
							}}
							className="text-center max-w-5xl mx-auto"
						>
							{/* Main Headline - Enhanced mobile responsiveness */}
							<MotionDiv
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.8 }}
							>
								<h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
											font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10
											leading-[1.1] sm:leading-[1.05] md:leading-none
											drop-shadow-2xl tracking-tight">
									{images[currentImage].title}
								</h1>
							</MotionDiv>
							
							{/* Subtitle - Improved spacing and readability */}
							<MotionDiv
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.8 }}
							>
								<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
											text-gray-100 mb-8 sm:mb-10 md:mb-12 lg:mb-16
											max-w-4xl mx-auto font-medium 
											leading-relaxed tracking-wide
											drop-shadow-lg px-4 sm:px-0">
									{images[currentImage].subtitle}
								</p>
							</MotionDiv>
							
							{/* CTA Button - Enhanced mobile optimization */}
							<MotionDiv
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.8 }}
							>
								<MotionButton
									onClick={() => router.push("/about-us")}
									className="px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-7 xl:px-20 xl:py-8
												text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
												bg-primary/90 hover:bg-primary 
												transition-all duration-300 ease-out
												shadow-xl hover:shadow-2xl
												min-h-[56px] sm:min-h-[60px] md:min-h-[64px] lg:min-h-[68px] xl:min-h-[72px]
												font-semibold rounded-xl hover:rounded-2xl
												focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black
												active:scale-95 backdrop-blur-sm
												border border-white/10 hover:border-primary/30"
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									aria-label="Learn more about our mission and values"
								>
									Discover Our Mission
								</MotionButton>
							</MotionDiv>
						</MotionDiv>
					</AnimatePresence>
				</div>
			</div>

			{/* Navigation Controls - Enhanced positioning and styling */}
			<div className="absolute right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 
							flex flex-col gap-3 sm:gap-4 z-20">
				<MotionButton
					variant="ghost"
					size="icon"
					onClick={() => navigateSlide("prev")}
					className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full 
								bg-black/50 hover:bg-black/70 text-white hover:text-primary 
								backdrop-blur-md transition-all duration-300 ease-out
								focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
								border border-white/20 hover:border-primary/50
								shadow-lg hover:shadow-xl"
					whileHover={{ scale: 1.1, y: -2 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Previous slide"
				>
					<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
				</MotionButton>
				<MotionButton
					variant="ghost"
					size="icon"
					onClick={() => navigateSlide("next")}
					className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full 
								bg-black/50 hover:bg-black/70 text-white hover:text-primary 
								backdrop-blur-md transition-all duration-300 ease-out
								focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
								border border-white/20 hover:border-primary/50
								shadow-lg hover:shadow-xl"
					whileHover={{ scale: 1.1, y: -2 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Next slide"
				>
					<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
				</MotionButton>
			</div>

			{/* Enhanced Progress Indicators */}
			<div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 
							flex gap-2 sm:gap-3 md:gap-4 z-20">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentImage(index)}
						className="relative overflow-hidden rounded-full transition-all duration-300 ease-out
									h-3 w-8 sm:h-3 sm:w-10 md:h-4 md:w-12 lg:h-4 lg:w-14
									bg-white/30 hover:bg-white/40 backdrop-blur-sm
									focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/50
									border border-white/20 hover:border-white/40
									shadow-md hover:shadow-lg"
						aria-label={`Go to slide ${index + 1} of ${images.length}: ${images[index].title}`}
						aria-current={currentImage === index ? "true" : "false"}
					>
						<MotionDiv
							className="absolute top-0 left-0 h-full bg-white rounded-full shadow-sm"
							initial={{ width: 0 }}
							animate={{ 
								width: currentImage === index ? "100%" : "0%",
								opacity: currentImage === index ? 1 : 0.7
							}}
							transition={{ 
								duration: currentImage === index && !isHovered ? SLIDE_DURATION / 1000 : 0.3, 
								ease: currentImage === index && !isHovered ? "linear" : "easeInOut"
							}}
						/>
						<span className="sr-only">
							{currentImage === index ? "Current slide: " : "Go to slide: "}{images[index].title}
						</span>
					</button>
				))}
			</div>

			{/* Live region for screen reader announcements */}
			<div 
				className="sr-only" 
				aria-live="polite" 
				aria-atomic="true"
				role="status"
			>
				{`Slide ${currentImage + 1} of ${images.length}: ${images[currentImage].title}. ${images[currentImage].subtitle}`}
			</div>

			{/* Keyboard navigation instructions (hidden) */}
			<div className="sr-only">
				Use left and right arrow keys to navigate slides, or tab to navigation buttons. Auto-advance pauses on hover.
			</div>
		</section>
	);
};

export default Hero;