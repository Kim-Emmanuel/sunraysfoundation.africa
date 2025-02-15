"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Tag, Folder, X } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { SuccessStory } from "@/lib/types/types";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Button } from "./ui/button";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

interface StoriesProps {
	stories: SuccessStory[];
}

export default function Stories({ stories }: StoriesProps) {
	const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { width } = useWindowSize();

	// Improved responsive breakpoints
	const getVisibleStories = useCallback(() => {
		if (!width) return 1;
		if (width < 640) return 1;
		if (width < 1024) return 2;
		if (width < 1280) return 3;
		return 3; // Show 3 stories on larger devices
	}, [width]);

	const visibleStories = getVisibleStories();

	const handleNext = useCallback(() => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex + 1) % Math.max(1, stories.length - visibleStories + 1)
		);
	}, [stories.length, visibleStories]);

	const handlePrevious = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0
				? Math.max(0, stories.length - visibleStories)
				: prevIndex - 1
		);
	}, [stories.length, visibleStories]);

	const getVisibleStoriesArray = useCallback(() => {
		return stories.slice(currentIndex, currentIndex + visibleStories);
	}, [currentIndex, visibleStories, stories]);

	return (
		<section className="relative max-w-[1440px] bg-white mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-46-normal !font-medium text-center mb-10 text-gray">
				Success Stories
			</h1>

			<div className="mt-8 mb-8">
				<p className="customParagraph text-left">
					We are driven by love and purpose to help vulnerable communities
					through sustainable, community-based solutions that strengthen
					resilience and empower the most marginalized in East Africa.
				</p>
			</div>

			<div className="relative flex items-center">
				{/* Navigation Buttons */}
				<button
					onClick={handlePrevious}
					className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
					disabled={currentIndex === 0}
					aria-label="Previous stories"
				>
					<ChevronLeft className="w-6 h-6 text-primary" />
				</button>

				{/* Stories Grid */}
				<div className="w-full overflow-hidden px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<AnimatePresence mode="wait">
							{getVisibleStoriesArray().map((story, index) => (
								<StoryCard
									key={`${story.id}-${index}`}
									story={story}
									onSelect={() => setSelectedStory(story)}
								/>
							))}
						</AnimatePresence>
					</div>
				</div>

				<button
					onClick={handleNext}
					className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
					disabled={currentIndex >= stories.length - visibleStories}
					aria-label="Next stories"
				>
					<ChevronRight className="w-6 h-6 text-primary" />
				</button>
			</div>

			{/* Story Detail Modal */}
			<StoryDetailModal
				story={selectedStory}
				onClose={() => setSelectedStory(null)}
			/>

			<div className="mt-12 flex flex-col items-center">
				<p className="customParagraph text-center max-w-[65ch]">
					We are driven by love and purpose to help vulnerable communities
					through sustainable, community-based solutions that strengthen
					resilience and empower the most marginalized in East Africa.
				</p>

				<motion.div
					className="mt-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Link
						href="/contact"
						className="custom-link inline-flex items-center justify-center text-gray-800 rounded-lg hover:text-gray-500 font-medium transition-colors group"
						aria-label="See Our Impact Stories"
					>
						<span className="inline-flex items-center">
							Join Our Community
							<HiOutlineArrowRight
								className="ml-2 w-5 h-5 text-primary transition-transform transform group-hover:translate-x-1"
								aria-hidden="true"
							/>
						</span>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

// Extracted StoryCard component for better organization
const StoryCard = ({
	story,
	onSelect,
}: {
	story: SuccessStory;
	onSelect: () => void;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -20 }}
		transition={{ duration: 0.3 }}
		className="w-full"
		onClick={onSelect}
	>
		<Card className="cursor-pointer group hover:shadow-xl hover:scale-105 transition-transform duration-300">
			<CardContent className="p-4 relative aspect-[3/4]">
				<Image
					src={story.image}
					alt={story.title}
					fill
					className="object-cover rounded-md md:w-[340px] md:h-[480px]"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-md" />
				<div className="absolute bottom-0 p-4 z-10 w-full">
					<h3 className="text-xl font-semibold mb-2 text-white">
						{story.title}
					</h3>
					<p className="text-sm text-white/90 line-clamp-2 mb-3">
						{story.shortDescription}
					</p>
					<div className="flex flex-wrap gap-2">
						{story.tags?.map((tag, index) => (
							<span
								key={index}
								className="text-sm text-white/80 flex items-center"
							>
								<Tag className="w-4 h-4 mr-1" /> {tag}
							</span>
						)) ?? []}
					</div>
				</div>
			</CardContent>
		</Card>
	</motion.div>
);

// Modified StoryDetailModal component
const StoryDetailModal = ({
	story,
	onClose,
}: {
	story: SuccessStory | null;
	onClose: () => void;
}) => (
	<Dialog open={!!story} onOpenChange={onClose}>
		<DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
			{story && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
				>
					<DialogHeader className="relative">
						{/* Close button - visible only on larger screens */}
						<button
							onClick={onClose}
							className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100 transition-colors hidden sm:block"
							aria-label="Close dialog"
						>
							<X className="w-5 h-5" />
						</button>
						<DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold pr-8">
							{story.title}
						</DialogTitle>
					</DialogHeader>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
						<div className="relative h-48 sm:h-64 md:h-80">
							<Image
								src={story.image}
								alt={story.title}
								fill
								className="object-cover rounded-lg"
								sizes="(max-width: 768px) 100vw, 50vw"
								priority
							/>
						</div>

						<div className="relative px-0 sm:px-4">
							<Quote
								className="hidden md:block absolute -top-8 -left-8 text-primary/20 w-16 h-16 sm:w-24 sm:h-24"
								strokeWidth={1}
							/>
							<p className="text-sm sm:text-base md:text-lg leading-relaxed relative z-10">
								{story.fullStory}
							</p>
							{story.author && (
								<div className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
									— {story.author}
								</div>
							)}
							<div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
								{story.tags && (
									<div className="flex flex-wrap gap-1.5 sm:gap-2">
										{story.tags.map((tag, index) => (
											<span
												key={index}
												className="text-xs sm:text-sm text-primary flex items-center bg-primary/10 px-2 py-1 rounded-full"
											>
												<Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> {tag}
											</span>
										))}
									</div>
								)}
								{story.category && (
									<div className="text-xs sm:text-sm text-muted-foreground flex items-center">
										<Folder className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />{" "}
										{story.category}
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Mobile close button - visible only on small screens */}
					<div className="mt-6 sm:hidden">
						<button
							onClick={onClose}
							className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
							aria-label="Close dialog"
						>
							<X className="w-4 h-4" />
							<span>Close</span>
						</button>
					</div>
				</motion.div>
			)}
		</DialogContent>
	</Dialog>
);
