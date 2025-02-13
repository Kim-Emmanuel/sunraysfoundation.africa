export interface Program {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	details: string;
	callToActionText: string;
	callToAction: string;
	category: string;
}

export const programsData: Program[] = [
	{
		id: "education",
		title: "Education & Scholarships",
		description:
			"Empowering through education and providing opportunities for academic excellence.",
		imageUrl: "/images/gallery/scholarship1.jpg",
		details: "SRF believes in education as a powerful tool for transformation. We offer integrated tertiary-level scholarship bridging and internship programs for students. This is achieved through Scholarship Programs- Expand scholarship programs to reach more students, especially those from marginalized backgrounds, Mentorship- Pair scholarship recipients with mentors who guide them academically and professionally, and Internship Opportunities- Collaborate with businesses and organizations to provide practical experience.",
		callToActionText: "Apply Now",
		callToAction: "/programs/education",
		category: "education",
	},
	{
		id: "economic",
		title: "Economic Empowerment",
		description:
			"Building sustainable livelihoods through skills development and entrepreneurship.",
		imageUrl: "/images/gallery/economic6.jpg",
		details: "SRF focuses on economic empowerment of youth and women who are coming from vulnerable backgrounds through sustainable solutions. This includes livelihood programs, vocational training, and income-generating activities.",
		callToActionText: "Join Program",
		callToAction: "/programs/economic-empowerment",
		category: "economic",
	},
	{
		id: "protection",
		title: "Protection & Advocacy",
		description:
			"Building sustainable livelihoods through skills development and entrepreneurship.",
		imageUrl: "/images/gallery/protection1.jpg",
		details: "SRF is committed to promoting protection for vulnerable populations, including women, children, refugees, and internally displaced persons (IDPs). This is achieved through Raising awareness about human rights, gender equality, and protection mechanisms and Advocate for policies that safeguard vulnerable communities.",
		callToActionText: "Join Program",
		callToAction: "/programs/economic-empowerment",
		category: "protection",
	},
	{
		id: "peacebuilding",
		title: "Peacebuilding & Reconciliation",
		description:
			"Building sustainable livelihoods through skills development and entrepreneurship.",
		imageUrl: "/images/gallery/peace3.jpg",
		details: "SRF promotes peaceful co-existence among the communities. SRF engage in conflict resolution, dialogue, and community-building through Peace Forums, Youth Engagement, and Cultural Activities",
		callToActionText: "Join Program",
		callToAction: "/programs/economic-empowerment",
		category: "peacebuilding",
	},
	{
		id: "agriculture",
		title: "Agriculture & Food sovereignty",
		description:
			"Building sustainable livelihoods through skills development and entrepreneurship.",
		imageUrl: "/images/gallery/agriculture3.jpg",
		details: "SRF recognizes the critical role of agriculture in ensuring food sovereignty and sustainable livelihoods. SRF works with communities to promote food sovereignty by sustainably enhancing access to affordable, adequate, and quality food supply.",
		callToActionText: "Join Program",
		callToAction: "/programs/economic-empowerment",
		category: "agriculture",
	},
	{
		id: "basic-health",
		title: "Basic Health & Well-being",
		description:
			"Building sustainable livelihoods through skills development and entrepreneurship.",
		imageUrl: "/images/gallery/basic2.jpg",
		details: "SRF works tirelessly to provide access to essential protection services, especially for vulnerable populations. These services include- Emergency Shelter: Providing safe spaces during crises, Basic Healthcare: Ensuring access to medical services and preventive care, Psychosocial Support: Addressing mental health and emotional well-being.",
		callToActionText: "Join Program",
		callToAction: "/programs/economic-empowerment",
		category: "basic-health",
	},
	{
		id: "cultural",
		title: "Cultural Awareness & Education",
		description:
			"Building sustainable livelihoods through skills development and entrepreneurship.",
		imageUrl: "/images/gallery/culture2.jpg",
		details: "The Sun Rays Foundation (SRF) seeks to promote cultural variety while fostering communal peace and ecological harmony. We embrace cultural diversity by recognizing, appreciating, and integrating the diverse cultural origins and practices of African kingdoms in order to create an inclusive atmosphere in which various positive cultures may thrive together. This will be achieved through Dialogue Initiatives: Facilitating open talks and platforms where community members share their cultural experiences and viewpoints, Collaborative initiatives: Encourage cooperative community initiatives that integrate various ethnic groups, creating mutual tolerance and cooperation and Sustainable Practices, Eco-sustainable practices: Promoting long-term cultural practices that respect and conserve the environment, Green Events: Organize culturally diverse events with an emphasis on eco-friendly.",
		callToActionText: "Join Program",
		callToAction: "/programs/economic-empowerment",
		category: "cultural",
	},
];
