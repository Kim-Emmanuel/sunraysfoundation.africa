"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	activeSection?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	const [, setOpenDropdown] = useState<string | null>(null);
	const pathname = usePathname();

	const closeDropdown = () => setOpenDropdown(null);

	const isActiveLink = (link: string) => pathname === link;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				closeDropdown();
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
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
									onClick={() => {
										closeDropdown();
										onClose();
									}}
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
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
									onClick={() => {
										closeDropdown();
										onClose();
									}}
								>
									Our Programs
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/our-programs#education"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/our-programs#education"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Education & Scholarships
									</Link>
								</li>

								<li>
									<Link
										href="/our-programs#economic"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/our-programs#economic"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Economic Empowerment
									</Link>
								</li>

								<li>
									<Link
										href="/our-programs#protection"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/our-programs#protection"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Protection & Advocacy
									</Link>
								</li>

								<li>
									<Link
										href="/our-programs#peacebuilding"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/our-programs#peacebuilding"
												),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Peacebuilding & Reconciliation
									</Link>
								</li>

								<li>
									<Link
										href="/our-programs#agriculture"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/our-programs#agriculture"
												),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Agriculture & Food sovereignty
									</Link>
								</li>

								<li>
									<Link
										href="/our-programs#basic-health"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/our-programs#basic-health"
												),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Basic Health & Well-being
									</Link>
								</li>

								<li>
									<Link
										href="/our-programs#cultural"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/our-programs#cultural"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
									onClick={() => {
										closeDropdown();
										onClose();
									}}
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
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
									onClick={() => {
										closeDropdown();
										onClose();
									}}
								>
									Where we are
								</Link>
							</h2>
							<ul className="space-y-3 pl-4">
								<li>
									<Link
										href="/where-we-are#south-sudan"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink(
													"/where-we-are#south-sudan"
												),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										South Sudan
									</Link>
								</li>

								<li>
									<Link
										href="/where-we-are#kenya"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/where-we-are#kenya"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Kenya
									</Link>
								</li>

								<li>
									<Link
										href="/where-we-are#uganda"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/where-we-are#uganda"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
									>
										Uganda
									</Link>
								</li>

								<li>
									<Link
										href="/where-we-are#lesotho"
										className={clsx(
											"block text-gray-600 hover:text-primary focus:text-primary",
											{
												"active-link": isActiveLink("/where-we-are#lesotho"),
											}
										)}
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
									onClick={() => {
										closeDropdown();
										onClose();
									}}
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
										onClick={() => {
											closeDropdown();
											onClose();
										}}
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
