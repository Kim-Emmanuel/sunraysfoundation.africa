"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi";

const partners = [
	{ name: "icd", src: "/images/partner-logos/icd-logo.png", url: "#" },
	{ name: "cmmd", src: "/images/partner-logos/cmmb-logo.png", url: "#" },
	{ name: "amref", src: "/images/partner-logos/amref-logo.png", url: "#" },
	{
		name: "misereor",
		src: "/images/partner-logos/misereor-logo.png",
		url: "#",
	},
];

const Partners: React.FC = () => {
	const controls = useAnimation();
	const [isHovered, setIsHovered] = useState(false);

	// Infinite scroll animation
	useEffect(() => {
		if (!isHovered) {
			controls.start({
				x: "-100%",
				transition: {
					repeat: Infinity,
					ease: "linear",
					duration: 40,
				},
			});
		} else {
			controls.stop();
		}
	}, [controls, isHovered]);

	return (
		<section className="py-12 bg-gray-50 mb-12">
			<div className="mx-auto text-center">
				<h2 className="heading-partner">Our Partners</h2>
				<div className="relative w-full max-w-6xl mx-auto">
					{/* Navigation Arrows */}
					<button
						onClick={() => controls.start({ x: "-=100%" })}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
						aria-label="Previous Partner"
					>
						<IoChevronBackOutline size={24} />
					</button>
					<button
						onClick={() => controls.start({ x: "+=100%" })}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
						aria-label="Next Partner"
					>
						<IoChevronForwardOutline size={24} />
					</button>

					{/* Partners Carousel */}
					<div
						className="relative w-full overflow-hidden"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<motion.div
							className="flex space-x-8"
							animate={controls}
							style={{ width: `${partners.length * 200}px` }} // Adjust width dynamically
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
						>
							{partners.concat(partners).map((partner, index) => (
								<motion.div
									key={`${partner.name}-${index}`}
									whileHover={{ scale: 1.05 }}
									className="flex-shrink-0 mx-4 my-2"
								>
									<Link href={partner.url} className="block w-[150px]">
										<Image
											src={partner.src}
											alt={partner.name}
											width={150}
											height={50}
											className="object-contain h-12"
											loading="lazy"
											quality={75}
										/>
									</Link>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>

				{/* Call-to-Action */}
				<div className="mt-8">
					<Link
						href="/impacts/gallery"
						className="custom-link inline-flex items-center justify-center text-gray-800 rounded-lg hover:text-gray-500 font-medium transition-colors group"
						aria-label="See Our Impact Stories"
					>
						<span className="inline-flex items-center">
							See How We Work Together
							<HiOutlineArrowRight
								className="ml-2 w-5 h-5 text-primary transition-transform transform group-hover:translate-x-1"
								aria-hidden="true"
							/>
						</span>
					</Link>
					<p className="mt-2 customParagraph text-gray-600">
						Learn more about our partnerships and how we work together to create
						a better world.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Partners;
