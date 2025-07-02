import { FC } from "react";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Partners from "@/components/Partners";
import JoinUs from "@/components/JoinUs";
import JourneysOfImpact from "@/components/JourneysOfImpact";
// import Features from "@/components/Features";

const Home: FC = () => {
	return (
		<>
			<Hero />
			{/* About Section Container */}
			<section className="">
				<Welcome />
			</section>
			{/* <Features /> */}
			<JourneysOfImpact />
			<Partners />
      <JoinUs />
		</>
	);
};

export default Home;
