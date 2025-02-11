"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ScrollState {
	isVisible: boolean;
	lastScrollY: number;
	showHeaderContent: boolean;
}

const Navbar: React.FC = () => {
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

			interface ScrollState {
				isVisible: boolean;
				lastScrollY: number;
				showHeaderContent: boolean;
			}

			setScrollState(
				(prevState: ScrollState): ScrollState => ({
					isVisible:
						currentScrollY < SCROLL_THRESHOLD ||
						currentScrollY < prevState.lastScrollY,
					lastScrollY: currentScrollY,
					showHeaderContent: currentScrollY < SCROLL_THRESHOLD,
				})
			);
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
		<header className="fixed top-0 w-full z-50">
			{scrollState.showHeaderContent && (
				<div className="bg-primary py-2 px-2">
					<div className="container mx-auto">
						<div className="flex items-center">
							<div className="hidden md:block w-full md:w-3/4">
								<div className="flex flex-wrap">
									<div className="w-full md:w-1/4">
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											SOUTH SDN OFFICE
											<br />
											+211 929 975 708
										</p>
									</div>
									<div className="w-full md:w-1/4">
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											KENYA OFFICE
											<br />
											+254 702 676 918
										</p>
									</div>
									<div className="w-full md:w-1/4">
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											UGANDA OFFICE
											<br />
											+256 766 959 352
										</p>
									</div>
									<div className="w-full md:w-1/4">
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											LESOTHO OFFICE
											<br />
											+266 5680 8083
										</p>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/4 flex justify-end items-center">
								<div className="flex space-x-3">
									<Link
										href="https://www.facebook.com/profile.php?id=61553897036925"
										className="text-white"
									>
										<div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
											<Image
												src="/facebook.svg"
												alt="Facebook Logo"
												width={20}
												height={20}
											/>
										</div>
									</Link>
									<Link
										href="https://www.instagram.com/sunra_ysfoundation19/"
										className="text-white"
									>
										<div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
											<Image
												src="/instagram.svg"
												alt="Instagram Logo"
												width={20}
												height={20}
											/>
										</div>
									</Link>
									<Link href="#" className="text-white">
										<div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
											<Image
												src="/linkedin.svg"
												alt="LinkedIn Logo"
												width={20}
												height={20}
											/>
										</div>
									</Link>
									<Link
										href="https://www.youtube.com/@SunRaysFoundation"
										className="text-white"
									>
										<div className="hover:scale-110 hover:bg-[#ffffff] rounded-full p-1 transition-all duration-200">
											<Image
												src="/youtube.svg"
												alt="YouTube Logo"
												width={20}
												height={20}
											/>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<motion.nav className="nav-bar bg-white shadow-md">
				<div className="container mx-auto flex justify-between items-center px-4">
					{/* Logo */}
					<Link href="/" className="py-2">
						<Image
							src="/logo.svg"
							alt="Sunrays Foundation Logo"
							width={100}
							height={100}
							className="object-cover"
							priority
						/>
					</Link>

					{/* Desktop Menu - hidden on mobile */}
					<div className="hidden md:flex items-center space-x-6">
						<div
							className={clsx("w-full md:flex md:items-center md:w-auto", {
								"mobile-screen": openDropdown === "mobileMenu",
								hidden: openDropdown !== "mobileMenu",
							})}
						>
							<ul className="md:flex md:space-x-4 mt-4 md:mt-0">
								<li className="relative">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
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
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem asChild>
												<Link
													href="/about-us"
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink("/about-us"),
														}
													)}
													onClick={closeDropdown}
												>
													About Us
												</Link>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/our-history"
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink("/our-history"),
														}
													)}
													onClick={closeDropdown}
												>
													Our History
												</Link>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</li>
								<li className="relative">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
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
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem asChild>
												<Link
													href="/education-and-scholarships"
													className={clsx(
														"hover:!text-primary cursor-pointer",
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
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/economic-empowerment"
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink(
																"/economic-empowerment"
															),
														}
													)}
													onClick={closeDropdown}
												>
													Economic Empowerment
												</Link>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/protection-and-advocacy"
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink(
																"/protection-and-advocacy"
															),
														}
													)}
													onClick={closeDropdown}
												>
													Protection & Advocacy
												</Link>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/peacebuilding-and-reconciliation"
													className={clsx(
														"hover:!text-primary cursor-pointer",
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
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/agriculture-and-food-sovereignty"
													className={clsx(
														"hover:!text-primary cursor-pointer",
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
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/basic-health-and-well-being"
													className={clsx(
														"hover:!text-primary cursor-pointer",
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
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/cultural-awareness-and-education"
													className={clsx(
														"hover:!text-primary cursor-pointer",
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
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</li>
								<li className="relative">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
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
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem asChild>
												<Link
													href="/impacts/success-stories"
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink(
																"/impacts/success-stories"
															),
														}
													)}
													onClick={closeDropdown}
												>
													Success Stories
												</Link>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/impacts/gallery"
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink("/impacts/gallery"),
														}
													)}
													onClick={closeDropdown}
												>
													Gallery
												</Link>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</li>
								<li className="relative">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
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
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem asChild>
												<Link
													href="/where-we-are#south-sudan" // Anchor link to South Sudan section
													className={clsx(
														"hover:!text-primary cursor-pointer",
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
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/where-we-are#kenya" // Anchor link to Kenya section
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink(
																"/where-we-are#kenya"
															),
														}
													)}
													onClick={closeDropdown}
												>
													Kenya
												</Link>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/where-we-are#uganda" // Anchor link to Uganda section
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink(
																"/where-we-are#uganda"
															),
														}
													)}
													onClick={closeDropdown}
												>
													Uganda
												</Link>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link
													href="/where-we-are#lesotho" // Anchor link to Lesotho section
													className={clsx(
														"hover:!text-primary cursor-pointer",
														{
															"active-link": isActiveLink(
																"/where-we-are#lesotho"
															),
														}
													)}
													onClick={closeDropdown}
												>
													Lesotho
												</Link>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</li>
								<li>
									<Link
										href="/contact"
										className={clsx("custom-link", {
											"active-link": isActiveLink("/contact"),
										})}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2"
						onClick={() => handleDropdown("mobileMenu")}
						aria-label="Toggle menu"
					>
						<div
							className={clsx("menu-icon", {
								open: openDropdown === "mobileMenu",
							})}
						>
							<motion.div
								className="bar"
								animate={
									openDropdown === "mobileMenu"
										? { rotate: 45, y: 9 }
										: { rotate: 0, y: 0 }
								}
								transition={{ type: "spring", stiffness: 200, damping: 10 }}
							/>
							<motion.div
								className="bar"
								animate={
									openDropdown === "mobileMenu"
										? { rotate: -45, y: -9 }
										: { rotate: 0, y: 0 }
								}
								transition={{ type: "spring", stiffness: 200, damping: 10 }}
							/>
						</div>
					</button>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={openDropdown === "mobileMenu"}
				onClose={closeDropdown}
				activeSection={pathname}
			/>
		</header>
	);
};

export default Navbar;
