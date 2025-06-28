"use client";

import { FC, useEffect, useState } from "react";
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

const sliderDuration = 5000;

const Hero: FC = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const router = useRouter();

	const MotionButton = motion(Button);

	useEffect(() => {
		if (!isHovered) {
			const timer = setInterval(() => {
				setCurrentImage((prev) => (prev + 1) % images.length);
			}, sliderDuration);
			return () => clearInterval(timer);
		}
	}, [isHovered]);

	const navigateSlide = (direction: "prev" | "next") => {
		setCurrentImage((prev) =>
			direction === "next"
				? (prev + 1) % images.length
				: (prev - 1 + images.length) % images.length
		);
	};

	return (
		<section
			className="relative w-full mt-[108px] lg:mt-[120px] min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:h-screen"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			role="banner"
			aria-label="Hero carousel showcasing our mission"
		>
			{/* Background Image Container */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<AnimatePresence initial={false}>
					{images.map(
						(image, index) =>
							currentImage === index && (
								<motion.div
									key={index}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 1.2, ease: "easeInOut" }}
									className="absolute inset-0"
								>
									{/* Enhanced gradient overlay for better text readability */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 z-10" />
									<Image
										src={image.src}
										alt={image.alt}
										fill
										priority
										className="object-cover object-center"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
										quality={90}
									/>
								</motion.div>
							)
					)}
				</AnimatePresence>
			</div>

			{/* Main Content Container */}
			<div className="container relative h-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl flex items-center justify-center lg:justify-start">
				<AnimatePresence mode="wait">
					{images.map(
						(image, index) =>
							currentImage === index && (
								<motion.div
									key={index}
									initial={{ opacity: 0, filter: "blur(4px)" }}
									animate={{ opacity: 1, filter: "blur(0px)" }}
									exit={{ opacity: 0, filter: "blur(4px)" }}
									transition={{ duration: 0.8, ease: "easeInOut" }}
									className="w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl text-center lg:text-left 
												py-8 sm:py-12 md:py-16 lg:py-0"
								>
									{/* Main Headline */}
									<h1 
										className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
													font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8
													leading-tight sm:leading-tight md:leading-tight lg:leading-none xl:leading-none
													drop-shadow-2xl"
									>
										{image.title}
									</h1>
									
									{/* Subtitle */}
									<p 
										className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
													text-gray-100 mb-6 sm:mb-8 md:mb-10 lg:mb-12
													max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
													mx-auto lg:mx-0 font-medium 
													leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed
													drop-shadow-lg"
									>
										{image.subtitle}
									</p>
									
									{/* CTA Button */}
									<MotionButton
										onClick={() => router.push("/about-us")}
										className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-14 xl:py-7
													text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
													bg-primary/90 hover:bg-primary 
													transition-all duration-300 shadow-lg hover:shadow-2xl
													min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px] xl:min-h-[64px]
													font-semibold rounded-lg hover:rounded-xl
													focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black
													active:scale-95"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										aria-label="Learn more about our mission and values"
									>
										Discover Our Mission
									</MotionButton>
								</motion.div>
							)
					)}
				</AnimatePresence>

				{/* Navigation Controls - Responsive sizing */}
				<div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4">
					<MotionButton
						variant="ghost"
						size="icon"
						onClick={() => navigateSlide("prev")}
						className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full 
									bg-black/40 hover:bg-black/60 text-white hover:text-primary 
									backdrop-blur-sm transition-all duration-200
									focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
									border border-white/10 hover:border-primary/30"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
					</MotionButton>
					<MotionButton
						variant="ghost"
						size="icon"
						onClick={() => navigateSlide("next")}
						className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full 
									bg-black/40 hover:bg-black/60 text-white hover:text-primary 
									backdrop-blur-sm transition-all duration-200
									focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50
									border border-white/10 hover:border-primary/30"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label="Next slide"
					>
						<ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
					</MotionButton>
				</div>

				{/* Progress Indicators - Enhanced for mobile */}
				<div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImage(index)}
							className="relative overflow-hidden rounded-full transition-all duration-300
										h-3 w-6 sm:h-3 sm:w-8 md:h-4 md:w-10 lg:h-4 lg:w-12
										bg-white/20 hover:bg-white/30 backdrop-blur-sm
										focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/50
										border border-white/10"
							aria-label={`Go to slide ${index + 1} of ${images.length}: ${images[index].title}`}
							aria-current={currentImage === index ? "true" : "false"}
						>
							<motion.div
								className="absolute top-0 left-0 h-full bg-white rounded-full"
								initial={{ width: 0 }}
								animate={{ width: currentImage === index ? "100%" : "0%" }}
								transition={{ 
									duration: currentImage === index ? sliderDuration / 1000 : 0.3, 
									ease: currentImage === index ? "linear" : "easeInOut"
								}}
							/>
							{/* Screen reader text */}
							<span className="sr-only">
								{currentImage === index ? "Current slide: " : "Go to slide: "}{images[index].title}
							</span>
						</button>
					))}
				</div>
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
				Use left and right arrow keys to navigate slides, or tab to navigation buttons
			</div>
		</section>
	);
};

export default Hero;