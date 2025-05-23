import { FC } from "react";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Partners from "@/components/Partners";
import Stories from "@/components/Stories";
import JoinUs from "@/components/JoinUs";
// import Features from "@/components/Features";

const Home: FC = () => {
	const successStories = [
		{
			id: "1",
			title: "School Shoes Donation:",
			shortDescription:
				"School Shoes Donation by Tokyo One Language School to Prosperity Junior Centre",
			fullStory:
				"Sun Rays Foundation is so happy to share the wonderful story of a recent donation from Tokyo One Language School to Prosperity Junior Centre, a children’s home in Nairobi. Fifty-six pairs of shoes were given to the children, more than just for their feet. Shoes mean safety, dignity and for each child to step out into the world with a new sense of confidence. This has really made a difference in their lives and given them hope for a better tomorrow.",
			image: "/images/gallery/economic1.png",
			author: "Jane Doe, CEO",
			date: "2023-06-15",
		},
		{
			id: "2",
			title: "Sustainable Agriculture:",
			shortDescription: "Plantation Initiative with Ezo County",
			fullStory:
				"Sun Rays Foundation in partnership with Ezo County has launched a coffee growing program to create jobs and boost the local economy. Led by County Commissioner Hon. Abel Sudan, over 25,000 coffee seedlings have been planted and will be expanded more. Commissioner Sudan and Sun Rays Foundation want to provide employment through agriculture, uplift the people of Ezo and neighboring counties and promote South Sudan’s cash crop production.",
			image: "/images/gallery/agriculture1.jpg",
			author: "Sun Rays Foundation, CTO",
			date: "2023-07-20",
		},
		{
			id: "3",
			title: "South Sudanese Students’ Leadership and Mentorship Workshop:",
			shortDescription:
				"The Sun Rays Foundation workshop was amazing, a big step up for South Sudanese",
			fullStory:
				"The Sun Rays Foundation workshop was amazing, a big step up for South Sudanese students across East Africa. Over 50 students including refugees and student leaders participated, it was a platform for learning and growth.",
			image: "/images/gallery/education2.JPG",
			author: "Sun Rays Foundation, CTO",
			date: "2023-07-20",
		},
		{
			id: "4",
			title: "South Sudanese Students’ Leadership and Mentorship Workshop:",
			shortDescription:
				"The Sun Rays Foundation workshop was amazing, a big step up for South Sudanese",
			fullStory:
				"The Sun Rays Foundation workshop was amazing, a big step up for South Sudanese students across East Africa. Over 50 students including refugees and student leaders participated, it was a platform for learning and growth.",
			image: "/images/gallery/scholarship4.jpg",
			author: "Sun Rays Foundation, CTO",
			date: "2023-07-20",
		},
		// Add more stories as needed
	];
	return (
		<>
			<Hero />
			{/* About Section Container */}
			<section className="">
				<Welcome />
			</section>
			{/* <Features /> */}
			<Stories stories={successStories} />
			<Partners />
      <JoinUs />
		</>
	);
};

export default Home;
