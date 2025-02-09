import Banner from "@/components/Banner";
import Locations from "@/components/Locations";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Where We Are | Sun Rays Foundation",
	description:
		"Discover the global impact of Sun Rays Foundation across South Sudan, Kenya, Uganda, and Lesotho. Learn about our initiatives in education, sustainable development, and community empowerment in these regions.",
	keywords:
		"Sun Rays Foundation, Where We Are, South Sudan, Kenya, Uganda, Lesotho, global impact, education, sustainable development, community empowerment, non-profit, charity, humanitarian aid, Africa, regional programs, social impact, sustainable growth, grassroots initiatives",
	// Open Graph / Facebook
	openGraph: {
		title: "Where We Are | Sun Rays Foundation",
		description:
			"Discover the global impact of Sun Rays Foundation across South Sudan, Kenya, Uganda, and Lesotho. Learn about our initiatives in education, sustainable development, and community empowerment in these regions.",
		type: "website",
		locale: "en_US",
		url: "https://www.sunraysfoundation.org/where-we-are", // Update with the correct URL for this page
		siteName: "Sun Rays Foundation",
		images: [
			{
				url: "https://www.sunraysfoundation.org/images/where-we-are-og-image.jpg", // Update with your actual image URL
				width: 1200,
				height: 630,
				alt: "Sun Rays Foundation - Where We Are",
			},
		],
	},
	// Twitter
	twitter: {
		card: "summary_large_image",
		title: "Where We Are | Sun Rays Foundation",
		description:
			"Discover the global impact of Sun Rays Foundation across South Sudan, Kenya, Uganda, and Lesotho. Learn about our initiatives in education, sustainable development, and community empowerment in these regions.",
		site: "@sunraysfoundation", // Replace with your actual Twitter handle if different
		images: [
			{
				url: "https://www.sunraysfoundation.org/images/where-we-are-twitter-image.jpg", // Add Twitter-specific image if needed
				alt: "Sun Rays Foundation - Where We Are",
			},
		],
	},
};

export default function Page() {
  const locations = [
    { 
      id: 'south-sudan', 
      name: 'South Sudan', 
      description: 'Our work focuses on community development and humanitarian aid in the world\'s newest nation.',
      details: [
        'Active since 2011',
        'Primary focus: Education and Healthcare',
        'Working in multiple refugee camps'
      ]
    },
    { 
      id: 'kenya', 
      name: 'Kenya', 
      description: 'Empowering communities through sustainable development programs.',
      details: [
        'Operational since 2005',
        'Key areas: Agriculture and Youth Empowerment',
        'Partnerships with local NGOs'
      ]
    },
    { 
      id: 'uganda', 
      name: 'Uganda', 
      description: 'Dedicated to improving quality of life through comprehensive community support.',
      details: [
        'Active for over 15 years',
        'Focus: Healthcare and Economic Development',
        'Strong grassroots network'
      ]
    },
    { 
      id: 'lesotho', 
      name: 'Lesotho', 
      description: 'Committed to addressing unique challenges in this mountainous kingdom.',
      details: [
        'Working since 2008',
        'Primary initiatives: Education and HIV/AIDS support',
        'Collaboration with local government'
      ]
    }
  ];

	return (
		<main className="">
      <Banner staticTitle="Where We Are" />
      {/* Add your content here */}
      <Locations locations={locations} />
		</main>
	);
}