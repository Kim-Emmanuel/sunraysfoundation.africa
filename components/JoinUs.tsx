"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HiUserGroup } from "react-icons/hi";

const JoinUs: FC = () => {
	const router = useRouter();

	const handleJoinUsClick = () => {
		router.push("/contact");
	};

	return (
		<section className="py-10 bg-gradient-to-b from-white to-[#e5ead3]">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
					className="relative aspect-video w-full overflow-hidden shadow-lg"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src="/banner.png"
						alt="Video Thumbnail"
						fill
						className="object-cover"
						priority
					/>
				</motion.div>

				<motion.div
					className="flex flex-col justify-center items-start space-y-8"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.h2
						className="text-46-normal text-start !font-medium"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Let&apos;s join hands and work together
					</motion.h2>
					<p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-700 leading-relaxed text-start max-w-[55ch]">
						When we come together, great things happen. Let us collaborate and
						change lives. Join us in our mission to make the world a better place.
					</p>
          <Button
            onClick={handleJoinUsClick}
            className="mt-5 py-5 px-6 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <HiUserGroup className="w-5 h-5" />
            Join Us
          </Button>
				</motion.div>
			</div>
		</section>
	);
};

export default JoinUs;