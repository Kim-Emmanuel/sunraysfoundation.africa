"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Program } from "@/lib/types/types";

interface ProgramCardProps {
	program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	const contentVariants = {
		collapsed: {
			height: 0,
			opacity: 0,
			transition: { duration: 0.4, ease: "easeInOut" },
		},
		expanded: {
			height: "auto",
			opacity: 1,
			transition: { duration: 0.4, ease: "easeInOut" },
		},
	};

	return (
		<motion.div
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="bg-white rounded-lg shadow-xl overflow-hidden"
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.2 }}
		>
			<div className="relative h-64 w-full overflow-hidden">
				<Image
					src={program.imageUrl}
					alt={program.title}
					fill
					className="object-cover transition-transform duration-300 hover:scale-105"
					priority
				/>
			</div>

			<div className="p-6">
				<h2 className="text-2xl font-bold mb-4 text-gray-900">
					{program.title}
				</h2>
				<p className="text-gray-600 mb-4">{program.description}</p>

				<AnimatePresence>
					<motion.div
						variants={contentVariants}
						initial="collapsed"
						animate={isExpanded ? "expanded" : "collapsed"}
						exit="collapsed"
						className="overflow-hidden"
					>
						<p className="text-gray-700 mb-4 prose max-w-none">
							{program.details}
						</p>
					</motion.div>
				</AnimatePresence>

				<div className="flex flex-wrap gap-4 justify-between items-center mt-6">
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 rounded-md px-2 py-1"
						aria-expanded={isExpanded}
						aria-controls={`details-${program.id}`}
					>
						<span className="flex items-center gap-2">
							{isExpanded ? "Read Less" : "Read More"}
							<motion.svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								animate={{ rotate: isExpanded ? 180 : 0 }}
								className="transform"
							>
								<path
									d="M2 4L6 8L10 4"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</motion.svg>
						</span>
					</button>

					<a
						href={program.callToAction}
						className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-gray-900 bg-primary hover:bg-primary/90 transition-colors"
						role="button"
					>
						{program.callToActionText}
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default ProgramCard;
