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
		alt: "Empowering Communities, Transforming Lives",
		title: "Empowering Communities, Transforming Lives",
		subtitle: "Uplifting vulnerable groups through inclusive, community-led solutions",
	},
	{
		src: "/banner2.jpg",
		alt: "Hope in Action for East Africa's Most Vulnerable",
		title: "Hope in Action for East Africa's Most Vulnerable",
		subtitle: "Grassroots impact across South Sudan, Uganda, and Kenya",
	},
	{
		src: "/banner3.jpg",
		alt: "Compassionate with Hope",
		title: "Compassionate with Hope",
		subtitle: "Standing with the marginalized to restore dignity and opportunity",
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
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const router = useRouter();

	// Touch swipe threshold
	const minSwipeDistance = 50;

	// Handle mounting to prevent hydration issues
	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Touch event handlers for swipe navigation
	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;

		if (isLeftSwipe) {
			navigateSlide("next");
		} else if (isRightSwipe) {
			navigateSlide("prev");
		}
	};

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
						overflow-hidden
						/* Device-specific heights for optimal UX */
						h-[100vh] sm:h-[90vh] md:h-[80vh] lg:h-[70vh] xl:h-[65vh]
						/* Minimum heights to prevent content cramping */
						min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[800px]
						/* Maximum heights to prevent excessive whitespace */
						max-h-[900px] sm:max-h-[850px] md:max-h-[800px] lg:max-h-[750px] xl:max-h-[700px]
						/* Enable touch scrolling and swipe on mobile */
						touch-pan-x lg:touch-auto"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			role="banner"
			aria-label="Hero carousel showcasing our mission"
		>
			{/* Enhanced Background Image Container with Zoom and Slide Animation */}
			<div className="absolute inset-0 -z-10">
				<AnimatePresence initial={false}>
					<MotionDiv
						key={`background-${currentImage}`}
						initial={{ 
							x: 100
						}}
						animate={{ 
							opacity: 1,
							scale: 1.15, // Continuous zoom to 115%
							x: 0
						}}
						exit={{ 
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

			{/* Main Content Container - Centered vertically with responsive positioning */}
			<div className="relative h-full flex items-center justify-center">
				<div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
					<div className="max-w-4xl mx-auto lg:mx-0">
						<AnimatePresence initial={false} mode="wait">
							<MotionDiv
								key={`content-${currentImage}`}
								className="text-center lg:text-left"
							>
								{/* Main Headline - Responsive sizing */}
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
									<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
												font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8
												leading-tight tracking-tight
												drop-shadow-2xl
												px-4 sm:px-0">
										{images[currentImage].title}
									</h1>
								</MotionDiv>
								
								{/* Subtitle - Responsive sizing */}
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
									<p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
												text-gray-100 mb-6 sm:mb-8 md:mb-10 lg:mb-12
												max-w-3xl mx-auto lg:mx-0 font-medium 
												leading-relaxed tracking-wide
												drop-shadow-lg
												px-4 sm:px-0">
										{images[currentImage].subtitle}
									</p>
								</MotionDiv>
								
								{/* CTA Buttons - Responsive sizing and spacing */}
								<MotionDiv
									className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 
												justify-center lg:justify-start
												px-4 sm:px-0"
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
										className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6
													text-sm sm:text-base md:text-lg lg:text-xl
													bg-primary/90 hover:bg-primary 
													transition-all duration-300 ease-out
													shadow-xl hover:shadow-2xl
													min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]
													font-semibold rounded-xl hover:rounded-2xl
													focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black
													active:scale-95 backdrop-blur-sm
													border border-white/10 hover:border-primary/30
													w-full sm:w-auto"
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										aria-label="Partner with us to make a difference"
									>
										Partner With Us
									</MotionButton>

									<MotionButton
										onClick={() => router.push("/about-us")}
										className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6
													text-sm sm:text-base md:text-lg lg:text-xl
													bg-[#E58824]/90 hover:bg-[#E58824]
													transition-all duration-300 ease-out
													shadow-xl hover:shadow-2xl
													min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]
													font-semibold rounded-xl hover:rounded-2xl
													focus:outline-none focus:ring-4 focus:ring-[#E58824]/50 focus:ring-offset-2 focus:ring-offset-black
													active:scale-95 backdrop-blur-sm
													border border-white/10 hover:border-[#E58824]/30
													w-full sm:w-auto"
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

			{/* Navigation Controls - Desktop only */}
			<div className="hidden lg:flex absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 
							right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16
							gap-2 sm:gap-3 md:gap-4 z-20">
				<MotionButton
					variant="ghost"
					size="icon"
					onClick={() => navigateSlide("prev")}
					className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
								rounded-full bg-black/50 hover:bg-black/70 
								text-white hover:text-primary backdrop-blur-md 
								transition-all duration-300 ease-out
								focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
								border border-white/20 hover:border-primary/50
								shadow-lg hover:shadow-xl"
					whileHover={{ scale: 1.1, y: -2 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Previous slide"
				>
					<ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
				</MotionButton>
				<MotionButton
					variant="ghost"
					size="icon"
					onClick={() => navigateSlide("next")}
					className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
								rounded-full bg-black/50 hover:bg-black/70 
								text-white hover:text-primary backdrop-blur-md 
								transition-all duration-300 ease-out
								focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
								border border-white/20 hover:border-primary/50
								shadow-lg hover:shadow-xl"
					whileHover={{ scale: 1.1, y: -2 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Next slide"
				>
					<ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
				</MotionButton>
			</div>

			{/* Enhanced Progress Indicators - Mobile/Tablet: Bottom center, Desktop: Right side */}
			{/* Mobile & Tablet Progress Indicators - Bottom Center */}
			<div className="lg:hidden absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 
							flex flex-row gap-2 sm:gap-3 z-20 rotate-180">
				{images.map((_, index) => (
					<button
						key={`mobile-${index}`}
						onClick={() => setCurrentImage(index)}
						className={`relative overflow-hidden transition-all duration-300 ease-out
									w-0.5 sm:w-1 bg-white/30 hover:bg-white/50 backdrop-blur-sm
									focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/50
									border border-white/20 hover:border-white/40
									shadow-md hover:shadow-lg group rounded-full
									${currentImage === index 
										? 'h-8 sm:h-12 md:h-16 bg-white/80' 
										: 'h-6 sm:h-8 md:h-10 hover:h-7 sm:hover:h-10 md:hover:h-12'
									}`}
						aria-label={`Go to slide ${index + 1} of ${images.length}: ${images[index].title}`}
						aria-current={currentImage === index ? "true" : "false"}
					>
						{/* Active line indicator with progress animation */}
						{currentImage === index && (
							<MotionDiv
								className="absolute bottom-0 left-0 w-full bg-primary rounded-full shadow-lg"
								initial={{ height: 0 }}
								animate={{ height: "100%" }}
								transition={{ 
									duration: !isHovered ? TOTAL_SLIDE_DURATION / 1000 : 0.3, 
									ease: !isHovered ? "linear" : "easeInOut"
								}}
							/>
						)}
						
						{/* Hover effect overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
						
						<span className="sr-only">
							{currentImage === index ? "Current slide: " : "Go to slide: "}{images[index].title}
						</span>
					</button>
				))}
			</div>

			{/* Desktop Progress Indicators - Right Side */}
			<div className="hidden lg:flex absolute right-2 sm:right-3 md:right-4 lg:right-8 xl:right-12 
							top-1/2 -translate-y-1/2 
							flex-col-reverse gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 
							z-20 rotate-180 origin-center">
				{images.map((_, index) => (
					<button
						key={`desktop-${index}`}
						onClick={() => setCurrentImage(index)}
						className={`relative overflow-hidden transition-all duration-300 ease-out
									h-0.5 sm:h-1 bg-white/30 hover:bg-white/50 backdrop-blur-sm
									focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/50
									border-b border-white/20 hover:border-white/40
									shadow-md hover:shadow-lg group
									${currentImage === index 
										? 'w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-white/80' 
										: 'w-4 sm:w-6 md:w-8 lg:w-10 xl:w-12 hover:w-5 sm:hover:w-7 md:hover:w-10 lg:hover:w-12 xl:hover:w-14'
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
				<span className="lg:hidden">
					Swipe left or right to navigate slides, or tap the indicators below. Auto-advance pauses on interaction.
				</span>
				<span className="hidden lg:inline">
					Use left and right arrow keys to navigate slides, or tab to navigation buttons. Auto-advance pauses on hover.
				</span>
			</div>
		</section>
	);
};

export default Hero;