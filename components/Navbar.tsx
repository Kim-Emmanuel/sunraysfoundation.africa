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

	// Helper for anchor links (pathname + hash)
	const isActiveLink = (link: string) => {
		if (!link) return false;
		// Support for anchor links
		if (link.includes("#")) {
			return pathname + window.location.hash === link;
		}
		return pathname === link;
	};

	// Enhanced scroll behavior with smooth transitions
	useEffect(() => {
		const SCROLL_THRESHOLD = 50;
		let lastScrollY = window.scrollY;
		let ticking = false;

		const controlNavbar = () => {
			if (typeof window === undefined) return;

			const currentScrollY = window.scrollY;
			const scrollingDown = currentScrollY > lastScrollY;
			const scrolledPastThreshold = currentScrollY > SCROLL_THRESHOLD;

			setScrollState(
				(prevState: ScrollState): ScrollState => ({
					isVisible: !scrollingDown || !scrolledPastThreshold,
					lastScrollY: currentScrollY,
					showHeaderContent: !scrolledPastThreshold,
				})
			);

			lastScrollY = currentScrollY;
			ticking = false;
		};

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					controlNavbar();
					ticking = false;
				});
				ticking = true;
			}
		};

		const handleResize = () => {
			if (window.innerWidth >= 768) {
				closeDropdown();
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Desktop navigation with dropdowns
	const desktopNav = [
		{
			label: "Home",
			href: "/",
			dropdown: null,
			active: ["/"],
		},
		{
			label: "Who we are",
			href: "/who-we-are",
			dropdown: [
				{ href: "/about-us", label: "About Us" },
				{ href: "/our-history", label: "Our History" },
			],
			active: ["/who-we-are", "/about-us", "/our-history"],
		},
		{
			label: "Our Programs",
			href: "/our-programs",
			dropdown: [
				{ href: "/our-programs#education", label: "Education & Scholarships" },
				{ href: "/our-programs#economic", label: "Economic Empowerment" },
				{ href: "/our-programs#protection", label: "Protection & Advocacy" },
				{
					href: "/our-programs#peacebuilding",
					label: "Peacebuilding & Reconciliation",
				},
				{
					href: "/our-programs#agriculture",
					label: "Agriculture & Food Sovereignty",
				},
				{
					href: "/our-programs#basic-health",
					label: "Basic Health & Well-being",
				},
				{
					href: "/our-programs#cultural",
					label: "Cultural Awareness & Education",
				},
			],
			active: [
				"/our-programs",
				"/education-and-scholarships",
				"/economic-empowerment",
				"/protection-and-advocacy",
				"/peacebuilding-and-reconciliation",
				"/agriculture-and-food-sovereignty",
				"/basic-health-and-well-being",
				"/cultural-awareness-and-education",
			],
		},
		{
			label: "Impacts",
			href: "/impact",
			dropdown: [
				{ href: "/impacts/success-stories", label: "Success Stories" },
				{ href: "/impacts/gallery", label: "Gallery" },
			],
			active: ["/impact", "/impacts/success-stories", "/impacts/gallery"],
		},
		{
			label: "Where we are",
			href: "/where-we-are",
			dropdown: [
				{ href: "/where-we-are#south-sudan", label: "South Sudan" },
				{ href: "/where-we-are#kenya", label: "Kenya" },
				{ href: "/where-we-are#uganda", label: "Uganda" },
				{ href: "/where-we-are#lesotho", label: "Lesotho" },
			],
			active: [
				"/where-we-are",
				"/where-we-are#south-sudan",
				"/where-we-are#kenya",
				"/where-we-are#uganda",
				"/where-we-are#lesotho",
			],
		},
		{
			label: "Contact",
			href: "/contact",
			dropdown: null,
			active: ["/contact"],
		},
	];

	return (
		<motion.header
			className="fixed top-0 w-full z-50"
			initial={{ y: 0 }}
			animate={{
				y: scrollState.isVisible ? 0 : -100,
				opacity: scrollState.isVisible ? 1 : 0.95,
			}}
			transition={{ duration: 0.3 }}
		>
			{scrollState.showHeaderContent && (
				<motion.div
					className="bg-primary py-2 px-2 sm:px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="container mx-auto sm:px-6 lg:px-8">
						<div className="flex flex-wrap items-center justify-between">
							<div className="hidden md:block w-full md:w-3/4">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
									<div>
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											SOUTH SDN OFFICE
											<br />
											+211 929 975 708
										</p>
									</div>
									<div>
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											KENYA OFFICE
											<br />
											+254 702 676 918
										</p>
									</div>
									<div>
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											UGANDA OFFICE
											<br />
											+256 766 959 352
										</p>
									</div>
									<div>
										<p className="text-gray-900 text-xs md:text-xs lg:text-sm">
											LESOTHO OFFICE
											<br />
											+266 5680 8083
										</p>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/4 flex justify-center md:justify-end items-center">
								<div className="flex space-x-4">
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
				</motion.div>
			)}

			<motion.nav
				className={clsx(
					"nav-bar bg-white backdrop-blur-md bg-opacity-90",
					"transition-all duration-300 ease-in-out",
					{
						"shadow-lg": !scrollState.showHeaderContent,
						"shadow-md": scrollState.showHeaderContent,
					}
				)}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
					{/* Logo */}
					<Link href="/" className="py-2">
						<Image
							src="/logo.svg"
							alt="Sunrays Foundation Logo"
							width={80}
							height={80}
							className="object-cover w-[80px] sm:w-[90px] md:w-[100px]"
							priority
						/>
					</Link>

					{/* Desktop Menu - hidden on mobile */}
					<nav
						className="hidden md:flex items-center space-x-2 lg:space-x-6"
						aria-label="Main navigation"
					>
						<ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
							{desktopNav.map((item) => (
								<li
									key={item.label}
									className="relative group focus-within:z-50"
								>
									{item.dropdown ? (
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<motion.button
													whileHover="hover"
													whileFocus="hover"
													initial="rest"
													animate={
														item.active?.some((l) => isActiveLink(l))
															? "active"
															: "rest"
													}
													variants={{
														rest: { color: "#374151" }, // text-gray-700
														hover: { color: "#eab308" }, // text-primary
														active: { color: "#eab308" },
													}}
													className={clsx(
														"custom-link relative inline-block px-4 py-2 font-medium focus:outline-none"
													)}
													aria-haspopup="menu"
													aria-expanded="false"
													tabIndex={0}
												>
													<span className="relative z-10">{item.label}</span>
													<motion.span
														layoutId="nav-underline"
														className="absolute left-0 bottom-0 w-full h-0.5 bg-primary origin-left"
														variants={{
															rest: { scaleX: 0 },
															hover: {
																scaleX: 1,
																transition: { duration: 0.3 },
															},
															active: {
																scaleX: 1,
																transition: { duration: 0.3 },
															},
														}}
														style={{ transformOrigin: "left" }}
													/>
												</motion.button>
											</DropdownMenuTrigger>
											<DropdownMenuContent className="animate-in fade-in-80 slide-in-from-top-1 z-50 min-w-[14rem] overflow-hidden rounded-md border border-gray-100 bg-white/95 backdrop-blur-md p-1 text-gray-700 shadow-2xl">
												{item.dropdown.map((drop, idx) => (
													<React.Fragment key={drop.href}>
														<DropdownMenuItem
															asChild
															className="relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
														>
															<Link
																href={drop.href}
																className={clsx({
																	"text-primary font-semibold": isActiveLink(
																		drop.href
																	),
																})}
																onClick={closeDropdown}
																tabIndex={0}
															>
																{drop.label}
															</Link>
														</DropdownMenuItem>
														{idx !== item.dropdown.length - 1 && (
															<DropdownMenuSeparator className="my-1 h-px bg-gray-100" />
														)}
													</React.Fragment>
												))}
											</DropdownMenuContent>
										</DropdownMenu>
									) : (
										<motion.div
											whileHover="hover"
											whileFocus="hover"
											initial="rest"
											animate={
												item.active?.some((l) => isActiveLink(l))
													? "active"
													: "rest"
											}
											variants={{
												rest: { color: "#374151" },
												hover: { color: "#eab308" },
												active: { color: "#eab308" },
											}}
											className="inline-block px-4 py-2 font-medium relative"
										>
											<Link
												href={item.href}
												className="relative z-10 focus:outline-none"
												tabIndex={0}
											>
												{item.label}
											</Link>
											<motion.span
												layoutId="nav-underline"
												className="absolute left-0 bottom-0 w-full h-0.5 bg-primary origin-left"
												variants={{
													rest: { scaleX: 0 },
													hover: { scaleX: 1, transition: { duration: 0.3 } },
													active: { scaleX: 1, transition: { duration: 0.3 } },
												}}
												style={{ transformOrigin: "left" }}
											/>
										</motion.div>
									)}
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile Menu Button */}
					<motion.button
						className="md:hidden flex justify-end "
						onClick={() => handleDropdown("mobileMenu")}
						aria-label="Toggle navigation menu"
						aria-expanded={openDropdown === "mobileMenu"}
						whileTap={{ scale: 0.96 }}
						whileHover={{ scale: 1.02 }}
					>
						<div className="relative w-12 h-12 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:ring-offset-2">
							<div className="relative w-6 h-5">
								{/* Top line */}
								<motion.span
									className="absolute left-0 w-full h-0.5 bg-gray-700 rounded-full origin-center"
									initial={false}
									animate={{
										top: openDropdown === "mobileMenu" ? "50%" : "0%",
										rotate: openDropdown === "mobileMenu" ? 45 : 0,
										translateY: openDropdown === "mobileMenu" ? "-50%" : "0%",
									}}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 25,
										duration: 0.3,
									}}
								/>

								{/* Middle line */}
								<motion.span
									className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 rounded-full -translate-y-1/2"
									initial={false}
									animate={{
										opacity: openDropdown === "mobileMenu" ? 0 : 1,
										scale: openDropdown === "mobileMenu" ? 0.8 : 1,
									}}
									transition={{ duration: 0.2 }}
								/>

								{/* Bottom line */}
								<motion.span
									className="absolute left-0 w-full h-0.5 bg-gray-700 rounded-full origin-center"
									initial={false}
									animate={{
										bottom: openDropdown === "mobileMenu" ? "50%" : "0%",
										rotate: openDropdown === "mobileMenu" ? -45 : 0,
										translateY: openDropdown === "mobileMenu" ? "50%" : "0%",
									}}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 25,
										duration: 0.3,
									}}
								/>
							</div>
						</div>
					</motion.button>
				</div>
			</motion.nav>

			{/* Mobile Menu with enhanced animations */}
			<MobileMenu
				isOpen={openDropdown === "mobileMenu"}
				onClose={closeDropdown}
				activeSection={pathname}
			/>
		</motion.header>
	);
};

export default Navbar;
