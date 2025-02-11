"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface ScrollState {
	isVisible: boolean;
	lastScrollY: number;
	showHeaderContent: boolean;
}

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	activeSection: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	isOpen,
	onClose,
	activeSection,
}) => {
	const [scrollState, setScrollState] = useState<ScrollState>({
		isVisible: true,
		lastScrollY: 0,
		showHeaderContent: true,
	});
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const pathname = usePathname();

	const handleDropdown = (dropdown: string) => {
		if (window.innerWidth < 768) {
			setOpenDropdown(openDropdown === dropdown ? null : dropdown);
		}
	};

	const closeDropdown = () => setOpenDropdown(null);

	const isActiveLink = (link: string) => pathname === link;

	useEffect(() => {
		const SCROLL_THRESHOLD = 50; // Add threshold for better control

		const controlNavbar = () => {
			if (typeof window === undefined) return;

			const currentScrollY = window.scrollY;

			setScrollState((prevState) => ({
				isVisible:
					currentScrollY < SCROLL_THRESHOLD ||
					currentScrollY < prevState.lastScrollY,
				lastScrollY: currentScrollY,
				showHeaderContent: currentScrollY < SCROLL_THRESHOLD,
			}));
		};

		const handleResize = () => {
			if (window.innerWidth >= 768) {
				closeDropdown();
			}
		};

		// Throttle scroll event for better performance
		let timeoutId: NodeJS.Timeout;
		const throttledControlNavbar = () => {
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(controlNavbar, 150);
		};

		window.addEventListener("scroll", throttledControlNavbar);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", throttledControlNavbar);
			window.removeEventListener("resize", handleResize);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, []);

	return (
		<motion.div
			className="fixed inset-0 bg-white z-50"
			initial={{ x: "100%" }}
			animate={{ x: isOpen ? 0 : "100%" }}
			transition={{ type: "spring", damping: 30 }}
		>
			<div className="h-full flex flex-col">
				{/* Search Bar */}
				<div className="sticky top-0 p-4 bg-white shadow-sm">
					<div className="relative">
						<Input
							type="search"
							placeholder="Search..."
							className="w-full pl-10 pr-4 py-2 rounded-full border-2"
						/>
						<Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
					</div>
				</div>

				{/* Menu Categories */}
				<div className="flex-1 overflow-y-auto pb-24">
					<nav className="p-4 space-y-6">
						{/* Who We Are Section */}
						<section>
							<h2 className="text-xl font-bold mb-3 text-gray-900">
								<Link
									href="/who-we-are"
									className={clsx("custom-link", {
										"active-link":
											isActiveLink("/who-we-are") ||
											isActiveLink("/about-us") ||
											isActiveLink("/our-history"),
									})}
								>
									Who we are
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/about-us"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/about-us"),
											}
										)}
										onClick={closeDropdown}
									>
										About Us
									</Link>
								</li>

								<li>
									<Link
										href="/our-history"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/our-history"),
											}
										)}
										onClick={closeDropdown}
									>
										Our History
									</Link>
								</li>
							</ul>
						</section>

						{/* Programs Section */}
						<section>
							<h2 className="text-xl font-bold mb-3 text-gray-900">
								<Link
									href="/our-programs"
									className={clsx("custom-link", {
										"active-link":
											isActiveLink("/our-programs") ||
											isActiveLink("/education-and-scholarships") ||
											isActiveLink("/economic-empowerment") ||
											isActiveLink("/protection-and-advocacy") ||
											isActiveLink("/peacebuilding-and-reconciliation") ||
											isActiveLink("/agriculture-and-food-sovereignty") ||
											isActiveLink("/basic-health-and-well-being") ||
											isActiveLink("/cultural-awareness-and-education"),
									})}
								>
									Our Programs
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/education-and-scholarships"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/education-and-scholarships"
												),
											}
										)}
										onClick={closeDropdown}
									>
										Education & Scholarships
									</Link>
								</li>

								<li>
									<Link
										href="/economic-empowerment"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/economic-empowerment"),
											}
										)}
										onClick={closeDropdown}
									>
										Economic Empowerment
									</Link>
								</li>

								<li>
									<Link
										href="/protection-and-advocacy"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/protection-and-advocacy"),
											}
										)}
										onClick={closeDropdown}
									>
										Protection & Advocacy
									</Link>
								</li>

								<li>
									<Link
										href="/peacebuilding-and-reconciliation"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/peacebuilding-and-reconciliation"
												),
											}
										)}
										onClick={closeDropdown}
									>
										Peacebuilding & Reconciliation
									</Link>
								</li>

								<li>
									<Link
										href="/agriculture-and-food-sovereignty"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/agriculture-and-food-sovereignty"
												),
											}
										)}
										onClick={closeDropdown}
									>
										Agriculture & Food sovereignty
									</Link>
								</li>

								<li>
									<Link
										href="/basic-health-and-well-being"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/basic-health-and-well-being"
												),
											}
										)}
										onClick={closeDropdown}
									>
										Basic Health & Well-being
									</Link>
								</li>

								<li>
									<Link
										href="/cultural-awareness-and-education"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/cultural-awareness-and-education"
												),
											}
										)}
										onClick={closeDropdown}
									>
										Cultural Awareness & Education
									</Link>
								</li>
							</ul>
						</section>

						{/* Impacts Section */}
						<section>
							<h2 className="text-xl font-bold mb-3 text-gray-900">
								<Link
									href="/impact"
									className={clsx("custom-link", {
										"active-link":
											isActiveLink("/impact") ||
											isActiveLink("/impacts/success-stories") ||
											isActiveLink("/impacts/gallery"),
									})}
								>
									Impacts
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/impacts/success-stories"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/impacts/success-stories"),
											}
										)}
										onClick={closeDropdown}
									>
										Success Stories
									</Link>
								</li>

								<li>
									<Link
										href="/impacts/gallery"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/impacts/gallery"),
											}
										)}
										onClick={closeDropdown}
									>
										Gallery
									</Link>
								</li>
							</ul>
						</section>

						{/* Where we are Section */}
						<section>
							<h2 className="text-xl font-bold mb-3 text-gray-900">
								<Link
									href="/where-we-are"
									className={clsx("custom-link", {
										"active-link":
											isActiveLink("/where-we-are") ||
											isActiveLink("/where-we-are#south-sudan") ||
											isActiveLink("/where-we-are#kenya") ||
											isActiveLink("/where-we-are#uganda") ||
											isActiveLink("/where-we-are#lesotho"),
									})}
								>
									Where we are
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/where-we-are#south-sudan" // Anchor link to South Sudan section
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/where-we-are#south-sudan"
												),
											}
										)}
										onClick={closeDropdown}
									>
										South Sudan
									</Link>
								</li>

								<li>
									<Link
										href="/where-we-are#kenya" // Anchor link to Kenya section
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/where-we-are#kenya"),
											}
										)}
										onClick={closeDropdown}
									>
										Kenya
									</Link>
								</li>

								<li>
									<Link
										href="/where-we-are#uganda" // Anchor link to Uganda section
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/where-we-are#uganda"),
											}
										)}
										onClick={closeDropdown}
									>
										Uganda
									</Link>
								</li>

								<li>
									<Link
										href="/where-we-are#lesotho" // Anchor link to Lesotho section
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/where-we-are#lesotho"),
											}
										)}
										onClick={closeDropdown}
									>
										Lesotho
									</Link>
								</li>
							</ul>
						</section>

						{/* Contact Section */}
						<section>
							<h2 className="text-xl font-bold mb-3 text-gray-900">
								<Link
									href="/contact"
									className={clsx("custom-link", {
										"active-link":
											isActiveLink("/contact") || isActiveLink("/contact"),
									})}
								>
									Get in Touch
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/contact"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/contact"),
											}
										)}
										onClick={closeDropdown}
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</section>
					</nav>
				</div>

				{/* Fixed Bottom CTA */}
				<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
					<Link href="/donate">
						<button
							className="w-full bg-primary text-white py-4 rounded-md font-bold 
              shadow-lg hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary
              transition-colors"
						>
							Donate Now
						</button>
					</Link>
				</div>
			</div>

			{/* Close Button */}
			<button
				onClick={onClose}
				className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
          rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-gray-500"
			>
				<span className="sr-only">Close menu</span>
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</motion.div>
	);
};

export default MobileMenu;
