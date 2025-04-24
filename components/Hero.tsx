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
			className="relative w-full mt-[108px] lg:mt-[120px] min-h-[60vh] lg:h-screen"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
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
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
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

			<div className="container relative h-full px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-center lg:justify-start">
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
									className="max-w-2xl lg:max-w-4xl text-center lg:text-left px-4 sm:px-0"
								>
									<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
										{image.title}
									</h1>
									<p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
										{image.subtitle}
									</p>
									<MotionButton
										onClick={() => router.push("/about-us")}
										className="px-8 py-6 text-lg bg-primary/90 hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										Discover Our Mission
									</MotionButton>
								</motion.div>
							)
					)}
				</AnimatePresence>

				{/* Navigation Controls */}
				<div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
					<MotionButton
						variant="ghost"
						size="icon"
						onClick={() => navigateSlide("prev")}
						className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-green-500 backdrop-blur-sm transition-all"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronLeft className="h-6 w-6" />
					</MotionButton>
					<MotionButton
						variant="ghost"
						size="icon"
						onClick={() => navigateSlide("next")}
						className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-green-500 backdrop-blur-sm transition-all"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronRight className="h-6 w-6" />
					</MotionButton>
				</div>

				{/* Progress Indicators */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImage(index)}
							className="h-2 w-8 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm relative"
							aria-label={`Go to slide ${index + 1}`}
						>
							<motion.div
								className="absolute top-0 left-0 h-full bg-white"
								initial={{ width: 0 }}
								animate={{ width: currentImage === index ? "100%" : "0%" }}
								transition={{ duration: sliderDuration / 1000, ease: "linear" }}
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
