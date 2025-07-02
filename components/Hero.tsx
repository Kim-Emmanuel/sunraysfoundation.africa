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
		subtitle: "Building healthier communities through innovation and collaborative care",
	},
	{
		src: "/banner2.jpg",
		alt: "Innovating for a Better Tomorrow",
		title: "Together We Shine Brighter",
		subtitle: "Collaborative solutions for sustainable healthcare excellence",
	},
	{
		src: "/banner3.jpg",
		alt: "Advancing Medical Excellence",
		title: "Pioneering Healthcare",
		subtitle: "Transforming lives through cutting-edge research and innovation",
	},
];

const ZOOM_DURATION = 6000; // 6 seconds for continuous zoom effect
const TOTAL_SLIDE_DURATION = ZOOM_DURATION; // Total duration matches zoom duration

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

	// Auto-slide timer with zoom + display phases
	useEffect(() => {
		if (!isMounted || isHovered) return;

		const timer = setInterval(nextSlide, TOTAL_SLIDE_DURATION);
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
			{/* Enhanced Background Image Container with Zoom and Slide Animation */}
			<div className="absolute inset-0 -z-10">
				<AnimatePresence initial={false}>
					<MotionDiv
						key={`background-${currentImage}`}
						initial={{ 
							// opacity: 0,
							// scale: 1.0,
							x: 100
						}}
						animate={{ 
							opacity: 1,
							scale: 1.15, // Continuous zoom to 115%
							x: 0
						}}
						exit={{ 
							// opacity: 0,
							// scale: 0.95,
							x: -100
						}}
						transition={{ 
							opacity: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0] },
							scale: { 
								duration: TOTAL_SLIDE_DURATION / 1000, // 6 seconds continuous zoom
								ease: "linear" // Smooth continuous linear zoom
							},
							x: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1.0] }
						}}
						className="absolute inset-0"
					>
						{/* Enhanced gradient overlay for better text readability */}
						<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-10" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
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

			{/* Main Content Container - Left aligned */}
			<div className="relative h-full min-h-screen flex items-center">
				<div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
					<div className="max-w-4xl">
						<AnimatePresence initial={false} mode="wait">
							<MotionDiv
								key={`content-${currentImage}`}
								className="text-left"
							>
								{/* Main Headline - Slide from top */}
								<MotionDiv
									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -30 }}
									transition={{ 
										delay: 0.5, 
										duration: 1.0,
										ease: [0.25, 0.1, 0.25, 1.0]
									}}
								>
									<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
												font-bold text-white mb-4 sm:mb-6 md:mb-8
												leading-tight tracking-tight
												drop-shadow-2xl">
										{images[currentImage].title}
									</h1>
								</MotionDiv>
								
								{/* Subtitle - Slide from bottom */}
								<MotionDiv
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 30 }}
									transition={{ 
										delay: 0.7, 
										duration: 1.0,
										ease: [0.25, 0.1, 0.25, 1.0]
									}}
								>
									<p className="text-base sm:text-lg md:text-xl lg:text-2xl 
												text-gray-100 mb-8 sm:mb-10 md:mb-12
												max-w-3xl font-medium 
												leading-relaxed tracking-wide
												drop-shadow-lg">
										{images[currentImage].subtitle}
									</p>
								</MotionDiv>
								
								{/* CTA Button - Slide from bottom with delay */}
								<MotionDiv
									className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 30 }}
									transition={{ 
										delay: 0.9, 
										duration: 1.0,
										ease: [0.25, 0.1, 0.25, 1.0]
									}}
								>
									<MotionButton
										onClick={() => router.push("/about-us")}
										className="px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6
													text-sm sm:text-base md:text-lg lg:text-xl
													bg-primary/90 hover:bg-primary 
													transition-all duration-300 ease-out
													shadow-xl hover:shadow-2xl
													min-h-[48px] sm:min-h-[52px] md:min-h-[56px]
													font-semibold rounded-xl hover:rounded-2xl
													focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black
													active:scale-95 backdrop-blur-sm
													border border-white/10 hover:border-primary/30"
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										aria-label="Learn more about our mission and values"
									>
										Partner With Us
									</MotionButton>

									<MotionButton
										onClick={() => router.push("/about-us")}
										className="px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6
													text-sm sm:text-base md:text-lg lg:text-xl
													bg-[#E58824]/90 hover:bg-[#E58824]
													transition-all duration-300 ease-out
													shadow-xl hover:shadow-2xl
													min-h-[48px] sm:min-h-[52px] md:min-h-[56px]
													font-semibold rounded-xl hover:rounded-2xl
													focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black
													active:scale-95 backdrop-blur-sm
													border border-white/10 hover:border-primary/30"
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										aria-label="Learn more about our mission and values"
									>
										Learn More
									</MotionButton>
								</MotionDiv>
							</MotionDiv>
						</AnimatePresence>
					</div>
				</div>
			</div>

			{/* Navigation Controls - Moved to bottom */}
			<div className="absolute bottom-20 sm:bottom-24 md:bottom-28 right-6 sm:right-8 md:right-12 lg:right-16
							flex gap-3 sm:gap-4 z-20">
				<MotionButton
					variant="ghost"
					size="icon"
					onClick={() => navigateSlide("prev")}
					className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
								bg-black/50 hover:bg-black/70 text-white hover:text-primary 
								backdrop-blur-md transition-all duration-300 ease-out
								focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
								border border-white/20 hover:border-primary/50
								shadow-lg hover:shadow-xl"
					whileHover={{ scale: 1.1, y: -2 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Previous slide"
				>
					<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
				</MotionButton>
				<MotionButton
					variant="ghost"
					size="icon"
					onClick={() => navigateSlide("next")}
					className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
								bg-black/50 hover:bg-black/70 text-white hover:text-primary 
								backdrop-blur-md transition-all duration-300 ease-out
								focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
								border border-white/20 hover:border-primary/50
								shadow-lg hover:shadow-xl"
					whileHover={{ scale: 1.1, y: -2 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Next slide"
				>
					<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
				</MotionButton>
			</div>

			{/* Enhanced Progress Indicators - Right Center Aligned as Horizontal Lines */}
			<div className="absolute right-3 sm:right-4 md:right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 
							flex flex-col-reverse gap-2 sm:gap-3 md:gap-4 lg:gap-5 z-20 rotate-180 origin-center">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentImage(index)}
						className={`relative overflow-hidden transition-all duration-300 ease-out
									h-0.5 sm:h-1 bg-white/30 hover:bg-white/50 backdrop-blur-sm
									focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/50
									border-b border-white/20 hover:border-white/40
									shadow-md hover:shadow-lg group
									${currentImage === index 
										? 'w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-white/80' 
										: 'w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 hover:w-7 sm:hover:w-10 md:hover:w-12 lg:hover:w-14 xl:hover:w-16'
									}`}
						aria-label={`Go to slide ${index + 1} of ${images.length}: ${images[index].title}`}
						aria-current={currentImage === index ? "true" : "false"}
					>
						{/* Active line indicator with progress animation */}
						{currentImage === index && (
							<MotionDiv
								className="absolute left-0 top-0 h-full bg-primary rounded-r-sm shadow-lg"
								initial={{ width: 0 }}
								animate={{ width: "100%" }}
								transition={{ 
									duration: !isHovered ? TOTAL_SLIDE_DURATION / 1000 : 0.3, 
									ease: !isHovered ? "linear" : "easeInOut"
								}}
							/>
						)}
						
						{/* Hover effect overlay */}
						<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						
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