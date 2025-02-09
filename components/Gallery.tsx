"use client";

import { useState, useEffect, Suspense } from "react"; // Add Suspense import
import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/image-data";
import { ImageType } from "@/lib/types/image";
import { GalleryImageModal } from "@/components/gallery-image-modal";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
	"All",
	"Agriculture",
	"Basic",
	"Cultural",
	"Economics",
	"Education",
	"Peacebuilding",
	"Protection",
];
const IMAGES_PER_PAGE = 12;

export function Gallery() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	// Initialize page from URL on component mount
	useEffect(() => {
		const page = Number(searchParams.get("page")) || 1;
		setCurrentPage(page);
	}, [searchParams]);

	const filteredImages = GALLERY_IMAGES.filter(
		(image) =>
			selectedCategory === "All" || image.tags.includes(selectedCategory)
	);

	const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
	const paginatedImages = filteredImages.slice(
		(currentPage - 1) * IMAGES_PER_PAGE,
		currentPage * IMAGES_PER_PAGE
	);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		router.push(`?${params.toString()}`, { scroll: false });
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<motion.div
				className="white_container mx-auto px-4 py-8"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9 }}
			>
				<div className="flex flex-wrap justify-center mb-8 space-x-2 sm:space-x-4">
					{CATEGORIES.map((category) => (
						<Button
							key={category}
							variant={selectedCategory === category ? "default" : "outline"}
							onClick={() => {
								setSelectedCategory(category);
								setCurrentPage(1);
							}}
							className="mb-2 sm:mb-4"
						>
							{category}
						</Button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{paginatedImages.map((image) => (
						<div
							key={image.id}
							className="relative group overflow-hidden rounded-lg cursor-pointer"
							onClick={() => setSelectedImage(image)}
						>
							<Image
								src={image.src}
								alt={image.alt}
								width={600}
								height={400}
								loading="lazy"
								className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
								<div className="text-center">
									<h3 className="text-xl font-bold">{image.title}</h3>
									<p className="text-sm">{image.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-center items-center mt-8 gap-2">
					<Button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						variant="outline"
					>
						Previous
					</Button>

					{[...Array(totalPages)].map((_, index) => (
						<Button
							key={index + 1}
							onClick={() => handlePageChange(index + 1)}
							variant={currentPage === index + 1 ? "default" : "outline"}
							className="w-10"
						>
							{index + 1}
						</Button>
					))}

					<Button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						variant="outline"
					>
						Next
					</Button>
				</div>

				<GalleryImageModal
					image={selectedImage}
					onClose={() => setSelectedImage(null)}
				/>
			</motion.div>
		</Suspense>
	);
}
