"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/image-data";
import { ImageType } from "@/lib/types/image";
import { GalleryImageModal } from "@/components/gallery-image-modal";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "Women", "School"];

export function Gallery() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

	const filteredImages = GALLERY_IMAGES.filter(
		(image) => selectedCategory === "All" || image.tags.includes(selectedCategory)
	);

	return (
		<motion.div
			className='white_container mx-auto px-4 py-8'
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.9 }}>
			<div className='flex justify-center mb-8 space-x-4'>
				{CATEGORIES.map((category) => (
					<Button
						key={category}
						variant={selectedCategory === category ? "default" : "outline"}
						onClick={() => setSelectedCategory(category)}>
						{category}
					</Button>
				))}
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{filteredImages.map((image) => (
					<div
						key={image.id}
						className='relative group overflow-hidden rounded-lg cursor-pointer'
						onClick={() => setSelectedImage(image)}>
						<Image
							src={image.url}
							alt={image.alt}
							width={600}
							height={400}
							className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
						/>
						<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white'>
							<div className='text-center'>
								<h3 className='text-xl font-bold'>{image.title}</h3>
								<p className='text-sm'>{image.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<GalleryImageModal
				image={selectedImage}
				onClose={() => setSelectedImage(null)}
			/>
		</motion.div>
	);
}
