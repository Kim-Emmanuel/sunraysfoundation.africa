"use client";

import React from "react";
import { motion } from "framer-motion";
import ProgramCard from "@/components/ProgramCard";
import { programsData } from "@/lib/programsData";

const ProgramsSection = () => {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#e5ead3] py-16 px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-7xl mx-auto"
			>
				<h1 className="text-46-normal !font-bold text-center !mb-8">
					Our Programs
				</h1>
				<p className="text-xl text-center text-gray-600 mb-16">
					Explore our various programs designed to engage and empower
					communities.
				</p>

				<div className="grid gap-12">
					{programsData.map((program, index) => (
						<motion.section
							key={program.id}
							id={program.id} // Ensure this matches the anchor link
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<ProgramCard program={program} />
						</motion.section>
					))}
				</div>
			</motion.div>
		</main>
	);
};

export default ProgramsSection;
