import { Metadata } from "next";
import Banner from "@/components/Banner";
import ProgramsSection from "@/components/ProgramsSection";

export const metadata: Metadata = {
	title: "Our Programs | Sun Rays Foundation",
	description:
		"Discover the transformative programs of Sun Rays Foundation empowering communities in South Sudan, Kenya, Uganda, and Lesotho through education, economic empowerment, protection, peacebuilding, agriculture, healthcare, and cultural awareness.",
	keywords:
		"Sun Rays Foundation, programs, South Sudan, Kenya, Uganda, Lesotho, education, scholarships, economic empowerment, skills development, entrepreneurship, protection, advocacy, peacebuilding, reconciliation, agriculture, food security, health, well-being, cultural awareness, community development, non-profit, NGO, Africa, sustainable development, social impact, humanitarian aid, international development, vulnerable communities, youth empowerment, women empowerment, community empowerment",
	openGraph: {
		title: "Our Programs | Sun Rays Foundation",
		description:
			"Discover the transformative programs of Sun Rays Foundation empowering communities in South Sudan, Kenya, Uganda, and Lesotho through education, economic empowerment, protection, peacebuilding, agriculture, healthcare, and cultural awareness.",
		type: "website",
		locale: "en_US",
		url: "https://www.sunraysfoundation.org/programs", // Correct URL for the programs page
		siteName: "Sun Rays Foundation",
		images: [
			{
				url: "https://www.sunraysfoundation.org/images/programs-og-image.jpg", // Replace with a relevant image for the programs page
				width: 1200,
				height: 630,
				alt: "Sun Rays Foundation - Our Programs",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Programs | Sun Rays Foundation",
		description:
			"Discover the transformative programs of Sun Rays Foundation empowering communities in South Sudan, Kenya, Uganda, and Lesotho through education, economic empowerment, protection, peacebuilding, agriculture, healthcare, and cultural awareness.",
		site: "@sunraysfoundation", // Your Twitter handle
		// images: [
		// 	{
		// 		url: "https://www.sunraysfoundation.org/images/programs-twitter-image.jpg", // Replace with program-specific image
		// 		alt: "Sun Rays Foundation - Our Programs",
		// 	},
		// ],
	},
};

export default function Page() {
	return (
		<main className="">
			<Banner staticTitle="Our Programs" />
			{/* Add your content here */}
      <ProgramsSection />
		</main>
	);
}
